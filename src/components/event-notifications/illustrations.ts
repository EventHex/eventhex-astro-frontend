// Inline SVG illustrations for the Event Notifications bento grid.
// Static coded mockups (notifications theme) — motion comes from card hover float.
// viewBox ~220x150 for hero (tall) cards, ~130x90 for small cards.

export const enbIllustrations: Record<string, string> = {
  /* ── Tab 1: Email Notifications ──────────────────────────── */
  // hero
  email: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14"   stroke-width="1.5" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="22" y="22" width="176" height="54" rx="10"   stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<path d="M22 32 L110 56 L198 32"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity=".4" style="stroke:var(--ds-blue)"/>
<rect x="36" y="38" width="80" height="6" rx="3"  opacity=".3" style="fill:var(--ds-ink)"/>
<rect x="36" y="50" width="56" height="5" rx="2.5" style="fill:color-mix(in srgb, var(--ds-cat-slate) 55%, white)"/>
<circle cx="190" cy="26" r="8"  opacity=".85" style="fill:var(--ds-danger)"/>
<text x="186.5" y="29.5" font-size="8" font-family="system-ui" font-weight="800" style="fill:var(--ds-white)">3</text>
<rect x="22" y="88" width="78" height="38" rx="8"   stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<rect x="30" y="96" width="36" height="5" rx="2.5"  opacity=".5" style="fill:var(--ds-blue)"/>
<rect x="30" y="106" width="54" height="4" rx="2" style="fill:color-mix(in srgb, var(--ds-cat-slate) 55%, white)"/>
<rect x="30" y="114" width="44" height="4" rx="2" style="fill:color-mix(in srgb, var(--ds-cat-slate) 28%, white)"/>
<rect x="110" y="88" width="90" height="38" rx="8"  opacity=".08" style="fill:var(--ds-blue)"/>
<rect x="120" y="96" width="48" height="5" rx="2.5"  opacity=".4" style="fill:var(--ds-blue)"/>
<rect x="120" y="106" width="64" height="4" rx="2"  opacity=".2" style="fill:var(--ds-blue)"/>
<rect x="120" y="114" width="52" height="4" rx="2"  opacity=".15" style="fill:var(--ds-blue)"/>
</svg>`,

  reminders: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12"   stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="16" y="18" width="94" height="16" rx="6"   stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<rect x="22" y="23" width="22" height="6" rx="3"  opacity=".35" style="fill:var(--ds-blue)"/>
<rect x="50" y="23" width="50" height="6" rx="3" style="fill:color-mix(in srgb, var(--ds-cat-slate) 55%, white)"/>
<rect x="16" y="40" width="94" height="16" rx="6"   stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<rect x="22" y="45" width="22" height="6" rx="3"  opacity=".5" style="fill:var(--ds-blue)"/>
<rect x="50" y="45" width="40" height="6" rx="3" style="fill:color-mix(in srgb, var(--ds-cat-slate) 55%, white)"/>
<rect x="16" y="62" width="94" height="16" rx="6"  opacity=".08"  stroke-width="1" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<rect x="22" y="67" width="22" height="6" rx="3"  opacity=".8" style="fill:var(--ds-blue)"/>
<rect x="50" y="67" width="52" height="6" rx="3"  opacity=".3" style="fill:var(--ds-blue)"/>
</svg>`,

  broadcast: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12"   stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<circle cx="44" cy="46" r="20" fill="none"  stroke-width="1.5" style="stroke:var(--ds-surface-tint)"/>
<circle cx="44" cy="46" r="13" fill="none"  stroke-width="1.5" opacity=".3" style="stroke:var(--ds-blue)"/>
<circle cx="44" cy="46" r="6"  opacity=".7" style="fill:var(--ds-blue)"/>
<rect x="72" y="26" width="42" height="8" rx="4"  opacity=".15" style="fill:var(--ds-blue)"/>
<rect x="72" y="40" width="36" height="8" rx="4"  opacity=".2" style="fill:var(--ds-violet)"/>
<rect x="72" y="54" width="42" height="8" rx="4"  opacity=".12" style="fill:var(--ds-blue)"/>
<rect x="72" y="68" width="28" height="8" rx="4"  opacity=".2" style="fill:var(--ds-success)"/>
</svg>`,

  emailtpl: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12"   stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="22" y="16" width="86" height="58" rx="8"   stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<rect x="22" y="16" width="86" height="12" rx="8"  opacity=".12" style="fill:var(--ds-blue)"/>
<rect x="22" y="22" width="86" height="6"  opacity=".08" style="fill:var(--ds-blue)"/>
<rect x="30" y="34" width="36" height="12" rx="4" style="fill:var(--ds-surface-tint)"/>
<rect x="72" y="34" width="28" height="5" rx="2.5" style="fill:color-mix(in srgb, var(--ds-cat-slate) 55%, white)"/>
<rect x="72" y="44" width="22" height="5" rx="2.5" style="fill:color-mix(in srgb, var(--ds-cat-slate) 28%, white)"/>
<rect x="30" y="52" width="70" height="5" rx="2.5" style="fill:color-mix(in srgb, var(--ds-cat-slate) 55%, white)"/>
<rect x="30" y="62" width="50" height="7" rx="3.5"  opacity=".25" style="fill:var(--ds-blue)"/>
</svg>`,

  unsub: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12"   stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="20" y="20" width="90" height="28" rx="8"   stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<rect x="28" y="28" width="50" height="5" rx="2.5"  opacity=".4" style="fill:var(--ds-blue)"/>
<rect x="28" y="37" width="36" height="4" rx="2" style="fill:color-mix(in srgb, var(--ds-cat-slate) 55%, white)"/>
<rect x="20" y="56" width="42" height="18" rx="8"  opacity=".08"  stroke-width="1" style="fill:var(--ds-danger);stroke:var(--ds-danger)"/>
<text x="27" y="69" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-danger)">Bounced</text>
<rect x="68" y="56" width="42" height="18" rx="8"  opacity=".08"  stroke-width="1" style="fill:var(--ds-warning);stroke:var(--ds-warning)"/>
<text x="72" y="69" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-warning)">Unsub'd</text>
</svg>`,

  /* ── Tab 2: WhatsApp & Push ───────────────────────────────── */
  whatsapp: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14"   stroke-width="1.5" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="26" y="20" width="100" height="110" rx="12" style="fill:color-mix(in srgb, var(--ds-cat-green) 60%, black)"/>
<rect x="26" y="20" width="100" height="28" rx="12" style="fill:color-mix(in srgb, var(--ds-cat-teal) 40%, black)"/>
<rect x="26" y="40" width="100" height="8" style="fill:color-mix(in srgb, var(--ds-cat-teal) 40%, black)"/>
<circle cx="46" cy="34" r="8" fill="rgba(255,255,255,0.2)"/>
<rect x="58" y="30" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.4)"/>
<rect x="36" y="58" width="64" height="18" rx="6" style="fill:color-mix(in srgb, var(--ds-whatsapp) 18%, white)"/>
<rect x="42" y="63" width="48" height="4" rx="2" fill="rgba(0,0,0,0.15)"/>
<rect x="42" y="70" width="36" height="4" rx="2" fill="rgba(0,0,0,0.1)"/>
<rect x="54" y="82" width="52" height="14" rx="6" style="fill:var(--ds-white)"/>
<rect x="60" y="87" width="38" height="4" rx="2" fill="rgba(0,0,0,0.1)"/>
<rect x="36" y="102" width="72" height="12" rx="6" style="fill:color-mix(in srgb, var(--ds-whatsapp) 18%, white)"/>
<rect x="42" y="106" width="20" height="4" rx="2" fill="rgba(0,0,0,0.15)"/>
<circle cx="62" cy="108" r="3" style="fill:var(--ds-whatsapp)"/>
<circle cx="70" cy="108" r="3" style="fill:var(--ds-whatsapp)"/>
<rect x="144" y="24" width="56" height="34" rx="8"   stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<text x="152" y="40" font-size="14" font-family="system-ui" font-weight="800" style="fill:var(--ds-whatsapp)">98%</text>
<text x="152" y="52" font-size="7" font-family="system-ui"  font-weight="600" style="fill:color-mix(in srgb, var(--ds-night-card) 55%, white)">open rate</text>
<rect x="144" y="66" width="56" height="18" rx="8"  opacity=".1" style="fill:var(--ds-whatsapp)"/>
<path d="M152 75 l4 4 8-8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--ds-whatsapp)"/>
<text x="164" y="78" font-size="7" font-family="system-ui"  font-weight="700" style="fill:var(--ds-whatsapp)">Delivered</text>
</svg>`,

  wabroadcast: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12"   stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<circle cx="30" cy="30" r="10"  opacity=".15" style="fill:var(--ds-whatsapp)"/>
