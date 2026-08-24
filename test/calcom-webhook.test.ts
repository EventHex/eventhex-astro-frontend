import assert from "node:assert/strict";
import test from "node:test";

import { verifyCalWebhookSignature, webhookFieldValue } from "../src/lib/calcom-webhook.ts";

test("verifies a Cal.com webhook HMAC", async () => {
  const rawBody = JSON.stringify({ triggerEvent: "BOOKING_CREATED" });
  const secret = "test-webhook-secret";
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const digest = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(rawBody));
  const signature = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");

  assert.equal(await verifyCalWebhookSignature(rawBody, signature, secret), true);
  assert.equal(await verifyCalWebhookSignature(rawBody + " ", signature, secret), false);
});

test("reads flat and structured booking field values", () => {
  assert.equal(webhookFieldValue({ responses: { company: { value: "EventHex" } } }, "company"), "EventHex");
  assert.equal(webhookFieldValue({ bookingFieldsResponses: { company: "EventHex" } }, "company"), "EventHex");
});
