# UTM conventions and attribution tracking

How to tag links to eventhex.ai, and what the site sends to GTM/GA4 so we can see which channel produces demo bookings.

Code: `src/lib/attribution.ts` (classification, first/last touch), `src/layouts/MarketingLayout.astro` (`ehTrack` helper, `demo_cta_click`), `src/lib/submission-metadata.ts` + `src/lib/submission-context.ts` (attribution on demo bookings and forms).

## 1. Naming rules

- **Everything lowercase.** The site lowercases UTM values anyway, but GA4's own source/medium reports do not.
- **No spaces.** Use `-` inside a value. Never put names, emails or phone numbers in a UTM.
- Always set `utm_source`, `utm_medium` and `utm_campaign`. `utm_content` is strongly recommended for posts.

| Parameter | Rule | Allowed values / format |
|---|---|---|
| `utm_source` | The platform or sender | `linkedin`, `x`, `facebook`, `instagram`, `youtube`, `whatsapp`, `newsletter`, `hubspot`, `google`, `<partner-name>` |
| `utm_medium` | The type of channel | `social` (organic posts), `email`, `whatsapp`, `cpc` (paid search or paid social ads), `referral`, `partner` |
| `utm_campaign` | `<yyyy-mm>-<topic>` | `2026-11-ai-checkin`, `2026-12-gitex-dubai`, `2026-11-webinar-badges` |
| `utm_content` | Post or variant id | `post-<n>`, `founder-post`, `carousel-a`, `cta-footer`, `broadcast-1` |
| `utm_term` | Paid search keyword only | `event-check-in-app` |

How the site maps tags to `traffic_channel`:

| Tagging | `traffic_channel` |
|---|---|
| `utm_medium=cpc` (or `ppc`, `paid`, `paid_social`), source is a social platform | `paid_social` |
| `utm_medium=cpc` (or `ppc`, `paid`), other sources | `paid_search` |
| `utm_medium=whatsapp` or `utm_source=whatsapp` | `whatsapp` |
| `utm_medium=email` / `newsletter` | `email` |
| `utm_medium=social` | `organic_social` |
| `utm_medium=referral` / `partner` / `affiliate` | `referral` |
| `utm_source=chatgpt.com`, `perplexity`, `gemini`, `copilot`, `claude`, … | `ai_assistant` (ChatGPT adds `utm_source=chatgpt.com` itself) |
| `gclid` / `gbraid` / `wbraid` / `msclkid` | `paid_search` |
| `li_fat_id` | `paid_social` (LinkedIn) |
| `fbclid` without paid UTM | `organic_social` (Facebook adds it to organic links too) |
| No UTM: referrer is ChatGPT, Perplexity, Gemini, Copilot, Claude, DeepSeek, Grok, Meta AI, You.com | `ai_assistant` (+ `ai_source`) |
| No UTM: Google/Bing/DuckDuckGo/… referrer | `organic_search` |
| No UTM: LinkedIn/X/Facebook/Instagram/YouTube/Reddit… referrer | `organic_social` |
| No UTM: WhatsApp referrer | `whatsapp` (most WhatsApp clicks have no referrer: **always tag WhatsApp links**) |
| No UTM: Gmail/Outlook web referrer | `email` (most email clicks have no referrer: **always tag email links**) |
| Other external referrer | `referral` |
| Nothing | `direct` |
| eventhex.ai itself | `internal` (never starts a new touch) |

## 2. Examples

| Use | Link |
|---|---|
| LinkedIn company/founder post | `https://eventhex.ai/event-check-in/?utm_source=linkedin&utm_medium=social&utm_campaign=2026-11-ai-checkin&utm_content=post-1` |
| X post | `https://eventhex.ai/?utm_source=x&utm_medium=social&utm_campaign=2026-11-ai-checkin&utm_content=thread-1` |
| WhatsApp broadcast / status | `https://eventhex.ai/book-a-demo/?utm_source=whatsapp&utm_medium=whatsapp&utm_campaign=2026-12-gitex-dubai&utm_content=broadcast-1` |
| Email newsletter | `https://eventhex.ai/blog/<slug>/?utm_source=newsletter&utm_medium=email&utm_campaign=2026-11-monthly&utm_content=cta-top` |
| Sales email signature | `https://eventhex.ai/book-a-demo/?utm_source=email-signature&utm_medium=email&utm_campaign=always-on&utm_content=hamim` |
| Partner link | `https://eventhex.ai/?utm_source=<partner-name>&utm_medium=partner&utm_campaign=2026-11-partner-launch` |
| LinkedIn ad | `https://eventhex.ai/book-a-demo/?utm_source=linkedin&utm_medium=cpc&utm_campaign=2026-12-gcc-demo&utm_content=ad-a` |

Do **not** add UTMs to internal links on eventhex.ai. That would start a fake new touch.

## 3. What the site stores

