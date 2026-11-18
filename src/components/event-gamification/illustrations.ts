// Inline SVG illustrations for the Event Gamification bento grid.
// Static coded mockups (gamification theme) — motion comes from card hover float.
// viewBox ~220x150 for hero (tall) cards, ~130x90 for small cards.

export const egbIllustrations: Record<string, string> = {
  /* ── Tab 1: Games & Challenges ────────────────────────── */
  // hero
  games: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" stroke-width="1.5" style="fill:var(--ds-surface);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<!-- challenge list -->
<rect x="18" y="24" width="130" height="20" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<circle cx="30" cy="34" r="6" style="fill:var(--ds-success)"/><text x="27" y="37" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-white)">✓</text>
<rect x="42" y="31" width="60" height="4" rx="2" opacity=".18" style="fill:var(--ds-blue)"/>
<text x="168" y="38" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">+50</text>
<rect x="18" y="50" width="130" height="20" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<circle cx="30" cy="60" r="6" style="fill:var(--ds-success)"/><text x="27" y="63" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-white)">✓</text>
<rect x="42" y="57" width="50" height="4" rx="2" opacity=".18" style="fill:var(--ds-blue)"/>
<text x="168" y="64" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">+30</text>
<rect x="18" y="76" width="130" height="20" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<circle cx="30" cy="86" r="6" fill="none" stroke-width="1.5" opacity=".4" style="stroke:var(--ds-blue)"/>
<rect x="42" y="83" width="65" height="4" rx="2" opacity=".12" style="fill:var(--ds-blue)"/>
<text x="168" y="90" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-violet)">+40</text>
<rect x="18" y="102" width="130" height="20" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<circle cx="30" cy="112" r="6" fill="none" stroke-width="1.5" opacity=".4" style="stroke:var(--ds-blue)"/>
<rect x="42" y="109" width="44" height="4" rx="2" opacity=".12" style="fill:var(--ds-blue)"/>
<text x="168" y="116" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-violet)">+25</text>
<!-- QR badge -->
<rect x="156" y="22" width="46" height="46" rx="9" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<rect x="162" y="28" width="10" height="10" rx="2" style="fill:color-mix(in srgb, var(--ds-cat-blue) 30%, black)"/>
<rect x="176" y="28" width="10" height="10" rx="2" style="fill:color-mix(in srgb, var(--ds-cat-blue) 30%, black)"/>
<rect x="162" y="42" width="10" height="10" rx="2" style="fill:color-mix(in srgb, var(--ds-cat-blue) 30%, black)"/>
<rect x="176" y="38" width="4" height="4" rx="1" opacity=".6" style="fill:var(--ds-blue)"/>
<rect x="183" y="44" width="4" height="8" rx="1" style="fill:color-mix(in srgb, var(--ds-cat-blue) 30%, black)"/>
<text x="157" y="76" font-size="6" font-family="system-ui" font-weight="700" style="fill:color-mix(in srgb, var(--ds-cat-slate) 90%, black)">SCAN</text>
<!-- total pts -->
<rect x="18" y="128" width="90" height="8" rx="4" opacity=".09" style="fill:var(--ds-blue)"/>
</svg>`,

  templateg: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<rect x="14" y="14" width="46" height="28" rx="7" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<rect x="20" y="20" width="22" height="4" rx="2" opacity=".5" style="fill:var(--ds-blue)"/>
<rect x="20" y="28" width="34" height="3" rx="1.5" style="fill:color-mix(in srgb, var(--ds-cat-slate) 50%, white)"/>
<rect x="70" y="14" width="46" height="28" rx="7" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<rect x="76" y="20" width="22" height="4" rx="2" opacity=".6" style="fill:var(--ds-violet)"/>
<rect x="76" y="28" width="30" height="3" rx="1.5" style="fill:color-mix(in srgb, var(--ds-cat-slate) 50%, white)"/>
<rect x="14" y="50" width="46" height="28" rx="7" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<rect x="20" y="56" width="18" height="4" rx="2" opacity=".5" style="fill:var(--ds-success)"/>
<rect x="20" y="64" width="30" height="3" rx="1.5" style="fill:color-mix(in srgb, var(--ds-cat-slate) 50%, white)"/>
<rect x="70" y="50" width="46" height="28" rx="7" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<rect x="76" y="56" width="24" height="4" rx="2" opacity=".5" style="fill:var(--ds-warning)"/>
<rect x="76" y="64" width="28" height="3" rx="1.5" style="fill:color-mix(in srgb, var(--ds-cat-slate) 50%, white)"/>
</svg>`,

  custom: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<rect x="16" y="14" width="98" height="16" rx="5" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<rect x="22" y="19" width="38" height="5" rx="2.5" opacity=".4" style="fill:var(--ds-blue)"/>
