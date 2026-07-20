// Inline SVG illustrations for the Event Analytics bento grid.
// Static coded mockups (analytics theme) — motion comes from the card hover float.
// viewBox ~220x150 for hero (tall) cards, ~130x90 for small cards.

export const eaIllustrations: Record<string, string> = {
  /* ── Tab 1: Event Metrics ─────────────────────────────── */
  // hero
  metrics: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="20" y="22" width="60" height="34" rx="8" fill="#375DFB" opacity=".10"/><text x="28" y="38" font-size="9" font-family="system-ui" font-weight="700" fill="#375DFB">2,480</text><rect x="28" y="44" width="34" height="4" rx="2" fill="#375DFB" opacity=".3"/>
<rect x="86" y="22" width="60" height="34" rx="8" fill="#9F81FF" opacity=".12"/><text x="94" y="38" font-size="9" font-family="system-ui" font-weight="700" fill="#7C5CFF">73%</text><rect x="94" y="44" width="34" height="4" rx="2" fill="#7C5CFF" opacity=".3"/>
<rect x="152" y="22" width="48" height="34" rx="8" fill="#10B981" opacity=".12"/><text x="159" y="38" font-size="9" font-family="system-ui" font-weight="700" fill="#10B981">$92k</text><rect x="159" y="44" width="30" height="4" rx="2" fill="#10B981" opacity=".3"/>
<path d="M22 120 L52 96 L82 104 L112 78 L142 86 L172 60 L200 70" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M22 120 L52 96 L82 104 L112 78 L142 86 L172 60 L200 70 L200 130 L22 130 Z" fill="#375DFB" opacity=".06"/>
<circle cx="112" cy="78" r="3.5" fill="#375DFB"/><circle cx="172" cy="60" r="3.5" fill="#9F81FF"/>
</svg>`,
  attendance: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="18" y="50" width="14" height="24" rx="3" fill="#375DFB" opacity=".25"/>
<rect x="40" y="38" width="14" height="36" rx="3" fill="#375DFB" opacity=".45"/>
<rect x="62" y="44" width="14" height="30" rx="3" fill="#9F81FF" opacity=".35"/>
<rect x="84" y="28" width="14" height="46" rx="3" fill="#375DFB" opacity=".6"/>
<text x="18" y="24" font-size="9" font-family="system-ui" font-weight="700" fill="#375DFB">847</text>
</svg>`,
  revenue: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<path d="M16 64 L40 50 L60 56 L84 34 L108 24" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M16 64 L40 50 L60 56 L84 34 L108 24 L108 74 L16 74 Z" fill="#10B981" opacity=".08"/>
<circle cx="108" cy="24" r="9" fill="#10B981" opacity=".15"/><text x="103" y="27" font-size="9" font-family="system-ui" font-weight="700" fill="#10B981">$</text>
</svg>`,
  sessions: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="18" width="60" height="6" rx="3" fill="#22272F" opacity=".5"/><text x="92" y="25" font-size="9" font-family="system-ui" fill="#F59E0B">★4.8</text>
<rect x="16" y="38" width="70" height="6" rx="3" fill="#22272F" opacity=".3"/><text x="92" y="45" font-size="9" font-family="system-ui" fill="#F59E0B">★4.6</text>
<rect x="16" y="58" width="52" height="6" rx="3" fill="#22272F" opacity=".3"/><text x="92" y="65" font-size="9" font-family="system-ui" fill="#F59E0B">★4.9</text>
</svg>`,
  engage: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="65" cy="46" r="26" fill="none" stroke="#E5EBFF" stroke-width="7"/>
<path d="M65 20 a26 26 0 0 1 22 39" fill="none" stroke="#375DFB" stroke-width="7" stroke-linecap="round"/>
<text x="52" y="50" font-size="13" font-family="system-ui" font-weight="700" fill="#375DFB">86</text>
</svg>`,

  /* ── Tab 2: Platform Analytics ────────────────────────── */
  platform: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<text x="22" y="32" font-size="9" font-family="system-ui" font-weight="600" fill="#8A94A6">Event A · B · C</text>
<g>
<rect x="24" y="112" width="22" height="16" rx="3" fill="#375DFB" opacity=".5"/><rect x="24" y="84" width="22" height="28" rx="3" fill="#375DFB" opacity=".5"/>
<rect x="52" y="112" width="22" height="16" rx="3" fill="#9F81FF" opacity=".5"/><rect x="52" y="70" width="22" height="42" rx="3" fill="#9F81FF" opacity=".5"/>
<rect x="80" y="112" width="22" height="16" rx="3" fill="#10B981" opacity=".5"/><rect x="80" y="92" width="22" height="20" rx="3" fill="#10B981" opacity=".5"/>
</g>
<line x1="120" y1="50" x2="200" y2="50" stroke="#E5EBFF" stroke-width="1"/>
<path d="M120 110 L142 92 L164 100 L186 74 L200 80" stroke="#375DFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<rect x="120" y="58" width="80" height="6" rx="3" fill="#375DFB" opacity=".15"/><rect x="120" y="40" width="50" height="6" rx="3" fill="#9F81FF" opacity=".2"/>
</svg>`,
  cohort: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="24" width="98" height="12" rx="6" fill="#375DFB" opacity=".5"/><rect x="16" y="24" width="40" height="12" rx="6" fill="#375DFB"/>
<rect x="16" y="42" width="98" height="12" rx="6" fill="#9F81FF" opacity=".4"/><rect x="16" y="42" width="64" height="12" rx="6" fill="#9F81FF"/>
<rect x="16" y="60" width="98" height="12" rx="6" fill="#10B981" opacity=".35"/><rect x="16" y="60" width="28" height="12" rx="6" fill="#10B981"/>
</svg>`,
  utm: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="40" cy="46" r="22" fill="none" stroke="#E5EBFF" stroke-width="9"/>
<path d="M40 24 a22 22 0 0 1 19 33" fill="none" stroke="#375DFB" stroke-width="9"/>
<path d="M40 24 a22 22 0 0 0 -19 33" fill="none" stroke="#9F81FF" stroke-width="9"/>
<rect x="76" y="34" width="36" height="6" rx="3" fill="#375DFB" opacity=".4"/><rect x="76" y="48" width="28" height="6" rx="3" fill="#9F81FF" opacity=".4"/>
</svg>`,
  trends: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<path d="M16 66 L38 54 L58 60 L80 40 L104 26" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<polygon points="104,26 96,28 102,34" fill="#375DFB"/>
<line x1="16" y1="74" x2="112" y2="74" stroke="#E5EBFF" stroke-width="1"/>
</svg>`,
  benchmark: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="22" y="46" width="16" height="28" rx="3" fill="#375DFB" opacity=".5"/>
<rect x="48" y="34" width="16" height="40" rx="3" fill="#375DFB" opacity=".6"/>
<rect x="74" y="52" width="16" height="22" rx="3" fill="#9F81FF" opacity=".45"/>
<line x1="14" y1="40" x2="116" y2="40" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4 3"/>
</svg>`,

  /* ── Tab 3: Reports & Export ──────────────────────────── */
  reports: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="34" y="14" width="120" height="122" rx="12" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="48" y="28" width="70" height="8" rx="4" fill="#22272F" opacity=".45"/>
<rect x="48" y="44" width="92" height="5" rx="2.5" fill="#B4BAC6"/><rect x="48" y="54" width="80" height="5" rx="2.5" fill="#D0D5DD"/>
<rect x="48" y="72" width="92" height="40" rx="6" fill="#375DFB" opacity=".06"/>
<path d="M56 104 L74 90 L92 96 L110 78 L132 84" stroke="#375DFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<rect x="48" y="120" width="50" height="6" rx="3" fill="#375DFB" opacity=".2"/>
<g><rect x="150" y="36" width="44" height="30" rx="7" fill="#10B981" opacity=".12"/><path d="M160 51 l5 5 9-10" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><text x="158" y="62" font-size="6" font-family="system-ui" fill="#10B981" font-weight="600">Scheduled</text></g>
</svg>`,
  customreport: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="18" width="44" height="22" rx="6" fill="#375DFB" opacity=".12" stroke="#375DFB" stroke-width="1" stroke-dasharray="3 2"/>
<rect x="66" y="18" width="44" height="22" rx="6" fill="#9F81FF" opacity=".12"/>
<rect x="16" y="48" width="94" height="20" rx="6" fill="#375DFB" opacity=".08"/>
<circle cx="100" cy="30" r="6" fill="#375DFB" opacity=".3"/>
</svg>`,
  sponsorreport: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<text x="16" y="30" font-size="9" font-family="system-ui" font-weight="700" fill="#375DFB">ROI 3.2x</text>
<rect x="16" y="40" width="94" height="8" rx="4" fill="#375DFB" opacity=".12"/><rect x="16" y="40" width="70" height="8" rx="4" fill="#375DFB" opacity=".5"/>
<rect x="16" y="56" width="94" height="8" rx="4" fill="#9F81FF" opacity=".12"/><rect x="16" y="56" width="48" height="8" rx="4" fill="#9F81FF" opacity=".5"/>
</svg>`,
  csvpdf: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="22" y="26" width="38" height="40" rx="6" fill="#10B981" opacity=".10" stroke="#10B981" stroke-width="1"/><text x="30" y="50" font-size="9" font-family="system-ui" font-weight="700" fill="#10B981">CSV</text>
<rect x="70" y="26" width="38" height="40" rx="6" fill="#EF4444" opacity=".10" stroke="#EF4444" stroke-width="1"/><text x="79" y="50" font-size="9" font-family="system-ui" font-weight="700" fill="#EF4444">PDF</text>
</svg>`,
  apiaccess: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<text x="30" y="52" font-size="26" font-family="ui-monospace,monospace" font-weight="700" fill="#375DFB" opacity=".55">{ }</text>
<rect x="74" y="34" width="34" height="5" rx="2.5" fill="#375DFB" opacity=".3"/><rect x="74" y="46" width="26" height="5" rx="2.5" fill="#9F81FF" opacity=".3"/>
</svg>`,
};
