import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

const EVENT_TYPE_ID = 6130402; // Cal.com "30 min meeting"

// Astro v6 + Cloudflare: runtime secrets come from `cloudflare:workers` env.
// (locals.runtime.env was removed.) Fall back to import.meta.env for local/non-worker.
function readEnv(key: string): string | undefined {
  return (env as any)?.[key] ?? import.meta.env[key];
}

// Defer a fire-and-forget promise past the response on Workers. Astro v6 exposes
// the execution context as locals.cfContext (locals.runtime.ctx was removed and
// its getter now throws, so we must not touch it). Without a context the promise
// still runs, just not deferred.
function defer(promise: Promise<unknown>, locals: any): void {
  try {
    const cf = locals?.cfContext;
    if (cf?.waitUntil) cf.waitUntil(promise);
  } catch {
    /* no execution context available */
  }
}

// Internal addresses added as guests to every booking (comma-separated env).
function getGuests(): string[] {
  return (readEnv("CALCOM_GUEST_EMAILS") || "")
    .split(",")
    .map((e: string) => e.trim())
    .filter(Boolean);
}

export const POST: APIRoute = async ({ request, locals }) => {
  const apiKey = readEnv("CALCOM_API_KEY");
  if (!apiKey) return json({ error: "Scheduler not configured" }, 500);

  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  const { start, name, email, company, phone, role, timeZone, notes, hp } = payload || {};

  // Honeypot — bots fill hidden field.
  if (hp) return json({ error: "Rejected" }, 400);

  if (!start || !name || !email || !company || !timeZone) {
    return json({ error: "Missing required fields" }, 400);
  }

  const bookingFieldsResponses: Record<string, string> = { company };
  if (role) bookingFieldsResponses.role = role;
  if (notes) bookingFieldsResponses.notes = notes;

  const guests = getGuests();

  const res = await fetch("https://api.cal.com/v2/bookings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "cal-api-version": "2024-08-13",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      start,
      eventTypeId: EVENT_TYPE_ID,
      attendee: { name, email, timeZone, language: "en", ...(phone ? { phoneNumber: phone } : {}) },
      ...(guests.length ? { guests } : {}),
      bookingFieldsResponses,
    }),
  });

  const data = (await res.json().catch(() => ({}))) as any;

  if (!res.ok) {
    const msg =
      data?.error?.message ||
      (res.status === 400 || res.status === 409
        ? "That slot is no longer available. Please pick another time."
        : "Couldn't complete the booking. Please try again.");
    return json({ error: msg, status: res.status }, res.status === 409 ? 409 : 502);
  }

  const b = data?.data || {};
  const meetingUrl = b.meetingUrl || b.location || null;

  // Fire-and-forget: send the branded pre-demo brochure email via the SaaS API
  // (SES). Never block or fail the booking on email errors.
  const notifyUrl = readEnv("DEMO_NOTIFY_URL");
  const notifySecret = readEnv("DEMO_NOTIFY_SECRET");
  if (notifyUrl && notifySecret) {
    const send = fetch(notifyUrl, {
      method: "POST",
      headers: { "content-type": "application/json", "X-Demo-Secret": notifySecret },
      body: JSON.stringify({ name, email, company, start: b.start || start, meetingUrl, timeZone }),
    }).catch((err) => console.error("brochure email dispatch failed:", err));
    defer(send, locals);
  }

  // Fire-and-forget: push the lead into the DataHex ERP CRM. Never block the booking.
  const erpKey = readEnv("ERP_API_KEY");
  if (erpKey) {
    const erpUrl = readEnv("ERP_LEADS_URL") || "https://erp.datahex.co/api/v1/leads";
    const leadNotes = [
      `Demo: ${b.start || start} (${timeZone || "UTC"})`,
      role ? `Role: ${role}` : "",
      meetingUrl ? `Meet: ${meetingUrl}` : "",
      notes ? `Notes: ${notes}` : "",
    ]
      .filter(Boolean)
      .join(" | ");
    const lead = fetch(erpUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${erpKey}`,
        // Dedupe retries; same booking never creates two leads.
        ...(b.uid ? { "Idempotency-Key": String(b.uid) } : {}),
      },
      body: JSON.stringify({
        contactName: name,
        ...(company ? { company } : {}),
        email,
        ...(phone ? { phone } : {}),
        source: readEnv("ERP_LEAD_SOURCE") || "Website",
        leadType: readEnv("ERP_LEAD_TYPE") || "New Business",
        owner: readEnv("ERP_LEAD_OWNER") || "hamimbdm@eventhex.ai",
        priority: "medium",
        notes: leadNotes,
        tags: ["book-a-demo", "website"],
      }),
    })
      .then(async (r) => {
        // 409 = duplicate lead already exists — expected, not an error.
        if (!r.ok && r.status !== 409) {
          console.error("ERP lead create failed:", r.status, await r.text().catch(() => ""));
        }
      })
      .catch((err) => console.error("ERP lead dispatch failed:", err));
    defer(lead, locals);
  }

  return json({
    ok: true,
    uid: b.uid,
    start: b.start,
    meetingUrl,
  });
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}
