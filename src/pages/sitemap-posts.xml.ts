import type { APIRoute } from "astro";
import { getAllPostSlugs } from "../lib/wordpress";

function escapeXml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() ?? "https://eventhex.ai").replace(/\/$/, "");

  let posts: { slug: string; modified: string }[] = [];
  try {
    posts = await getAllPostSlugs();
  } catch {
    // If WP API is unreachable, return empty sitemap
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${posts
  .map(
    (post) => `  <url>
    <loc>${escapeXml(`${base}/blog/${post.slug}/`)}</loc>
    <lastmod>${new Date(post.modified).toISOString()}</lastmod>
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