<rect x="16" y="36" width="98" height="12" rx="5" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<circle cx="24" cy="42" r="4" style="fill:var(--ds-success)"/><rect x="32" y="40" width="44" height="3" rx="1.5" opacity=".2" style="fill:var(--ds-blue)"/>
<rect x="16" y="54" width="98" height="12" rx="5" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<circle cx="24" cy="60" r="4" style="fill:var(--ds-success)"/><rect x="32" y="58" width="32" height="3" rx="1.5" opacity=".2" style="fill:var(--ds-blue)"/>
<rect x="16" y="72" width="98" height="12" rx="5" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<circle cx="24" cy="78" r="4" fill="none" stroke-width="1.5" opacity=".4" style="stroke:var(--ds-blue)"/>
<rect x="32" y="76" width="52" height="3" rx="1.5" opacity=".1" style="fill:var(--ds-blue)"/>
</svg>`,

  points: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<circle cx="65" cy="44" r="26" stroke-width="1.5" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<text x="49" y="50" font-size="18" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">850</text>
<text x="51" y="62" font-size="7" font-family="system-ui" font-weight="600" style="fill:color-mix(in srgb, var(--ds-cat-slate) 90%, black)">POINTS</text>
<rect x="85" y="26" width="26" height="14" rx="7" opacity=".15" style="fill:var(--ds-success)"/>
<text x="91" y="36" font-size="8" font-family="system-ui" font-weight="700" style="fill:color-mix(in srgb, var(--ds-success) 80%, black)">+50</text>
</svg>`,

  timed: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<circle cx="65" cy="46" r="26" stroke-width="1.5" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<circle cx="65" cy="46" r="22" fill="none" stroke-width="4" stroke-dasharray="100 40" stroke-linecap="round" opacity=".2" style="stroke:var(--ds-blue)"/>
<line x1="65" y1="46" x2="65" y2="28" stroke-width="2.5" stroke-linecap="round" style="stroke:var(--ds-blue)"/>
<line x1="65" y1="46" x2="78" y2="50" stroke-width="2" stroke-linecap="round" style="stroke:var(--ds-cat-red)"/>
<circle cx="65" cy="46" r="2.5" style="fill:var(--ds-blue)"/>
<text x="42" y="82" font-size="10" font-family="ui-monospace,monospace" font-weight="700" style="fill:var(--ds-cat-red)">05:00</text>
</svg>`,

  /* ── Tab 2: Leaderboards & Rewards ────────────────────── */
  // hero
  leader: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" stroke-width="1.5" style="fill:var(--ds-surface);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<!-- podium -->
<rect x="28" y="88" width="42" height="42" rx="6" opacity=".2" stroke-width="1" style="fill:var(--ds-violet);stroke:var(--ds-violet)"/>
<text x="38" y="82" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-violet)">2nd</text>
<circle cx="49" cy="72" r="10" opacity=".25" style="fill:var(--ds-violet)"/>
<text x="43" y="115" font-size="10" font-family="system-ui" font-weight="700" style="fill:var(--ds-violet)">820</text>
<rect x="80" y="66" width="48" height="64" rx="6" opacity=".18" stroke-width="1" style="fill:var(--ds-warning);stroke:var(--ds-warning)"/>
<text x="88" y="60" font-size="9" font-family="system-ui" font-weight="700" style="fill:var(--ds-warning)">★ 1st</text>
<circle cx="104" cy="50" r="12" opacity=".3" style="fill:var(--ds-warning)"/>
<text x="90" y="100" font-size="11" font-family="system-ui" font-weight="800" style="fill:var(--ds-cat-amber)">1,240</text>
<rect x="138" y="100" width="42" height="30" rx="6" opacity=".12" stroke-width="1" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<text x="147" y="95" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">3rd</text>
<circle cx="159" cy="84" r="10" opacity=".2" style="fill:var(--ds-blue)"/>
<text x="143" y="122" font-size="10" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">690</text>
<!-- reward chip -->
<rect x="8" y="10" width="204" height="0" rx="14" fill="none"/>
<rect x="62" y="20" width="90" height="18" rx="9" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<text x="74" y="32" font-size="8" font-family="system-ui" font-weight="700" style="fill:color-mix(in srgb, var(--ds-cat-blue) 30%, black)">🏆 Rewards unlocked</text>
</svg>`,

  position: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<rect x="40" y="24" width="50" height="44" rx="8" opacity=".15" style="fill:var(--ds-warning)"/>
