// SaaS API pricing client — fetches geo-resolved subscription plans for the
// public pricing page. Server-side only (SSR on Cloudflare Workers).
const SAAS_API_URL = import.meta.env.SAAS_API_URL || "https://app-api.eventhex.ai";
const SIGNUP_BASE_URL = import.meta.env.SIGNUP_BASE_URL || "https://app.eventhex.ai";

export interface PlanPricing {
  price: number;
  offerPrice: number | null;
  billingCycle: string;
  currency: { shortName: string; symbol: string } | null;
  countryMatched: boolean;
  isDefault: boolean;
}

export interface SaasPlan {
  _id: string;
  title: string;
  planType: string;
  trialDays?: number;
  annualDiscount?: number;
  pricing?: {
    country: string | null;
    monthly: PlanPricing | null;
    annual: PlanPricing | null;
  };
}

// Country-keyed cache — pricing differs per country, so one entry per ISO code.
const cache = new Map<string, { data: SaasPlan[]; expires: number }>();
const CACHE_TTL = 10 * 60 * 1000; // 10 min

export async function fetchPlans(country: string): Promise<SaasPlan[] | null> {
  const key = (country || "US").toUpperCase();
  const cached = cache.get(key);
  if (cached && cached.expires > Date.now()) return cached.data;

  try {
    const res = await fetch(`${SAAS_API_URL}/api/v1/subscription-plan?active=true&country=${key}`, {
      headers: { accept: "application/json" },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return cached?.data ?? null;
    const body = (await res.json()) as { data?: SaasPlan[] };
    const plans: SaasPlan[] = Array.isArray(body?.data) ? body.data : [];
    cache.set(key, { data: plans, expires: Date.now() + CACHE_TTL });
    return plans;
  } catch {
    // API down — serve stale cache if any, else let the page fall back to placeholders
    return cached?.data ?? null;
  }
}

const formatAmount = (n: number) => (Number.isInteger(n) ? n.toLocaleString("en-US") : n.toLocaleString("en-US", { maximumFractionDigits: 0 }));

export const formatPrice = (p: PlanPricing | null): string | null => {
  if (!p) return null;
  const symbol = p.currency?.symbol || "$";
  const amount = p.offerPrice ?? p.price;
  if (amount === 0) return "Free";
  return `${symbol}${formatAmount(amount)}`;
};

// Derive annual display when no annual Price row exists, from annualDiscount.
export const formatDerivedAnnual = (plan: SaasPlan): string | null => {
  const m = plan.pricing?.monthly;
  if (!m) return null;
  const monthly = m.offerPrice ?? m.price;
  if (monthly === 0) return "Free";
  const symbol = m.currency?.symbol || "$";
  const discount = plan.annualDiscount || 0;
  return `${symbol}${formatAmount(Math.round(monthly * 12 * (1 - discount / 100)))}`;
};

export const signupUrl = (planId: string, billingCycle: "monthly" | "annual", isFree = false): string =>
  isFree
    ? `${SIGNUP_BASE_URL}/sign-up?trial=true&planId=${planId}`
    : `${SIGNUP_BASE_URL}/sign-up?planId=${planId}&billingCycle=${billingCycle}`;
