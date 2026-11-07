// Inline SVG illustrations for the Call for Papers bento grid.
// Static coded mockups (CFP theme) — motion comes from the card hover float.
// viewBox ~220x150 for hero (tall) cards, ~130x90 for small cards.

export const cfpbIllustrations: Record<string, string> = {
  /* ── Tab 1: Submission Portal ─────────────────────────── */
  // hero
  submit: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" stroke-width="1.5" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="20" y="22" width="140" height="90" rx="10" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<rect x="30" y="32" width="60" height="6" rx="3" opacity=".4" style="fill:var(--ds-blue)"/>
<rect x="30" y="44" width="120" height="8" rx="4" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="30" y="58" width="120" height="8" rx="4" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="30" y="72" width="120" height="24" rx="4" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="80" y="100" width="48" height="8" rx="4" opacity=".85" style="fill:var(--ds-blue)"/>
<rect x="152" y="80" width="48" height="32" rx="8" opacity=".12" stroke-width="1" style="fill:var(--ds-success);stroke:var(--ds-success)"/>
<path d="M162 96 l5 5 10-10" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--ds-success)"/>
<text x="160" y="106" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-success)">Submitted</text>
</svg>`,

  authorport: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="16" y="20" width="98" height="18" rx="6" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<circle cx="27" cy="29" r="5" opacity=".7" style="fill:var(--ds-warning)"/>
<rect x="36" y="24" width="50" height="4" rx="2" opacity=".35" style="fill:var(--ds-ink)"/>
<rect x="36" y="31" width="30" height="3" rx="1.5" style="fill:color-mix(in srgb, var(--ds-label) 65%, white)"/>
<rect x="16" y="44" width="98" height="18" rx="6" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<circle cx="27" cy="53" r="5" opacity=".7" style="fill:var(--ds-success)"/>
<rect x="36" y="48" width="60" height="4" rx="2" opacity=".35" style="fill:var(--ds-ink)"/>
<rect x="36" y="55" width="36" height="3" rx="1.5" style="fill:color-mix(in srgb, var(--ds-label) 65%, white)"/>
</svg>`,

  fileup: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="22" y="14" width="86" height="54" rx="8" stroke-width="1.5" stroke-dasharray="4 3" style="fill:var(--ds-white);stroke:var(--ds-blue)"/>
<path d="M65 28 L65 46 M58 35 L65 28 L72 35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--ds-blue)"/>
<rect x="28" y="60" width="26" height="10" rx="4" opacity=".12" stroke-width="1" style="fill:var(--ds-danger);stroke:var(--ds-danger)"/>
<text x="32" y="68" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-danger)">PDF</text>
<rect x="60" y="60" width="26" height="10" rx="4" opacity=".12" stroke-width="1" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<text x="63" y="68" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">DOC</text>
<rect x="92" y="60" width="26" height="10" rx="4" opacity=".12" stroke-width="1" style="fill:var(--ds-violet);stroke:var(--ds-violet)"/>
<text x="95" y="68" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-violet)">TEX</text>
</svg>`,

  deadline: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="16" y="14" width="98" height="64" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<rect x="24" y="22" width="50" height="5" rx="2.5" opacity=".5" style="fill:var(--ds-blue)"/>
<rect x="24" y="34" width="12" height="10" rx="2" style="fill:var(--ds-surface-tint)"/>
<rect x="40" y="34" width="12" height="10" rx="2" style="fill:var(--ds-surface-tint)"/>
<rect x="56" y="34" width="12" height="10" rx="2" style="fill:var(--ds-surface-tint)"/>
<rect x="72" y="34" width="12" height="10" rx="2" style="fill:var(--ds-surface-tint)"/>
<rect x="88" y="34" width="12" height="10" rx="2" style="fill:var(--ds-surface-tint)"/>
<rect x="24" y="50" width="12" height="10" rx="2" style="fill:var(--ds-surface-tint)"/>
<rect x="40" y="50" width="12" height="10" rx="2" opacity=".25" style="fill:var(--ds-blue)"/>
<rect x="56" y="50" width="12" height="10" rx="2" style="fill:var(--ds-surface-tint)"/>
<rect x="72" y="50" width="12" height="10" rx="2" opacity=".25" style="fill:var(--ds-danger)"/>
<rect x="88" y="50" width="12" height="10" rx="2" style="fill:var(--ds-surface-tint)"/>
<text x="73" y="58" font-size="5.5" font-family="system-ui" font-weight="700" style="fill:var(--ds-danger)">!</text>
</svg>`,

  coauthor: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<circle cx="32" cy="42" r="14" opacity=".15" stroke-width="1.5" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<circle cx="32" cy="38" r="5" opacity=".6" style="fill:var(--ds-blue)"/>
