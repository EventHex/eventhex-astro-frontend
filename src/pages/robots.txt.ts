import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) =>
  `User-agent: *
Allow: /
Disallow: /wp-content/
Disallow: /wp-json/
Disallow: /wp-admin/
Disallow: /_astro/

# AI Crawlers
User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
