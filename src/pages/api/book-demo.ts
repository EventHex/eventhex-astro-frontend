import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

const EVENT_TYPE_ID = 6130402; // Cal.com "30 min meeting"

// Astro v6 + Cloudflare: runtime secrets come from `cloudflare:workers` env.
// (locals.runtime.env was removed.) Fall back to import.meta.env for local/non-worker.
function readEnv(key: string): string | undefined {
  return (env as any)?.[key] ?? import.meta.env[key];
}

// Post-booking side effects (brochure email + CRM lead) must be AWAITED before
// the handler returns. On Cloudflare Workers an un-awaited fetch is cancelled
// when the response is sent (ctx.waitUntil isn't reliably exposed here), which
// silently dropped leads. Each fetch is bounded by a timeout so a slow/hung
// downstream can never hang or fail the booking.
const DISPATCH_TIMEOUT_MS = 8000;

// Internal addresses added as guests to every booking (comma-separated env).
function getGuests(): string[] {
  return (readEnv("CALCOM_GUEST_EMAILS") || "")
    .split(",")
    .map((e: string) => e.trim())
    .filter(Boolean);
}

export const POST: APIRoute = async ({ request }) => {
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

  // Post-booking side effects — AWAITED (see DISPATCH_TIMEOUT_MS note). Failures
  // are caught per-task so they can never break the confirmed booking.
  const tasks: Promise<unknown>[] = [];

  // Branded pre-demo brochure email via the SaaS API (SES).
  const notifyUrl = readEnv("DEMO_NOTIFY_URL");
  const notifySecret = readEnv("DEMO_NOTIFY_SECRET");
  if (notifyUrl && notifySecret) {
    tasks.push(
      fetch(notifyUrl, {
        method: "POST",
        headers: { "content-type": "application/json", "X-Demo-Secret": notifySecret },
        body: JSON.stringify({ name, email, company, start: b.start || start, meetingUrl, timeZone }),
        signal: AbortSignal.timeout(DISPATCH_TIMEOUT_MS),
      }).catch((err) => console.error("brochure email dispatch failed:", err)),
    );
  }

  // Push the lead into the DataHex ERP CRM.
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
    tasks.push(
      fetch(erpUrl, {
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
          source: readEnv("ERP_LEAD_SOURCE") || "Book a Demo",
          stage: readEnv("ERP_LEAD_STAGE") || "Demo Scheduled",
          leadType: readEnv("ERP_LEAD_TYPE") || "New Business",
          owner: readEnv("ERP_LEAD_OWNER") || "hamimbdm@eventhex.ai",
          priority: "medium",
          notes: leadNotes,
          tags: ["book-a-demo"],
        }),
        signal: AbortSignal.timeout(DISPATCH_TIMEOUT_MS),
      })
        .then(async (r) => {
          // 409 = duplicate lead already exists — expected, not an error.
          if (!r.ok && r.status !== 409) {
            console.error("ERP lead create failed:", r.status, await r.text().catch(() => ""));
          }
        })
        .catch((err) => console.error("ERP lead dispatch failed:", err)),
    );
  }

  // Keep the worker alive until both complete (or time out) so neither is dropped.
  if (tasks.length) await Promise.allSettled(tasks);

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
