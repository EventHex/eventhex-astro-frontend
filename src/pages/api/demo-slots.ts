import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

const EVENT_TYPE_ID = 6130402; // Cal.com "30 min meeting"
const WINDOW_DAYS = 7;

// Astro v6 + Cloudflare: runtime secrets come from `cloudflare:workers` env.
// (locals.runtime.env was removed.) Fall back to import.meta.env for local/non-worker.
function readEnv(key: string): string | undefined {
  return (env as any)?.[key] ?? import.meta.env[key];
}

export const GET: APIRoute = async ({ url }) => {
  const apiKey = readEnv("CALCOM_API_KEY");
  if (!apiKey) return json({ error: "Scheduler not configured" }, 500);

  const now = new Date();
  let start = new Date(url.searchParams.get("start") || now.toISOString());
  if (isNaN(start.getTime()) || start < now) start = now;
  const end = new Date(start.getTime() + WINDOW_DAYS * 24 * 3600 * 1000);
  const timeZone = url.searchParams.get("timeZone") || "UTC";

  const api = new URL("https://api.cal.com/v2/slots");
  api.searchParams.set("eventTypeId", String(EVENT_TYPE_ID));
  api.searchParams.set("start", start.toISOString());
  api.searchParams.set("end", end.toISOString());
  api.searchParams.set("timeZone", timeZone);

  const res = await fetch(api, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "cal-api-version": "2024-09-04",
    },
  });

  if (!res.ok) {
    return json({ error: "Cal.com slots failed", status: res.status, detail: await res.text() }, 502);
  }

  // data: { "YYYY-MM-DD": [{ start: "...iso..." }, ...] }
  const body = (await res.json()) as { data?: Record<string, { start: string }[]> };
  const slots = Object.values(body.data || {})
    .flat()
    .map((s) => ({ start: s.start }))
    .sort((a, b) => (a.start < b.start ? -1 : 1));

  // Edge-cache so most visitors get slots instantly; revalidate in the background.
  return json(
    { rangeStart: start.toISOString(), rangeEnd: end.toISOString(), slots },
    200,
    "public, max-age=60, s-maxage=120, stale-while-revalidate=600",
  );
};

function json(body: unknown, status = 200, cache?: string): Response {
  const headers = new Headers({ "content-type": "application/json" });
  if (cache) headers.set("cache-control", cache);
  return new Response(JSON.stringify(body), { status, headers });
}
