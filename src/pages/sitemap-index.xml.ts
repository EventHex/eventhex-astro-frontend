import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString() ?? "https://eventhex.ai";

  const sitemaps = [
    { loc: `${base}sitemap-pages.xml`, comment: "Static Astro pages" },
    { loc: `${base}sitemap-posts.xml`, comment: "Blog posts from WordPress" },
    { loc: `${base}sitemap-news.xml`, comment: "News articles from WordPress" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map((s) => `  <sitemap>
    <loc>${s.loc}</loc>
  </sitemap>`).join("\n")}
</sitemapindex>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
