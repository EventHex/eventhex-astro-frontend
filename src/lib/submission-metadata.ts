export type SubmissionMetadata = {
  submissionId: string;
  claritySessionId: string;
  clarityStatus: "requested" | "consent-denied" | "unavailable" | "failed";
  pageUrl: string;
  referrer: string;
  timeZone: string;
  language: string;
  device: string;
  browser: string;
  operatingSystem: string;
  screen: string;
  viewport: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
};

type ClarityFunction = (
  action: string,
  customId: string,
  customSessionId: string,
  customPageId: string,
) => unknown;

function submissionId(): string {
  if (typeof crypto.randomUUID === "function") return `EH-${crypto.randomUUID()}`;
  const random = Math.random().toString(36).slice(2, 12);
  return `EH-${Date.now().toString(36)}-${random}`;
}

function analyticsConsentGranted(): boolean {
  try {
    const saved = localStorage.getItem("eh_cookie_consent");
    if (!saved) return false;
    if (saved === "granted") return true;
    const parsed = JSON.parse(saved);
    return parsed?.analytics === true;
  } catch {
    return false;
  }
}

function deviceType(userAgent: string): string {
  if (/ipad|tablet|playbook|silk/i.test(userAgent)) return "Tablet";
  if (/mobile|iphone|ipod|android/i.test(userAgent)) return "Mobile";
  return "Desktop";
}

function browserName(userAgent: string): string {
  if (/edg\//i.test(userAgent)) return "Microsoft Edge";
  if (/opr\//i.test(userAgent)) return "Opera";
  if (/firefox\//i.test(userAgent)) return "Firefox";
  if (/chrome\//i.test(userAgent) && !/edg\//i.test(userAgent)) return "Chrome";
  if (/safari\//i.test(userAgent) && !/chrome\//i.test(userAgent)) return "Safari";
  return "Other";
}

function operatingSystem(userAgent: string): string {
  if (/iphone|ipad|ipod/i.test(userAgent)) return "iOS";
  if (/android/i.test(userAgent)) return "Android";
  if (/windows nt/i.test(userAgent)) return "Windows";
  if (/mac os x|macintosh/i.test(userAgent)) return "macOS";
  if (/linux/i.test(userAgent)) return "Linux";
  return "Other";
}

export async function collectSubmissionMetadata(): Promise<SubmissionMetadata> {
  const id = submissionId();
  const consentGranted = analyticsConsentGranted();
  let clarityStatus: SubmissionMetadata["clarityStatus"] = consentGranted ? "unavailable" : "consent-denied";

  if (consentGranted) {
    const clarity = (window as typeof window & { clarity?: ClarityFunction }).clarity;
    if (typeof clarity === "function") {
      try {
        clarity("identify", id, id, window.location.pathname);
        clarityStatus = "requested";
      } catch {
        clarityStatus = "failed";
      }
    }
  }

  const params = new URLSearchParams(window.location.search);
  const userAgent = navigator.userAgent || "";

  return {
    submissionId: id,
    claritySessionId: clarityStatus === "requested" ? id : "",
    clarityStatus,
    pageUrl: window.location.href,
    referrer: document.referrer,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    language: navigator.language || "",
    device: deviceType(userAgent),
    browser: browserName(userAgent),
    operatingSystem: operatingSystem(userAgent),
    screen: `${window.screen.width}x${window.screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    utmSource: params.get("utm_source") || "",
    utmMedium: params.get("utm_medium") || "",
    utmCampaign: params.get("utm_campaign") || "",
    utmContent: params.get("utm_content") || "",
    utmTerm: params.get("utm_term") || "",
  };
}
