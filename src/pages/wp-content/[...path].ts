import type { APIRoute } from "astro";

const WP_URL = import.meta.env.WP_URL || "https://cms.eventhex.ai";

export const GET: APIRoute = async ({ params }) => {
  const upstream = `${WP_URL}/wp-content/${params.path}`;
  const res = await fetch(upstream);
  if (!res.ok) {
    return new Response(null, { status: res.status });
  }
  const headers = new Headers();
  const ct = res.headers.get("content-type");
  if (ct) headers.set("content-type", ct);
  headers.set("cache-control", "public, max-age=31536000, immutable");
  return new Response(res.body, { status: 200, headers });
};