<path d="M26 30 a4 4 0 0 1 8 0 a4 4 0 0 1 -4 4 v3"  stroke-width="1.5" stroke-linecap="round" fill="none" style="stroke:var(--ds-whatsapp)"/>
<circle cx="30" cy="40" r="1.5" style="fill:var(--ds-whatsapp)"/>
<rect x="46" y="22" width="68" height="7" rx="3.5"  opacity=".3" style="fill:var(--ds-ink)"/>
<rect x="46" y="35" width="50" height="5" rx="2.5" style="fill:color-mix(in srgb, var(--ds-cat-slate) 55%, white)"/>
<rect x="16" y="52" width="98" height="10" rx="5"  opacity=".12" style="fill:var(--ds-whatsapp)"/>
<rect x="16" y="52" width="68" height="10" rx="5"  opacity=".25" style="fill:var(--ds-whatsapp)"/>
<text x="112" y="60" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-whatsapp)">1.2k</text>
<rect x="16" y="68" width="98" height="10" rx="5"  opacity=".08" style="fill:var(--ds-blue)"/>
<rect x="16" y="68" width="44" height="10" rx="5"  opacity=".3" style="fill:var(--ds-blue)"/>
<text x="112" y="76" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">840</text>
</svg>`,

  push: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12"   stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="36" y="10" width="58" height="76" rx="10"   stroke-width="1.5" opacity=".8" style="fill:color-mix(in srgb, var(--ds-night-card) 40%, black);stroke:var(--ds-blue)"/>
<rect x="50" y="14" width="30" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
<rect x="42" y="24" width="46" height="30" rx="7" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
<rect x="46" y="28" width="14" height="14" rx="4"  opacity=".7" style="fill:var(--ds-blue)"/>
<rect x="64" y="29" width="18" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
<rect x="64" y="36" width="22" height="3" rx="1.5" fill="rgba(255,255,255,0.12)"/>
<rect x="42" y="60" width="46" height="20" rx="6" fill="rgba(55,93,251,0.12)"/>
<rect x="48" y="65" width="30" height="4" rx="2" fill="rgba(55,93,251,0.4)"/>
<rect x="48" y="72" width="20" height="3" rx="1.5" fill="rgba(55,93,251,0.2)"/>
</svg>`,

  inapp: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12"   stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<path d="M65 14 c-12 0-20 9-20 20 v14 l-6 6 v3 h52 v-3 l-6-6 v-14 c0-11-8-20-20-20 z"  opacity=".1"  stroke-width="1.5" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<path d="M58 57 a7 7 0 0 0 14 0"  stroke-width="1.5" fill="none" stroke-linecap="round" style="stroke:var(--ds-blue)"/>
