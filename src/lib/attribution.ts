// Marketing attribution: classifies each visit into a traffic channel, keeps a
// first touch (90 days, never overwritten) and a last non-direct touch, and
// exposes short params for dataLayer/GA4 events and form/booking metadata.
// First-party storage only: no cookies, no third-party calls, no PII.

export type TrafficChannel =
  | "ai_assistant"
  | "organic_search"
  | "paid_search"
  | "paid_social"
  | "organic_social"
  | "email"
  | "whatsapp"
  | "referral"
  | "direct"
  | "internal";

export type Touch = {
  channel: TrafficChannel;
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
  aiSource: string;
  clickId: string; // click id parameter name (gclid, fbclid, ...), never its value
  referrerHost: string;
  landingPage: string; // path only
  ts: number;
};

export type AttributionState = {
  first: Touch | null;
  last: Touch | null; // last non-direct touch
};

export type SessionState = {
  touch: Touch;
};

export const ATTRIBUTION_TTL_MS = 90 * 24 * 60 * 60 * 1000;
const MAX_LEN = 100;

const CLICK_IDS = ["gclid", "gbraid", "wbraid", "msclkid", "fbclid", "li_fat_id"] as const;

const AI_HOSTS: [RegExp, string][] = [
  [/(^|\.)chatgpt\.com$/, "chatgpt"],
  [/(^|\.)openai\.com$/, "chatgpt"],
  [/(^|\.)perplexity\.ai$/, "perplexity"],
  [/^(gemini|bard)\.google\.com$/, "gemini"],
  [/(^|\.)copilot\.microsoft\.com$/, "copilot"],
  [/(^|\.)copilot\.cloud\.microsoft$/, "copilot"],
  [/^edgeservices\.bing\.com$/, "copilot"],
  [/(^|\.)claude\.ai$/, "claude"],
  [/(^|\.)deepseek\.com$/, "deepseek"],
  [/(^|\.)grok\.com$/, "grok"],
  [/(^|\.)x\.ai$/, "grok"],
  [/(^|\.)meta\.ai$/, "meta_ai"],
  [/(^|\.)you\.com$/, "you"],
];

// utm_source values (ChatGPT appends utm_source=chatgpt.com itself).
const AI_SOURCE_NAMES: Record<string, string> = {
  chatgpt: "chatgpt",
  openai: "chatgpt",
  perplexity: "perplexity",
  gemini: "gemini",
  bard: "gemini",
  copilot: "copilot",
  claude: "claude",
  deepseek: "deepseek",
  grok: "grok",
  meta_ai: "meta_ai",
  metaai: "meta_ai",
  you: "you",
};

const SEARCH_HOSTS: [RegExp, string][] = [
  [/(^|\.)google\.[a-z.]+$/, "google"],
  [/(^|\.)bing\.com$/, "bing"],
  [/(^|\.)duckduckgo\.com$/, "duckduckgo"],
  [/(^|\.)search\.yahoo\.[a-z.]+$/, "yahoo"],
  [/(^|\.)yandex\.[a-z.]+$/, "yandex"],
  [/(^|\.)baidu\.com$/, "baidu"],
  [/(^|\.)ecosia\.org$/, "ecosia"],
  [/^search\.brave\.com$/, "brave"],
  [/(^|\.)naver\.com$/, "naver"],
  [/^com\.google\.android\.googlequicksearchbox$/, "google"],
];

const SOCIAL_HOSTS: [RegExp, string][] = [
  [/(^|\.)linkedin\.com$/, "linkedin"],
  [/^(lnkd\.in|com\.linkedin\.android)$/, "linkedin"],
  [/^(t\.co|x\.com|twitter\.com|mobile\.twitter\.com)$/, "x"],
  [/(^|\.)facebook\.com$/, "facebook"],
  [/^fb\.me$/, "facebook"],
  [/(^|\.)instagram\.com$/, "instagram"],
  [/(^|\.)youtube\.com$/, "youtube"],
  [/^youtu\.be$/, "youtube"],
  [/(^|\.)reddit\.com$/, "reddit"],
  [/(^|\.)quora\.com$/, "quora"],
  [/(^|\.)threads\.(net|com)$/, "threads"],
  [/(^|\.)pinterest\.[a-z.]+$/, "pinterest"],
];

const WHATSAPP_HOSTS = /(^|\.)(whatsapp\.com|wa\.me)$|^com\.whatsapp(\.w4b)?$/;
const EMAIL_HOSTS: [RegExp, string][] = [
  [/^mail\.google\.com$/, "gmail"],
  [/^com\.google\.android\.gm$/, "gmail"],
  [/^outlook\.(live|office|office365)\.com$/, "outlook"],
  [/^mail\.yahoo\.com$/, "yahoo_mail"],
];

