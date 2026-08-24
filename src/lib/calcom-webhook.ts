export async function verifyCalWebhookSignature(
  rawBody: string,
  signature: string | null,
  secret: string,
): Promise<boolean> {
  if (!signature || !secret) return false;

  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const digest = await crypto.subtle.sign("HMAC", key, encoder.encode(rawBody));
  const expected = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  const received = signature.toLowerCase();
  if (expected.length !== received.length) return false;

  let mismatch = 0;
  for (let index = 0; index < expected.length; index++) {
    mismatch |= expected.charCodeAt(index) ^ received.charCodeAt(index);
  }
  return mismatch === 0;
}

export function webhookFieldValue(payload: any, slug: string): string {
  const field = payload?.responses?.[slug] ?? payload?.bookingFieldsResponses?.[slug];
  const value = field && typeof field === "object" && "value" in field ? field.value : field;
  return typeof value === "string" ? value : "";
}
