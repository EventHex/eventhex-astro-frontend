# EventHex SEO Audit & Optimization Plan

**Audit Date:** 2026-04-07  
**Scope:** Astro frontend (eventhex.ai) + WordPress CMS (cms.eventhex.ai)

---

## Audit Summary

| Area | Status | Issues Found |
|------|--------|-------------|
| Meta tags (title, description) | ✅ Good | All pages have title + description |
| Open Graph / Twitter Cards | ✅ Good | MarketingLayout provides full OG+Twitter |
| Schema.org / JSON-LD | ✅ Good | Organization + WebSite on all pages; FAQPage + SoftwareApplication on feature pages; BlogPosting on posts |
| Canonical tags | ⚠️ Partial | 3 root pages missing explicit canonical |
| Sitemaps | ⚠️ Partial | 98 pages missing from sitemap |
| WordPress CMS indexing | 🔴 Critical | cms.eventhex.ai is fully indexable — duplicate content risk |
| Redirects (old WP URLs) | 🔴 Critical | `/feature/*` and root blog slugs return 404 |
| Legal pages | 🔴 Missing | Privacy, Terms, Cookie, Refund policy all 404 |
| Robots.txt | ⚠️ Needs update | Still references `/wp-admin/` |
| Cache/Performance headers | ✅ Good | CDN caching in place, stale-while-revalidate |
| Blog SEO | ✅ Good | Canonical, OG, BlogPosting schema, article dates |
| Image alt text | ⚠️ Varies | Depends on per-component quality |

---

## 🔴 CRITICAL Issues

### 1. WordPress CMS is indexable (duplicate content)

**Problem:** `cms.eventhex.ai` has `<meta name="robots" content="follow, index">` and its own sitemap at `/wp-sitemap.xml`. Google can index the same pages/posts on both domains.

WordPress canonical tags point to `cms.eventhex.ai/...` instead of `eventhex.ai/...`, so Google may pick the CMS version as canonical.

**Fix (WordPress):**
- [ ] **Rank Math → General Settings → set entire site to `noindex, nofollow`**
- [ ] OR add to `wp-config.php`: discourage search engines
- [ ] OR override robots.txt on CMS to `Disallow: /`
- [ ] Update all canonical URLs in Rank Math to point to `eventhex.ai` domain

**Priority:** P0 — do this IMMEDIATELY


### 2. Old WordPress URL patterns return 404

Tested URLs returning 404:
| Old URL | Expected redirect |
|---------|-------------------|
| `/feature/event-ticketing/` | → `/event-ticketing/` |
| `/feature/event-registration/` | → `/event-registration/` |
| `/feature/speaker-management/` | → `/speaker-management/` |
| `/feature/` (parent) | → `/features/` |
| `/{blog-slug}/` (root-level) | → `/blog/{blog-slug}/` |

Blog posts in WordPress lived at `eventhex.ai/{slug}/` (no `/blog/` prefix). In Astro they live at `/blog/{slug}/`. The sitemap lists them at `/{slug}/` (matching the old canonical), but the Astro page at that URL is 404.

**Fix (Astro middleware):**
- [ ] Add 301 redirects in `src/middleware.ts`:
  - `/feature/{slug}/` → `/{slug}/`
  - Root-level blog slugs → `/blog/{slug}/` (or keep the current canonical at `/{slug}/` and create a catch-all that proxies to the blog `[slug]` route)

**Priority:** P0 — SEO equity loss for every indexed old URL


### 3. Legal/Policy pages missing (404)

| Page | Status |
|------|--------|
| `/privacy-policy/` | 404 |
| `/terms-of-service/` | 404 |
| `/cookie-policy/` | 404 |
| `/cancellation-refund-policy/` | 404 |

These exist in WordPress CMS. Footer likely links to them.

**Fix:**
- [ ] Create Astro pages that fetch content from WordPress REST API (like blog posts)
- [ ] OR redirect to `cms.eventhex.ai` versions (less ideal)

**Priority:** P1 — legal compliance & trust signals


---

## ⚠️ HIGH Priority Issues

### 4. 98 pages missing from XML sitemap

The sitemap only lists 32 static pages. Missing:

| Category | Count | Examples |
|----------|-------|---------|
| Industries | 16 | /industries/healthcare/, /industries/finance/, etc. |
| Integrations | 9 | /integrations/stripe/, /integrations/hubspot/, etc. |
| Use Cases | 12 | /use-cases/conferences/, /use-cases/festivals/, etc. |
| Feature sub-use-cases | 50 | /event-ticketing/conferences/, /ai-photo-gallery/trade-shows/, etc. |
| Index pages | 3 | /industries/, /integrations/, /use-cases/ |

**Fix:**
- [ ] Add all collection pages to `sitemap-pages.xml.ts`
- [ ] Consider making the sitemap auto-generated from file system instead of manual list

**Priority:** P1 — Google can't discover 75% of all pages


### 5. Three root pages missing canonical tags

| Page | Has canonical? |
|------|---------------|
| `/` (homepage) | ❌ No |
| `/about-us/` | ❌ No |
| `/contact-en/` | ❌ No |

All other feature pages, blog posts, collection pages have canonicals.

**Fix:**
- [ ] Add `canonical` prop in these 3 page files
- [ ] OR make MarketingLayout auto-generate canonical from `Astro.url` when not provided

**Priority:** P1


### 6. Blog post URL mismatch (canonical vs actual page)

