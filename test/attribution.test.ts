import assert from "node:assert/strict";
import test from "node:test";

import {
  ATTRIBUTION_TTL_MS,
  analyticsExplicitlyDenied,
  applyVisit,
  classifyVisit,
  eventParams,
  summarize,
  type Touch,
} from "../src/lib/attribution.ts";

const SITE = "https://eventhex.ai";
const visit = (path: string, referrer = "", now = 1_700_000_000_000): Touch =>
  classifyVisit({ url: `${SITE}${path}`, referrer, now });

test("classifies AI assistant referrers and ChatGPT's utm_source", () => {
  const cases: [string, string, string][] = [
    ["/", "https://chatgpt.com/", "chatgpt"],
    ["/", "https://chat.openai.com/", "chatgpt"],
    ["/", "https://www.perplexity.ai/", "perplexity"],
    ["/", "https://gemini.google.com/", "gemini"],
    ["/", "https://bard.google.com/", "gemini"],
    ["/", "https://copilot.microsoft.com/", "copilot"],
    ["/", "https://edgeservices.bing.com/", "copilot"],
    ["/", "https://claude.ai/", "claude"],
    ["/", "https://chat.deepseek.com/", "deepseek"],
    ["/", "https://grok.com/", "grok"],
    ["/", "https://www.meta.ai/", "meta_ai"],
    ["/", "https://you.com/", "you"],
    ["/pricing/?utm_source=chatgpt.com", "", "chatgpt"],
    ["/?utm_source=perplexity", "", "perplexity"],
  ];
  for (const [path, referrer, ai] of cases) {
    const touch = visit(path, referrer);
    assert.equal(touch.channel, "ai_assistant", `${path} ${referrer}`);
    assert.equal(touch.aiSource, ai, `${path} ${referrer}`);
    assert.equal(touch.source, ai);
  }
});

test("classifies search, social, whatsapp, email, referral, direct and internal", () => {
  const cases: [string, string, string, string][] = [
    ["/", "https://www.google.com/", "organic_search", "google"],
    ["/", "https://www.google.co.in/", "organic_search", "google"],
    ["/", "https://www.bing.com/", "organic_search", "bing"],
    ["/", "https://duckduckgo.com/", "organic_search", "duckduckgo"],
    ["/", "https://www.linkedin.com/", "organic_social", "linkedin"],
    ["/", "https://lnkd.in/", "organic_social", "linkedin"],
    ["/", "https://t.co/", "organic_social", "x"],
    ["/", "https://l.facebook.com/", "organic_social", "facebook"],
    ["/", "https://web.whatsapp.com/", "whatsapp", "whatsapp"],
    ["/", "android-app://com.whatsapp/", "whatsapp", "whatsapp"],
    ["/", "https://mail.google.com/", "email", "gmail"],
    ["/", "https://www.capterra.com/", "referral", "capterra.com"],
    ["/", "", "direct", "(direct)"],
    ["/features/", "https://eventhex.ai/", "internal", "eventhex.ai"],
    ["/features/", "https://www.eventhex.ai/", "internal", "eventhex.ai"],
  ];
  for (const [path, referrer, channel, source] of cases) {
    const touch = visit(path, referrer);
    assert.equal(touch.channel, channel, `${referrer || "no referrer"}`);
    assert.equal(touch.source, source, `${referrer || "no referrer"}`);
    assert.equal(touch.aiSource, "");
  }
});

test("UTM tags win over the referrer and map mediums to channels", () => {
  const cases: [string, string, string][] = [
    ["/?utm_source=linkedin&utm_medium=social&utm_campaign=2026-11-ai-checkin", "linkedin", "organic_social"],
    ["/?utm_source=x&utm_medium=social", "x", "organic_social"],
    ["/?utm_source=whatsapp&utm_medium=whatsapp", "whatsapp", "whatsapp"],
    ["/?utm_source=newsletter&utm_medium=email", "newsletter", "email"],
    ["/?utm_source=google&utm_medium=cpc", "google", "paid_search"],
    ["/?utm_source=linkedin&utm_medium=cpc", "linkedin", "paid_social"],
    ["/?utm_source=meetx&utm_medium=partner", "meetx", "referral"],
    ["/?utm_source=LinkedIn", "linkedin", "organic_social"],
  ];
  for (const [path, source, channel] of cases) {
    // An AI or search referrer must not override explicit UTM tags.
    const touch = visit(path, "https://www.google.com/");
    assert.equal(touch.channel, channel, path);
    assert.equal(touch.source, source, path);
  }
  const tagged = visit("/?utm_source=linkedin&utm_medium=social&utm_campaign=2026-11-AI-Checkin&utm_content=post-42");
  assert.equal(tagged.campaign, "2026-11-ai-checkin");
  assert.equal(tagged.content, "post-42");
});

