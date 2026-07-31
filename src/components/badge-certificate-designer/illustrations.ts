// Inline SVG illustrations for the Badge & Certificate Designer bento grid.
// Static coded mockups (badge/cert/print theme) — motion comes from the card hover float.
// viewBox ~220x150 for hero (tall) cards, ~130x90 for small cards.

export const bcdbIllustrations: Record<string, string> = {
  /* ── Tab 1: Badge Design ─────────────────────────────── */
  // hero
  badgeedit: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="24" y="24" width="88" height="102" rx="12" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="36" y="36" width="64" height="8" rx="4" fill="#375DFB" opacity=".6"/>
<circle cx="68" cy="66" r="14" fill="#375DFB" opacity=".15"/>
<circle cx="68" cy="66" r="8" fill="#375DFB" opacity=".3"/>
<rect x="44" y="86" width="48" height="5" rx="2.5" fill="#22272F" opacity=".35"/>
<rect x="52" y="96" width="32" height="4" rx="2" fill="#22272F" opacity=".2"/>
<rect x="52" y="108" width="20" height="16" rx="3" fill="#375DFB" opacity=".12"/>
<rect x="54" y="110" width="4" height="4" rx="1" fill="#375DFB" opacity=".5"/>
<rect x="60" y="110" width="4" height="4" rx="1" fill="#375DFB" opacity=".5"/>
<rect x="66" y="110" width="4" height="4" rx="1" fill="#375DFB" opacity=".5"/>
<rect x="54" y="116" width="4" height="4" rx="1" fill="#375DFB" opacity=".5"/>
<rect x="60" y="116" width="4" height="4" rx="1" fill="#375DFB" opacity=".2"/>
<rect x="66" y="116" width="4" height="4" rx="1" fill="#375DFB" opacity=".5"/>
<rect x="20" y="20" width="8" height="8" rx="2" fill="#375DFB" stroke="#fff" stroke-width="2"/>
<rect x="104" y="20" width="8" height="8" rx="2" fill="#375DFB" stroke="#fff" stroke-width="2"/>
<rect x="20" y="118" width="8" height="8" rx="2" fill="#375DFB" stroke="#fff" stroke-width="2"/>
<rect x="104" y="118" width="8" height="8" rx="2" fill="#375DFB" stroke="#fff" stroke-width="2"/>
<rect x="124" y="24" width="78" height="20" rx="6" fill="#375DFB" opacity=".08"/>
<rect x="130" y="28" width="50" height="6" rx="3" fill="#375DFB" opacity=".4"/>
<rect x="124" y="52" width="78" height="20" rx="6" fill="#9F81FF" opacity=".08"/>
<rect x="130" y="56" width="42" height="6" rx="3" fill="#9F81FF" opacity=".4"/>
<rect x="124" y="80" width="78" height="20" rx="6" fill="#10B981" opacity=".08"/>
<rect x="130" y="84" width="36" height="6" rx="3" fill="#10B981" opacity=".4"/>
<circle cx="190" cy="34" r="5" fill="#375DFB" opacity=".5"/>
<circle cx="190" cy="62" r="5" fill="#9F81FF" opacity=".5"/>
<circle cx="190" cy="90" r="5" fill="#10B981" opacity=".5"/>
</svg>`,
  gallery: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="16" width="28" height="36" rx="6" fill="#375DFB" opacity=".12" stroke="#375DFB" stroke-width="1"/>
<rect x="50" y="16" width="28" height="36" rx="6" fill="#9F81FF" opacity=".12" stroke="#E5EBFF" stroke-width="1"/>
<rect x="84" y="16" width="28" height="36" rx="6" fill="#10B981" opacity=".10" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="58" width="28" height="20" rx="4" fill="#F59E0B" opacity=".10" stroke="#E5EBFF" stroke-width="1"/>
<rect x="50" y="58" width="28" height="20" rx="4" fill="#375DFB" opacity=".08" stroke="#E5EBFF" stroke-width="1"/>
<rect x="84" y="58" width="28" height="20" rx="4" fill="#9F81FF" opacity=".10" stroke="#375DFB" stroke-width="1.5"/>
<rect x="86" y="12" width="24" height="8" rx="4" fill="#375DFB"/><text x="90" y="19" font-size="6" font-family="system-ui" font-weight="700" fill="#fff">Selected</text>
</svg>`,
  qrcode: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="18" y="18" width="50" height="58" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="26" y="26" width="34" height="5" rx="2.5" fill="#375DFB" opacity=".5"/>
<circle cx="43" cy="44" r="8" fill="#375DFB" opacity=".2"/>
<rect x="28" y="55" width="28" height="4" rx="2" fill="#22272F" opacity=".2"/>
<rect x="76" y="18" width="36" height="36" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="80" y="22" width="10" height="10" rx="2" fill="#22272F" opacity=".7"/>
<rect x="98" y="22" width="10" height="10" rx="2" fill="#22272F" opacity=".7"/>
<rect x="80" y="40" width="10" height="10" rx="2" fill="#22272F" opacity=".7"/>
<rect x="92" y="30" width="6" height="6" rx="1" fill="#22272F" opacity=".4"/>
<rect x="98" y="38" width="10" height="10" rx="2" fill="#22272F" opacity=".5"/>
<rect x="76" y="62" width="36" height="4" rx="2" fill="#10B981" opacity=".6"/>
<line x1="76" y1="58" x2="112" y2="58" stroke="#10B981" stroke-width="1.5" opacity=".5"/>
</svg>`,
  datafields: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="18" width="44" height="10" rx="5" fill="#375DFB" opacity=".12"/><rect x="18" y="20" width="28" height="6" rx="3" fill="#375DFB" opacity=".5"/>
<rect x="16" y="34" width="44" height="10" rx="5" fill="#375DFB" opacity=".12"/><rect x="18" y="36" width="20" height="6" rx="3" fill="#375DFB" opacity=".4"/>
<rect x="16" y="50" width="44" height="10" rx="5" fill="#375DFB" opacity=".12"/><rect x="18" y="52" width="32" height="6" rx="3" fill="#375DFB" opacity=".4"/>
<text x="66" y="32" font-size="14" font-family="system-ui" fill="#375DFB" opacity=".7">→</text>
<rect x="82" y="18" width="34" height="54" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="99" cy="34" r="8" fill="#375DFB" opacity=".15"/>
<rect x="88" y="46" width="22" height="4" rx="2" fill="#22272F" opacity=".25"/>
<rect x="92" y="54" width="14" height="3" rx="1.5" fill="#22272F" opacity=".15"/>
<rect x="88" y="62" width="16" height="6" rx="3" fill="#375DFB" opacity=".2"/>
</svg>`,
  sizes: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="20" width="30" height="54" rx="7" fill="#FFFFFF" stroke="#F59E0B" stroke-width="1.5"/>
<rect x="20" y="26" width="22" height="5" rx="2.5" fill="#F59E0B" opacity=".4"/>
<circle cx="31" cy="43" r="8" fill="#F59E0B" opacity=".2"/>
<rect x="20" y="56" width="14" height="3" rx="1.5" fill="#22272F" opacity=".2"/>
<rect x="51" y="28" width="28" height="44" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="55" y="34" width="20" height="5" rx="2.5" fill="#375DFB" opacity=".4"/>
<circle cx="65" cy="48" r="7" fill="#375DFB" opacity=".18"/>
<rect x="55" y="60" width="12" height="3" rx="1.5" fill="#22272F" opacity=".18"/>
<rect x="86" y="36" width="24" height="36" rx="5" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="90" y="41" width="16" height="4" rx="2" fill="#9F81FF" opacity=".4"/>
<circle cx="98" cy="53" r="6" fill="#9F81FF" opacity=".18"/>
<text x="17" y="18" font-size="7" font-family="system-ui" font-weight="700" fill="#F59E0B">VIP</text>
<text x="52" y="27" font-size="7" font-family="system-ui" font-weight="700" fill="#375DFB">STD</text>
<text x="87" y="35" font-size="7" font-family="system-ui" font-weight="700" fill="#9F81FF">CPT</text>
</svg>`,

  /* ── Tab 2: Certificate Design ────────────────────────── */
  // hero
  certedit: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#FFFDF5" stroke="#F59E0B" stroke-width="1.5" opacity=".5"/>
<rect x="18" y="20" width="184" height="110" rx="10" fill="none" stroke="#D4A017" stroke-width="2"/>
<rect x="24" y="26" width="172" height="98" rx="8" fill="none" stroke="#D4A017" stroke-width="1" opacity=".4"/>
<rect x="40" y="36" width="80" height="8" rx="4" fill="#22272F" opacity=".45"/>
<rect x="50" y="52" width="120" height="6" rx="3" fill="#D4A017" opacity=".3"/>
<rect x="60" y="64" width="100" height="12" rx="6" fill="#D4A017" opacity=".2"/>
<rect x="55" y="84" width="110" height="5" rx="2.5" fill="#22272F" opacity=".15"/>
<rect x="65" y="94" width="90" height="5" rx="2.5" fill="#22272F" opacity=".1"/>
<circle cx="110" cy="118" r="12" fill="#F59E0B" opacity=".25"/>
<circle cx="110" cy="118" r="7" fill="#F59E0B" opacity=".5"/>
<circle cx="110" cy="118" r="3" fill="#D4A017"/>
<rect x="44" y="116" width="30" height="2" rx="1" fill="#22272F" opacity=".15"/>
<rect x="144" y="116" width="30" height="2" rx="1" fill="#22272F" opacity=".15"/>
<rect x="155" y="32" width="38" height="24" rx="6" fill="#F59E0B" opacity=".12"/>
<text x="160" y="44" font-size="8" font-family="system-ui" font-weight="700" fill="#D4A017">CERT</text>
<text x="158" y="52" font-size="6" font-family="system-ui" fill="#D4A017" opacity=".7">Ready</text>
</svg>`,
  branding: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="30" cy="34" r="10" fill="#375DFB"/>
<circle cx="56" cy="34" r="10" fill="#10B981"/>
<circle cx="82" cy="34" r="10" fill="#F59E0B"/>
<circle cx="108" cy="34" r="10" fill="#22272F" opacity=".7"/>
<rect x="16" y="52" width="36" height="22" rx="5" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="20" y="57" width="22" height="5" rx="2.5" fill="#375DFB" opacity=".5"/>
<rect x="20" y="65" width="14" height="4" rx="2" fill="#375DFB" opacity=".25"/>
<rect x="58" y="52" width="54" height="10" rx="5" fill="#375DFB" opacity=".15"/>
<rect x="58" y="66" width="40" height="8" rx="4" fill="#22272F" opacity=".1"/>
</svg>`,
  autofill: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="14" y="20" width="34" height="52" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="18" y="28" width="26" height="4" rx="2" fill="#375DFB" opacity=".4"/>
<rect x="18" y="36" width="20" height="3" rx="1.5" fill="#22272F" opacity=".2"/>
<rect x="18" y="43" width="22" height="3" rx="1.5" fill="#22272F" opacity=".15"/>
<rect x="18" y="50" width="16" height="3" rx="1.5" fill="#22272F" opacity=".15"/>
<text x="52" y="49" font-size="14" font-family="system-ui" fill="#375DFB" opacity=".6">→</text>
<rect x="68" y="20" width="48" height="52" rx="8" fill="#FFFDF5" stroke="#D4A017" stroke-width="1.5"/>
<rect x="74" y="30" width="36" height="5" rx="2.5" fill="#D4A017" opacity=".5"/>
<rect x="78" y="40" width="28" height="10" rx="5" fill="#D4A017" opacity=".12"/>
<rect x="76" y="55" width="32" height="3" rx="1.5" fill="#22272F" opacity=".15"/>
<rect x="82" y="61" width="20" height="2" rx="1" fill="#22272F" opacity=".1"/>
<rect x="80" y="66" width="10" height="2" rx="1" fill="#22272F" opacity=".1"/>
<rect x="72" y="16" width="6" height="8" rx="1" fill="#375DFB" opacity=".7"/>
</svg>`,
  pdfgen: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="34" y="12" width="42" height="54" rx="7" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="34" y="12" width="42" height="14" rx="7" fill="#EF4444" opacity=".12"/>
<rect x="34" y="12" width="42" height="14" rx="7" fill="none" stroke="#EF4444" stroke-width="1"/>
<text x="44" y="23" font-size="8" font-family="system-ui" font-weight="800" fill="#DC2626">PDF</text>
<rect x="40" y="32" width="30" height="4" rx="2" fill="#22272F" opacity=".2"/>
<rect x="40" y="40" width="24" height="3" rx="1.5" fill="#22272F" opacity=".12"/>
<rect x="40" y="47" width="27" height="3" rx="1.5" fill="#22272F" opacity=".12"/>
<rect x="40" y="54" width="18" height="3" rx="1.5" fill="#22272F" opacity=".1"/>
<rect x="88" y="32" width="22" height="22" rx="11" fill="#375DFB" opacity=".15"/>
<text x="93" y="48" font-size="16" font-family="system-ui" font-weight="700" fill="#375DFB">↓</text>
<rect x="20" y="70" width="90" height="14" rx="7" fill="#375DFB" opacity=".08"/>
<rect x="34" y="73" width="62" height="5" rx="2.5" fill="#375DFB" opacity=".3"/>
</svg>`,
  bulkgen: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="24" y="22" width="52" height="34" rx="6" fill="#FFFDF5" stroke="#D4A017" stroke-width="1" opacity=".6" style="transform:rotate(-4deg);transform-origin:50px 39px"/>
<rect x="28" y="18" width="52" height="34" rx="6" fill="#FFFDF5" stroke="#D4A017" stroke-width="1" opacity=".8" style="transform:rotate(-1.5deg);transform-origin:54px 35px"/>
<rect x="32" y="14" width="52" height="34" rx="6" fill="#FFFFFF" stroke="#D4A017" stroke-width="1.5"/>
<rect x="38" y="20" width="34" height="5" rx="2.5" fill="#D4A017" opacity=".5"/>
<rect x="38" y="30" width="26" height="4" rx="2" fill="#22272F" opacity=".2"/>
<rect x="38" y="38" width="22" height="4" rx="2" fill="#22272F" opacity=".15"/>
<rect x="16" y="56" width="98" height="10" rx="5" fill="#375DFB" opacity=".08"/>
<rect x="16" y="56" width="62" height="10" rx="5" fill="#375DFB" opacity=".3"/>
<text x="88" y="65" font-size="8" font-family="system-ui" font-weight="700" fill="#375DFB">63%</text>
<rect x="16" y="72" width="98" height="5" rx="2.5" fill="#22272F" opacity=".06"/>
</svg>`,

  /* ── Tab 3: Printing & Delivery ──────────────────────── */
  // hero
  printing: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="50" y="36" width="120" height="60" rx="12" fill="#E5E7EB" stroke="#D1D5DB" stroke-width="1.5"/>
<rect x="50" y="36" width="120" height="14" rx="12" fill="#D1D5DB"/>
<rect x="62" y="42" width="30" height="4" rx="2" fill="#9CA3AF" opacity=".6"/>
<circle cx="156" cy="44" r="4" fill="#22C55E"/>
<rect x="62" y="56" width="96" height="6" rx="3" fill="#9CA3AF" opacity=".4"/>
<rect x="78" y="78" width="64" height="32" rx="0" fill="none"/>
<rect x="78" y="78" width="64" height="32" rx="4" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="84" y="84" width="44" height="5" rx="2.5" fill="#375DFB" opacity=".4"/>
<rect x="88" y="94" width="36" height="4" rx="2" fill="#22272F" opacity=".18"/>
<rect x="92" y="102" width="28" height="4" rx="2" fill="#22272F" opacity=".12"/>
<rect x="24" y="96" width="20" height="6" rx="3" fill="#375DFB" opacity=".2"/>
<text x="22" y="92" font-size="7" font-family="system-ui" font-weight="600" fill="#375DFB">Queue</text>
<rect x="20" y="98" width="24" height="6" rx="3" fill="#375DFB" opacity=".3"/>
<rect x="20" y="108" width="24" height="6" rx="3" fill="#375DFB" opacity=".2"/>
<rect x="20" y="118" width="24" height="6" rx="3" fill="#9F81FF" opacity=".25"/>
<rect x="176" y="90" width="30" height="16" rx="4" fill="#10B981" opacity=".15"/>
<text x="179" y="101" font-size="7" font-family="system-ui" font-weight="700" fill="#10B981">5s/badge</text>
</svg>`,
  thermal: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="22" width="28" height="36" rx="7" fill="#E5E7EB" stroke="#D1D5DB" stroke-width="1"/>
<rect x="16" y="22" width="28" height="8" rx="7" fill="#D1D5DB"/>
<circle cx="38" cy="26" r="3" fill="#22C55E"/>
<rect x="20" y="46" width="20" height="3" rx="1.5" fill="#9CA3AF"/>
<rect x="51" y="22" width="28" height="36" rx="7" fill="#E5E7EB" stroke="#D1D5DB" stroke-width="1"/>
<rect x="51" y="22" width="28" height="8" rx="7" fill="#D1D5DB"/>
<circle cx="73" cy="26" r="3" fill="#22C55E"/>
<rect x="55" y="46" width="20" height="3" rx="1.5" fill="#9CA3AF"/>
<rect x="86" y="22" width="28" height="36" rx="7" fill="#E5E7EB" stroke="#D1D5DB" stroke-width="1"/>
<rect x="86" y="22" width="28" height="8" rx="7" fill="#D1D5DB"/>
<circle cx="108" cy="26" r="3" fill="#22C55E"/>
<rect x="90" y="46" width="20" height="3" rx="1.5" fill="#9CA3AF"/>
<text x="22" y="70" font-size="7" font-family="system-ui" font-weight="600" fill="#10B981">✓</text>
<text x="57" y="70" font-size="7" font-family="system-ui" font-weight="600" fill="#10B981">✓</text>
<text x="92" y="70" font-size="7" font-family="system-ui" font-weight="600" fill="#10B981">✓</text>
<text x="14" y="82" font-size="7" font-family="system-ui" fill="#8A94A6">50+ compatible printers</text>
</svg>`,
  mailing: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="24" y="28" width="82" height="50" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<polygon points="24,28 65,56 106,28" fill="#375DFB" opacity=".12"/>
<line x1="24" y1="28" x2="65" y2="52" stroke="#375DFB" stroke-width="1" opacity=".3"/>
<line x1="106" y1="28" x2="65" y2="52" stroke="#375DFB" stroke-width="1" opacity=".3"/>
<rect x="38" y="46" width="22" height="28" rx="4" fill="#EDF3FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="41" y="50" width="16" height="4" rx="2" fill="#375DFB" opacity=".4"/>
<circle cx="49" cy="62" r="5" fill="#375DFB" opacity=".2"/>
<rect x="41" y="69" width="12" height="2" rx="1" fill="#22272F" opacity=".2"/>
<rect x="70" y="50" width="28" height="4" rx="2" fill="#22272F" opacity=".1"/>
<rect x="70" y="58" width="20" height="4" rx="2" fill="#22272F" opacity=".08"/>
<rect x="70" y="66" width="24" height="4" rx="2" fill="#22272F" opacity=".06"/>
</svg>`,
  digital: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="40" y="10" width="32" height="52" rx="6" fill="#0F1117" stroke="#22272F" stroke-width="1"/>
<rect x="43" y="13" width="26" height="46" rx="4" fill="#EDF3FF"/>
<rect x="48" y="17" width="16" height="22" rx="4" fill="#375DFB" opacity=".18" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="56" cy="28" r="6" fill="#375DFB" opacity=".25"/>
<rect x="48" y="42" width="10" height="4" rx="2" fill="#22272F" opacity=".2"/>
<rect x="60" y="42" width="4" height="4" rx="2" fill="#22272F" opacity=".15"/>
<rect x="48" y="50" width="16" height="3" rx="1.5" fill="#22272F" opacity=".12"/>
<rect x="44" y="56" width="4" height="4" rx="2" fill="#375DFB" opacity=".4"/>
<rect x="50" y="56" width="4" height="4" rx="2" fill="#375DFB" opacity=".3"/>
<rect x="80" y="18" width="36" height="18" rx="5" fill="#375DFB" opacity=".1"/>
<text x="84" y="30" font-size="8" font-family="system-ui" font-weight="700" fill="#375DFB">Email ✉</text>
<rect x="80" y="42" width="36" height="10" rx="5" fill="#9F81FF" opacity=".12"/>
<text x="83" y="50" font-size="7" font-family="system-ui" fill="#9F81FF">Wallet add</text>
<rect x="80" y="58" width="36" height="10" rx="5" fill="#10B981" opacity=".12"/>
<text x="82" y="66" font-size="7" font-family="system-ui" fill="#10B981">Download</text>
</svg>`,
  kiosk: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="44" y="10" width="42" height="30" rx="5" fill="#1A2340"/>
<rect x="47" y="13" width="36" height="24" rx="3" fill="#1A2340"/>
<rect x="52" y="16" width="26" height="18" rx="2" fill="#263052"/>
<rect x="52" y="16" width="8" height="2" rx="1" fill="#10B981" opacity=".5"/>
<rect x="52" y="16" width="2" height="8" rx="1" fill="#10B981" opacity=".5"/>
<rect x="70" y="16" width="8" height="2" rx="1" fill="#10B981" opacity=".5"/>
<rect x="76" y="16" width="2" height="8" rx="1" fill="#10B981" opacity=".5"/>
<rect x="52" y="30" width="8" height="2" rx="1" fill="#10B981" opacity=".5"/>
<rect x="52" y="24" width="2" height="8" rx="1" fill="#10B981" opacity=".5"/>
<rect x="70" y="30" width="8" height="2" rx="1" fill="#10B981" opacity=".5"/>
<rect x="76" y="24" width="2" height="8" rx="1" fill="#10B981" opacity=".5"/>
<circle cx="65" cy="25" r="4" fill="#375DFB" opacity=".3"/>
<rect x="54" y="40" width="22" height="4" rx="2" fill="#9CA3AF" opacity=".4"/>
<rect x="50" y="46" width="30" height="18" rx="3" fill="#E5E7EB" stroke="#D1D5DB" stroke-width="1"/>
<rect x="54" y="50" width="22" height="3" rx="1.5" fill="#9CA3AF" opacity=".5"/>
<rect x="56" y="56" width="18" height="3" rx="1.5" fill="#375DFB" opacity=".2"/>
<rect x="58" y="66" width="14" height="6" rx="3" fill="#D1D5DB"/>
</svg>`,
};
