// Inline SVG illustrations for the AI Photo Gallery bento grid.
// Static coded mockups (photo/AI theme) — motion comes from the card hover float.
// viewBox ~220x150 for hero (tall) cards, ~130x90 for small cards.

export const apgbIllustrations: Record<string, string> = {
  /* ── Tab 1: AI Face Matching ──────────────────────────── */
  // hero
  scan: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="22" y="26" width="48" height="48" rx="10" fill="#375DFB" opacity=".08" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="4 3"/>
<circle cx="46" cy="50" r="14" fill="#375DFB" opacity=".15"/><circle cx="46" cy="50" r="8" fill="#375DFB" opacity=".35"/>
<path d="M22 26 h10 M22 26 v10" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round"/>
<path d="M70 26 h-10 M70 26 v10" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round"/>
<path d="M22 74 h10 M22 74 v-10" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round"/>
<path d="M70 74 h-10 M70 74 v-10" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round"/>
<path d="M86 50 L110 50" stroke="#9F81FF" stroke-width="2" stroke-dasharray="4 3" stroke-linecap="round"/>
<circle cx="90" cy="50" r="2" fill="#9F81FF"/>
<rect x="116" y="24" width="82" height="52" rx="10" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1.5"/>
<circle cx="136" cy="44" r="8" fill="#375DFB" opacity=".18"/><text x="130" y="48" font-size="9" font-family="system-ui" font-weight="700" fill="#375DFB">✓</text>
<circle cx="163" cy="44" r="8" fill="#9F81FF" opacity=".18"/><text x="157" y="48" font-size="9" font-family="system-ui" font-weight="700" fill="#9F81FF">✓</text>
<circle cx="190" cy="44" r="8" fill="#10B981" opacity=".18"/><text x="185" y="48" font-size="9" font-family="system-ui" font-weight="700" fill="#10B981">✓</text>
<rect x="126" y="58" width="62" height="4" rx="2" fill="#375DFB" opacity=".25"/>
<text x="22" y="100" font-size="8" font-family="system-ui" font-weight="600" fill="#8A94A6">Match</text><text x="48" y="100" font-size="8" font-family="system-ui" font-weight="700" fill="#375DFB">95.4%</text>
<rect x="22" y="105" width="80" height="6" rx="3" fill="#375DFB" opacity=".12"/><rect x="22" y="105" width="68" height="6" rx="3" fill="#375DFB" opacity=".45"/>
<text x="22" y="125" font-size="8" font-family="system-ui" fill="#8A94A6">3 matches found · 0.8s</text>
</svg>`,

  engine: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="44" cy="42" r="18" fill="none" stroke="#E5EBFF" stroke-width="6"/>
<path d="M44 24 a18 18 0 0 1 15.6 27" fill="none" stroke="#375DFB" stroke-width="6" stroke-linecap="round"/>
<path d="M44 24 a18 18 0 0 0 -15.6 27" fill="none" stroke="#9F81FF" stroke-width="6" stroke-linecap="round"/>
<text x="36" y="46" font-size="10" font-family="system-ui" font-weight="700" fill="#375DFB">95%</text>
<rect x="72" y="30" width="42" height="6" rx="3" fill="#375DFB" opacity=".3"/>
<rect x="72" y="44" width="30" height="6" rx="3" fill="#9F81FF" opacity=".3"/>
<text x="72" y="65" font-size="8" font-family="system-ui" fill="#8A94A6">AWS Rekognition</text>
</svg>`,

  notify: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="24" y="20" width="82" height="46" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="37" cy="36" r="7" fill="#375DFB" opacity=".2"/>
<rect x="50" y="30" width="44" height="5" rx="2.5" fill="#22272F" opacity=".45"/>
<rect x="50" y="40" width="32" height="4" rx="2" fill="#B4BAC6"/>
<rect x="50" y="52" width="20" height="6" rx="3" fill="#375DFB" opacity=".85"/>
<circle cx="102" cy="24" r="7" fill="#F59E0B"/>
<text x="99" y="27" font-size="8" font-family="system-ui" font-weight="700" fill="#fff">3</text>
<text x="24" y="82" font-size="7" font-family="system-ui" fill="#8A94A6">Photos ready · tap to view</text>
</svg>`,

  group: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="38" cy="42" r="10" fill="#375DFB" opacity=".18"/><circle cx="38" cy="42" r="6" fill="#375DFB" opacity=".4"/>
<circle cx="58" cy="36" r="10" fill="#9F81FF" opacity=".18"/><circle cx="58" cy="36" r="6" fill="#9F81FF" opacity=".4"/>
<circle cx="78" cy="42" r="10" fill="#10B981" opacity=".18"/><circle cx="78" cy="42" r="6" fill="#10B981" opacity=".4"/>
<rect x="20" y="20" width="90" height="58" rx="8" fill="none" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="4 3"/>
<path d="M20 20 h8 M20 20 v8" stroke="#375DFB" stroke-width="2" stroke-linecap="round"/>
<path d="M110 20 h-8 M110 20 v8" stroke="#375DFB" stroke-width="2" stroke-linecap="round"/>
<path d="M20 78 h8 M20 78 v-8" stroke="#375DFB" stroke-width="2" stroke-linecap="round"/>
<path d="M110 78 h-8 M110 78 v-8" stroke="#375DFB" stroke-width="2" stroke-linecap="round"/>
<text x="93" y="34" font-size="7" font-family="system-ui" font-weight="700" fill="#375DFB">3 found</text>
</svg>`,

  shield: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<path d="M65 18 L86 26 L86 50 C86 62 75 70 65 74 C55 70 44 62 44 50 L44 26 Z" fill="#375DFB" opacity=".1" stroke="#375DFB" stroke-width="1.5"/>
<path d="M56 46 l6 6 12-12" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="24" y="76" width="82" height="4" rx="2" fill="#10B981" opacity=".3"/>
<text x="34" y="83" font-size="7" font-family="system-ui" fill="#10B981" font-weight="600">Encrypted · Opt-out available</text>
</svg>`,

  /* ── Tab 2: Photo Management ──────────────────────────── */
  // hero
  albums: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="22" y="24" width="52" height="44" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="26" y="28" width="44" height="28" rx="5" fill="#375DFB" opacity=".12"/>
<rect x="28" y="30" width="14" height="14" rx="3" fill="#375DFB" opacity=".4"/>
<rect x="46" y="30" width="20" height="6" rx="2" fill="#375DFB" opacity=".25"/>
<rect x="46" y="38" width="14" height="6" rx="2" fill="#9F81FF" opacity=".25"/>
<rect x="26" y="60" width="44" height="4" rx="2" fill="#22272F" opacity=".3"/>
<rect x="82" y="24" width="52" height="44" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="86" y="28" width="44" height="28" rx="5" fill="#9F81FF" opacity=".10"/>
<rect x="88" y="30" width="14" height="14" rx="3" fill="#9F81FF" opacity=".4"/>
<rect x="106" y="30" width="20" height="6" rx="2" fill="#9F81FF" opacity=".25"/>
<rect x="106" y="38" width="14" height="6" rx="2" fill="#9F81FF" opacity=".2"/>
<rect x="86" y="60" width="44" height="4" rx="2" fill="#22272F" opacity=".3"/>
<rect x="142" y="24" width="52" height="44" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="146" y="28" width="44" height="28" rx="5" fill="#10B981" opacity=".10"/>
<rect x="148" y="30" width="14" height="14" rx="3" fill="#10B981" opacity=".4"/>
<rect x="166" y="30" width="20" height="6" rx="2" fill="#10B981" opacity=".25"/>
<rect x="166" y="38" width="14" height="6" rx="2" fill="#10B981" opacity=".2"/>
<rect x="146" y="60" width="44" height="4" rx="2" fill="#22272F" opacity=".3"/>
<rect x="22" y="82" width="100" height="48" rx="10" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="30" y="90" width="84" height="32" rx="5" fill="#375DFB" opacity=".06"/>
<rect x="34" y="94" width="20" height="20" rx="4" fill="#375DFB" opacity=".25"/>
<rect x="58" y="94" width="20" height="20" rx="4" fill="#9F81FF" opacity=".25"/>
<rect x="82" y="94" width="20" height="20" rx="4" fill="#10B981" opacity=".2"/>
<text x="28" y="130" font-size="7" font-family="system-ui" fill="#8A94A6">Bulk ingest · 4,280 photos</text>
<rect x="134" y="82" width="60" height="48" rx="10" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="140" y="92" width="48" height="5" rx="2.5" fill="#22272F" opacity=".3"/>
<rect x="140" y="104" width="36" height="4" rx="2" fill="#B4BAC6"/>
<rect x="140" y="116" width="20" height="8" rx="4" fill="#375DFB" opacity=".7"/>
</svg>`,

  upload: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="22" y="22" width="86" height="46" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1" stroke-dasharray="4 3"/>
<path d="M65 52 L65 32 M57 40 L65 32 L73 40" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="30" y="60" width="70" height="5" rx="2.5" fill="#375DFB" opacity=".15"/>
<rect x="30" y="60" width="48" height="5" rx="2.5" fill="#375DFB" opacity=".5"/>
<text x="30" y="80" font-size="7" font-family="system-ui" fill="#8A94A6">1,280 / 2,640 files</text>
</svg>`,

  watermark: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="20" y="18" width="90" height="54" rx="7" fill="#375DFB" opacity=".07"/>
<rect x="26" y="24" width="30" height="20" rx="4" fill="#375DFB" opacity=".18"/>
<rect x="60" y="24" width="44" height="6" rx="3" fill="#22272F" opacity=".3"/>
<rect x="60" y="34" width="30" height="5" rx="2.5" fill="#B4BAC6"/>
<path d="M22 56 l86 0" stroke="#9F81FF" stroke-width="1" stroke-dasharray="3 2" opacity=".5"/>
<text x="26" y="66" font-size="8" font-family="system-ui" font-weight="600" fill="#9F81FF" opacity=".7">© EventHex 2025</text>
</svg>`,

  ugc: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="20" width="28" height="28" rx="6" fill="#375DFB" opacity=".15"/>
<rect x="50" y="20" width="28" height="28" rx="6" fill="#9F81FF" opacity=".15"/>
<rect x="84" y="20" width="28" height="28" rx="6" fill="#10B981" opacity=".15"/>
<rect x="16" y="54" width="28" height="20" rx="6" fill="#F59E0B" opacity=".15"/>
<rect x="50" y="54" width="28" height="20" rx="6" fill="#375DFB" opacity=".12"/>
<rect x="84" y="54" width="28" height="20" rx="6" fill="#9F81FF" opacity=".12"/>
<circle cx="106" cy="22" r="7" fill="#10B981"/><text x="103" y="26" font-size="8" font-family="system-ui" font-weight="700" fill="#fff">+</text>
</svg>`,

  history: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="22" width="96" height="10" rx="5" fill="#375DFB" opacity=".12"/><rect x="16" y="22" width="72" height="10" rx="5" fill="#375DFB" opacity=".4"/>
<text x="90" y="30" font-size="7" font-family="system-ui" fill="#375DFB">820</text>
<rect x="16" y="40" width="96" height="10" rx="5" fill="#9F81FF" opacity=".12"/><rect x="16" y="40" width="50" height="10" rx="5" fill="#9F81FF" opacity=".4"/>
<text x="90" y="48" font-size="7" font-family="system-ui" fill="#9F81FF">540</text>
<rect x="16" y="58" width="96" height="10" rx="5" fill="#10B981" opacity=".12"/><rect x="16" y="58" width="36" height="10" rx="5" fill="#10B981" opacity=".4"/>
<text x="90" y="66" font-size="7" font-family="system-ui" fill="#10B981">390</text>
</svg>`,

  /* ── Tab 3: Monetization & Sharing ───────────────────── */
  // hero
  sponsor: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="22" y="24" width="176" height="50" rx="10" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="30" y="32" width="80" height="34" rx="7" fill="#375DFB" opacity=".08"/>
<rect x="34" y="36" width="22" height="22" rx="5" fill="#375DFB" opacity=".3"/>
<rect x="62" y="38" width="40" height="6" rx="3" fill="#22272F" opacity=".4"/>
<rect x="62" y="50" width="28" height="4" rx="2" fill="#B4BAC6"/>
<rect x="120" y="30" width="70" height="38" rx="7" fill="#F59E0B" opacity=".08" stroke="#F59E0B" stroke-width="1"/>
<text x="136" y="52" font-size="11" font-family="system-ui" font-weight="700" fill="#F59E0B">SPONSOR</text>
<rect x="22" y="82" width="82" height="48" rx="10" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="30" y="90" width="22" height="32" rx="5" fill="#375DFB" opacity=".18"/>
<rect x="56" y="96" width="22" height="26" rx="5" fill="#9F81FF" opacity=".18"/>
<rect x="30" y="118" width="48" height="4" rx="2" fill="#22272F" opacity=".2"/>
<text x="26" y="136" font-size="7" font-family="system-ui" fill="#8A94A6">Gallery views · 12,480</text>
<rect x="116" y="82" width="82" height="48" rx="10" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="124" y="92" width="66" height="5" rx="2.5" fill="#22272F" opacity=".3"/>
<rect x="124" y="104" width="66" height="8" rx="4" fill="#375DFB" opacity=".12"/><rect x="124" y="104" width="52" height="8" rx="4" fill="#375DFB" opacity=".5"/>
<text x="124" y="124" font-size="7" font-family="system-ui" fill="#8A94A6">Revenue · $4,200</text>
</svg>`,

  share: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="36" cy="45" r="10" fill="#375DFB" opacity=".15"/>
<circle cx="72" cy="28" r="10" fill="#9F81FF" opacity=".15"/>
<circle cx="72" cy="62" r="10" fill="#10B981" opacity=".15"/>
<line x1="46" y1="42" x2="62" y2="32" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="3 2"/>
<line x1="46" y1="49" x2="62" y2="58" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="3 2"/>
<text x="68" y="31" font-size="7" font-family="system-ui" font-weight="700" fill="#9F81FF">in</text>
<text x="68" y="65" font-size="7" font-family="system-ui" font-weight="700" fill="#10B981">X</text>
<text x="30" y="49" font-size="8" font-family="system-ui" font-weight="700" fill="#375DFB">ig</text>
<rect x="90" y="30" width="28" height="30" rx="6" fill="#375DFB" opacity=".08"/>
<text x="96" y="48" font-size="8" font-family="system-ui" fill="#375DFB">↗</text>
</svg>`,

  person: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="40" cy="36" r="12" fill="#375DFB" opacity=".15"/><circle cx="40" cy="36" r="7" fill="#375DFB" opacity=".35"/>
<rect x="20" y="54" width="40" height="4" rx="2" fill="#22272F" opacity=".35"/>
<rect x="66" y="24" width="46" height="6" rx="3" fill="#375DFB" opacity=".2"/>
<rect x="66" y="36" width="34" height="22" rx="5" fill="#375DFB" opacity=".08" stroke="#375DFB" stroke-width="1"/>
<rect x="70" y="40" width="10" height="10" rx="2" fill="#375DFB" opacity=".25"/>
<rect x="84" y="40" width="10" height="10" rx="2" fill="#9F81FF" opacity=".25"/>
<rect x="66" y="64" width="46" height="5" rx="2.5" fill="#22272F" opacity=".2"/>
</svg>`,

  brand: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="16" width="98" height="58" rx="9" fill="#375DFB" opacity=".07"/>
<rect x="22" y="22" width="86" height="12" rx="6" fill="#375DFB" opacity=".15"/>
<rect x="32" y="25" width="50" height="6" rx="3" fill="#375DFB" opacity=".5"/>
<rect x="22" y="40" width="40" height="28" rx="5" fill="#9F81FF" opacity=".15"/>
<rect x="66" y="40" width="40" height="28" rx="5" fill="#375DFB" opacity=".1"/>
<rect x="26" y="74" width="78" height="4" rx="2" fill="#375DFB" opacity=".2"/>
</svg>`,

  download: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="36" y="16" width="58" height="46" rx="7" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<path d="M65 28 L65 48 M57 42 L65 50 L73 42" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="40" y="70" width="50" height="5" rx="2.5" fill="#375DFB" opacity=".15"/>
<rect x="40" y="70" width="30" height="5" rx="2.5" fill="#375DFB" opacity=".5"/>
<text x="36" y="84" font-size="7" font-family="system-ui" fill="#8A94A6">Free · HD · Watermarked</text>
</svg>`,
};
