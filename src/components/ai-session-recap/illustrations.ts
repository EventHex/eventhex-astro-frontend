// Inline SVG illustrations for the AI Session Recap bento grid.
// Static coded mockups (AI summaries / transcription / distribution theme).
// viewBox ~220x150 for hero (tall) cards, ~130x90 for small cards.

export const asrbIllustrations: Record<string, string> = {
  /* ── Tab 1: AI Summaries ───────────────────────────────── */
  // hero
  summary: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="20" y="22" width="110" height="8" rx="4" fill="#22272F" opacity=".45"/>
<rect x="20" y="36" width="92" height="5" rx="2.5" fill="#B4BAC6"/>
<rect x="20" y="46" width="80" height="5" rx="2.5" fill="#D0D5DD"/>
<rect x="20" y="64" width="5" height="5" rx="1.5" fill="#375DFB"/><rect x="30" y="64" width="70" height="5" rx="2.5" fill="#375DFB" opacity=".4"/>
<rect x="20" y="76" width="5" height="5" rx="1.5" fill="#375DFB"/><rect x="30" y="76" width="58" height="5" rx="2.5" fill="#375DFB" opacity=".4"/>
<rect x="20" y="88" width="5" height="5" rx="1.5" fill="#375DFB"/><rect x="30" y="88" width="64" height="5" rx="2.5" fill="#375DFB" opacity=".4"/>
<rect x="148" y="22" width="52" height="110" rx="10" fill="#375DFB" opacity=".07" stroke="#E5EBFF" stroke-width="1"/>
<rect x="156" y="32" width="36" height="6" rx="3" fill="#375DFB" opacity=".3"/>
<rect x="156" y="44" width="28" height="5" rx="2.5" fill="#9F81FF" opacity=".35"/>
<rect x="156" y="56" width="32" height="5" rx="2.5" fill="#9F81FF" opacity=".25"/>
<circle cx="196" cy="108" r="8" fill="#375DFB" opacity=".2"/>
<path d="M192 108 l3 3 6-6" stroke="#375DFB" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  // small cards
  doc: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="28" y="14" width="74" height="62" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="36" y="24" width="50" height="5" rx="2.5" fill="#22272F" opacity=".4"/>
<rect x="36" y="34" width="42" height="4" rx="2" fill="#B4BAC6"/>
<rect x="36" y="42" width="46" height="4" rx="2" fill="#D0D5DD"/>
<rect x="36" y="52" width="38" height="4" rx="2" fill="#D0D5DD"/>
<rect x="36" y="62" width="30" height="4" rx="2" fill="#375DFB" opacity=".35"/>
</svg>`,
  takeaway: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="22" cy="28" r="5" fill="#375DFB" opacity=".2"/><text x="18.5" y="31.5" font-size="7" font-family="system-ui" font-weight="700" fill="#375DFB">1</text>
<rect x="32" y="25" width="68" height="5" rx="2.5" fill="#375DFB" opacity=".4"/>
<circle cx="22" cy="46" r="5" fill="#9F81FF" opacity=".2"/><text x="18.5" y="49.5" font-size="7" font-family="system-ui" font-weight="700" fill="#9F81FF">2</text>
<rect x="32" y="43" width="56" height="5" rx="2.5" fill="#9F81FF" opacity=".4"/>
<circle cx="22" cy="64" r="5" fill="#10B981" opacity=".2"/><text x="18.5" y="67.5" font-size="7" font-family="system-ui" font-weight="700" fill="#10B981">3</text>
<rect x="32" y="61" width="62" height="5" rx="2.5" fill="#10B981" opacity=".4"/>
</svg>`,
  quote: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<text x="16" y="34" font-size="28" font-family="Georgia,serif" font-weight="700" fill="#375DFB" opacity=".2">"</text>
<rect x="34" y="22" width="76" height="5" rx="2.5" fill="#22272F" opacity=".35"/>
<rect x="34" y="32" width="60" height="5" rx="2.5" fill="#B4BAC6"/>
<rect x="16" y="52" width="34" height="20" rx="6" fill="#375DFB" opacity=".08"/>
<circle cx="22" cy="58" r="6" fill="#9F81FF" opacity=".25"/>
<rect x="30" y="55" width="16" height="4" rx="2" fill="#375DFB" opacity=".4"/>
<rect x="30" y="63" width="12" height="3" rx="1.5" fill="#B4BAC6"/>
<rect x="58" y="56" width="48" height="4" rx="2" fill="#B4BAC6"/><rect x="58" y="64" width="36" height="3" rx="1.5" fill="#D0D5DD"/>
</svg>`,
  tag: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="14" y="20" width="36" height="14" rx="7" fill="#375DFB" opacity=".15"/><text x="20" y="31" font-size="7.5" font-family="system-ui" font-weight="600" fill="#375DFB">AI / ML</text>
<rect x="56" y="20" width="42" height="14" rx="7" fill="#9F81FF" opacity=".15"/><text x="62" y="31" font-size="7.5" font-family="system-ui" font-weight="600" fill="#7C5CFF">Product</text>
<rect x="14" y="42" width="50" height="14" rx="7" fill="#10B981" opacity=".15"/><text x="20" y="53" font-size="7.5" font-family="system-ui" font-weight="600" fill="#10B981">Leadership</text>
<rect x="70" y="42" width="46" height="14" rx="7" fill="#F59E0B" opacity=".15"/><text x="76" y="53" font-size="7.5" font-family="system-ui" font-weight="600" fill="#D97706">Innovation</text>
<rect x="14" y="62" width="38" height="14" rx="7" fill="#375DFB" opacity=".08"/><text x="20" y="73" font-size="7.5" font-family="system-ui" font-weight="600" fill="#375DFB">Design</text>
</svg>`,

  /* ── Tab 2: Engagement Analytics ──────────────────────── */
  // hero
  analytics: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="20" y="22" width="52" height="30" rx="8" fill="#375DFB" opacity=".10"/><text x="28" y="38" font-size="9" font-family="system-ui" font-weight="700" fill="#375DFB">4.7 ★</text><rect x="28" y="44" width="30" height="4" rx="2" fill="#375DFB" opacity=".3"/>
<rect x="78" y="22" width="52" height="30" rx="8" fill="#9F81FF" opacity=".12"/><text x="86" y="38" font-size="9" font-family="system-ui" font-weight="700" fill="#7C5CFF">312</text><rect x="86" y="44" width="28" height="4" rx="2" fill="#7C5CFF" opacity=".3"/>
<rect x="136" y="22" width="52" height="30" rx="8" fill="#10B981" opacity=".12"/><text x="144" y="38" font-size="9" font-family="system-ui" font-weight="700" fill="#10B981">89%</text><rect x="144" y="44" width="30" height="4" rx="2" fill="#10B981" opacity=".3"/>
<rect x="20" y="64" width="180" height="68" rx="8" fill="#375DFB" opacity=".04"/>
<rect x="28" y="72" width="14" height="48" rx="3" fill="#375DFB" opacity=".18"/>
<rect x="48" y="84" width="14" height="36" rx="3" fill="#375DFB" opacity=".35"/>
<rect x="68" y="76" width="14" height="44" rx="3" fill="#9F81FF" opacity=".35"/>
<rect x="88" y="66" width="14" height="54" rx="3" fill="#375DFB" opacity=".55"/>
<rect x="108" y="80" width="14" height="40" rx="3" fill="#9F81FF" opacity=".3"/>
<rect x="128" y="72" width="14" height="48" rx="3" fill="#375DFB" opacity=".4"/>
<rect x="148" y="86" width="14" height="34" rx="3" fill="#375DFB" opacity=".25"/>
<rect x="168" y="74" width="14" height="46" rx="3" fill="#10B981" opacity=".4"/>
</svg>`,
  rating: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<text x="16" y="32" font-size="18" font-family="system-ui" font-weight="700" fill="#22272F" opacity=".8">4.8</text>
<text x="58" y="32" font-size="14" font-family="system-ui" fill="#F59E0B">★★★★★</text>
<rect x="16" y="42" width="94" height="7" rx="3.5" fill="#E5EBFF"/><rect x="16" y="42" width="84" height="7" rx="3.5" fill="#F59E0B" opacity=".6"/>
<rect x="16" y="54" width="94" height="7" rx="3.5" fill="#E5EBFF"/><rect x="16" y="54" width="60" height="7" rx="3.5" fill="#F59E0B" opacity=".35"/>
<rect x="16" y="66" width="94" height="7" rx="3.5" fill="#E5EBFF"/><rect x="16" y="66" width="20" height="7" rx="3.5" fill="#F59E0B" opacity=".2"/>
</svg>`,
  attend: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="30" cy="36" r="8" fill="#375DFB" opacity=".2"/>
<circle cx="48" cy="36" r="8" fill="#9F81FF" opacity=".2"/>
<circle cx="66" cy="36" r="8" fill="#375DFB" opacity=".2"/>
<circle cx="84" cy="36" r="8" fill="#10B981" opacity=".2"/>
<circle cx="102" cy="36" r="8" fill="#375DFB" opacity=".2"/>
<text x="16" y="62" font-size="9" font-family="system-ui" font-weight="700" fill="#375DFB">312</text>
<rect x="40" y="55" width="68" height="8" rx="4" fill="#375DFB" opacity=".12"/><rect x="40" y="55" width="52" height="8" rx="4" fill="#375DFB" opacity=".4"/>
</svg>`,
  qa: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="14" y="16" width="80" height="20" rx="6" fill="#375DFB" opacity=".1"/>
<rect x="18" y="20" width="60" height="5" rx="2.5" fill="#375DFB" opacity=".4"/>
<rect x="18" y="28" width="44" height="4" rx="2" fill="#375DFB" opacity=".25"/>
<rect x="36" y="44" width="76" height="18" rx="6" fill="#9F81FF" opacity=".1"/>
<rect x="40" y="48" width="56" height="5" rx="2.5" fill="#9F81FF" opacity=".45"/>
<rect x="40" y="56" width="38" height="4" rx="2" fill="#9F81FF" opacity=".25"/>
<circle cx="108" cy="55" r="6" fill="#9F81FF" opacity=".2"/><text x="105" y="58" font-size="7" font-family="system-ui" fill="#7C5CFF">A</text>
</svg>`,
  heatmap: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="14" y="24" width="102" height="46" rx="6" fill="#375DFB" opacity=".04"/>
<rect x="14" y="46" width="10" height="24" rx="2" fill="#375DFB" opacity=".12"/>
<rect x="26" y="40" width="10" height="30" rx="2" fill="#375DFB" opacity=".22"/>
<rect x="38" y="30" width="10" height="40" rx="2" fill="#375DFB" opacity=".45"/>
<rect x="50" y="24" width="10" height="46" rx="2" fill="#375DFB" opacity=".7"/>
<rect x="62" y="28" width="10" height="42" rx="2" fill="#9F81FF" opacity=".6"/>
<rect x="74" y="38" width="10" height="32" rx="2" fill="#375DFB" opacity=".35"/>
<rect x="86" y="44" width="10" height="26" rx="2" fill="#375DFB" opacity=".22"/>
<rect x="98" y="48" width="10" height="22" rx="2" fill="#375DFB" opacity=".14"/>
<line x1="14" y1="72" x2="116" y2="72" stroke="#E5EBFF" stroke-width="1"/>
</svg>`,

  /* ── Tab 3: Distribution ───────────────────────────────── */
  // hero
  distribute: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<circle cx="110" cy="75" r="22" fill="#375DFB" opacity=".12" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="100" y="80" font-size="12" font-family="system-ui" font-weight="700" fill="#375DFB">RECAP</text>
<line x1="90" y1="62" x2="46" y2="38" stroke="#B4BAC6" stroke-width="1.5" stroke-dasharray="3 3"/>
<rect x="22" y="24" width="48" height="24" rx="8" fill="#375DFB" opacity=".1" stroke="#E5EBFF" stroke-width="1"/>
<text x="28" y="40" font-size="8" font-family="system-ui" font-weight="600" fill="#375DFB">✉ Email</text>
<line x1="132" y1="62" x2="166" y2="38" stroke="#B4BAC6" stroke-width="1.5" stroke-dasharray="3 3"/>
<rect x="152" y="24" width="48" height="24" rx="8" fill="#9F81FF" opacity=".12" stroke="#E5EBFF" stroke-width="1"/>
<text x="158" y="40" font-size="8" font-family="system-ui" font-weight="600" fill="#7C5CFF">◆ Web</text>
<line x1="90" y1="88" x2="46" y2="114" stroke="#B4BAC6" stroke-width="1.5" stroke-dasharray="3 3"/>
<rect x="22" y="106" width="48" height="24" rx="8" fill="#10B981" opacity=".1" stroke="#E5EBFF" stroke-width="1"/>
<text x="28" y="122" font-size="8" font-family="system-ui" font-weight="600" fill="#10B981">⬇ PDF</text>
<line x1="132" y1="88" x2="166" y2="114" stroke="#B4BAC6" stroke-width="1.5" stroke-dasharray="3 3"/>
<rect x="152" y="106" width="48" height="24" rx="8" fill="#F59E0B" opacity=".12" stroke="#E5EBFF" stroke-width="1"/>
<text x="158" y="122" font-size="8" font-family="system-ui" font-weight="600" fill="#D97706">{ } API</text>
</svg>`,
  email: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="22" y="22" width="86" height="46" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<path d="M22 30 L65 50 L108 30" stroke="#375DFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<rect x="30" y="54" width="50" height="5" rx="2.5" fill="#375DFB" opacity=".2"/>
<rect x="30" y="62" width="36" height="4" rx="2" fill="#B4BAC6"/>
</svg>`,
  social: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="14" y="14" width="48" height="62" rx="8" fill="#375DFB" opacity=".08" stroke="#E5EBFF" stroke-width="1"/>
<rect x="20" y="22" width="36" height="20" rx="4" fill="#375DFB" opacity=".15"/>
<rect x="20" y="46" width="28" height="4" rx="2" fill="#375DFB" opacity=".4"/>
<rect x="20" y="54" width="22" height="4" rx="2" fill="#B4BAC6"/>
<rect x="68" y="14" width="48" height="28" rx="8" fill="#9F81FF" opacity=".1" stroke="#E5EBFF" stroke-width="1"/>
<rect x="74" y="20" width="36" height="12" rx="3" fill="#9F81FF" opacity=".25"/>
<rect x="74" y="36" width="24" height="4" rx="2" fill="#9F81FF" opacity=".4"/>
<rect x="68" y="50" width="48" height="28" rx="8" fill="#10B981" opacity=".1" stroke="#E5EBFF" stroke-width="1"/>
<rect x="74" y="56" width="36" height="4" rx="2" fill="#10B981" opacity=".4"/>
<rect x="74" y="64" width="28" height="4" rx="2" fill="#B4BAC6"/>
</svg>`,
  pdf: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="30" y="12" width="70" height="66" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="38" y="22" width="40" height="5" rx="2.5" fill="#22272F" opacity=".4"/>
<rect x="38" y="32" width="48" height="4" rx="2" fill="#B4BAC6"/>
<rect x="38" y="40" width="42" height="4" rx="2" fill="#D0D5DD"/>
<rect x="38" y="48" width="44" height="4" rx="2" fill="#D0D5DD"/>
<rect x="38" y="60" width="54" height="10" rx="4" fill="#EF4444" opacity=".12"/>
<text x="50" y="68" font-size="8" font-family="system-ui" font-weight="700" fill="#EF4444">PDF</text>
</svg>`,
  api: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<text x="24" y="52" font-size="26" font-family="ui-monospace,monospace" font-weight="700" fill="#375DFB" opacity=".55">{ }</text>
<rect x="72" y="28" width="38" height="5" rx="2.5" fill="#375DFB" opacity=".3"/>
<rect x="72" y="40" width="30" height="5" rx="2.5" fill="#9F81FF" opacity=".3"/>
<rect x="72" y="52" width="34" height="5" rx="2.5" fill="#375DFB" opacity=".2"/>
</svg>`,
};
