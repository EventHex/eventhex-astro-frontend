// Inline SVG illustrations for the Event Website Builder bento grid.
// Static coded mockups (page builder / event sections / SEO theme) — motion comes from the card hover float.
// viewBox ~220x150 for hero (tall) cards, ~130x90 for small cards.

export const ewbbIllustrations: Record<string, string> = {
  /* ── Tab 1: Page Builder ─────────────────────────────── */
  // hero — drag-and-drop canvas with section blocks
  editor: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<!-- toolbar -->
<rect x="20" y="22" width="180" height="14" rx="5" fill="#E5EBFF"/>
<rect x="26" y="26" width="18" height="6" rx="3" fill="#375DFB" opacity=".4"/>
<rect x="50" y="26" width="18" height="6" rx="3" fill="#375DFB" opacity=".25"/>
<rect x="74" y="26" width="18" height="6" rx="3" fill="#375DFB" opacity=".25"/>
<!-- canvas left panel -->
<rect x="20" y="42" width="32" height="90" rx="5" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="25" y="50" width="22" height="8" rx="3" fill="#375DFB" opacity=".15"/>
<rect x="25" y="64" width="22" height="8" rx="3" fill="#9F81FF" opacity=".15"/>
<rect x="25" y="78" width="22" height="8" rx="3" fill="#10B981" opacity=".15"/>
<rect x="25" y="92" width="22" height="8" rx="3" fill="#375DFB" opacity=".1"/>
<!-- canvas main area -->
<rect x="58" y="42" width="142" height="90" rx="5" fill="#FFFFFF" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="4 3"/>
<!-- hero block on canvas -->
<rect x="66" y="50" width="126" height="22" rx="4" fill="#375DFB" opacity=".12"/>
<rect x="74" y="55" width="60" height="6" rx="3" fill="#375DFB" opacity=".5"/>
<rect x="74" y="64" width="40" height="4" rx="2" fill="#9F81FF" opacity=".5"/>
<!-- content block on canvas -->
<rect x="66" y="78" width="58" height="14" rx="4" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="73" y="83" width="40" height="4" rx="2" fill="#22272F" opacity=".3"/>
<rect x="130" y="78" width="58" height="14" rx="4" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="137" y="83" width="40" height="4" rx="2" fill="#22272F" opacity=".3"/>
<!-- drag handle highlight -->
<rect x="66" y="98" width="126" height="28" rx="4" fill="#9F81FF" opacity=".08" stroke="#9F81FF" stroke-width="1" stroke-dasharray="3 2"/>
<circle cx="130" cy="112" r="6" fill="#375DFB" opacity=".2"/>
<text x="127" y="116" font-size="9" font-family="system-ui" font-weight="700" fill="#375DFB">✦</text>
</svg>`,

  // cards
  templates: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- grid of template thumbnails -->
<rect x="16" y="16" width="44" height="28" rx="4" fill="#375DFB" opacity=".15" stroke="#375DFB" stroke-width="1"/>
<rect x="21" y="20" width="28" height="5" rx="2" fill="#375DFB" opacity=".5"/>
<rect x="21" y="28" width="20" height="3" rx="1.5" fill="#375DFB" opacity=".3"/>
<rect x="21" y="34" width="24" height="3" rx="1.5" fill="#375DFB" opacity=".2"/>
<rect x="70" y="16" width="44" height="28" rx="4" fill="#9F81FF" opacity=".12" stroke="#9F81FF" stroke-width="1"/>
<rect x="75" y="20" width="28" height="5" rx="2" fill="#9F81FF" opacity=".5"/>
<rect x="75" y="28" width="20" height="3" rx="1.5" fill="#9F81FF" opacity=".3"/>
<rect x="75" y="34" width="24" height="3" rx="1.5" fill="#9F81FF" opacity=".2"/>
<rect x="16" y="52" width="44" height="28" rx="4" fill="#10B981" opacity=".1" stroke="#10B981" stroke-width="1"/>
<rect x="21" y="56" width="28" height="5" rx="2" fill="#10B981" opacity=".5"/>
<rect x="21" y="64" width="20" height="3" rx="1.5" fill="#10B981" opacity=".3"/>
<rect x="70" y="52" width="44" height="28" rx="4" fill="#F59E0B" opacity=".1" stroke="#F59E0B" stroke-width="1"/>
<rect x="75" y="56" width="28" height="5" rx="2" fill="#F59E0B" opacity=".5"/>
<rect x="75" y="64" width="20" height="3" rx="1.5" fill="#F59E0B" opacity=".3"/>
</svg>`,

  domains: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- browser bar -->
<rect x="16" y="20" width="98" height="18" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="26" cy="29" r="4" fill="#10B981" opacity=".6"/>
<rect x="35" y="26" width="68" height="6" rx="3" fill="#375DFB" opacity=".25"/>
<text x="36" y="31" font-size="7" font-family="ui-monospace,monospace" fill="#375DFB">yourevent.com</text>
<!-- SSL badge -->
<rect x="16" y="46" width="46" height="16" rx="5" fill="#10B981" opacity=".12"/>
<text x="22" y="57" font-size="8" font-family="system-ui" font-weight="700" fill="#10B981">🔒 SSL</text>
<!-- subdomain chip -->
<rect x="70" y="46" width="44" height="16" rx="5" fill="#375DFB" opacity=".1"/>
<text x="74" y="57" font-size="7" font-family="system-ui" fill="#375DFB">sub.hex.ai</text>
<!-- globe icon suggestion -->
<circle cx="65" cy="68" r="10" fill="none" stroke="#E5EBFF" stroke-width="1.5"/>
<ellipse cx="65" cy="68" rx="4" ry="10" fill="none" stroke="#375DFB" stroke-width="1" opacity=".4"/>
<line x1="55" y1="68" x2="75" y2="68" stroke="#375DFB" stroke-width="1" opacity=".4"/>
</svg>`,

  responsive: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- desktop outline -->
<rect x="14" y="18" width="56" height="38" rx="4" fill="#FFFFFF" stroke="#375DFB" stroke-width="1.5"/>
<rect x="14" y="20" width="56" height="8" rx="2" fill="#375DFB" opacity=".1"/>
<rect x="19" y="33" width="40" height="4" rx="2" fill="#375DFB" opacity=".3"/>
<rect x="19" y="41" width="28" height="4" rx="2" fill="#E5EBFF"/>
<!-- stand -->
<rect x="36" y="56" width="12" height="4" rx="2" fill="#E5EBFF"/>
<!-- tablet outline -->
<rect x="78" y="22" width="24" height="32" rx="4" fill="#FFFFFF" stroke="#9F81FF" stroke-width="1.5"/>
<rect x="80" y="26" width="20" height="14" rx="2" fill="#9F81FF" opacity=".12"/>
<rect x="82" y="45" width="16" height="3" rx="1.5" fill="#9F81FF" opacity=".3"/>
<!-- phone outline -->
<rect x="108" y="28" width="14" height="24" rx="4" fill="#FFFFFF" stroke="#10B981" stroke-width="1.5"/>
<rect x="110" y="32" width="10" height="12" rx="2" fill="#10B981" opacity=".12"/>
<circle cx="115" cy="49" r="2" fill="#10B981" opacity=".3"/>
</svg>`,

  preview: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- split screen: edit left / preview right -->
<line x1="65" y1="16" x2="65" y2="80" stroke="#E5EBFF" stroke-width="1.5"/>
<!-- edit side -->
<rect x="14" y="22" width="44" height="5" rx="2" fill="#375DFB" opacity=".35"/>
<rect x="14" y="32" width="36" height="4" rx="2" fill="#22272F" opacity=".2"/>
<rect x="14" y="40" width="40" height="4" rx="2" fill="#22272F" opacity=".15"/>
<rect x="14" y="52" width="44" height="14" rx="3" fill="#375DFB" opacity=".08" stroke="#375DFB" stroke-width="1" stroke-dasharray="3 2"/>
<!-- preview side — live badge -->
<rect x="72" y="22" width="44" height="30" rx="4" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="76" y="26" width="30" height="4" rx="2" fill="#375DFB" opacity=".4"/>
<rect x="76" y="34" width="22" height="3" rx="1.5" fill="#22272F" opacity=".2"/>
<rect x="76" y="41" width="26" height="3" rx="1.5" fill="#22272F" opacity=".15"/>
<!-- live pill -->
<rect x="72" y="60" width="30" height="10" rx="5" fill="#10B981" opacity=".15"/>
<text x="77" y="68" font-size="7" font-family="system-ui" font-weight="700" fill="#10B981">● LIVE</text>
</svg>`,

  /* ── Tab 2: Event Sections ────────────────────────────── */
  // hero — page with multiple stacked section blocks
  sections: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<!-- page mockup -->
<rect x="30" y="18" width="160" height="116" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<!-- hero section block -->
<rect x="30" y="18" width="160" height="28" rx="8" fill="#375DFB" opacity=".1"/>
<rect x="42" y="24" width="70" height="7" rx="3" fill="#375DFB" opacity=".55"/>
<rect x="42" y="35" width="46" height="5" rx="2.5" fill="#375DFB" opacity=".3"/>
<!-- agenda section block -->
<rect x="38" y="52" width="144" height="20" rx="4" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="46" y="57" width="50" height="4" rx="2" fill="#22272F" opacity=".4"/>
<rect x="46" y="64" width="36" height="3" rx="1.5" fill="#22272F" opacity=".2"/>
<text x="164" y="66" font-size="7" font-family="system-ui" fill="#375DFB">→</text>
<!-- speakers section block -->
<rect x="38" y="78" width="44" height="34" rx="4" fill="#9F81FF" opacity=".12" stroke="#9F81FF" stroke-width="1"/>
<circle cx="60" cy="91" r="8" fill="#9F81FF" opacity=".3"/>
<rect x="44" y="103" width="32" height="4" rx="2" fill="#9F81FF" opacity=".4"/>
<!-- sponsors section block -->
<rect x="90" y="78" width="90" height="16" rx="4" fill="#F59E0B" opacity=".1" stroke="#F59E0B" stroke-width="1"/>
<rect x="98" y="83" width="16" height="6" rx="2" fill="#F59E0B" opacity=".4"/>
<rect x="120" y="83" width="16" height="6" rx="2" fill="#F59E0B" opacity=".3"/>
<rect x="142" y="83" width="16" height="6" rx="2" fill="#F59E0B" opacity=".3"/>
<!-- registration CTA block -->
<rect x="90" y="100" width="90" height="28" rx="4" fill="#375DFB" opacity=".08"/>
<rect x="104" y="108" width="60" height="8" rx="4" fill="#375DFB" opacity=".4"/>
<rect x="112" y="120" width="44" height="5" rx="2.5" fill="#375DFB" opacity=".2"/>
</svg>`,

  agenda: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- track tabs -->
<rect x="14" y="16" width="24" height="8" rx="4" fill="#375DFB" opacity=".6"/>
<rect x="42" y="16" width="24" height="8" rx="4" fill="#E5EBFF"/>
<rect x="70" y="16" width="24" height="8" rx="4" fill="#E5EBFF"/>
<!-- timeline line -->
<line x1="20" y1="30" x2="20" y2="78" stroke="#E5EBFF" stroke-width="2"/>
<!-- session rows -->
<circle cx="20" cy="36" r="3" fill="#375DFB"/>
<rect x="28" y="32" width="86" height="8" rx="3" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="32" y="35" width="48" height="3" rx="1.5" fill="#375DFB" opacity=".4"/>
<circle cx="20" cy="52" r="3" fill="#9F81FF"/>
<rect x="28" y="48" width="86" height="8" rx="3" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="32" y="51" width="56" height="3" rx="1.5" fill="#9F81FF" opacity=".4"/>
<circle cx="20" cy="68" r="3" fill="#10B981"/>
<rect x="28" y="64" width="86" height="8" rx="3" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="32" y="67" width="40" height="3" rx="1.5" fill="#10B981" opacity=".4"/>
</svg>`,

  speakers: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- speaker cards -->
<rect x="14" y="18" width="44" height="58" rx="7" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="36" cy="36" r="12" fill="#375DFB" opacity=".2"/>
<rect x="20" y="52" width="32" height="5" rx="2.5" fill="#22272F" opacity=".5"/>
<rect x="22" y="61" width="28" height="3.5" rx="1.75" fill="#375DFB" opacity=".35"/>
<rect x="22" y="68" width="20" height="3" rx="1.5" fill="#22272F" opacity=".2"/>
<rect x="64" y="18" width="44" height="58" rx="7" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="86" cy="36" r="12" fill="#9F81FF" opacity=".2"/>
<rect x="70" y="52" width="32" height="5" rx="2.5" fill="#22272F" opacity=".5"/>
<rect x="72" y="61" width="28" height="3.5" rx="1.75" fill="#9F81FF" opacity=".35"/>
<rect x="72" y="68" width="20" height="3" rx="1.5" fill="#22272F" opacity=".2"/>
</svg>`,

  sponsors: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- gold tier -->
<rect x="14" y="18" width="102" height="18" rx="5" fill="#F59E0B" opacity=".1" stroke="#F59E0B" stroke-width="1"/>
<text x="18" y="30" font-size="7" font-family="system-ui" font-weight="700" fill="#F59E0B">GOLD</text>
<rect x="50" y="22" width="28" height="10" rx="3" fill="#F59E0B" opacity=".25"/>
<!-- silver tier -->
<rect x="14" y="42" width="102" height="16" rx="5" fill="#9F81FF" opacity=".08" stroke="#9F81FF" stroke-width="1"/>
<text x="18" y="53" font-size="7" font-family="system-ui" font-weight="600" fill="#9F81FF">SILVER</text>
<rect x="50" y="45" width="20" height="8" rx="3" fill="#9F81FF" opacity=".2"/>
<rect x="76" y="45" width="20" height="8" rx="3" fill="#9F81FF" opacity=".2"/>
<!-- bronze tier -->
<rect x="14" y="64" width="102" height="14" rx="5" fill="#E5EBFF"/>
<text x="18" y="74" font-size="7" font-family="system-ui" fill="#8A94A6">BRONZE</text>
<rect x="52" y="67" width="14" height="6" rx="2" fill="#B4BAC6" opacity=".4"/>
<rect x="72" y="67" width="14" height="6" rx="2" fill="#B4BAC6" opacity=".4"/>
<rect x="92" y="67" width="14" height="6" rx="2" fill="#B4BAC6" opacity=".4"/>
</svg>`,

  venue: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- map tile -->
<rect x="14" y="14" width="102" height="48" rx="6" fill="#E5EBFF"/>
<!-- map road lines -->
<line x1="14" y1="38" x2="116" y2="38" stroke="#FFFFFF" stroke-width="3"/>
<line x1="65" y1="14" x2="65" y2="62" stroke="#FFFFFF" stroke-width="3"/>
<rect x="42" y="22" width="20" height="12" rx="2" fill="#FFFFFF" opacity=".6"/>
<rect x="76" y="28" width="18" height="10" rx="2" fill="#FFFFFF" opacity=".6"/>
<!-- pin -->
<circle cx="65" cy="38" r="7" fill="#375DFB" opacity=".9"/>
<circle cx="65" cy="38" r="3.5" fill="#FFFFFF"/>
<!-- address bar -->
<rect x="14" y="68" width="102" height="12" rx="4" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="20" y="72" width="64" height="4" rx="2" fill="#375DFB" opacity=".3"/>
</svg>`,

  /* ── Tab 3: SEO & Analytics ──────────────────────────── */
  // hero — search result + structured data panel
  seo: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<!-- SERP result card -->
<rect x="20" y="22" width="140" height="52" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<text x="30" y="36" font-size="7" font-family="ui-monospace,monospace" fill="#10B981">https://yourevent.com</text>
<rect x="30" y="42" width="100" height="7" rx="3" fill="#375DFB" opacity=".5"/>
<rect x="30" y="54" width="120" height="4" rx="2" fill="#22272F" opacity=".2"/>
<rect x="30" y="62" width="90" height="4" rx="2" fill="#22272F" opacity=".15"/>
<!-- schema badge -->
<rect x="168" y="22" width="34" height="16" rx="5" fill="#375DFB" opacity=".12"/>
<text x="171" y="33" font-size="6.5" font-family="system-ui" font-weight="700" fill="#375DFB">JSON-LD</text>
<!-- OG image block -->
<rect x="20" y="82" width="72" height="48" rx="6" fill="#9F81FF" opacity=".12" stroke="#9F81FF" stroke-width="1"/>
<rect x="30" y="94" width="48" height="6" rx="3" fill="#9F81FF" opacity=".4"/>
<rect x="30" y="104" width="34" height="4" rx="2" fill="#9F81FF" opacity=".3"/>
<text x="22" y="124" font-size="7" font-family="system-ui" fill="#9F81FF">OG Image</text>
<!-- meta panel -->
<rect x="100" y="82" width="110" height="48" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="108" y="90" width="60" height="4" rx="2" fill="#22272F" opacity=".4"/>
<rect x="108" y="100" width="80" height="4" rx="2" fill="#22272F" opacity=".2"/>
<rect x="108" y="110" width="70" height="4" rx="2" fill="#22272F" opacity=".15"/>
<rect x="108" y="120" width="50" height="5" rx="2.5" fill="#375DFB" opacity=".25"/>
</svg>`,

  analytics: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- GA4 style funnel bars -->
<rect x="20" y="20" width="88" height="10" rx="3" fill="#375DFB" opacity=".55"/>
<rect x="20" y="36" width="66" height="10" rx="3" fill="#375DFB" opacity=".4"/>
<rect x="20" y="52" width="48" height="10" rx="3" fill="#375DFB" opacity=".3"/>
<rect x="20" y="68" width="28" height="10" rx="3" fill="#375DFB" opacity=".2"/>
<!-- labels -->
<text x="112" y="28" font-size="7" font-family="system-ui" fill="#375DFB">100%</text>
<text x="112" y="44" font-size="7" font-family="system-ui" fill="#375DFB">75%</text>
<text x="112" y="60" font-size="7" font-family="system-ui" fill="#375DFB">54%</text>
<text x="112" y="76" font-size="7" font-family="system-ui" fill="#375DFB">31%</text>
</svg>`,

  utm: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- UTM parameter mockup -->
<rect x="14" y="18" width="102" height="14" rx="5" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<text x="18" y="28" font-size="6" font-family="ui-monospace,monospace" fill="#375DFB">?utm_source=email</text>
<!-- donut pie channels -->
<circle cx="40" cy="60" r="18" fill="none" stroke="#E5EBFF" stroke-width="8"/>
<path d="M40 42 a18 18 0 0 1 16 28" fill="none" stroke="#375DFB" stroke-width="8"/>
<path d="M40 42 a18 18 0 0 0 -14 26" fill="none" stroke="#9F81FF" stroke-width="8"/>
<!-- legend -->
<rect x="70" y="46" width="8" height="5" rx="1.5" fill="#375DFB"/>
<rect x="70" y="56" width="8" height="5" rx="1.5" fill="#9F81FF"/>
<rect x="70" y="66" width="8" height="5" rx="1.5" fill="#10B981"/>
<rect x="82" y="46" width="28" height="4" rx="2" fill="#22272F" opacity=".3"/>
<rect x="82" y="56" width="22" height="4" rx="2" fill="#22272F" opacity=".3"/>
<rect x="82" y="66" width="18" height="4" rx="2" fill="#22272F" opacity=".3"/>
</svg>`,

  perf: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- speedometer arc -->
<circle cx="65" cy="56" r="28" fill="none" stroke="#E5EBFF" stroke-width="7"/>
<path d="M37 56 a28 28 0 0 1 51 -14" fill="none" stroke="#10B981" stroke-width="7" stroke-linecap="round"/>
<!-- score -->
<text x="52" y="60" font-size="16" font-family="system-ui" font-weight="700" fill="#10B981">98</text>
<!-- CWV chips -->
<rect x="14" y="14" width="26" height="10" rx="3" fill="#10B981" opacity=".15"/>
<text x="17" y="22" font-size="7" font-family="system-ui" font-weight="700" fill="#10B981">LCP</text>
<rect x="46" y="14" width="26" height="10" rx="3" fill="#10B981" opacity=".12"/>
<text x="49" y="22" font-size="7" font-family="system-ui" font-weight="700" fill="#10B981">CLS</text>
<rect x="78" y="14" width="26" height="10" rx="3" fill="#10B981" opacity=".12"/>
<text x="81" y="22" font-size="7" font-family="system-ui" font-weight="700" fill="#10B981">FID</text>
</svg>`,

  social: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- OG card preview -->
<rect x="14" y="16" width="102" height="58" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<!-- image area -->
<rect x="14" y="16" width="102" height="32" rx="6" fill="#9F81FF" opacity=".15"/>
<rect x="40" y="22" width="50" height="5" rx="2.5" fill="#9F81FF" opacity=".4"/>
<rect x="46" y="30" width="38" height="4" rx="2" fill="#9F81FF" opacity=".25"/>
<!-- card text area -->
<rect x="20" y="52" width="70" height="5" rx="2.5" fill="#22272F" opacity=".45"/>
<rect x="20" y="62" width="88" height="4" rx="2" fill="#22272F" opacity=".2"/>
<!-- social share icon row -->
<circle cx="100" cy="26" r="7" fill="#375DFB" opacity=".15"/>
<text x="96" y="30" font-size="9" font-family="system-ui" fill="#375DFB">✦</text>
<!-- share label -->
<rect x="38" y="76" width="54" height="8" rx="4" fill="#375DFB" opacity=".1"/>
<text x="50" y="82" font-size="7" font-family="system-ui" fill="#375DFB">Share Preview</text>
</svg>`,
};
