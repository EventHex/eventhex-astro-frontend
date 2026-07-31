import type { APIRoute } from "astro";

// Android App Links verification for the EventHex app (package eventhex.main.app).
// Lets https://<*>.eventhex.ai/app... links open directly in the app.
// If Google Play App Signing is used, ADD the Play signing cert SHA-256 to the
// array below alongside the release/upload cert.
const body = [
  {
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name: "eventhex.main.app",
      sha256_cert_fingerprints: [
        "FD:DA:45:2D:58:72:89:0C:AD:B6:91:73:51:21:F1:85:83:EA:E9:3A:8A:FC:30:C2:B9:A5:AB:B1:E1:0F:4D:FA",
      ],
    },
  },
];

export const GET: APIRoute = () =>
  new Response(JSON.stringify(body, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