const SOCIAL_SOURCES = new Set([
  "linkedin", "x", "twitter", "facebook", "fb", "instagram", "ig", "youtube", "reddit",
  "quora", "threads", "pinterest", "meta",
]);
const SEARCH_SOURCES = new Set(["google", "bing", "duckduckgo", "yahoo", "yandex", "baidu", "ecosia", "brave"]);

function short(value: string | null | undefined, max = MAX_LEN): string {
  return String(value ?? "").replace(/[\r\n\t]+/g, " ").trim().slice(0, max);
}

function lower(value: string | null | undefined): string {
  return short(value).toLowerCase();
}

function matchHost(host: string, table: [RegExp, string][]): string {
  for (const [pattern, name] of table) if (pattern.test(host)) return name;
  return "";
}

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.toLowerCase().replace(/^www\./, "");
  } catch {
    return "";
  }
}

export function aiSourceFromHost(host: string): string {
  return matchHost(host.toLowerCase().replace(/^www\./, ""), AI_HOSTS);
}

export function aiSourceFromUtm(utmSource: string): string {
  const value = lower(utmSource).replace(/^www\./, "");
  if (!value) return "";
  if (value.includes(".")) return aiSourceFromHost(value);
  return AI_SOURCE_NAMES[value.replace(/[\s-]+/g, "_")] || "";
}

function channelFromUtm(source: string, medium: string): TrafficChannel {
  const src = source.replace(/^www\./, "");
  if (/^(cpc|ppc|paid|paidsearch|paid_search|paid-search|sem|cpm|display|paid_social|paidsocial|paid-social|social_paid|social-paid|ads?)$/.test(medium)) {
    return SOCIAL_SOURCES.has(src) || /social/.test(medium) ? "paid_social" : "paid_search";
  }
  if (medium === "whatsapp" || src === "whatsapp") return "whatsapp";
  if (/^(e-?mail|newsletter)$/.test(medium) || /^(e-?mail|newsletter)$/.test(src)) return "email";
  if (/^(social|social[-_]?(network|media)|sm|organic_social|organic-social)$/.test(medium)) return "organic_social";
  if (medium === "organic") return "organic_search";
  if (/^(referral|partner|affiliate)$/.test(medium)) return "referral";
  if (SOCIAL_SOURCES.has(src)) return "organic_social";
  if (SEARCH_SOURCES.has(src)) return "organic_search";
  return "referral";
}

export type VisitInput = {
  url: string;
  referrer: string;
  siteHosts?: string[]; // hosts treated as internal; defaults to the URL's own host + eventhex.ai
  now?: number;
};

/** Classify one page load from its URL and document.referrer. */
export function classifyVisit({ url, referrer, siteHosts, now = Date.now() }: VisitInput): Touch {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    parsed = new URL("https://eventhex.ai/");
  }
  const params = parsed.searchParams;
  const utm = {
    source: lower(params.get("utm_source")),
    medium: lower(params.get("utm_medium")),
    campaign: lower(params.get("utm_campaign")),
    content: lower(params.get("utm_content")),
    term: lower(params.get("utm_term")),
  };
  const clickId = CLICK_IDS.find((id) => params.has(id)) || "";
  const referrerHost = hostOf(referrer);
  const internalHosts = new Set(
    (siteHosts || [parsed.hostname, "eventhex.ai"]).map((h) => h.toLowerCase().replace(/^www\./, "")),
  );

  const touch: Touch = {
    channel: "direct",
    source: "",
    medium: utm.medium,
    campaign: utm.campaign,
    content: utm.content,
    term: utm.term,
    aiSource: "",
    clickId,
    referrerHost,
    landingPage: short(parsed.pathname),
    ts: now,
  };

  const referrerAi = referrerHost ? aiSourceFromHost(referrerHost) : "";
  const utmAi = aiSourceFromUtm(utm.source);

  // 1. Paid click ids (fbclid is also added to organic Facebook links).
  if (clickId === "gclid" || clickId === "gbraid" || clickId === "wbraid") {
    return { ...touch, channel: "paid_search", source: utm.source || "google", medium: utm.medium || "cpc" };
  }
  if (clickId === "msclkid") {
    return { ...touch, channel: "paid_search", source: utm.source || "bing", medium: utm.medium || "cpc" };
  }
  if (clickId === "li_fat_id") {
    return { ...touch, channel: "paid_social", source: utm.source || "linkedin", medium: utm.medium || "paid_social" };
  }

  // 2. AI assistants: utm_source=chatgpt.com etc., or an AI referrer on an untagged link.
  const aiSource = utmAi || (utm.source ? "" : referrerAi);
  if (aiSource) {
    return { ...touch, channel: "ai_assistant", source: aiSource, medium: utm.medium || "referral", aiSource };
  }

  // 3. Explicit UTM tagging.
  if (utm.source || utm.medium) {
    const source = utm.source || referrerHost || "(not set)";
    let channel = channelFromUtm(source, utm.medium);
    if (clickId === "fbclid" && channel === "referral") channel = "organic_social";
    return { ...touch, channel, source };
  }

  if (clickId === "fbclid") {
    return { ...touch, channel: "organic_social", source: "facebook", medium: "social" };
  }

  // 4. Referrer.
  if (referrerHost) {
    if (internalHosts.has(referrerHost)) return { ...touch, channel: "internal", source: referrerHost, medium: "internal" };
    const mail = matchHost(referrerHost, EMAIL_HOSTS);
    if (mail) return { ...touch, channel: "email", source: mail, medium: "email" };
    if (WHATSAPP_HOSTS.test(referrerHost)) return { ...touch, channel: "whatsapp", source: "whatsapp", medium: "whatsapp" };
    const search = matchHost(referrerHost, SEARCH_HOSTS);
    if (search) return { ...touch, channel: "organic_search", source: search, medium: "organic" };
    const social = matchHost(referrerHost, SOCIAL_HOSTS);
    if (social) return { ...touch, channel: "organic_social", source: social, medium: "social" };
    return { ...touch, channel: "referral", source: referrerHost, medium: "referral" };
  }

  return { ...touch, channel: "direct", source: "(direct)", medium: "(none)" };
}

