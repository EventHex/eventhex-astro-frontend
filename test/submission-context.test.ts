import assert from "node:assert/strict";
import test from "node:test";

import {
  formatSubmissionContext,
  maskIp,
  requestCountry,
} from "../src/lib/submission-context.ts";

test("masks IPv4 and IPv6 addresses", () => {
  assert.equal(maskIp("103.21.244.42"), "103.***.***.42");
  assert.equal(maskIp("2001:db8:85a3::8a2e:370:7334"), "2001:db8:****:****");
  assert.equal(maskIp("invalid"), "Unavailable");
});

test("uses Cloudflare country data", () => {
  const request = new Request("https://eventhex.ai/api/book-demo", {
    headers: { "cf-ipcountry": "BH" },
  });
  assert.equal(requestCountry(request), "Bahrain");
});

test("formats a sanitized submission context with backend-owned IP and country", () => {
  const request = new Request("https://eventhex.ai/api/book-demo", {
    headers: {
      "cf-connecting-ip": "103.21.244.42",
      "cf-ipcountry": "QA",
    },
  });
  const context = formatSubmissionContext(
    {
      submissionId: "EH-test\nInjected",
      claritySessionId: "EH-test",
      clarityStatus: "requested",
      device: "Mobile",
      browser: "Safari",
      operatingSystem: "iOS",
      timeZone: "Asia/Qatar",
      pageUrl: "https://eventhex.ai/book-a-demo/?utm_source=linkedin",
      utmSource: "linkedin",
      utmMedium: "social",
      utmCampaign: "gcc",
    },
    request,
  );

  assert.match(context, /Submission ID: EH-test Injected/);
  assert.match(context, /Clarity Dashboard: https:\/\/clarity\.microsoft\.com\//);
  assert.match(context, /Country: Qatar/);
  assert.match(context, /Device: Mobile · Safari · iOS/);
  assert.match(context, /IP: 103\.\*\*\*\.\*\*\*\.42/);
  assert.doesNotMatch(context, /103\.21\.244\.42/);
});
