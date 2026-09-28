import assert from "node:assert/strict";
import test from "node:test";

import {
  LEGAL_LAST_UPDATED,
  privacyPolicyContent,
  termsOfServiceContent,
} from "../src/lib/legal-page-content.ts";

/**
 * Guards the copy required for Google OAuth verification
 * (eventhex-website-google-oauth-policy-updates.md). If a section is removed or
 * reworded, these tests fail on purpose.
 */

function h2Headings(html: string): string[] {
  return [...html.matchAll(/<h2><b>(.*?)<\/b><\/h2>/g)].map((match) => match[1]);
}

function aTags(html: string): { href: string; text: string }[] {
  return [...html.matchAll(/<a href="([^"]+)"[^>]*>(.*?)<\/a>/g)].map((match) => ({
    href: match[1],
    text: match[2],
  }));
}

const REQUIRED_GOOGLE_LINKS = [
  "https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes",
  "https://myaccount.google.com/permissions",
  "https://policies.google.com/terms",
  "https://policies.google.com/privacy",
];

test("both legal pages carry the current publish date and drop the old one", () => {
  for (const html of [privacyPolicyContent, termsOfServiceContent]) {
    assert.ok(html.includes(`Last Updated: ${LEGAL_LAST_UPDATED}`));
    assert.ok(!html.includes("January 30, 2025"));
  }
});

test("privacy policy: Google bullets are appended to sections 2.1, 3, 5, 7 and 12", () => {
  const html = privacyPolicyContent;

  assert.ok(
    html.includes(
      "Information from third-party accounts you connect, such as Google (see Section 4A)",
    ),
    "section 2.1 bullet missing",
  );
  assert.ok(
    html.includes(
      "Provide integrations you enable, such as creating Google Meet links in your Google Calendar",
    ),
    "section 3 bullet missing",
  );
  assert.ok(
    html.includes("Service providers (including Stripe and Google Cloud)"),
    "section 5 first bullet not edited",
  );
  assert.ok(
    !html.includes("Service providers (including Stripe)<"),
    "section 5 still has the old first bullet",
  );
  assert.ok(
    html.includes("Disconnect any linked third-party account (such as Google) at any time"),
    "section 7 bullet missing",
  );
  assert.ok(
    html.includes(
      "Third-party access tokens (such as Google OAuth tokens) are deleted immediately when you disconnect the integration or delete your account.",
    ),
    "section 12 sentence missing",
  );
});

test("privacy policy: section 4A sits between sections 4 and 5 with all subsections", () => {
  const headings = h2Headings(privacyPolicyContent);
  const section4 = headings.indexOf("4. Payment Processing and Stripe");
  const section4A = headings.indexOf("4A. Google Services and Google User Data");
  const section5 = headings.indexOf("5. Information Sharing");

  assert.ok(section4 >= 0 && section4A >= 0 && section5 >= 0, "expected sections 4, 4A and 5");
  assert.equal(section4A, section4 + 1);
  assert.equal(section5, section4A + 1);

  for (const heading of [
    "4A.1 Google Sign-In",
    "4A.2 Google Calendar and Google Meet Integration",
    "4A.3 Storage and Deletion",
    "4A.4 No Sale, Sharing or AI Use",
    "4A.5 Limited Use",
  ]) {
    assert.ok(privacyPolicyContent.includes(`<h3><b>${heading}</b></h3>`), `${heading} missing`);
  }
});

test("privacy policy: data-scope and limited-use wording survives verbatim", () => {
  const html = privacyPolicyContent;

  assert.ok(html.includes("We do not read, display or process any other events on your calendar."));
  assert.ok(html.includes("We never receive your Google password."));
  assert.ok(
    html.includes(
      "We do not sell, share or transfer Google user data to third parties except to our hosting provider (Google Cloud) solely to operate the service.",
    ),
  );
  assert.ok(
    html.includes("including the Limited Use requirements"),
    "limited use sentence missing",
  );
});

test("terms: section 5A sits between sections 5 and 6 with all clauses", () => {
  const headings = h2Headings(termsOfServiceContent);
  const section5 = headings.indexOf("5. User Responsibilities");
  const section5A = headings.indexOf("5A. Third-Party Services and Integrations");
  const section6 = headings.indexOf("6. Intellectual Property");

  assert.ok(section5 >= 0 && section5A >= 0 && section6 >= 0, "expected sections 5, 5A and 6");
  assert.equal(section5A, section5 + 1);
  assert.equal(section6, section5A + 1);

  for (const clause of ["5A.1.", "5A.2.", "5A.3.", "5A.4."]) {
    assert.ok(termsOfServiceContent.includes(clause), `${clause} clause missing`);
  }
});

test("terms: integration sentences landed in sections 2, 6 and 8", () => {
  const html = termsOfServiceContent;

  assert.ok(
    html.includes(
      "The Service includes optional integrations with third-party services such as Google Calendar, Google Meet and Google Sign-In.",
    ),
    "section 2 sentence missing",
  );
  assert.ok(
    html.includes(
      "you grant EventHex a limited licence to process that content solely to provide the Service.",
    ),
    "section 6 sentence missing",
  );
  assert.ok(
    html.includes(
      "On termination we delete your stored third-party access tokens and personal data as described in the Privacy Policy, except where retention is required by law.",
    ),
    "section 8 sentence missing",
  );
});

test("every link Google's reviewers ask for is a real clickable anchor", () => {
  const privacyLinks = aTags(privacyPolicyContent);
  const termsLinks = aTags(termsOfServiceContent);
  const allLinks = [...privacyLinks, ...termsLinks];

  for (const href of REQUIRED_GOOGLE_LINKS) {
    const texts = allLinks.filter((link) => link.href === href).map((link) => link.text.trim());
    assert.ok(texts.length > 0, `missing clickable link to ${href}`);
    assert.ok(texts[0].length > 0, `link to ${href} has no anchor text`);
  }
});

test("legal copy has no leftover placeholder or markdown link syntax", () => {
  for (const html of [privacyPolicyContent, termsOfServiceContent]) {
    assert.ok(!/\]\(https?:/.test(html), "markdown link syntax leaked into the HTML");
    assert.ok(!html.includes("Last Updated: January"), "stale date left in the copy");
  }
});
