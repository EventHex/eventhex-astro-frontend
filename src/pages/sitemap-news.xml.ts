import type { APIRoute } from "astro";
import { getAllNewsSlugs } from "../lib/wordpress";

function escapeXml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() ?? "https://eventhex.ai").replace(/\/$/, "");

  let news: { slug: string; modified: string }[] = [];
  try {
    news = await getAllNewsSlugs();
  } catch {
    // If WP API is unreachable, return empty sitemap
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${news
  .map(
    (item) => `  <url>
    <loc>${escapeXml(`${base}/news/${item.slug}/`)}</loc>
    <lastmod>${new Date(item.modified).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
