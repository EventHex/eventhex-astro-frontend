import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { isDemoSlotBookable, requiresDemoApproval } from "../../lib/demo-booking-policy";
import { formatSubmissionContext } from "../../lib/submission-context";

export const prerender = false;

const DEFAULT_EVENT_TYPE_ID = 6130402; // Cal.com "30 min meeting"
const DEFAULT_APPROVAL_EVENT_TYPE_ID = 6789162; // Cal.com approval-required demo

// Astro v6 + Cloudflare: runtime secrets come from `cloudflare:workers` env.
// (locals.runtime.env was removed.) Fall back to import.meta.env for local/non-worker.
function readEnv(key: string): string | undefined {
  return (env as any)?.[key] ?? import.meta.env[key];
}

function readEventTypeId(key: string, fallback?: number): number | undefined {
  const value = readEnv(key);
  if (!value) return fallback;
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : undefined;
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

  const { start, name, email, company, phone, role, timeZone, notes, hp, submissionMetadata } = payload || {};

  // Honeypot — bots fill hidden field.
  if (hp) return json({ error: "Rejected" }, 400);

  if (!start || !name || !email || !company || !timeZone) {
    return json({ error: "Missing required fields" }, 400);
  }

  let requiresConfirmation: boolean;
  try {
    if (!isDemoSlotBookable(start)) {
      return json({ error: "That time is not available. Please choose another time." }, 409);
    }
    requiresConfirmation = requiresDemoApproval(start);
  } catch {
    return json({ error: "Invalid start time" }, 400);
  }
  const eventTypeId = requiresConfirmation
    ? readEventTypeId("CALCOM_DEMO_APPROVAL_EVENT_TYPE_ID", DEFAULT_APPROVAL_EVENT_TYPE_ID)
    : readEventTypeId("CALCOM_DEMO_EVENT_TYPE_ID", DEFAULT_EVENT_TYPE_ID);
  if (!eventTypeId) {
    return json({ error: "That time is not available. Please choose another time." }, 503);
  }

  const submissionContext = formatSubmissionContext(submissionMetadata, request);
  const bookingFieldsResponses: Record<string, string> = { company };
  if (role) bookingFieldsResponses.role = role;
  bookingFieldsResponses.notes = [notes, "Submission Context", submissionContext].filter(Boolean).join("\n\n");

  const guests = getGuests();

  const res = await fetch("https://api.cal.com/v2/bookings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "cal-api-version": "2026-02-25",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      start,
      eventTypeId,
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
  const rawStatus = String(b.status || "").toLowerCase();
  const status = rawStatus === "pending" ? "pending" : rawStatus === "accepted" ? "accepted" : requiresConfirmation ? "pending" : "accepted";
  if ((requiresConfirmation && status !== "pending") || (!requiresConfirmation && status !== "accepted")) {
    console.error("Cal.com demo confirmation policy mismatch", { eventTypeId, requiresConfirmation, status });
  }
  const meetingUrl = status === "accepted" ? b.meetingUrl || b.location || null : null;

  // Post-booking side effects — AWAITED (see DISPATCH_TIMEOUT_MS note). Failures
  // are caught per-task so they can never break the confirmed booking.
  const tasks: Promise<unknown>[] = [];

  // Branded pre-demo brochure email via the SaaS API (SES).
  const notifyUrl = readEnv("DEMO_NOTIFY_URL");
  const notifySecret = readEnv("DEMO_NOTIFY_SECRET");
  if (status === "accepted" && notifyUrl && notifySecret) {
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
      `${status === "pending" ? "Demo request" : "Demo"}: ${b.start || start} (${timeZone || "UTC"})`,
      role ? `Role: ${role}` : "",
      meetingUrl ? `Meet: ${meetingUrl}` : "",
      notes ? `Notes: ${notes}` : "",
      `Submission Context: ${submissionContext.replace(/\n/g, " | ")}`,
    ]
      .filter(Boolean)
      .join(" | ");
    const authHeaders = { "content-type": "application/json", Authorization: `Bearer ${erpKey}` };
    tasks.push(
      (async () => {
        // 1. Create the lead (or resolve the existing one on a 409 duplicate).
        const res = await fetch(erpUrl, {
          method: "POST",
          headers: {
            ...authHeaders,
            // Dedupe retries; same booking never creates two leads.
            ...(b.uid ? { "Idempotency-Key": String(b.uid) } : {}),
          },
          body: JSON.stringify({
            contactName: name,
            ...(company ? { company } : {}),
            email,
            ...(phone ? { phone } : {}),
            source: readEnv("ERP_LEAD_SOURCE") || "Book a Demo",
            stage:
              status === "pending"
                ? readEnv("ERP_PENDING_LEAD_STAGE") || "Demo Request Pending"
                : readEnv("ERP_LEAD_STAGE") || "Demo Scheduled",
            leadType: readEnv("ERP_LEAD_TYPE") || "New Business",
            owner: readEnv("ERP_LEAD_OWNER") || "hamimbdm@eventhex.ai",
            priority: "medium",
            notes: leadNotes,
            tags: ["book-a-demo", status === "pending" ? "demo-request-pending" : "demo-scheduled"],
          }),
          signal: AbortSignal.timeout(DISPATCH_TIMEOUT_MS),
        });

        const payload = (await res.json().catch(() => ({}))) as any;
        let leadId: string | undefined;
        if (res.ok) {
          leadId = payload?.data?.id;
        } else if (res.status === 409) {
          // Duplicate — the existing lead's id is in the conflict details.
          leadId = payload?.error?.details?.id ?? payload?.error?.details?.duplicate?._id;
        } else {
          console.error("ERP lead create failed:", res.status, JSON.stringify(payload).slice(0, 200));
          return;
        }

        // 2. Log a timeline activity so the touch is visible in the CRM.
        //    Fail-soft: needs leads:update scope; skipped silently otherwise.
        if (leadId) {
          const activityBody = status === "pending"
            ? `Automated: demo time requested; dashboard approval pending. Requested time: ${b.start || start}.`
            :
                "Automated: booking confirmed — pre-demo brochure & confirmation email sent." +
                (meetingUrl ? ` Google Meet: ${meetingUrl}.` : "") +
                ` Demo: ${b.start || start}.`;
          const act = await fetch(`${erpUrl}/${leadId}/activities`, {
            method: "POST",
            headers: authHeaders,
            body: JSON.stringify({ type: "email", body: activityBody }),
            signal: AbortSignal.timeout(DISPATCH_TIMEOUT_MS),
          });
          if (!act.ok) {
            console.error("ERP activity log failed:", act.status, await act.text().catch(() => ""));
          }
        }
      })().catch((err) => console.error("ERP lead dispatch failed:", err)),
    );
  }

  // Keep the worker alive until both complete (or time out) so neither is dropped.
  if (tasks.length) await Promise.allSettled(tasks);

  return json({
    ok: true,
    uid: b.uid,
    start: b.start,
    meetingUrl,
    status,
    requiresConfirmation,
  });
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}
