import type { APIRoute } from "astro";

/**
 * All public Astro-owned static pages.
 * Update this list when adding or removing pages.
 */
const STATIC_PAGES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about-us/", changefreq: "monthly", priority: "0.7" },
  { path: "/features/", changefreq: "monthly", priority: "0.8" },
  { path: "/book-a-demo/", changefreq: "monthly", priority: "0.8" },
  { path: "/contact-en/", changefreq: "monthly", priority: "0.6" },
  { path: "/partnership/", changefreq: "monthly", priority: "0.5" },
  { path: "/blog/", changefreq: "daily", priority: "0.8" },
  { path: "/news/", changefreq: "weekly", priority: "0.7" },
  // Feature pages
  { path: "/event-ticketing/", changefreq: "monthly", priority: "0.9" },
  { path: "/event-registration/", changefreq: "monthly", priority: "0.9" },
  { path: "/event-marketing/", changefreq: "monthly", priority: "0.9" },
  { path: "/speaker-management/", changefreq: "monthly", priority: "0.9" },
  { path: "/session-management/", changefreq: "monthly", priority: "0.9" },
  { path: "/exhibitor-management/", changefreq: "monthly", priority: "0.9" },
  { path: "/sponsor-management/", changefreq: "monthly", priority: "0.9" },
  { path: "/event-check-in/", changefreq: "monthly", priority: "0.8" },
  { path: "/event-analytics/", changefreq: "monthly", priority: "0.8" },
  { path: "/event-mobile-app/", changefreq: "monthly", priority: "0.8" },
  { path: "/event-website-builder/", changefreq: "monthly", priority: "0.8" },
  { path: "/event-notifications/", changefreq: "monthly", priority: "0.8" },
  { path: "/event-payment-processing/", changefreq: "monthly", priority: "0.8" },
  { path: "/event-gamification/", changefreq: "monthly", priority: "0.8" },
  { path: "/live-polling-qa/", changefreq: "monthly", priority: "0.8" },
  { path: "/call-for-papers/", changefreq: "monthly", priority: "0.8" },
  { path: "/badge-certificate-designer/", changefreq: "monthly", priority: "0.8" },
  { path: "/centralized-dashboard/", changefreq: "monthly", priority: "0.8" },
  { path: "/ai-form-builder/", changefreq: "monthly", priority: "0.8" },
  { path: "/ai-event-copilot/", changefreq: "monthly", priority: "0.8" },
  { path: "/ai-photo-gallery/", changefreq: "monthly", priority: "0.8" },
  { path: "/ai-session-recap/", changefreq: "monthly", priority: "0.8" },
  { path: "/enhance-networking-ai-smart-connect/", changefreq: "monthly", priority: "0.8" },
];

function escapeXml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? "https://eventhex.ai").replace(/\/$/, "");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_PAGES.map(
  (page) => `  <url>
    <loc>${escapeXml(`${base}${page.path}`)}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
).join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