<path d="M22 52 a10 8 0 0 1 20 0" opacity=".4" style="fill:var(--ds-blue)"/>
<line x1="46" y1="42" x2="54" y2="42" stroke-width="2" style="stroke:var(--ds-surface-tint)"/>
<circle cx="65" cy="42" r="14" opacity=".12" stroke-width="1.5" style="fill:var(--ds-violet);stroke:var(--ds-violet)"/>
<circle cx="65" cy="38" r="5" opacity=".7" style="fill:var(--ds-violet)"/>
<path d="M55 52 a10 8 0 0 1 20 0" opacity=".4" style="fill:var(--ds-violet)"/>
<line x1="79" y1="42" x2="87" y2="42" stroke-width="2" style="stroke:var(--ds-surface-tint)"/>
<circle cx="98" cy="42" r="14" opacity=".12" stroke-width="1.5" style="fill:var(--ds-success);stroke:var(--ds-success)"/>
<circle cx="98" cy="38" r="5" opacity=".7" style="fill:var(--ds-success)"/>
<path d="M88 52 a10 8 0 0 1 20 0" opacity=".4" style="fill:var(--ds-success)"/>
</svg>`,

  /* ── Tab 2: Peer Review ───────────────────────────────── */
  // hero
  review: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" stroke-width="1.5" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="20" y="26" width="180" height="28" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<circle cx="36" cy="40" r="8" opacity=".3" style="fill:var(--ds-blue)"/>
<rect x="50" y="33" width="60" height="5" rx="2.5" opacity=".4" style="fill:var(--ds-ink)"/>
<rect x="50" y="41" width="40" height="4" rx="2" style="fill:color-mix(in srgb, var(--ds-label) 65%, white)"/>
<text x="136" y="44" font-size="11" font-family="system-ui" style="fill:var(--ds-warning)">★★★★☆</text>
<rect x="20" y="62" width="180" height="28" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<circle cx="36" cy="76" r="8" opacity=".3" style="fill:var(--ds-violet)"/>
<rect x="50" y="69" width="70" height="5" rx="2.5" opacity=".4" style="fill:var(--ds-ink)"/>
<rect x="50" y="77" width="44" height="4" rx="2" style="fill:color-mix(in srgb, var(--ds-label) 65%, white)"/>
<text x="136" y="80" font-size="11" font-family="system-ui" style="fill:var(--ds-warning)">★★★★★</text>
<rect x="20" y="98" width="180" height="28" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<circle cx="36" cy="112" r="8" opacity=".3" style="fill:var(--ds-success)"/>
<rect x="50" y="105" width="54" height="5" rx="2.5" opacity=".4" style="fill:var(--ds-ink)"/>
<rect x="50" y="113" width="36" height="4" rx="2" style="fill:color-mix(in srgb, var(--ds-label) 65%, white)"/>
<text x="136" y="116" font-size="11" font-family="system-ui" style="fill:var(--ds-warning)">★★★☆☆</text>
</svg>`,

  blindrev: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="16" y="18" width="44" height="52" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<circle cx="38" cy="34" r="8" opacity=".4" style="fill:color-mix(in srgb, var(--ds-cat-slate) 70%, white)"/>
<rect x="22" y="46" width="32" height="4" rx="2" style="fill:var(--ds-surface-tint)"/>
<rect x="24" y="14" width="28" height="10" rx="5" opacity=".15" style="fill:var(--ds-blue)"/>
<text x="28" y="22" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">?</text>
<rect x="70" y="18" width="44" height="52" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<circle cx="92" cy="34" r="8" opacity=".4" style="fill:var(--ds-violet)"/>
<rect x="76" y="46" width="32" height="4" rx="2" style="fill:var(--ds-surface-tint)"/>
<rect x="78" y="14" width="28" height="10" rx="5" opacity=".15" style="fill:var(--ds-violet)"/>
<text x="86" y="22" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-violet)">?</text>
</svg>`,

  rubric: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="16" y="18" width="40" height="5" rx="2.5" opacity=".4" style="fill:var(--ds-ink)"/>
<rect x="62" y="16" width="9" height="9" rx="2" opacity=".8" style="fill:var(--ds-blue)"/>
<rect x="74" y="16" width="9" height="9" rx="2" opacity=".8" style="fill:var(--ds-blue)"/>
<rect x="86" y="16" width="9" height="9" rx="2" opacity=".8" style="fill:var(--ds-blue)"/>
<rect x="98" y="16" width="9" height="9" rx="2" opacity=".8" style="fill:var(--ds-blue)"/>
<rect x="110" y="16" width="9" height="9" rx="2" style="fill:var(--ds-surface-tint)"/>
<rect x="16" y="34" width="40" height="5" rx="2.5" opacity=".3" style="fill:var(--ds-ink)"/>
<rect x="62" y="32" width="9" height="9" rx="2" opacity=".8" style="fill:var(--ds-violet)"/>
<rect x="74" y="32" width="9" height="9" rx="2" opacity=".8" style="fill:var(--ds-violet)"/>
<rect x="86" y="32" width="9" height="9" rx="2" opacity=".8" style="fill:var(--ds-violet)"/>
<rect x="98" y="32" width="9" height="9" rx="2" style="fill:var(--ds-surface-tint)"/>
<rect x="110" y="32" width="9" height="9" rx="2" style="fill:var(--ds-surface-tint)"/>
<rect x="16" y="50" width="40" height="5" rx="2.5" opacity=".3" style="fill:var(--ds-ink)"/>
<rect x="62" y="48" width="9" height="9" rx="2" opacity=".8" style="fill:var(--ds-success)"/>
<rect x="74" y="48" width="9" height="9" rx="2" opacity=".8" style="fill:var(--ds-success)"/>
<rect x="86" y="48" width="9" height="9" rx="2" opacity=".8" style="fill:var(--ds-success)"/>
<rect x="98" y="48" width="9" height="9" rx="2" opacity=".8" style="fill:var(--ds-success)"/>
<rect x="110" y="48" width="9" height="9" rx="2" opacity=".8" style="fill:var(--ds-success)"/>
</svg>`,

  conflict: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<circle cx="30" cy="45" r="14" opacity=".12" stroke-width="1.5" style="fill:var(--ds-warning);stroke:var(--ds-warning)"/>