- **First touch**: the first visit in the last 90 days. It is never overwritten inside those 90 days.
- **Last touch**: the latest non-direct visit (90 days). A direct return visit keeps the previous campaign, the same as GA4's "last non-direct click".
- **Session landing page**: the path (no query string) where the current session's touch started.
- Storage: `localStorage` key `eh_attr` (90-day expiry), `sessionStorage` key `eh_attr_session`. If the visitor explicitly turns analytics off in the cookie banner, the data moves to `sessionStorage` only. No cookies, no third-party calls, no click-id values, no PII.

## 4. dataLayer events and params

Every event sent through `window.ehTrack` (GA4 direct + dataLayer + Clarity, production host only) now carries these **attribution params**:

| Param | Meaning |
|---|---|
| `traffic_channel` | Channel of the current session, or the last non-direct touch on a direct return visit |
| `traffic_source` | e.g. `google`, `linkedin`, `chatgpt`, `newsletter` |
| `traffic_medium` | e.g. `organic`, `social`, `email`, `cpc`, `referral` |
| `traffic_campaign` | `utm_campaign` of that touch |
| `ai_source` | Most recent AI assistant touch in the 90-day window (`chatgpt`, `perplexity`, `gemini`, `copilot`, `claude`, `deepseek`, `grok`, `meta_ai`, `you`), else empty |
| `first_touch_channel` | Channel of the first touch |
| `first_touch_source` | Source of the first touch |
| `landing_page` | Session landing path |

### `eh_attribution` (dataLayer only, one per page view)

Pushed on every page load before GTM loads. GTM keeps these keys in its data model, so any later GTM tag can read them with Data Layer Variables. Params: all the attribution params above, plus `visit_channel` (this page load only; `internal` for clicks inside the site), `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` (raw values of this URL), `click_id_type` (e.g. `gclid`, never the value), `referrer_host`, `first_touch_campaign`, `first_touch_landing`.

It is **not** sent to GA4 by default. If you want it in GA4, add a GTM GA4 Event tag for `eh_attribution`. That adds one event per page view, so it is optional.

### Demo funnel events (sent to GA4 through `ehTrack`)

| Event | Fires | Own params (+ attribution params) |
|---|---|---|
| `demo_cta_click` | Any click on a link to `/book-a-demo/` anywhere on the site | `cta_text`, `cta_section`, `cta_location`, `page_path` |
| `demo_slot_selected` | Visitor picks a time | `slot_start` |
| `demo_form_started` | First focus in the details form | — |
| `demo_form_invalid` | Submit with missing fields | `missing` |
| `demo_booking_submitted` | Booking sent to `/api/book-demo` | `slot_start`, `confirmation_mode` |
| `demo_booking_error` | Booking failed | `http_status`, `error_message` |
| `demo_slots_error` | Slot list failed to load | `week_offset` |
| `demo_whatsapp_click` | WhatsApp fallback link | `source` |
| `demo_booking_confirmed` | Thank-you page, instant booking | `booking_time` |
| `demo_booking_requested` | Thank-you page, approval-required slot | `booking_time` |

`cta_location` is the `data-cta-location` attribute of the link or an ancestor if present (the sticky bar uses `sticky_demo_bar`), else `header`/`footer`/the nearest section id, else the nearest section heading. Add `data-cta-location="<name>"` to a section to name it explicitly.

## 5. GA4 setup (owner, in GA4 Admin)

**Key events:** `demo_booking_confirmed`, `demo_booking_requested`. Optional secondary: `demo_booking_submitted`.

**Event-scoped custom dimensions** (Admin → Custom definitions → Create, scope *Event*, parameter name exactly as below):

| Priority | Parameters |
|---|---|
| Attribution (new) | `traffic_channel`, `traffic_source`, `traffic_medium`, `traffic_campaign`, `ai_source`, `first_touch_channel`, `first_touch_source`, `landing_page` |
| CTA (new) | `cta_location` |
| Funnel (already listed in the demo-funnel report) | `cta_text`, `cta_section`, `page_path`, `confirmation_mode`, `error_message`, `http_status`, `source` |

That is 16 dimensions. The standard GA4 property allows 50 event-scoped dimensions.

**Reports to build:** Explore → Free form, rows `first_touch_channel` (or `ai_source`), values `Event count` filtered to `demo_booking_confirmed` + `demo_booking_requested`. Custom dimensions only fill from the day they are registered; they are not backfilled.

## 6. Booking ground truth

Every demo booking (`/api/book-demo`) and contact/partnership form submission now includes the first and last touch in its submission metadata: channel, source, medium, campaign, AI source, landing page, date. On demo bookings they appear as two lines in the submission context, which goes to the internal demo notification email and the DataHex ERP lead notes:

```
First Touch: ai_assistant · chatgpt / referral · AI: chatgpt · Landing: /blog/ai-check-in/ · 2026-11-20
Last Touch: organic_social · linkedin / social / 2026-11-ai-checkin · Landing: / · 2026-11-25
```

Cal.com itself only receives the attendee-visible fields (company, role, notes). Attribution is not written into the Cal.com booking. On the WordPress contact and partnership forms, the fields are in the JSON in `textarea-2` (`firstTouchChannel`, `firstTouchSource`, …, `lastTouchDate`).