<rect x="46" y="18" width="38" height="8" rx="4" opacity=".3" style="fill:var(--ds-warning)"/>
<text x="55" y="55" font-size="18" font-family="system-ui" font-weight="800" style="fill:var(--ds-cat-amber)">#1</text>
<rect x="46" y="70" width="38" height="6" rx="3" opacity=".4" style="fill:var(--ds-warning)"/>
</svg>`,

  milestone: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<rect x="16" y="42" width="98" height="6" rx="3" opacity=".12" style="fill:var(--ds-blue)"/>
<rect x="16" y="42" width="73" height="6" rx="3" fill="url(#mgr)"/>
<defs><linearGradient id="mgr" x1="16" y1="45" x2="114" y2="45" gradientUnits="userSpaceOnUse"><stop style="stop-color:var(--ds-blue)"/><stop offset="1" style="stop-color:var(--ds-success)"/></linearGradient></defs>
<circle cx="49" cy="45" r="5" stroke-width="2" style="fill:var(--ds-success);stroke:var(--ds-white)"/>
<circle cx="82" cy="45" r="5" stroke-width="2" style="fill:var(--ds-success);stroke:var(--ds-white)"/>
<circle cx="105" cy="45" r="5" stroke-width="2" opacity=".35" style="fill:var(--ds-blue);stroke:var(--ds-white)"/>
<text x="28" y="60" font-size="7" font-family="system-ui" font-weight="600" style="fill:color-mix(in srgb, var(--ds-cat-slate) 90%, black)">250 pts</text>
<text x="60" y="60" font-size="7" font-family="system-ui" font-weight="600" style="fill:color-mix(in srgb, var(--ds-cat-slate) 90%, black)">500 pts</text>
<text x="88" y="60" font-size="7" font-family="system-ui" font-weight="600" style="fill:color-mix(in srgb, var(--ds-cat-slate) 90%, black)">750 pts</text>
<text x="36" y="30" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">75% complete</text>
</svg>`,

  draw: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<!-- wheel segments -->
