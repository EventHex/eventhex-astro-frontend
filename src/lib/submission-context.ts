import type { SubmissionMetadata } from "./submission-metadata";

function clean(value: unknown, maxLength = 500): string {
  return String(value ?? "")
    .replace(/[\r\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function maskIp(value: string): string {
  const ip = clean(value, 64);
  const ipv4 = ip.split(".");
  if (ipv4.length === 4 && ipv4.every((part) => /^\d{1,3}$/.test(part))) {
    return `${ipv4[0]}.***.***.${ipv4[3]}`;
  }

  if (ip.includes(":")) {
    const visible = ip.split(":").filter(Boolean).slice(0, 2).join(":");
    return visible ? `${visible}:****:****` : "Unavailable";
  }

  return "Unavailable";
}

function countryName(code: string): string {
  const countryCode = clean(code, 2).toUpperCase();
  if (!/^[A-Z]{2}$/.test(countryCode)) return "Unavailable";
  try {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode) || countryCode;
  } catch {
    return countryCode;
  }
}

export function requestCountry(request: Request): string {
  const workerCountry = clean((request as Request & { cf?: { country?: string } }).cf?.country, 2);
  return countryName(workerCountry || request.headers.get("cf-ipcountry") || "");
}

export function requestMaskedIp(request: Request): string {
  return maskIp(request.headers.get("cf-connecting-ip") || "");
}

type TouchPrefix = "firstTouch" | "lastTouch";

// "ai_assistant · chatgpt / referral / 2026-11-launch · AI: chatgpt · Landing: /blog/x · 2026-11-20"
function formatTouch(meta: Partial<SubmissionMetadata>, prefix: TouchPrefix): string {
  const field = (name: string, max = 100) => clean((meta as Record<string, unknown>)[`${prefix}${name}`], max);
  const channel = field("Channel", 30);
  if (!channel) return "Unavailable";
  const sourceMediumCampaign = [field("Source"), field("Medium"), field("Campaign")].filter(Boolean).join(" / ");
  return [
    channel,
    sourceMediumCampaign,
    field("AiSource", 30) && `AI: ${field("AiSource", 30)}`,
    field("Landing", 150) && `Landing: ${field("Landing", 150)}`,
    field("Date", 10),
  ].filter(Boolean).join(" · ");
}

export function formatSubmissionContext(
  metadata: Partial<SubmissionMetadata> | null | undefined,
  request: Request,
): string {
  const meta = metadata || {};
  const campaign = [
    clean(meta.utmSource, 100),
    clean(meta.utmMedium, 100),
    clean(meta.utmCampaign, 150),
  ].filter(Boolean).join(" / ");

  const lines = [
    `Submission ID: ${clean(meta.submissionId, 80) || "Unavailable"}`,
    `Clarity Session ID: ${clean(meta.claritySessionId, 80) || "Unavailable"}`,
    `Clarity Status: ${clean(meta.clarityStatus, 30) || "Unavailable"}`,
    "Clarity Dashboard: https://clarity.microsoft.com/",
    `Country: ${requestCountry(request)}`,
    `Timezone: ${clean(meta.timeZone, 100) || "Unavailable"}`,
    `Device: ${[clean(meta.device, 30), clean(meta.browser, 50), clean(meta.operatingSystem, 50)].filter(Boolean).join(" · ") || "Unavailable"}`,
    `Language: ${clean(meta.language, 30) || "Unavailable"}`,
    `Screen / Viewport: ${clean(meta.screen, 30) || "Unavailable"} / ${clean(meta.viewport, 30) || "Unavailable"}`,
    `Landing Page: ${clean(meta.pageUrl, 500) || "Unavailable"}`,
    `Referrer: ${clean(meta.referrer, 500) || "Direct / unavailable"}`,
    `UTM: ${campaign || "Unavailable"}`,
    `UTM Content: ${clean(meta.utmContent, 150) || "Unavailable"}`,
    `UTM Term: ${clean(meta.utmTerm, 150) || "Unavailable"}`,
    `First Touch: ${formatTouch(meta, "firstTouch")}`,
    `Last Touch: ${formatTouch(meta, "lastTouch")}`,
    `IP: ${requestMaskedIp(request)}`,
  ];

  return lines.join("\n");
}
