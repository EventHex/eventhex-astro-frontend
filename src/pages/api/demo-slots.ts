import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

const EVENT_TYPE_ID = 6130402; // Cal.com "30 min meeting"
const WINDOW_DAYS = 7;
// Fetch upstream in the host's timezone (availability is defined there). The
// returned slot instants are absolute, so the browser regroups them into each
// visitor's local timezone — which means ONE cached entry serves everyone.
const UPSTREAM_TZ = "Asia/Calcutta";
const STALE_MS = 60_000; // serve cached instantly, refresh in background after this

// Astro v6 + Cloudflare: runtime secrets come from `cloudflare:workers` env.
function readEnv(key: string): string | undefined {
  return (env as any)?.[key] ?? import.meta.env[key];
}

export const GET: APIRoute = async ({ url, locals }) => {
  const apiKey = readEnv("CALCOM_API_KEY");
  if (!apiKey) return json({ error: "Scheduler not configured" }, 500);

  // Bucket the requested window to a calendar date so the cache key is stable
  // (the client sends start=now for week 0, which would otherwise never cache).
  const now = new Date();
  let reqStart = new Date(url.searchParams.get("start") || now.toISOString());
  if (isNaN(reqStart.getTime())) reqStart = now;
  const bucket = reqStart.toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
  const bucketMidnight = new Date(bucket + "T00:00:00.000Z");
  const upstreamStart = bucketMidnight < now ? now : bucketMidnight;
  const end = new Date(bucketMidnight.getTime() + WINDOW_DAYS * 24 * 3600 * 1000);

  const cacheKey = new Request(
    `https://slots.cache/${EVENT_TYPE_ID}/${bucket}`,
    { method: "GET" },
  );
  const cache: Cache | undefined = (globalThis as any).caches?.default;

  const buildFresh = async (): Promise<Response> => {
    const api = new URL("https://api.cal.com/v2/slots");
    api.searchParams.set("eventTypeId", String(EVENT_TYPE_ID));
    api.searchParams.set("start", upstreamStart.toISOString());
    api.searchParams.set("end", end.toISOString());
    api.searchParams.set("timeZone", UPSTREAM_TZ);

    const res = await fetch(api, {
      headers: { Authorization: `Bearer ${apiKey}`, "cal-api-version": "2024-09-04" },
    });
    if (!res.ok) {
      return json({ error: "Cal.com slots failed", status: res.status }, 502);
    }
    const body = (await res.json()) as { data?: Record<string, { start: string }[]> };
    const slots = Object.values(body.data || {})
      .flat()
      .map((s) => ({ start: s.start }))
      .sort((a, b) => (a.start < b.start ? -1 : 1));

    const payload = { rangeStart: bucketMidnight.toISOString(), rangeEnd: end.toISOString(), slots };
    const headers = new Headers({
      "content-type": "application/json",
      "cache-control": "public, max-age=300",
      "x-fetched-at": String(Date.now()),
    });
    return new Response(JSON.stringify(payload), { status: 200, headers });
  };

  const putCache = async (resp: Response) => {
    if (cache) {
      try {
        await cache.put(cacheKey, resp.clone());
      } catch {
        /* cache unavailable — ignore */
      }
    }
  };

  // Try cache first.
  let cached: Response | undefined;
  if (cache) {
    try {
      cached = await cache.match(cacheKey);
    } catch {
      /* ignore */
    }
  }

  if (cached) {
    const age = Date.now() - Number(cached.headers.get("x-fetched-at") || 0);
    if (age > STALE_MS) {
      // Serve stale now, refresh in the background.
      const refresh = (async () => {
        const fresh = await buildFresh();
        if (fresh.ok) await putCache(fresh);
      })();
      const ctx = (locals as any)?.cfContext;
      if (ctx?.waitUntil) ctx.waitUntil(refresh);
      else void refresh;
    }
    return withClientCache(cached);
  }

  // Cold cache: fetch, store, return.
  const fresh = await buildFresh();
  if (fresh.ok) await putCache(fresh);
  return withClientCache(fresh);
};

// Add a short browser cache layer on top of the edge cache.
function withClientCache(resp: Response): Response {
  const headers = new Headers(resp.headers);
  headers.set("cache-control", "public, max-age=60");
  return new Response(resp.body, { status: resp.status, headers });
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}