Blog posts have:
- **Astro page:** `/blog/{slug}/` (200 OK)
- **Canonical URL:** `/{slug}/` (at root, no `/blog/` prefix)
- **Root URL status:** `/{slug}/` → **404**
- **Sitemap:** Lists `/{slug}/` (the canonical URL)

This means the canonical URL that Google is told to index returns 404. The actual page at `/blog/{slug}/` isn't in the sitemap.

**Fix (one of):**
- [ ] **Option A:** Create a `[...slug].astro` catch-all that redirects recognized blog slugs to `/blog/{slug}/` and update canonical to `/blog/{slug}/`
- [ ] **Option B:** Create a `[...slug].astro` catch-all that renders blog content at `/{slug}/` (matching the old WordPress URL structure), keeping canonical at `/{slug}/`
- [ ] **Option C:** Update sitemap-posts.xml to list `/blog/{slug}/` and change blog canonical to `/blog/{slug}/`

**Recommendation:** Option B maintains SEO equity from old WordPress URLs.

**Priority:** P0 — Canonical URLs are 404s


---

## 🟡 MEDIUM Priority Issues

### 7. Robots.txt references `/wp-admin/`

```
Disallow: /wp-admin/
```
This path doesn't exist on the Astro frontend. Not harmful, but shows WordPress legacy.

**Fix:**
- [ ] Remove `/wp-admin/` disallow
- [ ] Add disallows for Astro-specific routes if needed (API routes, etc.)


### 8. No `<link rel="alternate" hreflang>` tags

Currently single-language (English). No issue now, but needs setup if multi-language planned.


### 9. WordPress CMS canonical URLs wrong

All WordPress pages have canonical pointing to `cms.eventhex.ai` instead of `eventhex.ai`. Even after noindex, this should be fixed.

**Fix (WordPress):**
- [ ] In Rank Math settings, change Site URL / canonical base to `https://eventhex.ai`
- [ ] Or add filter in theme: `add_filter('rank_math/frontend/canonical', ...)` to rewrite domain


### 10. Google Fonts render-blocking

Google Fonts CSS is loaded as a regular `<link>` stylesheet — this blocks rendering.

**Fix:**
- [ ] Use `media="print" onload="this.media='all'"` pattern
- [ ] Or self-host Inter + Manrope font files
- [ ] Or use `font-display: optional` to prevent layout shift

**Priority:** Performance + CWV, not strictly SEO


### 11. No BreadcrumbList schema

Feature pages, blog posts, and collection pages should have breadcrumb schema for rich results.

**Fix:**
- [ ] Add BreadcrumbList JSON-LD to MarketingLayout or specific page types
- [ ] Example: Home > Features > Event Ticketing


---

## ✅ What's Working Well

1. **Title + Description** on all pages — well-crafted, keyword-rich
2. **Open Graph + Twitter Cards** — complete with images, descriptions
3. **Organization + WebSite schema** — consistent across all pages
4. **FAQPage schema** on feature pages — rich result eligible
5. **SoftwareApplication schema** on feature pages — with ratings
6. **BlogPosting schema** on blog posts — with author, dates
7. **CDN caching** — 24hr s-maxage for static, 5min for blog
8. **Sitemap structure** — proper index with sub-sitemaps
9. **Blog post article metadata** — published_time, modified_time in OG
10. **Cloudflare Speculation Rules** — auto-speculative loading


---

## Implementation Plan (Priority Order)

### Phase 1: Critical Fixes (Week 1)

| # | Task | Where | Impact |
|---|------|-------|--------|
| 1 | Set `cms.eventhex.ai` to noindex | WordPress Rank Math | Stops duplicate indexing |
| 2 | Fix blog canonical URL mismatch | Astro — add catch-all `[...slug].astro` | Fixes 33 blog posts with 404 canonicals |
| 3 | Add 301 redirects for `/feature/*` | Astro middleware | Recovers old SEO equity |
| 4 | Add missing 98 pages to sitemap | `sitemap-pages.xml.ts` | Google discovers all pages |

### Phase 2: Important Fixes (Week 2)

| # | Task | Where | Impact |
|---|------|-------|--------|
| 5 | Add canonical to homepage, about, contact | 3 Astro page files | Prevents duplicate content signals |
| 6 | Create legal pages (privacy, terms, etc.) | Astro — new pages or WP proxy | Legal compliance + footer links work |
| 7 | Clean up robots.txt | `robots.txt.ts` | Remove WordPress artifacts |
| 8 | Add BreadcrumbList schema | MarketingLayout or per-page | Rich breadcrumb results |

### Phase 3: Enhancements (Week 3+)

| # | Task | Where | Impact |
|---|------|-------|--------|
| 9 | Self-host Google Fonts | Astro build pipeline | Faster LCP, no render-blocking |
| 10 | Fix WordPress canonical domain | Rank Math config | Clean WP-side SEO signals |
| 11 | Add page-specific OG images | Per feature page | Better social sharing |
| 12 | Auto-generate sitemap from file system | `sitemap-pages.xml.ts` | Never miss new pages |
| 13 | Submit updated sitemap to Google Search Console | GSC | Faster re-crawl |
| 14 | Audit & optimize image alt text | All components | Accessibility + image SEO |

---

## Quick Wins (Can Do Now)

1. **Rank Math → noindex cms.eventhex.ai** (WordPress admin, 2 minutes)
2. **Add canonical to 3 pages** (3 one-line edits in Astro)
3. **Add 98 pages to sitemap** (update one file)
4. **Clean robots.txt** (edit one file)
