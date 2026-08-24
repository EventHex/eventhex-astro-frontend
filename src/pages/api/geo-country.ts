import type { APIRoute } from "astro";

interface CloudflareRequest extends Request {
  cf?: {
    country?: unknown;
  };
}

const normalizeCountry = (value: unknown) => {
  if (typeof value !== "string") return null;

  const country = value.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(country) ? country : null;
};

export const prerender = false;

export const GET: APIRoute = ({ request }) => {
  const cloudflareCountry = normalizeCountry(
    (request as CloudflareRequest).cf?.country,
  );
  const headerCountry = normalizeCountry(request.headers.get("cf-ipcountry"));
  const country = cloudflareCountry ?? headerCountry;

  return new Response(JSON.stringify({ country }), {
    status: 200,
    headers: {
      "Cache-Control": "private, no-store, max-age=0",
      "Content-Type": "application/json; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
};