<circle cx="78" cy="18" r="6"  opacity=".85" style="fill:var(--ds-danger)"/>
<text x="75" y="21.5" font-size="7.5" font-family="system-ui" font-weight="800" style="fill:var(--ds-white)">2</text>
<rect x="16" y="72" width="38" height="8" rx="4"  opacity=".12" style="fill:var(--ds-blue)"/>
<rect x="60" y="72" width="54" height="8" rx="4" style="fill:var(--ds-surface-tint)"/>
</svg>`,

  wabot: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12"   stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<circle cx="30" cy="30" r="12"  opacity=".12" style="fill:var(--ds-whatsapp)"/>
<circle cx="30" cy="26" r="5"  opacity=".5" style="fill:var(--ds-whatsapp)"/>
<path d="M20 38 c0-8 4-12 10-12 s10 4 10 12"  opacity=".3" style="fill:var(--ds-whatsapp)"/>
<rect x="48" y="20" width="62" height="14" rx="7" style="fill:color-mix(in srgb, var(--ds-whatsapp) 18%, white)"/>
<rect x="54" y="25" width="42" height="4" rx="2" fill="rgba(0,0,0,0.15)"/>
<rect x="48" y="40" width="50" height="14" rx="7"  border="1"  stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<rect x="54" y="45" width="34" height="4" rx="2" fill="rgba(0,0,0,0.1)"/>
<rect x="16" y="62" width="62" height="14" rx="7" style="fill:color-mix(in srgb, var(--ds-whatsapp) 18%, white)"/>
<rect x="22" y="67" width="42" height="4" rx="2" fill="rgba(0,0,0,0.15)"/>
<path d="M86 67 l4 4 8-8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--ds-whatsapp)"/>
<circle cx="96" cy="71" r="0" fill="none"/>
</svg>`,

  /* ── Tab 3: SMS & Delivery ───────────────────────────────── */
  sms: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14"   stroke-width="1.5" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="22" y="24" width="110" height="24" rx="10"  opacity=".9" style="fill:var(--ds-blue)"/>