function fresh(touch: Touch | null | undefined, now: number): Touch | null {
  return touch && typeof touch.ts === "number" && now - touch.ts < ATTRIBUTION_TTL_MS ? touch : null;
}

/**
 * Apply one page load to the stored state.
 * - Internal navigation and same-session direct reloads keep the session touch.
 * - A new session, or a new campaign/external referrer mid-session, starts a new touch.
 * - First touch is set once and never overwritten until it is 90 days old.
 * - Last touch only records non-direct touches (expires after 90 days).
 */
export function applyVisit(
  state: AttributionState | null,
  session: SessionState | null,
  visit: Touch,
  now = visit.ts,
): { state: AttributionState; session: SessionState } {
  const first = fresh(state?.first, now);
  const last = fresh(state?.last, now);

  let sessionTouch = session?.touch || null;
  const startsNewTouch =
    visit.channel !== "internal" && (!sessionTouch || visit.channel !== "direct");
  if (startsNewTouch) sessionTouch = visit;
  if (!sessionTouch) {
    // Internal referrer without a stored session (e.g. new tab): treat as direct.
    sessionTouch = { ...visit, channel: "direct", source: "(direct)", medium: "(none)" };
  }

  return {
    session: { touch: sessionTouch },
    state: {
      first: first || sessionTouch,
      last: startsNewTouch && sessionTouch.channel !== "direct" ? sessionTouch : last,
    },
  };
}

export type AttributionEventParams = {
  traffic_channel: string;
  traffic_source: string;
  traffic_medium: string;
  traffic_campaign: string;
  ai_source: string;
  first_touch_channel: string;
  first_touch_source: string;
  landing_page: string;
};

/**
 * Params merged into every tracked event. traffic_* follow the
 * "last non-direct touch" model (a direct return visit inherits the previous
 * campaign); ai_source is the most recent AI touch (last, else first).
 */
export function eventParams(state: AttributionState, session: SessionState): AttributionEventParams {
  const current = session.touch.channel !== "direct" ? session.touch : state.last || session.touch;
  const first = state.first || session.touch;
  return {
    traffic_channel: current.channel,
    traffic_source: short(current.source),
    traffic_medium: short(current.medium),
    traffic_campaign: short(current.campaign),
    ai_source: current.aiSource || state.last?.aiSource || first.aiSource || "",
    first_touch_channel: first.channel,
    first_touch_source: short(first.source),
    landing_page: short(session.touch.landingPage),
  };
}

export type AttributionSummary = {
  firstTouchChannel: string;
  firstTouchSource: string;
  firstTouchMedium: string;
  firstTouchCampaign: string;
  firstTouchAiSource: string;
  firstTouchLanding: string;
  firstTouchDate: string;
  lastTouchChannel: string;
  lastTouchSource: string;
  lastTouchMedium: string;
  lastTouchCampaign: string;
  lastTouchAiSource: string;
  lastTouchLanding: string;
  lastTouchDate: string;
};

function isoDate(ts: number | undefined): string {
  if (!ts) return "";
  try {
    return new Date(ts).toISOString().slice(0, 10);
  } catch {
    return "";
  }
}