<path d="M30 36 l0 8 M30 47 l0 2" stroke-width="2.5" stroke-linecap="round" style="stroke:var(--ds-warning)"/>
<path d="M40 45 L56 45" stroke-width="2" stroke-linecap="round" style="stroke:var(--ds-blue)"/>
<polygon points="56,40 64,45 56,50" style="fill:var(--ds-blue)"/>
<circle cx="80" cy="45" r="14" opacity=".12" stroke-width="1.5" style="fill:var(--ds-success);stroke:var(--ds-success)"/>
<path d="M72 45 l6 6 10-10" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--ds-success)"/>
<text x="96" y="36" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-success)">New</text>
<text x="96" y="46" font-size="7" font-family="system-ui" style="fill:var(--ds-success)">Reviewer</text>
</svg>`,

  reminder: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="22" y="18" width="86" height="54" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<rect x="30" y="26" width="50" height="5" rx="2.5" opacity=".35" style="fill:var(--ds-blue)"/>
<rect x="30" y="36" width="70" height="3.5" rx="1.75" style="fill:color-mix(in srgb, var(--ds-label) 65%, white)"/>
<rect x="30" y="43" width="60" height="3.5" rx="1.75" style="fill:color-mix(in srgb, var(--ds-label) 65%, white)"/>
<rect x="74" y="52" width="26" height="8" rx="4" opacity=".2" stroke-width="1" style="fill:var(--ds-warning);stroke:var(--ds-warning)"/>
<text x="79" y="59" font-size="6.5" font-family="system-ui" font-weight="700" style="fill:var(--ds-warning)">2d left</text>
<circle cx="100" cy="20" r="8" opacity=".12" stroke-width="1" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<path d="M100 14 l0 6 3 2" stroke-width="1.5" stroke-linecap="round" style="stroke:var(--ds-blue)"/>
</svg>`,

  /* ── Tab 3: Decision & Publishing ─────────────────────── */
  // hero
  decision: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" stroke-width="1.5" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="20" y="22" width="180" height="24" rx="7" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<rect x="30" y="30" width="80" height="4" rx="2" opacity=".35" style="fill:var(--ds-ink)"/>
