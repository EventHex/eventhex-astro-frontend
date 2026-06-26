import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

const EVENT_TYPE_ID = 6130402; // Cal.com "30 min meeting"

// Astro v6 + Cloudflare: runtime secrets come from `cloudflare:workers` env.
// (locals.runtime.env was removed.) Fall back to import.meta.env for local/non-worker.
function readEnv(key: string): string | undefined {
  return (env as any)?.[key] ?? import.meta.env[key];
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
    // Defer on Workers so it doesn't delay the response. Astro v6 exposes the
    // execution context as locals.cfContext (locals.runtime.ctx was removed and
    // its getter now throws, so we must not touch it).
    try {
      const cf = (locals as any)?.cfContext;
      if (cf?.waitUntil) cf.waitUntil(send);
    } catch {
      /* no execution context available — the fetch still fires, just not deferred */
    }
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
