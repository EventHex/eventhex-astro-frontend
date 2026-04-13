import type { MiddlewareHandler } from "astro";
import { getPostBySlug } from "./lib/wordpress";

/** Paths that fetch live WordPress data and should not be cached long. */
const DYNAMIC_PATTERNS = ["/blog/", "/news/", "/wp-content/"];

/** Sitemap / robots endpoints need short cache for freshness. */
const SITEMAP_PATTERNS = ["/sitemap-", "/robots.txt"];

/** Known Astro route prefixes — skip blog slug lookup for multi-segment paths under these. */
const SKIP_BLOG_LOOKUP = [
  "/blog/", "/news/", "/wp-content/", "/sitemap-", "/robots.txt", "/_astro/", "/favicon",
];

function redirect301(to: string): Response {
  return new Response(null, { status: 301, headers: { location: to } });
}

export const onRequest: MiddlewareHandler = async (_context, next) => {
  const url = new URL(_context.request.url);
  const path = url.pathname;

  // --- 301 Redirects ---

  // Old WordPress sitemap URLs → new Astro sitemap
  if (path === "/wp-sitemap.xml" || path === "/sitemap_index.xml") {
    return redirect301("/sitemap-index.xml");
  }

  // Old WordPress /feature/{slug}/ → /{slug}/
  if (path.startsWith("/feature/")) {
    const featureSlug = path.replace(/^\/feature\//, "").replace(/\/$/, "");
    if (featureSlug === "" || featureSlug === "feature") {
      return redirect301("/features/");
    }
    return redirect301(`/${featureSlug}/`);
  }

  const response = await next();

  // --- Blog slug fallback: root-level /{slug}/ → redirect to /blog/{slug}/ ---
  // Old WordPress blog posts lived at /{slug}/. Check if a 404 at root level
  // is actually a blog post, and if so redirect to /blog/{slug}/.
  if (response.status === 404 && !SKIP_BLOG_LOOKUP.some((p) => path.startsWith(p))) {
    const slug = path.replace(/^\//, "").replace(/\/$/, "");
    if (slug && !slug.includes("/")) {
      try {
        const post = await getPostBySlug(slug);
        if (post) {
          return redirect301(`/blog/${slug}/`);
        }
      } catch {
        // WP API unreachable — fall through to 404
      }
    }
  }

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