<text x="140" y="36" font-size="9" font-family="system-ui" font-weight="700" style="fill:var(--ds-ink)">4.7</text>
<rect x="166" y="26" width="24" height="12" rx="6" opacity=".15" style="fill:var(--ds-success)"/>
<text x="170" y="35" font-size="7.5" font-family="system-ui" font-weight="700" style="fill:var(--ds-success)">Accept</text>
<rect x="20" y="52" width="180" height="24" rx="7" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<rect x="30" y="60" width="70" height="4" rx="2" opacity=".3" style="fill:var(--ds-ink)"/>
<text x="140" y="66" font-size="9" font-family="system-ui" font-weight="700" style="fill:var(--ds-ink)">3.2</text>
<rect x="164" y="56" width="28" height="12" rx="6" opacity=".15" style="fill:var(--ds-warning)"/>
<text x="167" y="65" font-size="7.5" font-family="system-ui" font-weight="700" style="fill:var(--ds-warning)">Revise</text>
<rect x="20" y="82" width="180" height="24" rx="7" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<rect x="30" y="90" width="90" height="4" rx="2" opacity=".3" style="fill:var(--ds-ink)"/>
<text x="140" y="96" font-size="9" font-family="system-ui" font-weight="700" style="fill:var(--ds-ink)">1.8</text>
<rect x="164" y="86" width="28" height="12" rx="6" opacity=".12" style="fill:var(--ds-danger)"/>
<text x="168" y="95" font-size="7.5" font-family="system-ui" font-weight="700" style="fill:var(--ds-danger)">Reject</text>
<rect x="20" y="116" width="180" height="18" rx="9" opacity=".10" stroke-width="1" style="fill:var(--ds-success);stroke:var(--ds-success)"/>
<path d="M34 125 l5 5 8-8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--ds-success)"/>
<text x="50" y="128" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-success)">Emails sent to all 48 authors</text>
</svg>`,

  decemail: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="16" y="14" width="98" height="62" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<rect x="24" y="24" width="40" height="5" rx="2.5" opacity=".4" style="fill:var(--ds-ink)"/>
<rect x="24" y="34" width="82" height="3.5" rx="1.75" style="fill:color-mix(in srgb, var(--ds-label) 65%, white)"/>
<rect x="24" y="41" width="70" height="3.5" rx="1.75" style="fill:color-mix(in srgb, var(--ds-label) 65%, white)"/>
<rect x="24" y="48" width="76" height="3.5" rx="1.75" style="fill:color-mix(in srgb, var(--ds-label) 65%, white)"/>
<rect x="24" y="58" width="32" height="10" rx="5" opacity=".15" style="fill:var(--ds-success)"/>
<text x="28" y="66" font-size="7.5" font-family="system-ui" font-weight="700" style="fill:var(--ds-success)">Accepted</text>
</svg>`,

  sessassign: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="16" y="16" width="20" height="58" rx="4" opacity=".08" stroke-width="1" stroke-dasharray="3 2" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<text x="17" y="30" font-size="6" font-family="system-ui" font-weight="600" style="fill:var(--ds-blue)">09:00</text>
<text x="17" y="50" font-size="6" font-family="system-ui" font-weight="600" style="fill:var(--ds-blue)">10:30</text>
<text x="17" y="70" font-size="6" font-family="system-ui" font-weight="600" style="fill:var(--ds-blue)">12:00</text>
<rect x="40" y="20" width="72" height="18" rx="5" opacity=".12" stroke-width="1" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<rect x="44" y="25" width="44" height="4" rx="2" opacity=".6" style="fill:var(--ds-blue)"/>
<rect x="40" y="42" width="72" height="18" rx="5" opacity=".12" stroke-width="1" style="fill:var(--ds-violet);stroke:var(--ds-violet)"/>
<rect x="44" y="47" width="52" height="4" rx="2" opacity=".6" style="fill:var(--ds-violet)"/>
<rect x="40" y="64" width="72" height="14" rx="5" stroke-width="1" stroke-dasharray="4 3" style="fill:var(--ds-surface-tint);stroke:var(--ds-surface-tint)"/>
</svg>`,

  proceedings: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="28" y="10" width="74" height="72" rx="7" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<rect x="76" y="10" width="26" height="24" rx="0 7 0 0" style="fill:var(--ds-surface-tint)"/>
<path d="M76 10 L102 34 L76 34 Z" opacity=".12" style="fill:var(--ds-blue)"/>
<rect x="36" y="38" width="50" height="5" rx="2.5" opacity=".5" style="fill:var(--ds-blue)"/>
<rect x="36" y="48" width="58" height="3.5" rx="1.75" style="fill:color-mix(in srgb, var(--ds-label) 65%, white)"/>
<rect x="36" y="55" width="52" height="3.5" rx="1.75" style="fill:color-mix(in srgb, var(--ds-label) 65%, white)"/>
<rect x="36" y="62" width="44" height="3.5" rx="1.75" style="fill:color-mix(in srgb, var(--ds-label) 65%, white)"/>
<rect x="36" y="69" width="36" height="3.5" rx="1.75" style="fill:color-mix(in srgb, var(--ds-label) 65%, white)"/>
</svg>`,

  cameraready: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<circle cx="65" cy="44" r="26" fill="none" stroke-width="7" style="stroke:var(--ds-surface-tint)"/>
<path d="M65 18 a26 26 0 1 1 -0.01 0" fill="none" stroke-width="7" stroke-linecap="round" opacity=".8" style="stroke:var(--ds-success)"/>
<path d="M53 44 l7 7 13-13" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--ds-white)"/>
<text x="38" y="82" font-size="7.5" font-family="system-ui" font-weight="700" style="fill:var(--ds-success)">Upload Complete</text>
</svg>`,
};