<rect x="30" y="30" width="72" height="5" rx="2.5" fill="rgba(255,255,255,0.55)"/>
<rect x="30" y="38" width="50" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
<rect x="22" y="56" width="90" height="22" rx="10"   stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<rect x="30" y="63" width="60" height="5" rx="2.5" style="fill:color-mix(in srgb, var(--ds-cat-slate) 55%, white)"/>
<rect x="30" y="71" width="40" height="4" rx="2" style="fill:color-mix(in srgb, var(--ds-cat-slate) 28%, white)"/>
<rect x="36" y="86" width="110" height="22" rx="10"  opacity=".85" style="fill:var(--ds-blue)"/>
<rect x="44" y="93" width="76" height="5" rx="2.5" fill="rgba(255,255,255,0.5)"/>
<rect x="44" y="101" width="52" height="4" rx="2" fill="rgba(255,255,255,0.25)"/>
<rect x="144" y="24" width="58" height="26" rx="8"   stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<text x="152" y="36" font-size="7" font-family="system-ui" font-weight="700" style="fill:color-mix(in srgb, var(--ds-night-card) 55%, white)">via Twilio</text>
<rect x="152" y="40" width="32" height="5" rx="2.5"  opacity=".5" style="fill:var(--ds-danger)"/>
<rect x="144" y="58" width="58" height="22" rx="8"  opacity=".08" style="fill:var(--ds-success)"/>
<path d="M152 69 l4 4 8-8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--ds-success)"/>
<text x="164" y="72" font-size="7.5" font-family="system-ui"  font-weight="700" style="fill:var(--ds-success)">99.4%</text>
<text x="164" y="79" font-size="6.5" font-family="system-ui" style="fill:color-mix(in srgb, var(--ds-night-card) 55%, white)">delivery</text>
</svg>`,

  queue: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12"   stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="14" y="36" width="20" height="20" rx="5"  opacity=".2"  stroke-width="1" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<rect x="38" y="36" width="20" height="20" rx="5"  opacity=".35"  stroke-width="1" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<rect x="62" y="36" width="20" height="20" rx="5"  opacity=".55"  stroke-width="1" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<text x="85" y="50" font-size="14" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">→</text>
<rect x="98" y="36" width="20" height="20" rx="5"  opacity=".15"  stroke-width="1" style="fill:var(--ds-success);stroke:var(--ds-success)"/>
<path d="M102 46 l4 4 8-8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--ds-success)"/>
<rect x="14" y="20" width="50" height="5" rx="2.5"  opacity=".15" style="fill:var(--ds-blue)"/>
<text x="14" y="79" font-size="8" font-family="system-ui" style="fill:color-mix(in srgb, var(--ds-night-card) 55%, white)">Queue · Deliver · Confirm</text>
</svg>`,

  tracking: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12"   stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<circle cx="28" cy="46" r="8"  opacity=".15"  stroke-width="1.5" style="fill:var(--ds-success);stroke:var(--ds-success)"/>
