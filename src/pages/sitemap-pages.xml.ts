import type { APIRoute } from "astro";

/**
 * Auto-generated sitemap of public Astro-owned static pages.
 *
 * Routes are discovered from the filesystem via import.meta.glob, so new
 * static pages appear automatically — no manual list to maintain.
 *
 * Excluded automatically: dynamic routes ([slug]), 404, API/proxy routes.
 * Dynamic blog/news *content* is covered by sitemap-posts.xml / sitemap-news.xml.
 * EXCLUDE / SUPPLEMENT below handle the few hand-managed exceptions.
 */

// Pages to omit even though they exist as static routes (thank-you, etc.).
const EXCLUDE = new Set<string>(["/book-a-demo/thank-you/", "/pricing/"]);

// Path prefixes never included (proxy / API routes).
const EXCLUDE_PREFIXES = ["/api/", "/wp-content/"];

// Static URLs produced by dynamic route files (category/[slug]) that the
// glob cannot enumerate. Keep this in sync when categories change.
const SUPPLEMENT: string[] = [
  "/blog/category/product-updates/",
  "/blog/category/event-planning-strategy/",
  "/blog/category/event-technology-ai/",
  "/blog/category/event-marketing/",
  "/blog/category/attendee-engagement/",
  "/blog/category/comparisons-reviews/",
];

const INDEX_HUBS = new Set(["industries", "integrations", "use-cases"]);
const LEGAL = new Set([
  "privacy-policy",
  "terms-of-service",
  "cookie-policy",
  "cancellation-refund-policy",
]);

function metaFor(path: string): { changefreq: string; priority: string } {
  if (path === "/") return { changefreq: "weekly", priority: "1.0" };
  const seg = path.split("/").filter(Boolean);
  const top = seg[0];
  const depth = seg.length;

  if (depth === 1) {
    if (LEGAL.has(top)) return { changefreq: "yearly", priority: "0.4" };
    if (top === "blog") return { changefreq: "daily", priority: "0.8" };
    if (top === "news") return { changefreq: "weekly", priority: "0.7" };
    if (INDEX_HUBS.has(top)) return { changefreq: "monthly", priority: "0.7" };
    if (top === "features") return { changefreq: "monthly", priority: "0.8" };
    if (["about-us", "contact-en", "partnership", "book-a-demo"].includes(top))
      return { changefreq: "monthly", priority: "0.7" };
    // top-level feature page
    return { changefreq: "monthly", priority: "0.9" };
  }
  if (depth === 2) {
    // collection child (industries/x, use-cases/x) vs feature sub-use-case (event-ticketing/x)
    if (INDEX_HUBS.has(top)) return { changefreq: "monthly", priority: "0.6" };
    return { changefreq: "monthly", priority: "0.5" };
  }
  return { changefreq: "monthly", priority: "0.5" };
}

function discoverRoutes(): string[] {
  const modules = import.meta.glob("./**/*.astro");
  const routes = Object.keys(modules)
    .map((k) => k.replace(/^\.\//, "").replace(/\.astro$/, ""))
    // drop dynamic routes (any segment like [slug] or [...slug])
    .filter((k) => !k.split("/").some((s) => s.startsWith("[")))
    .filter((k) => k !== "404")
    // index -> directory route
    .map((k) => (k === "index" ? "" : k.replace(/\/index$/, "")))
    .map((k) => (k === "" ? "/" : `/${k}/`));

  const all = new Set<string>([...routes, ...SUPPLEMENT]);
  return [...all]
    .filter((p) => !EXCLUDE.has(p))
    .filter((p) => !EXCLUDE_PREFIXES.some((pre) => p.startsWith(pre)))
    .sort();
}

function escapeXml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? "https://eventhex.ai").replace(/\/$/, "");
  const routes = discoverRoutes();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((path) => {
    const { changefreq, priority } = metaFor(path);
    return `  <url>
    <loc>${escapeXml(`${base}${path}`)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