<circle cx="65" cy="46" r="28" fill="none"/>
<path d="M65 46 L65 18 A28 28 0 0 1 93 46 Z" opacity=".55" style="fill:var(--ds-blue)"/>
<path d="M65 46 L93 46 A28 28 0 0 1 65 74 Z" opacity=".5" style="fill:var(--ds-success)"/>
<path d="M65 46 L65 74 A28 28 0 0 1 37 46 Z" opacity=".5" style="fill:var(--ds-warning)"/>
<path d="M65 46 L37 46 A28 28 0 0 1 65 18 Z" opacity=".5" style="fill:var(--ds-violet)"/>
<!-- dividers -->
<line x1="65" y1="18" x2="65" y2="74" stroke-width="1.5" style="stroke:var(--ds-white)"/>
<line x1="37" y1="46" x2="93" y2="46" stroke-width="1.5" style="stroke:var(--ds-white)"/>
<circle cx="65" cy="46" r="6" style="fill:var(--ds-white)"/>
<!-- pointer -->
<polygon points="65,10 61,18 69,18" style="fill:var(--ds-cat-red)"/>
</svg>`,

  fame: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<rect x="14" y="18" width="30" height="54" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<circle cx="29" cy="32" r="8" opacity=".3" style="fill:var(--ds-violet)"/>
<text x="24" y="48" font-size="8" font-family="system-ui" style="fill:var(--ds-warning)">★★★</text>
<rect x="50" y="18" width="30" height="54" rx="8" stroke-width="1.5" style="fill:var(--ds-white);stroke:var(--ds-warning)"/>
<circle cx="65" cy="32" r="9" opacity=".25" style="fill:var(--ds-warning)"/>
<text x="59" y="48" font-size="9" font-family="system-ui" style="fill:var(--ds-warning)">★★★</text>
<text x="56" y="64" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-cat-amber)">#1</text>
<rect x="86" y="18" width="30" height="54" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<circle cx="101" cy="32" r="8" opacity=".2" style="fill:var(--ds-blue)"/>
<text x="96" y="48" font-size="8" font-family="system-ui" style="fill:var(--ds-warning)">★★</text>
</svg>`,

  /* ── Tab 3: Analytics & Sponsor ROI ──────────────────── */
  // hero
  roi: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" stroke-width="1.5" style="fill:var(--ds-surface);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<!-- bar chart -->
<rect x="24" y="120" width="20" height="0" rx="0" fill="none"/>
<rect x="24" y="88" width="20" height="42" rx="4" opacity=".4" style="fill:var(--ds-blue)"/>
<rect x="52" y="68" width="20" height="62" rx="4" opacity=".55" style="fill:var(--ds-blue)"/>
<rect x="80" y="96" width="20" height="34" rx="4" opacity=".45" style="fill:var(--ds-violet)"/>
<rect x="108" y="56" width="20" height="74" rx="4" opacity=".7" style="fill:var(--ds-blue)"/>
<rect x="136" y="76" width="20" height="54" rx="4" opacity=".5" style="fill:var(--ds-blue)"/>
<text x="24" y="140" font-size="6" font-family="system-ui" style="fill:color-mix(in srgb, var(--ds-sub) 60%, white)">Q1</text>
<text x="52" y="140" font-size="6" font-family="system-ui" style="fill:color-mix(in srgb, var(--ds-sub) 60%, white)">Q2</text>
<text x="80" y="140" font-size="6" font-family="system-ui" style="fill:color-mix(in srgb, var(--ds-sub) 60%, white)">Q3</text>
<text x="108" y="140" font-size="6" font-family="system-ui" style="fill:color-mix(in srgb, var(--ds-sub) 60%, white)">Q4</text>
<text x="136" y="140" font-size="6" font-family="system-ui" style="fill:color-mix(in srgb, var(--ds-sub) 60%, white)">Q5</text>
<!-- ROI badge -->
<rect x="162" y="40" width="44" height="30" rx="8" opacity=".12" stroke-width="1" style="fill:var(--ds-success);stroke:var(--ds-success)"/>
<text x="170" y="58" font-size="12" font-family="system-ui" font-weight="800" style="fill:var(--ds-success)">3x</text>
<text x="167" y="68" font-size="6" font-family="system-ui" font-weight="600" style="fill:var(--ds-success)">ROI</text>
<!-- trend line -->
<path d="M24 88 L52 68 L80 96 L108 56 L136 76 L172 52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity=".6" style="stroke:var(--ds-blue)"/>
<circle cx="108" cy="56" r="3.5" style="fill:var(--ds-blue)"/>
<!-- label -->
<rect x="162" y="78" width="44" height="10" rx="5" opacity=".1" style="fill:var(--ds-blue)"/>
<text x="166" y="86" font-size="6" font-family="system-ui" font-weight="600" style="fill:var(--ds-blue)">Sponsor ROI</text>
</svg>`,

  completion: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<circle cx="65" cy="46" r="26" fill="none" stroke-width="7" style="stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<path d="M65 20 a26 26 0 1 1 -18 44" fill="none" stroke-width="7" stroke-linecap="round" style="stroke:var(--ds-blue)"/>
<text x="52" y="50" font-size="13" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">78%</text>
</svg>`,

  topplay: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<rect x="16" y="18" width="98" height="18" rx="7" stroke-width="1.5" style="fill:var(--ds-white);stroke:var(--ds-warning)"/>
