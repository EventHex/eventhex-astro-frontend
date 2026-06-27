// Inline SVG illustrations for the Event Check-In bento grid.
// Static coded mockups (check-in / scanning theme) — motion comes from the card hover float.
// viewBox ~220x150 for hero (tall) cards, ~130x90 for small cards.

export const ecibIllustrations: Record<string, string> = {
  /* ── Tab 1: QR Scanning ───────────────────────────────── */
  // hero
  qrscan: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<!-- QR frame corners -->
<rect x="60" y="22" width="100" height="96" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<path d="M60 38 L60 26 Q60 22 64 22 L76 22" stroke="#375DFB" stroke-width="3" stroke-linecap="round" fill="none"/>
<path d="M144 22 L156 22 Q160 22 160 26 L160 38" stroke="#375DFB" stroke-width="3" stroke-linecap="round" fill="none"/>
<path d="M60 80 L60 92 Q60 96 64 96 L76 96" stroke="#375DFB" stroke-width="3" stroke-linecap="round" fill="none"/>
<path d="M160 80 L160 92 Q160 96 156 96 L144 96" stroke="#375DFB" stroke-width="3" stroke-linecap="round" fill="none"/>
<!-- QR pattern cells -->
<rect x="76" y="36" width="8" height="8" rx="1.5" fill="#375DFB" opacity=".7"/>
<rect x="88" y="36" width="8" height="8" rx="1.5" fill="#375DFB" opacity=".4"/>
<rect x="100" y="36" width="8" height="8" rx="1.5" fill="#375DFB" opacity=".7"/>
<rect x="112" y="36" width="8" height="8" rx="1.5" fill="#375DFB" opacity=".4"/>
<rect x="124" y="36" width="8" height="8" rx="1.5" fill="#375DFB" opacity=".7"/>
<rect x="76" y="48" width="8" height="8" rx="1.5" fill="#375DFB" opacity=".4"/>
<rect x="100" y="48" width="8" height="8" rx="1.5" fill="#375DFB" opacity=".7"/>
<rect x="124" y="48" width="8" height="8" rx="1.5" fill="#375DFB" opacity=".4"/>
<rect x="76" y="60" width="8" height="8" rx="1.5" fill="#375DFB" opacity=".7"/>
<rect x="88" y="60" width="8" height="8" rx="1.5" fill="#375DFB" opacity=".7"/>
<rect x="112" y="60" width="8" height="8" rx="1.5" fill="#375DFB" opacity=".4"/>
<rect x="124" y="60" width="8" height="8" rx="1.5" fill="#375DFB" opacity=".7"/>
<rect x="76" y="72" width="8" height="8" rx="1.5" fill="#375DFB" opacity=".4"/>
<rect x="100" y="72" width="8" height="8" rx="1.5" fill="#375DFB" opacity=".4"/>
<rect x="112" y="72" width="8" height="8" rx="1.5" fill="#375DFB" opacity=".7"/>
<!-- Scan line -->
<line x1="64" y1="59" x2="156" y2="59" stroke="#22c55e" stroke-width="2" stroke-linecap="round" opacity=".85"/>
<!-- Verified badge -->
<rect x="68" y="104" width="84" height="24" rx="12" fill="#22c55e" opacity=".12"/>
<text x="82" y="120" font-size="11" font-family="system-ui" font-weight="700" fill="#22c55e">✓ Verified</text>
</svg>`,

  barcode: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- Barcode stripes -->
<rect x="24" y="24" width="3" height="38" rx="1" fill="#375DFB" opacity=".8"/>
<rect x="30" y="24" width="5" height="38" rx="1" fill="#375DFB" opacity=".6"/>
<rect x="38" y="24" width="2" height="38" rx="1" fill="#375DFB" opacity=".8"/>
<rect x="43" y="24" width="4" height="38" rx="1" fill="#375DFB" opacity=".5"/>
<rect x="50" y="24" width="3" height="38" rx="1" fill="#375DFB" opacity=".7"/>
<rect x="56" y="24" width="6" height="38" rx="1" fill="#375DFB" opacity=".6"/>
<rect x="65" y="24" width="2" height="38" rx="1" fill="#375DFB" opacity=".8"/>
<rect x="70" y="24" width="4" height="38" rx="1" fill="#375DFB" opacity=".5"/>
<rect x="77" y="24" width="3" height="38" rx="1" fill="#375DFB" opacity=".7"/>
<rect x="83" y="24" width="5" height="38" rx="1" fill="#375DFB" opacity=".6"/>
<rect x="91" y="24" width="2" height="38" rx="1" fill="#375DFB" opacity=".8"/>
<rect x="96" y="24" width="4" height="38" rx="1" fill="#375DFB" opacity=".5"/>
<rect x="103" y="24" width="3" height="38" rx="1" fill="#375DFB" opacity=".7"/>
<line x1="18" y1="50" x2="112" y2="50" stroke="#22c55e" stroke-width="2" stroke-linecap="round" opacity=".7"/>
<text x="38" y="76" font-size="8" font-family="ui-monospace,monospace" fill="#375DFB" opacity=".6">EH-20240912</text>
</svg>`,

  multidev: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- Phone 1 -->
<rect x="16" y="20" width="24" height="40" rx="5" fill="#FFFFFF" stroke="#375DFB" stroke-width="1.5"/>
<rect x="20" y="26" width="16" height="12" rx="2" fill="#375DFB" opacity=".2"/>
<rect x="24" y="44" width="8" height="2" rx="1" fill="#375DFB" opacity=".4"/>
<circle cx="28" cy="56" r="2" fill="#375DFB" opacity=".4"/>
<!-- Phone 2 -->
<rect x="46" y="14" width="24" height="44" rx="5" fill="#FFFFFF" stroke="#9F81FF" stroke-width="1.5"/>
<rect x="50" y="20" width="16" height="14" rx="2" fill="#9F81FF" opacity=".2"/>
<rect x="54" y="48" width="8" height="2" rx="1" fill="#9F81FF" opacity=".4"/>
<circle cx="58" cy="54" r="2" fill="#9F81FF" opacity=".4"/>
<!-- Phone 3 -->
<rect x="76" y="20" width="24" height="40" rx="5" fill="#FFFFFF" stroke="#10B981" stroke-width="1.5"/>
<rect x="80" y="26" width="16" height="12" rx="2" fill="#10B981" opacity=".2"/>
<rect x="84" y="44" width="8" height="2" rx="1" fill="#10B981" opacity=".4"/>
<circle cx="88" cy="56" r="2" fill="#10B981" opacity=".4"/>
<!-- Count badge -->
<rect x="38" y="64" width="44" height="14" rx="7" fill="#375DFB" opacity=".12"/>
<text x="50" y="74" font-size="8" font-family="system-ui" font-weight="700" fill="#375DFB">100+ devices</text>
</svg>`,

  offline: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- Cloud with sync arrows -->
<path d="M40 52 Q34 52 34 46 Q34 40 40 39 Q40 30 50 30 Q58 30 60 37 Q68 36 68 44 Q68 52 60 52 Z" fill="#E5EBFF" stroke="#375DFB" stroke-width="1.5"/>
<!-- Sync arrows -->
<path d="M44 44 a8 8 0 0 1 14 0" stroke="#375DFB" stroke-width="2" stroke-linecap="round" fill="none"/>
<polygon points="58,40 62,44 56,46" fill="#375DFB"/>
<!-- Offline indicator -->
<rect x="76" y="32" width="34" height="20" rx="6" fill="#F59E0B" opacity=".12"/>
<text x="82" y="46" font-size="8" font-family="system-ui" font-weight="700" fill="#F59E0B">Offline</text>
<!-- Sync queued count -->
<rect x="76" y="58" width="34" height="14" rx="5" fill="#10B981" opacity=".12"/>
<text x="81" y="68" font-size="7.5" font-family="system-ui" font-weight="600" fill="#10B981">48 queued</text>
</svg>`,

  confirm: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- Big check circle -->
<circle cx="65" cy="42" r="22" fill="#22c55e" opacity=".12"/>
<circle cx="65" cy="42" r="22" fill="none" stroke="#22c55e" stroke-width="2"/>
<path d="M53 42 l8 8 14-16" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<!-- Confirmed label -->
<rect x="26" y="70" width="78" height="14" rx="7" fill="#22c55e" opacity=".15"/>
<text x="39" y="80" font-size="8.5" font-family="system-ui" font-weight="700" fill="#22c55e">Check-In Confirmed</text>
</svg>`,

  /* ── Tab 2: Attendance Tracking ───────────────────────── */
  // hero
  tracking: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<!-- Stat pills -->
<rect x="20" y="22" width="58" height="32" rx="8" fill="#375DFB" opacity=".10"/>
<text x="28" y="36" font-size="9" font-family="system-ui" font-weight="700" fill="#375DFB">1,842</text>
<text x="28" y="48" font-size="7.5" font-family="system-ui" fill="#375DFB" opacity=".7">Checked In</text>
<rect x="84" y="22" width="58" height="32" rx="8" fill="#9F81FF" opacity=".12"/>
<text x="92" y="36" font-size="9" font-family="system-ui" font-weight="700" fill="#7C5CFF">2,400</text>
<text x="92" y="48" font-size="7.5" font-family="system-ui" fill="#7C5CFF" opacity=".7">Registered</text>
<rect x="148" y="22" width="52" height="32" rx="8" fill="#22c55e" opacity=".12"/>
<text x="156" y="36" font-size="9" font-family="system-ui" font-weight="700" fill="#22c55e">76.8%</text>
<text x="156" y="48" font-size="7.5" font-family="system-ui" fill="#22c55e" opacity=".7">Rate</text>
<!-- Arrival line chart -->
<path d="M22 122 L52 108 L82 114 L112 90 L142 82 L172 64 L200 70" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M22 122 L52 108 L82 114 L112 90 L142 82 L172 64 L200 70 L200 132 L22 132 Z" fill="#375DFB" opacity=".06"/>
<circle cx="112" cy="90" r="3.5" fill="#375DFB"/>
<circle cx="172" cy="64" r="3.5" fill="#9F81FF"/>
</svg>`,

  sessiontrack: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="18" width="70" height="6" rx="3" fill="#22272F" opacity=".5"/>
<rect x="16" y="18" width="46" height="6" rx="3" fill="#375DFB" opacity=".55"/>
<rect x="16" y="34" width="70" height="6" rx="3" fill="#22272F" opacity=".3"/>
<rect x="16" y="34" width="58" height="6" rx="3" fill="#9F81FF" opacity=".5"/>
<rect x="16" y="50" width="70" height="6" rx="3" fill="#22272F" opacity=".3"/>
<rect x="16" y="50" width="36" height="6" rx="3" fill="#10B981" opacity=".5"/>
<text x="90" y="24" font-size="7.5" font-family="system-ui" fill="#375DFB" font-weight="600">214 ✓</text>
<text x="90" y="40" font-size="7.5" font-family="system-ui" fill="#9F81FF" font-weight="600">187 ✓</text>
<text x="90" y="56" font-size="7.5" font-family="system-ui" fill="#10B981" font-weight="600">130 ✓</text>
</svg>`,

  search: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- Search bar -->
<rect x="14" y="16" width="102" height="16" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="26" cy="24" r="4" fill="none" stroke="#375DFB" stroke-width="1.5"/>
<line x1="29" y1="27" x2="33" y2="31" stroke="#375DFB" stroke-width="1.5" stroke-linecap="round"/>
<!-- Result rows -->
<circle cx="24" cy="46" r="5" fill="#375DFB" opacity=".25"/>
<rect x="34" y="42" width="44" height="4" rx="2" fill="#22272F" opacity=".4"/>
<rect x="34" y="48" width="32" height="3" rx="1.5" fill="#375DFB" opacity=".25"/>
<rect x="88" y="43" width="22" height="8" rx="4" fill="#22c55e" opacity=".15"/>
<text x="91" y="50" font-size="6.5" font-family="system-ui" font-weight="700" fill="#22c55e">Present</text>
<circle cx="24" cy="64" r="5" fill="#9F81FF" opacity=".25"/>
<rect x="34" y="60" width="40" height="4" rx="2" fill="#22272F" opacity=".3"/>
<rect x="34" y="66" width="28" height="3" rx="1.5" fill="#9F81FF" opacity=".25"/>
</svg>`,

  dupeblock: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- Shield -->
<path d="M65 16 L86 24 L86 44 Q86 60 65 68 Q44 60 44 44 L44 24 Z" fill="#375DFB" opacity=".1" stroke="#375DFB" stroke-width="1.5"/>
<!-- X block inside shield -->
<line x1="55" y1="34" x2="75" y2="54" stroke="#EF4444" stroke-width="3" stroke-linecap="round"/>
<line x1="75" y1="34" x2="55" y2="54" stroke="#EF4444" stroke-width="3" stroke-linecap="round"/>
<!-- Alert label -->
<rect x="20" y="72" width="90" height="12" rx="6" fill="#EF4444" opacity=".12"/>
<text x="28" y="81" font-size="7.5" font-family="system-ui" font-weight="700" fill="#EF4444">Duplicate — Blocked</text>
</svg>`,

  entrance: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- Gate A -->
<rect x="16" y="26" width="32" height="40" rx="5" fill="#FFFFFF" stroke="#375DFB" stroke-width="1.5"/>
<text x="24" y="44" font-size="8" font-family="system-ui" font-weight="700" fill="#375DFB">Gate A</text>
<rect x="20" y="48" width="24" height="8" rx="3" fill="#22c55e" opacity=".15"/>
<text x="23" y="55" font-size="6.5" font-family="system-ui" font-weight="600" fill="#22c55e">248 in</text>
<!-- Gate B -->
<rect x="55" y="20" width="32" height="48" rx="5" fill="#FFFFFF" stroke="#9F81FF" stroke-width="1.5"/>
<text x="63" y="40" font-size="8" font-family="system-ui" font-weight="700" fill="#9F81FF">Gate B</text>
<rect x="59" y="52" width="24" height="8" rx="3" fill="#22c55e" opacity=".15"/>
<text x="62" y="59" font-size="6.5" font-family="system-ui" font-weight="600" fill="#22c55e">312 in</text>
<!-- Gate C -->
<rect x="94" y="26" width="28" height="40" rx="5" fill="#FFFFFF" stroke="#10B981" stroke-width="1.5"/>
<text x="100" y="44" font-size="8" font-family="system-ui" font-weight="700" fill="#10B981">Gate C</text>
<rect x="98" y="50" width="20" height="8" rx="3" fill="#22c55e" opacity=".15"/>
<text x="100" y="57" font-size="6.5" font-family="system-ui" font-weight="600" fill="#22c55e">97 in</text>
</svg>`,

  /* ── Tab 3: Event Day Dashboard ────────────────────────── */
  // hero
  opsdash: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<!-- Header bar -->
<rect x="20" y="22" width="180" height="20" rx="6" fill="#375DFB" opacity=".08"/>
<text x="28" y="35" font-size="8" font-family="system-ui" font-weight="700" fill="#375DFB">Operations Dashboard · Live</text>
<circle cx="190" cy="32" r="4" fill="#22c55e"/>
<!-- Stat row -->
<rect x="20" y="48" width="50" height="28" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<text x="28" y="60" font-size="7" font-family="system-ui" fill="#8A94A6">Check-ins</text>
<text x="28" y="70" font-size="10" font-family="system-ui" font-weight="700" fill="#375DFB">1,842</text>
<rect x="76" y="48" width="50" height="28" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<text x="84" y="60" font-size="7" font-family="system-ui" fill="#8A94A6">Queue</text>
<text x="84" y="70" font-size="10" font-family="system-ui" font-weight="700" fill="#F59E0B">~3 min</text>
<rect x="132" y="48" width="70" height="28" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<text x="140" y="60" font-size="7" font-family="system-ui" fill="#8A94A6">Staff Active</text>
<text x="140" y="70" font-size="10" font-family="system-ui" font-weight="700" fill="#10B981">12 / 14</text>
<!-- Activity line chart -->
<path d="M22 126 L55 118 L88 122 L121 104 L154 96 L187 84 L207 88" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M22 126 L55 118 L88 122 L121 104 L154 96 L187 84 L207 88 L207 138 L22 138 Z" fill="#375DFB" opacity=".06"/>
</svg>`,

  staffportal: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- Login card -->
<rect x="22" y="16" width="86" height="58" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<!-- Avatar -->
<circle cx="65" cy="32" r="9" fill="#375DFB" opacity=".18"/>
<circle cx="65" cy="30" r="5" fill="#375DFB" opacity=".4"/>
<path d="M52 46 Q55 40 65 40 Q75 40 78 46" fill="#375DFB" opacity=".25"/>
<!-- Input fields -->
<rect x="30" y="50" width="70" height="6" rx="3" fill="#E5EBFF"/>
<rect x="30" y="60" width="70" height="6" rx="3" fill="#E5EBFF"/>
<!-- Login button -->
<rect x="38" y="68" width="54" height="8" rx="4" fill="#375DFB" opacity=".7"/>
</svg>`,

  scanlist: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- Header -->
<rect x="14" y="14" width="88" height="8" rx="4" fill="#375DFB" opacity=".1"/>
<text x="18" y="21" font-size="7" font-family="system-ui" font-weight="600" fill="#375DFB">Checked-In Attendees</text>
<rect x="106" y="14" width="14" height="8" rx="4" fill="#22c55e" opacity=".15"/>
<text x="108" y="21" font-size="7" font-family="system-ui" font-weight="600" fill="#22c55e">CSV</text>
<!-- Row 1 -->
<circle cx="22" cy="36" r="4" fill="#375DFB" opacity=".3"/>
<rect x="30" y="32" width="46" height="4" rx="2" fill="#22272F" opacity=".4"/>
<rect x="30" y="38" width="32" height="3" rx="1.5" fill="#375DFB" opacity=".2"/>
<text x="88" y="38" font-size="6.5" font-family="system-ui" fill="#22c55e">09:04</text>
<!-- Row 2 -->
<circle cx="22" cy="52" r="4" fill="#9F81FF" opacity=".3"/>
<rect x="30" y="48" width="50" height="4" rx="2" fill="#22272F" opacity=".3"/>
<rect x="30" y="54" width="36" height="3" rx="1.5" fill="#9F81FF" opacity=".2"/>
<text x="88" y="54" font-size="6.5" font-family="system-ui" fill="#22c55e">09:07</text>
<!-- Row 3 -->
<circle cx="22" cy="68" r="4" fill="#10B981" opacity=".3"/>
<rect x="30" y="64" width="42" height="4" rx="2" fill="#22272F" opacity=".3"/>
<rect x="30" y="70" width="28" height="3" rx="1.5" fill="#10B981" opacity=".2"/>
<text x="88" y="70" font-size="6.5" font-family="system-ui" fill="#22c55e">09:12</text>
</svg>`,

  badgeprint: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- Printer body -->
<rect x="24" y="34" width="82" height="30" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="32" y="28" width="66" height="10" rx="3" fill="#E5EBFF"/>
<!-- Paper coming out -->
<rect x="36" y="60" width="58" height="18" rx="4" fill="#FFFFFF" stroke="#375DFB" stroke-width="1.2"/>
<rect x="42" y="64" width="30" height="3" rx="1.5" fill="#375DFB" opacity=".3"/>
<rect x="42" y="70" width="22" height="3" rx="1.5" fill="#9F81FF" opacity=".3"/>
<rect x="78" y="64" width="10" height="10" rx="2" fill="#375DFB" opacity=".15"/>
<!-- Print dots -->
<circle cx="76" cy="48" r="2" fill="#375DFB" opacity=".4"/>
<circle cx="83" cy="48" r="2" fill="#375DFB" opacity=".25"/>
<circle cx="90" cy="48" r="2" fill="#375DFB" opacity=".15"/>
</svg>`,

  livestats: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- Radial gauge -->
<circle cx="65" cy="46" r="26" fill="none" stroke="#E5EBFF" stroke-width="7"/>
<path d="M65 20 a26 26 0 0 1 22.5 39" fill="none" stroke="#375DFB" stroke-width="7" stroke-linecap="round"/>
<text x="54" y="50" font-size="12" font-family="system-ui" font-weight="700" fill="#375DFB">77%</text>
<!-- Live indicator -->
<circle cx="22" cy="18" r="3.5" fill="#22c55e"/>
<text x="28" y="21" font-size="7" font-family="system-ui" font-weight="700" fill="#22c55e">LIVE</text>
</svg>`,
};