test("click ids mark paid traffic without storing their values", () => {
  const gclid = visit("/?gclid=abc123");
  assert.equal(gclid.channel, "paid_search");
  assert.equal(gclid.source, "google");
  assert.equal(gclid.clickId, "gclid");
  assert.doesNotMatch(JSON.stringify(gclid), /abc123/);
  assert.equal(visit("/?msclkid=x").source, "bing");
  assert.equal(visit("/?wbraid=x").channel, "paid_search");
  assert.equal(visit("/?li_fat_id=x").channel, "paid_social");
  // fbclid is appended to organic Facebook links too.
  assert.equal(visit("/?fbclid=x").channel, "organic_social");
  assert.equal(visit("/?fbclid=x&utm_source=facebook&utm_medium=paid_social").channel, "paid_social");
});

test("landing page is the path only, never the query string", () => {
  assert.equal(visit("/blog/ai-check-in/?utm_source=x&email=a@b.co").landingPage, "/blog/ai-check-in/");
});

test("first touch is kept; last touch tracks the latest non-direct visit", () => {
  const t0 = 1_700_000_000_000;
  const day = 24 * 60 * 60 * 1000;

  // Session 1: arrives from ChatGPT, browses internally.
  let r = applyVisit(null, null, visit("/blog/x/", "https://chatgpt.com/", t0));
  r = applyVisit(r.state, r.session, visit("/features/", "https://eventhex.ai/blog/x/", t0 + 1000));
  assert.equal(r.state.first?.channel, "ai_assistant");
  assert.equal(r.state.first?.landingPage, "/blog/x/");
  assert.equal(r.session.touch.landingPage, "/blog/x/");

  // Session 2 (new tab, no session): LinkedIn post.
  r = applyVisit(r.state, null, visit("/?utm_source=linkedin&utm_medium=social", "", t0 + 2 * day));
  assert.equal(r.state.first?.source, "chatgpt", "first touch is never overwritten");
  assert.equal(r.state.last?.source, "linkedin");

  // Session 3: direct return visit keeps the last non-direct touch.
  r = applyVisit(r.state, null, visit("/book-a-demo/", "", t0 + 3 * day));
  assert.equal(r.session.touch.channel, "direct");
  assert.equal(r.state.last?.source, "linkedin");
  const params = eventParams(r.state, r.session);
  assert.equal(params.traffic_channel, "organic_social");
  assert.equal(params.traffic_source, "linkedin");
  assert.equal(params.first_touch_channel, "ai_assistant");
  assert.equal(params.first_touch_source, "chatgpt");
  assert.equal(params.ai_source, "chatgpt");
  assert.equal(params.landing_page, "/book-a-demo/");

  const summary = summarize(r.state, r.session);
  assert.equal(summary.firstTouchChannel, "ai_assistant");
  assert.equal(summary.firstTouchAiSource, "chatgpt");
  assert.equal(summary.firstTouchLanding, "/blog/x/");
  assert.equal(summary.lastTouchChannel, "organic_social");
  assert.equal(summary.lastTouchSource, "linkedin");
  assert.match(summary.firstTouchDate, /^\d{4}-\d{2}-\d{2}$/);
});

test("a new campaign mid-session starts a new touch; reloads and internal clicks do not", () => {
  const t0 = 1_700_000_000_000;
  let r = applyVisit(null, null, visit("/", "https://www.google.com/", t0));
  r = applyVisit(r.state, r.session, visit("/features/", "", t0 + 1000)); // direct reload-like hit
  assert.equal(r.session.touch.source, "google");
  r = applyVisit(r.state, r.session, visit("/?utm_source=newsletter&utm_medium=email", "", t0 + 2000));
  assert.equal(r.session.touch.channel, "email");
  assert.equal(r.state.last?.channel, "email");
  assert.equal(r.state.first?.source, "google");
});

test("first and last touch expire after 90 days", () => {
  const t0 = 1_700_000_000_000;
  let r = applyVisit(null, null, visit("/", "https://chatgpt.com/", t0));
  r = applyVisit(r.state, null, visit("/", "", t0 + ATTRIBUTION_TTL_MS + 1));
  assert.equal(r.state.first?.channel, "direct");
  assert.equal(r.state.last, null);
});

test("internal referrer with no session (new tab) counts as direct", () => {
  const r = applyVisit(null, null, visit("/features/", "https://eventhex.ai/"));
  assert.equal(r.session.touch.channel, "direct");
  assert.equal(r.state.first?.channel, "direct");
  assert.equal(r.state.last, null);
});

test("only an explicit analytics opt-out counts as denied", () => {
  assert.equal(analyticsExplicitlyDenied(null), false);
  assert.equal(analyticsExplicitlyDenied("granted"), false);
  assert.equal(analyticsExplicitlyDenied("denied"), true);
  assert.equal(analyticsExplicitlyDenied(JSON.stringify({ analytics: false, marketing: false })), true);
  assert.equal(analyticsExplicitlyDenied(JSON.stringify({ analytics: true, marketing: false })), false);
  assert.equal(analyticsExplicitlyDenied("{broken"), false);
});
