import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { verifyCalWebhookSignature } from "../../lib/calcom-webhook";

export const prerender = false;

const DEFAULT_APPROVAL_EVENT_TYPE_ID = 6789162;
const DISPATCH_TIMEOUT_MS = 8000;

function readEnv(key: string): string | undefined {
  return (env as any)?.[key] ?? import.meta.env[key];
}

export const POST: APIRoute = async ({ request }) => {
  const secret = readEnv("CALCOM_WEBHOOK_SECRET");
  if (!secret) return json({ error: "Webhook not configured" }, 503);

  const rawBody = await request.text();
  const signature = request.headers.get("x-cal-signature-256");
  if (!(await verifyCalWebhookSignature(rawBody, signature, secret))) {
    return json({ error: "Invalid signature" }, 401);
  }

  let webhook: any;
  try {
    webhook = JSON.parse(rawBody);
  } catch {
    return json({ error: "Invalid payload" }, 400);
  }

  const trigger = String(webhook?.triggerEvent || "");
  const payload = webhook?.payload || webhook || {};
  const eventTypeId = Number(payload?.eventTypeId || payload?.eventType?.id);
  const approvalEventTypeId = Number(
    readEnv("CALCOM_DEMO_APPROVAL_EVENT_TYPE_ID") || DEFAULT_APPROVAL_EVENT_TYPE_ID,
  );
  if (eventTypeId !== approvalEventTypeId) return json({ ok: true, ignored: true });
  if (trigger !== "BOOKING_CREATED" && trigger !== "BOOKING_REJECTED") {
    return json({ ok: true, ignored: true });
  }

  const erpKey = readEnv("ERP_API_KEY");
  if (!erpKey) {
    console.error("Cal.com demo webhook: ERP_API_KEY not configured");
    return json({ ok: true, crmUpdated: false });
  }

  const attendee = payload?.attendees?.[0] || {};
  const email = String(attendee?.email || "").trim().toLowerCase();
  if (!email) return json({ ok: true, crmUpdated: false });

  const erpUrl = readEnv("ERP_LEADS_URL") || "https://erp.datahex.co/api/v1/leads";
  const apiBase = erpUrl.replace(/\/leads\/?$/, "");
  const headers = { "content-type": "application/json", Authorization: `Bearer ${erpKey}` };
  const leadResponse = await fetch(`${erpUrl}?search=${encodeURIComponent(email)}&limit=20`, {
    headers,
    signal: AbortSignal.timeout(DISPATCH_TIMEOUT_MS),
  });
  const leadBody = (await leadResponse.json().catch(() => ({}))) as any;
  const lead = (leadBody?.data || []).find(
    (candidate: any) => String(candidate?.email || "").trim().toLowerCase() === email,
  );
  if (!leadResponse.ok || !lead?.id) {
    console.error("Cal.com demo webhook: CRM lead not found", { status: leadResponse.status, email });
    return json({ ok: true, crmUpdated: false });
  }

  const accepted = trigger === "BOOKING_CREATED";
  const stageName = accepted
    ? readEnv("ERP_LEAD_STAGE") || "Demo Scheduled"
    : readEnv("ERP_REJECTED_LEAD_STAGE") || "Demo Time Rejected";
  const stagesResponse = await fetch(`${apiBase}/crm/stages?pipeline=lead`, {
    headers,
    signal: AbortSignal.timeout(DISPATCH_TIMEOUT_MS),
  });
  const stagesBody = (await stagesResponse.json().catch(() => ({}))) as any;
  const stage = (stagesBody?.data || []).find(
    (candidate: any) => String(candidate?.name || "").toLowerCase() === stageName.toLowerCase(),
  );

  let stageUpdated = false;
  if (stagesResponse.ok && stage?.id) {
    const update = await fetch(`${erpUrl}/${lead.id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ stageId: stage.id }),
      signal: AbortSignal.timeout(DISPATCH_TIMEOUT_MS),
    });
    stageUpdated = update.ok;
    if (!update.ok) console.error("Cal.com demo webhook: CRM stage update failed", update.status);
  } else {
    console.error("Cal.com demo webhook: CRM stage not found", { stageName });
  }

  const uid = String(payload?.uid || payload?.bookingUid || "unknown");
  const activity = await fetch(`${erpUrl}/${lead.id}/activities`, {
    method: "POST",
    headers: { ...headers, "Idempotency-Key": `cal-${trigger.toLowerCase()}-${uid}` },
    body: JSON.stringify({
      type: "note",
      body: accepted
        ? `Automated: dashboard approval confirmed the requested demo time. Booking: ${uid}.`
        : `Automated: requested demo time was declined in Cal.com. Booking: ${uid}.`,
    }),
    signal: AbortSignal.timeout(DISPATCH_TIMEOUT_MS),
  });
  if (!activity.ok) console.error("Cal.com demo webhook: CRM activity failed", activity.status);

  return json({ ok: true, crmUpdated: stageUpdated });
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}
