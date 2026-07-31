import type { APIRoute } from "astro";

// iOS Universal Links verification for the EventHex app.
// Served extensionless at /.well-known/apple-app-site-association with
// Content-Type: application/json (Apple rejects text/plain / octet-stream).
const body = {
  applinks: {
    details: [
      {
        appIDs: ["F9FZQJ3FT6.eventhex.main.app"],
        components: [{ "/": "/app" }, { "/": "/app*" }],
      },
    ],
  },
};

export const GET: APIRoute = () =>
  new Response(JSON.stringify(body, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
