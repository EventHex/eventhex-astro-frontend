import type { MiddlewareHandler } from "astro";

/** Paths that fetch live WordPress data and should not be cached long. */
const DYNAMIC_PATTERNS = ["/blog/", "/news/", "/wp-content/"];

/** Sitemap / robots endpoints need short cache for freshness. */
const SITEMAP_PATTERNS = ["/sitemap-", "/robots.txt"];

export const onRequest: MiddlewareHandler = async (_context, next) => {
  const response = await next();
  const url = new URL(_context.request.url);
  const path = url.pathname;

  // Static assets served by Cloudflare Assets binding already have good caching.
  // Only add cache headers for HTML pages rendered by the Worker.
  const ct = response.headers.get("content-type") || "";
  if (!ct.includes("text/html") && !ct.includes("text/xml") && !ct.includes("text/plain")) {
    return response;
  }

  const headers = new Headers(response.headers);

  if (SITEMAP_PATTERNS.some((p) => path.startsWith(p))) {
    headers.set("cache-control", "public, s-maxage=3600, max-age=60, stale-while-revalidate=86400");
  } else if (DYNAMIC_PATTERNS.some((p) => path.startsWith(p))) {
    // Blog/news pages: short CDN cache, stale-while-revalidate for speed
    headers.set("cache-control", "public, s-maxage=300, max-age=60, stale-while-revalidate=3600");
  } else {
    // Static marketing pages: aggressive CDN caching with SWR
    headers.set("cache-control", "public, s-maxage=86400, max-age=300, stale-while-revalidate=604800");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};
