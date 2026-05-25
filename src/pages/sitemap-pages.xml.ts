import type { APIRoute } from "astro";

/**
 * All public Astro-owned static pages.
 * Update this list when adding or removing pages.
 * lastmod: ISO date string (YYYY-MM-DD) of last meaningful content change.
 */
const STATIC_PAGES = [
  { path: "/", changefreq: "weekly", priority: "1.0", lastmod: "2026-04-13" },
  { path: "/about-us/", changefreq: "monthly", priority: "0.7", lastmod: "2026-04-13" },
  { path: "/features/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/book-a-demo/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/contact-en/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/partnership/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/blog/", changefreq: "daily", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/news/", changefreq: "weekly", priority: "0.7", lastmod: "2026-04-13" },
  // Blog category pages
  { path: "/blog/category/product-updates/", changefreq: "weekly", priority: "0.6", lastmod: "2026-05-25" },
  { path: "/blog/category/event-planning-strategy/", changefreq: "weekly", priority: "0.6", lastmod: "2026-05-25" },
  { path: "/blog/category/event-technology-ai/", changefreq: "weekly", priority: "0.6", lastmod: "2026-05-25" },
  { path: "/blog/category/event-marketing/", changefreq: "weekly", priority: "0.6", lastmod: "2026-05-25" },
  { path: "/blog/category/attendee-engagement/", changefreq: "weekly", priority: "0.6", lastmod: "2026-05-25" },
  { path: "/blog/category/comparisons-reviews/", changefreq: "weekly", priority: "0.6", lastmod: "2026-05-25" },
  // Legal pages
  { path: "/privacy-policy/", changefreq: "yearly", priority: "0.4", lastmod: "2026-04-13" },
  { path: "/terms-of-service/", changefreq: "yearly", priority: "0.4", lastmod: "2026-04-13" },
  { path: "/cookie-policy/", changefreq: "yearly", priority: "0.4", lastmod: "2026-04-13" },
  { path: "/cancellation-refund-policy/", changefreq: "yearly", priority: "0.4", lastmod: "2026-04-13" },
  // Feature pages
  { path: "/event-ticketing/", changefreq: "monthly", priority: "0.9", lastmod: "2026-04-13" },
  { path: "/event-registration/", changefreq: "monthly", priority: "0.9", lastmod: "2026-04-13" },
  { path: "/event-marketing/", changefreq: "monthly", priority: "0.9", lastmod: "2026-04-13" },
  { path: "/speaker-management/", changefreq: "monthly", priority: "0.9", lastmod: "2026-04-13" },
  { path: "/session-management/", changefreq: "monthly", priority: "0.9", lastmod: "2026-04-13" },
  { path: "/exhibitor-management/", changefreq: "monthly", priority: "0.9", lastmod: "2026-04-13" },
  { path: "/sponsor-management/", changefreq: "monthly", priority: "0.9", lastmod: "2026-04-13" },
  { path: "/event-check-in/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/event-analytics/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/event-mobile-app/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/event-website-builder/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/event-notifications/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/event-payment-processing/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/event-gamification/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/live-polling-qa/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/call-for-papers/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/badge-certificate-designer/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/centralized-dashboard/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/ai-form-builder/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/ai-event-copilot/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/ai-photo-gallery/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/ai-session-recap/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  { path: "/enhance-networking-ai-smart-connect/", changefreq: "monthly", priority: "0.8", lastmod: "2026-04-13" },
  // Industries
  { path: "/industries/", changefreq: "monthly", priority: "0.7", lastmod: "2026-04-13" },
  { path: "/industries/associations/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/industries/cultural/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/industries/education/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/industries/finance/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/industries/government/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/industries/healthcare/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/industries/hospitality/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/industries/manufacturing/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/industries/media/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/industries/middle-east/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/industries/ngo/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/industries/real-estate/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/industries/retail/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/industries/sports/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/industries/technology/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  // Integrations
  { path: "/integrations/", changefreq: "monthly", priority: "0.7", lastmod: "2026-04-13" },
  { path: "/integrations/email/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/integrations/hubspot/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/integrations/push-notifications/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/integrations/razorpay/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/integrations/stripe/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/integrations/tap-payments/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/integrations/webhooks/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/integrations/whatsapp/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/integrations/wordpress/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  // Use Cases
  { path: "/use-cases/", changefreq: "monthly", priority: "0.7" },
  { path: "/use-cases/academic-conferences/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/use-cases/award-ceremonies/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/use-cases/conferences/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/use-cases/corporate-events/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/use-cases/festivals/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/use-cases/fundraising-events/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/use-cases/government-events/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/use-cases/hybrid-events/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/use-cases/networking-events/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/use-cases/product-launches/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/use-cases/trade-shows/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  { path: "/use-cases/workshops/", changefreq: "monthly", priority: "0.6", lastmod: "2026-04-13" },
  // Feature sub-use-case pages
  { path: "/event-ticketing/academic-conferences/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-ticketing/award-ceremonies/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-ticketing/conferences/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-ticketing/corporate-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-ticketing/fundraising-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-ticketing/hybrid-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-ticketing/networking-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-ticketing/product-launches/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-ticketing/trade-shows/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-ticketing/workshops/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-registration/academic-conferences/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-registration/award-ceremonies/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-registration/conferences/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-registration/corporate-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-registration/fundraising-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-registration/hybrid-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-registration/networking-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-registration/product-launches/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-registration/trade-shows/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-registration/workshops/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-check-in/academic-conferences/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-check-in/award-ceremonies/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-check-in/conferences/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-check-in/corporate-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-check-in/fundraising-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-check-in/hybrid-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-check-in/networking-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-check-in/product-launches/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-check-in/trade-shows/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-check-in/workshops/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-analytics/academic-conferences/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-analytics/award-ceremonies/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-analytics/conferences/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-analytics/corporate-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-analytics/fundraising-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-analytics/hybrid-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-analytics/networking-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-analytics/product-launches/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-analytics/trade-shows/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/event-analytics/workshops/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/live-polling-qa/academic-conferences/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/live-polling-qa/award-ceremonies/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/live-polling-qa/conferences/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/live-polling-qa/corporate-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/live-polling-qa/fundraising-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/live-polling-qa/hybrid-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/live-polling-qa/networking-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/live-polling-qa/product-launches/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/live-polling-qa/trade-shows/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/live-polling-qa/workshops/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/ai-photo-gallery/academic-conferences/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/ai-photo-gallery/award-ceremonies/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/ai-photo-gallery/conferences/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/ai-photo-gallery/corporate-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/ai-photo-gallery/fundraising-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/ai-photo-gallery/hybrid-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/ai-photo-gallery/networking-events/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/ai-photo-gallery/product-launches/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/ai-photo-gallery/trade-shows/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
  { path: "/ai-photo-gallery/workshops/", changefreq: "monthly", priority: "0.5", lastmod: "2026-04-13" },
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
    <loc>${escapeXml(`${base}${page.path}`)}</loc>${page.lastmod ? `\n    <lastmod>${page.lastmod}</lastmod>` : ""}
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
