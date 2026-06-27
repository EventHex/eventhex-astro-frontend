// Inline SVG illustrations for the Call for Papers bento grid.
// Static coded mockups (CFP theme) — motion comes from the card hover float.
// viewBox ~220x150 for hero (tall) cards, ~130x90 for small cards.

export const cfpbIllustrations: Record<string, string> = {
  /* ── Tab 1: Submission Portal ─────────────────────────── */
  // hero
  submit: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="20" y="22" width="140" height="90" rx="10" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="30" y="32" width="60" height="6" rx="3" fill="#375DFB" opacity=".4"/>
<rect x="30" y="44" width="120" height="8" rx="4" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="30" y="58" width="120" height="8" rx="4" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="30" y="72" width="120" height="24" rx="4" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="80" y="100" width="48" height="8" rx="4" fill="#375DFB" opacity=".85"/>
<rect x="152" y="80" width="48" height="32" rx="8" fill="#10B981" opacity=".12" stroke="#10B981" stroke-width="1"/>
<path d="M162 96 l5 5 10-10" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<text x="160" y="106" font-size="7" font-family="system-ui" font-weight="700" fill="#10B981">Submitted</text>
</svg>`,

  authorport: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="20" width="98" height="18" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="27" cy="29" r="5" fill="#F59E0B" opacity=".7"/>
<rect x="36" y="24" width="50" height="4" rx="2" fill="#22272F" opacity=".35"/>
<rect x="36" y="31" width="30" height="3" rx="1.5" fill="#B4BAC6"/>
<rect x="16" y="44" width="98" height="18" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="27" cy="53" r="5" fill="#10B981" opacity=".7"/>
<rect x="36" y="48" width="60" height="4" rx="2" fill="#22272F" opacity=".35"/>
<rect x="36" y="55" width="36" height="3" rx="1.5" fill="#B4BAC6"/>
</svg>`,

  fileup: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="22" y="14" width="86" height="54" rx="8" fill="#FFFFFF" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="4 3"/>
<path d="M65 28 L65 46 M58 35 L65 28 L72 35" stroke="#375DFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="28" y="60" width="26" height="10" rx="4" fill="#EF4444" opacity=".12" stroke="#EF4444" stroke-width="1"/>
<text x="32" y="68" font-size="7" font-family="system-ui" font-weight="700" fill="#EF4444">PDF</text>
<rect x="60" y="60" width="26" height="10" rx="4" fill="#375DFB" opacity=".12" stroke="#375DFB" stroke-width="1"/>
<text x="63" y="68" font-size="7" font-family="system-ui" font-weight="700" fill="#375DFB">DOC</text>
<rect x="92" y="60" width="26" height="10" rx="4" fill="#9F81FF" opacity=".12" stroke="#9F81FF" stroke-width="1"/>
<text x="95" y="68" font-size="7" font-family="system-ui" font-weight="700" fill="#9F81FF">TEX</text>
</svg>`,

  deadline: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="14" width="98" height="64" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="24" y="22" width="50" height="5" rx="2.5" fill="#375DFB" opacity=".5"/>
<rect x="24" y="34" width="12" height="10" rx="2" fill="#E5EBFF"/>
<rect x="40" y="34" width="12" height="10" rx="2" fill="#E5EBFF"/>
<rect x="56" y="34" width="12" height="10" rx="2" fill="#E5EBFF"/>
<rect x="72" y="34" width="12" height="10" rx="2" fill="#E5EBFF"/>
<rect x="88" y="34" width="12" height="10" rx="2" fill="#E5EBFF"/>
<rect x="24" y="50" width="12" height="10" rx="2" fill="#E5EBFF"/>
<rect x="40" y="50" width="12" height="10" rx="2" fill="#375DFB" opacity=".25"/>
<rect x="56" y="50" width="12" height="10" rx="2" fill="#E5EBFF"/>
<rect x="72" y="50" width="12" height="10" rx="2" fill="#EF4444" opacity=".25"/>
<rect x="88" y="50" width="12" height="10" rx="2" fill="#E5EBFF"/>
<text x="73" y="58" font-size="5.5" font-family="system-ui" font-weight="700" fill="#EF4444">!</text>
</svg>`,

  coauthor: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="32" cy="42" r="14" fill="#375DFB" opacity=".15" stroke="#375DFB" stroke-width="1.5"/>
<circle cx="32" cy="38" r="5" fill="#375DFB" opacity=".6"/>
<path d="M22 52 a10 8 0 0 1 20 0" fill="#375DFB" opacity=".4"/>
<line x1="46" y1="42" x2="54" y2="42" stroke="#E5EBFF" stroke-width="2"/>
<circle cx="65" cy="42" r="14" fill="#9F81FF" opacity=".12" stroke="#9F81FF" stroke-width="1.5"/>
<circle cx="65" cy="38" r="5" fill="#9F81FF" opacity=".7"/>
<path d="M55 52 a10 8 0 0 1 20 0" fill="#9F81FF" opacity=".4"/>
<line x1="79" y1="42" x2="87" y2="42" stroke="#E5EBFF" stroke-width="2"/>
<circle cx="98" cy="42" r="14" fill="#10B981" opacity=".12" stroke="#10B981" stroke-width="1.5"/>
<circle cx="98" cy="38" r="5" fill="#10B981" opacity=".7"/>
<path d="M88 52 a10 8 0 0 1 20 0" fill="#10B981" opacity=".4"/>
</svg>`,

  /* ── Tab 2: Peer Review ───────────────────────────────── */
  // hero
  review: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="20" y="26" width="180" height="28" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="36" cy="40" r="8" fill="#375DFB" opacity=".3"/>
<rect x="50" y="33" width="60" height="5" rx="2.5" fill="#22272F" opacity=".4"/>
<rect x="50" y="41" width="40" height="4" rx="2" fill="#B4BAC6"/>
<text x="136" y="44" font-size="11" font-family="system-ui" fill="#F59E0B">★★★★☆</text>
<rect x="20" y="62" width="180" height="28" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="36" cy="76" r="8" fill="#9F81FF" opacity=".3"/>
<rect x="50" y="69" width="70" height="5" rx="2.5" fill="#22272F" opacity=".4"/>
<rect x="50" y="77" width="44" height="4" rx="2" fill="#B4BAC6"/>
<text x="136" y="80" font-size="11" font-family="system-ui" fill="#F59E0B">★★★★★</text>
<rect x="20" y="98" width="180" height="28" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="36" cy="112" r="8" fill="#10B981" opacity=".3"/>
<rect x="50" y="105" width="54" height="5" rx="2.5" fill="#22272F" opacity=".4"/>
<rect x="50" y="113" width="36" height="4" rx="2" fill="#B4BAC6"/>
<text x="136" y="116" font-size="11" font-family="system-ui" fill="#F59E0B">★★★☆☆</text>
</svg>`,

  blindrev: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="18" width="44" height="52" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="38" cy="34" r="8" fill="#94A3B8" opacity=".4"/>
<rect x="22" y="46" width="32" height="4" rx="2" fill="#E5EBFF"/>
<rect x="24" y="14" width="28" height="10" rx="5" fill="#375DFB" opacity=".15"/>
<text x="28" y="22" font-size="8" font-family="system-ui" font-weight="700" fill="#375DFB">?</text>
<rect x="70" y="18" width="44" height="52" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="92" cy="34" r="8" fill="#9F81FF" opacity=".4"/>
<rect x="76" y="46" width="32" height="4" rx="2" fill="#E5EBFF"/>
<rect x="78" y="14" width="28" height="10" rx="5" fill="#9F81FF" opacity=".15"/>
<text x="86" y="22" font-size="8" font-family="system-ui" font-weight="700" fill="#9F81FF">?</text>
</svg>`,

  rubric: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="18" width="40" height="5" rx="2.5" fill="#22272F" opacity=".4"/>
<rect x="62" y="16" width="9" height="9" rx="2" fill="#375DFB" opacity=".8"/>
<rect x="74" y="16" width="9" height="9" rx="2" fill="#375DFB" opacity=".8"/>
<rect x="86" y="16" width="9" height="9" rx="2" fill="#375DFB" opacity=".8"/>
<rect x="98" y="16" width="9" height="9" rx="2" fill="#375DFB" opacity=".8"/>
<rect x="110" y="16" width="9" height="9" rx="2" fill="#E5EBFF"/>
<rect x="16" y="34" width="40" height="5" rx="2.5" fill="#22272F" opacity=".3"/>
<rect x="62" y="32" width="9" height="9" rx="2" fill="#9F81FF" opacity=".8"/>
<rect x="74" y="32" width="9" height="9" rx="2" fill="#9F81FF" opacity=".8"/>
<rect x="86" y="32" width="9" height="9" rx="2" fill="#9F81FF" opacity=".8"/>
<rect x="98" y="32" width="9" height="9" rx="2" fill="#E5EBFF"/>
<rect x="110" y="32" width="9" height="9" rx="2" fill="#E5EBFF"/>
<rect x="16" y="50" width="40" height="5" rx="2.5" fill="#22272F" opacity=".3"/>
<rect x="62" y="48" width="9" height="9" rx="2" fill="#10B981" opacity=".8"/>
<rect x="74" y="48" width="9" height="9" rx="2" fill="#10B981" opacity=".8"/>
<rect x="86" y="48" width="9" height="9" rx="2" fill="#10B981" opacity=".8"/>
<rect x="98" y="48" width="9" height="9" rx="2" fill="#10B981" opacity=".8"/>
<rect x="110" y="48" width="9" height="9" rx="2" fill="#10B981" opacity=".8"/>
</svg>`,

  conflict: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="30" cy="45" r="14" fill="#F59E0B" opacity=".12" stroke="#F59E0B" stroke-width="1.5"/>
<path d="M30 36 l0 8 M30 47 l0 2" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
<path d="M40 45 L56 45" stroke="#375DFB" stroke-width="2" stroke-linecap="round"/>
<polygon points="56,40 64,45 56,50" fill="#375DFB"/>
<circle cx="80" cy="45" r="14" fill="#10B981" opacity=".12" stroke="#10B981" stroke-width="1.5"/>
<path d="M72 45 l6 6 10-10" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<text x="96" y="36" font-size="7" font-family="system-ui" font-weight="700" fill="#10B981">New</text>
<text x="96" y="46" font-size="7" font-family="system-ui" fill="#10B981">Reviewer</text>
</svg>`,

  reminder: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="22" y="18" width="86" height="54" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="30" y="26" width="50" height="5" rx="2.5" fill="#375DFB" opacity=".35"/>
<rect x="30" y="36" width="70" height="3.5" rx="1.75" fill="#B4BAC6"/>
<rect x="30" y="43" width="60" height="3.5" rx="1.75" fill="#B4BAC6"/>
<rect x="74" y="52" width="26" height="8" rx="4" fill="#F59E0B" opacity=".2" stroke="#F59E0B" stroke-width="1"/>
<text x="79" y="59" font-size="6.5" font-family="system-ui" font-weight="700" fill="#F59E0B">2d left</text>
<circle cx="100" cy="20" r="8" fill="#375DFB" opacity=".12" stroke="#375DFB" stroke-width="1"/>
<path d="M100 14 l0 6 3 2" stroke="#375DFB" stroke-width="1.5" stroke-linecap="round"/>
</svg>`,

  /* ── Tab 3: Decision & Publishing ─────────────────────── */
  // hero
  decision: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="20" y="22" width="180" height="24" rx="7" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="30" y="30" width="80" height="4" rx="2" fill="#22272F" opacity=".35"/>
<text x="140" y="36" font-size="9" font-family="system-ui" font-weight="700" fill="#22272F">4.7</text>
<rect x="166" y="26" width="24" height="12" rx="6" fill="#10B981" opacity=".15"/>
<text x="170" y="35" font-size="7.5" font-family="system-ui" font-weight="700" fill="#10B981">Accept</text>
<rect x="20" y="52" width="180" height="24" rx="7" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="30" y="60" width="70" height="4" rx="2" fill="#22272F" opacity=".3"/>
<text x="140" y="66" font-size="9" font-family="system-ui" font-weight="700" fill="#22272F">3.2</text>
<rect x="164" y="56" width="28" height="12" rx="6" fill="#F59E0B" opacity=".15"/>
<text x="167" y="65" font-size="7.5" font-family="system-ui" font-weight="700" fill="#F59E0B">Revise</text>
<rect x="20" y="82" width="180" height="24" rx="7" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="30" y="90" width="90" height="4" rx="2" fill="#22272F" opacity=".3"/>
<text x="140" y="96" font-size="9" font-family="system-ui" font-weight="700" fill="#22272F">1.8</text>
<rect x="164" y="86" width="28" height="12" rx="6" fill="#EF4444" opacity=".12"/>
<text x="168" y="95" font-size="7.5" font-family="system-ui" font-weight="700" fill="#EF4444">Reject</text>
<rect x="20" y="116" width="180" height="18" rx="9" fill="#10B981" opacity=".10" stroke="#10B981" stroke-width="1"/>
<path d="M34 125 l5 5 8-8" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<text x="50" y="128" font-size="8" font-family="system-ui" font-weight="700" fill="#10B981">Emails sent to all 48 authors</text>
</svg>`,

  decemail: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="14" width="98" height="62" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="24" y="24" width="40" height="5" rx="2.5" fill="#22272F" opacity=".4"/>
<rect x="24" y="34" width="82" height="3.5" rx="1.75" fill="#B4BAC6"/>
<rect x="24" y="41" width="70" height="3.5" rx="1.75" fill="#B4BAC6"/>
<rect x="24" y="48" width="76" height="3.5" rx="1.75" fill="#B4BAC6"/>
<rect x="24" y="58" width="32" height="10" rx="5" fill="#10B981" opacity=".15"/>
<text x="28" y="66" font-size="7.5" font-family="system-ui" font-weight="700" fill="#10B981">Accepted</text>
</svg>`,

  sessassign: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="16" width="20" height="58" rx="4" fill="#375DFB" opacity=".08" stroke="#375DFB" stroke-width="1" stroke-dasharray="3 2"/>
<text x="17" y="30" font-size="6" font-family="system-ui" fill="#375DFB" font-weight="600">09:00</text>
<text x="17" y="50" font-size="6" font-family="system-ui" fill="#375DFB" font-weight="600">10:30</text>
<text x="17" y="70" font-size="6" font-family="system-ui" fill="#375DFB" font-weight="600">12:00</text>
<rect x="40" y="20" width="72" height="18" rx="5" fill="#375DFB" opacity=".12" stroke="#375DFB" stroke-width="1"/>
<rect x="44" y="25" width="44" height="4" rx="2" fill="#375DFB" opacity=".6"/>
<rect x="40" y="42" width="72" height="18" rx="5" fill="#9F81FF" opacity=".12" stroke="#9F81FF" stroke-width="1"/>
<rect x="44" y="47" width="52" height="4" rx="2" fill="#9F81FF" opacity=".6"/>
<rect x="40" y="64" width="72" height="14" rx="5" fill="#E5EBFF" stroke="#E5EBFF" stroke-width="1" stroke-dasharray="4 3"/>
</svg>`,

  proceedings: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="28" y="10" width="74" height="72" rx="7" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="76" y="10" width="26" height="24" rx="0 7 0 0" fill="#E5EBFF"/>
<path d="M76 10 L102 34 L76 34 Z" fill="#375DFB" opacity=".12"/>
<rect x="36" y="38" width="50" height="5" rx="2.5" fill="#375DFB" opacity=".5"/>
<rect x="36" y="48" width="58" height="3.5" rx="1.75" fill="#B4BAC6"/>
<rect x="36" y="55" width="52" height="3.5" rx="1.75" fill="#B4BAC6"/>
<rect x="36" y="62" width="44" height="3.5" rx="1.75" fill="#B4BAC6"/>
<rect x="36" y="69" width="36" height="3.5" rx="1.75" fill="#B4BAC6"/>
</svg>`,

  cameraready: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="65" cy="44" r="26" fill="none" stroke="#E5EBFF" stroke-width="7"/>
<path d="M65 18 a26 26 0 1 1 -0.01 0" fill="none" stroke="#10B981" stroke-width="7" stroke-linecap="round" opacity=".8"/>
<path d="M53 44 l7 7 13-13" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<text x="38" y="82" font-size="7.5" font-family="system-ui" font-weight="700" fill="#10B981">Upload Complete</text>
</svg>`,
};