<circle cx="28" cy="27" r="6" opacity=".4" style="fill:var(--ds-warning)"/>
<text x="38" y="30" font-size="8" font-family="system-ui" font-weight="700" style="fill:color-mix(in srgb, var(--ds-cat-blue) 30%, black)">1,240 pts</text>
<text x="90" y="30" font-size="7" font-family="system-ui" style="fill:var(--ds-warning)">★#1</text>
<rect x="16" y="42" width="98" height="14" rx="6" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<circle cx="28" cy="49" r="5" opacity=".3" style="fill:var(--ds-violet)"/>
<text x="38" y="52" font-size="7" font-family="system-ui" style="fill:color-mix(in srgb, var(--ds-cat-slate) 90%, black)">820 pts</text>
<text x="92" y="52" font-size="7" font-family="system-ui" style="fill:var(--ds-violet)">#2</text>
<rect x="16" y="62" width="98" height="14" rx="6" stroke-width="1" style="fill:var(--ds-white);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<circle cx="28" cy="69" r="5" opacity=".2" style="fill:var(--ds-blue)"/>
<text x="38" y="72" font-size="7" font-family="system-ui" style="fill:color-mix(in srgb, var(--ds-cat-slate) 90%, black)">690 pts</text>
<text x="92" y="72" font-size="7" font-family="system-ui" style="fill:var(--ds-blue)">#3</text>
</svg>`,

  heatmapg: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<rect x="16" y="16" width="28" height="18" rx="4" opacity=".2" style="fill:var(--ds-blue)"/>
<rect x="50" y="16" width="28" height="18" rx="4" opacity=".5" style="fill:var(--ds-blue)"/>
<rect x="84" y="16" width="28" height="18" rx="4" opacity=".9" style="fill:var(--ds-blue)"/>
<rect x="16" y="40" width="28" height="18" rx="4" opacity=".7" style="fill:var(--ds-blue)"/>
<rect x="50" y="40" width="28" height="18" rx="4" opacity="1" style="fill:var(--ds-blue)"/>
<rect x="84" y="40" width="28" height="18" rx="4" opacity=".3" style="fill:var(--ds-blue)"/>
<rect x="16" y="64" width="28" height="14" rx="4" opacity=".4" style="fill:var(--ds-blue)"/>
<rect x="50" y="64" width="28" height="14" rx="4" opacity=".8" style="fill:var(--ds-blue)"/>
<rect x="84" y="64" width="28" height="14" rx="4" opacity=".6" style="fill:var(--ds-blue)"/>
</svg>`,

  sponsorroi: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:color-mix(in srgb, var(--ds-blue-hover) 10%, white)"/>
<text x="16" y="28" font-size="10" font-family="system-ui" font-weight="800" style="fill:var(--ds-success)">ROI 3.2x</text>
<rect x="16" y="36" width="94" height="8" rx="4" opacity=".12" style="fill:var(--ds-success)"/>
<rect x="16" y="36" width="72" height="8" rx="4" opacity=".5" style="fill:var(--ds-success)"/>
<text x="16" y="58" font-size="7" font-family="system-ui" font-weight="600" style="fill:color-mix(in srgb, var(--ds-cat-slate) 90%, black)">Booth visits</text>
<rect x="16" y="62" width="94" height="7" rx="3.5" opacity=".12" style="fill:var(--ds-blue)"/>
<rect x="16" y="62" width="60" height="7" rx="3.5" opacity=".45" style="fill:var(--ds-blue)"/>
<text x="16" y="80" font-size="7" font-family="system-ui" font-weight="600" style="fill:color-mix(in srgb, var(--ds-cat-slate) 90%, black)">Engagement</text>
<rect x="16" y="82" width="94" height="0" rx="0" fill="none"/>
</svg>`,
};