/** Short first/last touch fields for form and booking submission metadata. */
export function summarize(state: AttributionState, session: SessionState): AttributionSummary {
  const first = state.first || session.touch;
  const last = session.touch.channel !== "direct" ? session.touch : state.last || session.touch;
  return {
    firstTouchChannel: first.channel,
    firstTouchSource: short(first.source),
    firstTouchMedium: short(first.medium),
    firstTouchCampaign: short(first.campaign),
    firstTouchAiSource: first.aiSource,
    firstTouchLanding: short(first.landingPage),
    firstTouchDate: isoDate(first.ts),
    lastTouchChannel: last.channel,
    lastTouchSource: short(last.source),
    lastTouchMedium: short(last.medium),
    lastTouchCampaign: short(last.campaign),
    lastTouchAiSource: last.aiSource,
    lastTouchLanding: short(last.landingPage),
    lastTouchDate: isoDate(last.ts),
  };
}

// ---------------------------------------------------------------------------
// Browser runtime
// ---------------------------------------------------------------------------

const STATE_KEY = "eh_attr";
const SESSION_KEY = "eh_attr_session";
const CONSENT_KEY = "eh_cookie_consent";

type BrowserAttribution = { state: AttributionState; session: SessionState };
// Memoised on window so every bundled script on the page shares one result.
type AttributionWindow = typeof window & { __ehAttribution?: BrowserAttribution; dataLayer?: unknown[] };

/** True only when the visitor explicitly turned analytics off in the cookie banner. */
export function analyticsExplicitlyDenied(saved: string | null): boolean {
  if (!saved) return false;
  if (saved === "denied") return true;
  if (saved === "granted") return false;
  try {
    return JSON.parse(saved)?.analytics === false;
  } catch {
    return false;
  }
}

function readJson<T>(storage: Storage | undefined, key: string): T | null {
  try {
    const raw = storage?.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function writeJson(storage: Storage | undefined, key: string, value: unknown): void {
  try {
    storage?.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full or blocked: attribution stays in memory for this page.
  }
}

function remove(storage: Storage | undefined, key: string): void {
  try {
    storage?.removeItem(key);
  } catch {
    // ignore
  }
}

function safeStorage(kind: "localStorage" | "sessionStorage"): Storage | undefined {
  try {
    return window[kind];
  } catch {
    return undefined;
  }
}

function consentDenied(): boolean {
  try {
    return analyticsExplicitlyDenied(safeStorage("localStorage")?.getItem(CONSENT_KEY) ?? null);
  } catch {
    return false;
  }
}

function persist(value: BrowserAttribution): void {
  const local = safeStorage("localStorage");
  const session = safeStorage("sessionStorage");
  writeJson(session, SESSION_KEY, value.session);
  if (consentDenied()) {
    remove(local, STATE_KEY);
    writeJson(session, STATE_KEY, value.state);
  } else {
    remove(session, STATE_KEY);
    writeJson(local, STATE_KEY, value.state);
  }
}

/** Classify this page load once, store it and push `eh_attribution` to the dataLayer. */
export function initAttribution(): BrowserAttribution {
  const w = window as AttributionWindow;
  if (w.__ehAttribution) return w.__ehAttribution;
  const local = safeStorage("localStorage");
  const sessionStore = safeStorage("sessionStorage");
  const denied = consentDenied();
  const stored = readJson<AttributionState>(denied ? sessionStore : local, STATE_KEY)
    || readJson<AttributionState>(sessionStore, STATE_KEY);
  const session = readJson<SessionState>(sessionStore, SESSION_KEY);

  const visit = classifyVisit({ url: location.href, referrer: document.referrer || "" });
  const current = applyVisit(stored, session, visit);
  w.__ehAttribution = current;
  persist(current);

  // Re-store under the visitor's new choice when they use the cookie banner.
  window.addEventListener("eh:consent", () => persist(current));

  // One event per page view; GTM keeps these keys in its data model, so later
  // events can read them through Data Layer Variables.
  const params = new URLSearchParams(location.search);
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "eh_attribution",
    ...eventParams(current.state, current.session),
    visit_channel: visit.channel,
    utm_source: lower(params.get("utm_source")),
    utm_medium: lower(params.get("utm_medium")),
    utm_campaign: lower(params.get("utm_campaign")),
    utm_content: lower(params.get("utm_content")),
    utm_term: lower(params.get("utm_term")),
    click_id_type: visit.clickId,
    referrer_host: visit.referrerHost,
    first_touch_campaign: short(current.state.first?.campaign),
    first_touch_landing: short(current.state.first?.landingPage),
  });
  return current;
}

/** Attribution params for tracked events; empty object if unavailable. */
export function getAttributionParams(): Partial<AttributionEventParams> {
  try {
    const value = initAttribution();
    return eventParams(value.state, value.session);
  } catch {
    return {};
  }
}

/** First/last touch summary for submission metadata; empty object if unavailable. */
export function getAttributionSummary(): Partial<AttributionSummary> {
  try {
    const value = initAttribution();
    return summarize(value.state, value.session);
  } catch {
    return {};
  }
}