<path d="M24 46 l3 3 6-6"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--ds-success)"/>
<rect x="38" y="43" width="22" height="2" rx="1"  opacity=".5" style="fill:var(--ds-success)"/>
<circle cx="68" cy="46" r="8"  opacity=".15"  stroke-width="1.5" style="fill:var(--ds-success);stroke:var(--ds-success)"/>
<path d="M64 46 l3 3 6-6"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--ds-success)"/>
<rect x="78" y="43" width="22" height="2" rx="1" style="fill:var(--ds-surface-tint)"/>
<circle cx="108" cy="46" r="8"   stroke-width="1.5" style="fill:var(--ds-surface-tint);stroke:color-mix(in srgb, var(--ds-cat-slate) 28%, white)"/>
<text x="17" y="30" font-size="7" font-family="system-ui"  font-weight="600" style="fill:color-mix(in srgb, var(--ds-night-card) 55%, white)">Sent</text>
<text x="56" y="30" font-size="7" font-family="system-ui"  font-weight="600" style="fill:color-mix(in srgb, var(--ds-night-card) 55%, white)">Delivered</text>
<text x="96" y="30" font-size="7" font-family="system-ui"  font-weight="600" style="fill:color-mix(in srgb, var(--ds-cat-slate) 55%, white)">Opened</text>
</svg>`,

  abtest: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12"   stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="16" y="20" width="16" height="16" rx="4"  opacity=".8" style="fill:var(--ds-blue)"/>
<text x="20" y="31" font-size="9" font-family="system-ui" font-weight="800" style="fill:var(--ds-white)">A</text>
<rect x="36" y="24" width="62" height="8" rx="4" style="fill:var(--ds-surface-tint)"/>
<rect x="36" y="24" width="42" height="8" rx="4"  opacity=".55" style="fill:var(--ds-blue)"/>
<text x="102" y="31" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">65%</text>
<rect x="16" y="46" width="16" height="16" rx="4"  opacity=".8" style="fill:var(--ds-violet)"/>
<text x="19.5" y="57" font-size="9" font-family="system-ui" font-weight="800" style="fill:var(--ds-white)">B</text>
<rect x="36" y="50" width="62" height="8" rx="4" style="fill:var(--ds-surface-tint)"/>
<rect x="36" y="50" width="28" height="8" rx="4"  opacity=".5" style="fill:var(--ds-violet)"/>
<text x="102" y="57" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-violet)">42%</text>
<rect x="16" y="70" width="96" height="6" rx="3"  opacity=".08" style="fill:var(--ds-blue)"/>
<rect x="16" y="70" width="62" height="6" rx="3"  opacity=".15" style="fill:var(--ds-blue)"/>
</svg>`,

  suppress: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12"   stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<circle cx="50" cy="38" r="16"  opacity=".07"  stroke-width="1.5" style="fill:var(--ds-danger);stroke:var(--ds-danger)"/>
<path d="M41 29 l18 18 M59 29 l-18 18"  stroke-width="2" stroke-linecap="round" style="stroke:var(--ds-danger)"/>
<rect x="20" y="62" width="38" height="14" rx="6"  opacity=".08"  stroke-width="1" style="fill:var(--ds-danger);stroke:var(--ds-danger)"/>
<text x="24" y="72" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-danger)">Bounced</text>
<rect x="64" y="62" width="42" height="14" rx="6"  opacity=".08"  stroke-width="1" style="fill:var(--ds-warning);stroke:var(--ds-warning)"/>
<text x="68" y="72" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-warning)">Unsubscribed</text>
</svg>`,
};
