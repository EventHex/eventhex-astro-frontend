// Inline SVG illustrations for the Event Gamification bento grid.
// Static coded mockups (gamification theme) — motion comes from card hover float.
// viewBox ~220x150 for hero (tall) cards, ~130x90 for small cards.

export const egbIllustrations: Record<string, string> = {
  /* ── Tab 1: Games & Challenges ────────────────────────── */
  // hero
  games: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<!-- challenge list -->
<rect x="18" y="24" width="130" height="20" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="30" cy="34" r="6" fill="#22C55E"/><text x="27" y="37" font-size="7" font-family="system-ui" font-weight="700" fill="#fff">✓</text>
<rect x="42" y="31" width="60" height="4" rx="2" fill="#375DFB" opacity=".18"/>
<text x="168" y="38" font-size="8" font-family="system-ui" font-weight="700" fill="#375DFB">+50</text>
<rect x="18" y="50" width="130" height="20" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="30" cy="60" r="6" fill="#22C55E"/><text x="27" y="63" font-size="7" font-family="system-ui" font-weight="700" fill="#fff">✓</text>
<rect x="42" y="57" width="50" height="4" rx="2" fill="#375DFB" opacity=".18"/>
<text x="168" y="64" font-size="8" font-family="system-ui" font-weight="700" fill="#375DFB">+30</text>
<rect x="18" y="76" width="130" height="20" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="30" cy="86" r="6" fill="none" stroke="#375DFB" stroke-width="1.5" opacity=".4"/>
<rect x="42" y="83" width="65" height="4" rx="2" fill="#375DFB" opacity=".12"/>
<text x="168" y="90" font-size="8" font-family="system-ui" font-weight="700" fill="#9F81FF">+40</text>
<rect x="18" y="102" width="130" height="20" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="30" cy="112" r="6" fill="none" stroke="#375DFB" stroke-width="1.5" opacity=".4"/>
<rect x="42" y="109" width="44" height="4" rx="2" fill="#375DFB" opacity=".12"/>
<text x="168" y="116" font-size="8" font-family="system-ui" font-weight="700" fill="#9F81FF">+25</text>
<!-- QR badge -->
<rect x="156" y="22" width="46" height="46" rx="9" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="162" y="28" width="10" height="10" rx="2" fill="#14213B"/>
<rect x="176" y="28" width="10" height="10" rx="2" fill="#14213B"/>
<rect x="162" y="42" width="10" height="10" rx="2" fill="#14213B"/>
<rect x="176" y="38" width="4" height="4" rx="1" fill="#375DFB" opacity=".6"/>
<rect x="183" y="44" width="4" height="8" rx="1" fill="#14213B"/>
<text x="157" y="76" font-size="6" font-family="system-ui" font-weight="700" fill="#45608E">SCAN</text>
<!-- total pts -->
<rect x="18" y="128" width="90" height="8" rx="4" fill="#375DFB" opacity=".09"/>
</svg>`,

  templateg: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="14" y="14" width="46" height="28" rx="7" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="20" y="20" width="22" height="4" rx="2" fill="#375DFB" opacity=".5"/>
<rect x="20" y="28" width="34" height="3" rx="1.5" fill="#B4BAC6"/>
<rect x="70" y="14" width="46" height="28" rx="7" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="76" y="20" width="22" height="4" rx="2" fill="#9F81FF" opacity=".6"/>
<rect x="76" y="28" width="30" height="3" rx="1.5" fill="#B4BAC6"/>
<rect x="14" y="50" width="46" height="28" rx="7" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="20" y="56" width="18" height="4" rx="2" fill="#10B981" opacity=".5"/>
<rect x="20" y="64" width="30" height="3" rx="1.5" fill="#B4BAC6"/>
<rect x="70" y="50" width="46" height="28" rx="7" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="76" y="56" width="24" height="4" rx="2" fill="#F59E0B" opacity=".5"/>
<rect x="76" y="64" width="28" height="3" rx="1.5" fill="#B4BAC6"/>
</svg>`,

  custom: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="14" width="98" height="16" rx="5" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="22" y="19" width="38" height="5" rx="2.5" fill="#375DFB" opacity=".4"/>
<rect x="16" y="36" width="98" height="12" rx="5" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="24" cy="42" r="4" fill="#22C55E"/><rect x="32" y="40" width="44" height="3" rx="1.5" fill="#375DFB" opacity=".2"/>
<rect x="16" y="54" width="98" height="12" rx="5" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="24" cy="60" r="4" fill="#22C55E"/><rect x="32" y="58" width="32" height="3" rx="1.5" fill="#375DFB" opacity=".2"/>
<rect x="16" y="72" width="98" height="12" rx="5" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="24" cy="78" r="4" fill="none" stroke="#375DFB" stroke-width="1.5" opacity=".4"/>
<rect x="32" y="76" width="52" height="3" rx="1.5" fill="#375DFB" opacity=".1"/>
</svg>`,

  points: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="65" cy="44" r="26" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1.5"/>
<text x="49" y="50" font-size="18" font-family="system-ui" font-weight="700" fill="#375DFB">850</text>
<text x="51" y="62" font-size="7" font-family="system-ui" fill="#45608E" font-weight="600">POINTS</text>
<rect x="85" y="26" width="26" height="14" rx="7" fill="#22C55E" opacity=".15"/>
<text x="91" y="36" font-size="8" font-family="system-ui" font-weight="700" fill="#16A34A">+50</text>
</svg>`,

  timed: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="65" cy="46" r="26" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1.5"/>
<circle cx="65" cy="46" r="22" fill="none" stroke="#375DFB" stroke-width="4" stroke-dasharray="100 40" stroke-linecap="round" opacity=".2"/>
<line x1="65" y1="46" x2="65" y2="28" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round"/>
<line x1="65" y1="46" x2="78" y2="50" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
<circle cx="65" cy="46" r="2.5" fill="#375DFB"/>
<text x="42" y="82" font-size="10" font-family="ui-monospace,monospace" font-weight="700" fill="#DC2626">05:00</text>
</svg>`,

  /* ── Tab 2: Leaderboards & Rewards ────────────────────── */
  // hero
  leader: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<!-- podium -->
<rect x="28" y="88" width="42" height="42" rx="6" fill="#9F81FF" opacity=".2" stroke="#9F81FF" stroke-width="1"/>
<text x="38" y="82" font-size="8" font-family="system-ui" font-weight="700" fill="#9F81FF">2nd</text>
<circle cx="49" cy="72" r="10" fill="#9F81FF" opacity=".25"/>
<text x="43" y="115" font-size="10" font-family="system-ui" font-weight="700" fill="#9F81FF">820</text>
<rect x="80" y="66" width="48" height="64" rx="6" fill="#F59E0B" opacity=".18" stroke="#F59E0B" stroke-width="1"/>
<text x="88" y="60" font-size="9" font-family="system-ui" font-weight="700" fill="#F59E0B">★ 1st</text>
<circle cx="104" cy="50" r="12" fill="#F59E0B" opacity=".3"/>
<text x="90" y="100" font-size="11" font-family="system-ui" font-weight="800" fill="#D97706">1,240</text>
<rect x="138" y="100" width="42" height="30" rx="6" fill="#375DFB" opacity=".12" stroke="#375DFB" stroke-width="1"/>
<text x="147" y="95" font-size="8" font-family="system-ui" font-weight="700" fill="#375DFB">3rd</text>
<circle cx="159" cy="84" r="10" fill="#375DFB" opacity=".2"/>
<text x="143" y="122" font-size="10" font-family="system-ui" font-weight="700" fill="#375DFB">690</text>
<!-- reward chip -->
<rect x="8" y="10" width="204" height="0" rx="14" fill="none"/>
<rect x="62" y="20" width="90" height="18" rx="9" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<text x="74" y="32" font-size="8" font-family="system-ui" font-weight="700" fill="#14213B">🏆 Rewards unlocked</text>
</svg>`,

  position: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="40" y="24" width="50" height="44" rx="8" fill="#F59E0B" opacity=".15"/>
<rect x="46" y="18" width="38" height="8" rx="4" fill="#F59E0B" opacity=".3"/>
<text x="55" y="55" font-size="18" font-family="system-ui" font-weight="800" fill="#D97706">#1</text>
<rect x="46" y="70" width="38" height="6" rx="3" fill="#F59E0B" opacity=".4"/>
</svg>`,

  milestone: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="42" width="98" height="6" rx="3" fill="#375DFB" opacity=".12"/>
<rect x="16" y="42" width="73" height="6" rx="3" fill="url(#mgr)"/>
<defs><linearGradient id="mgr" x1="16" y1="45" x2="114" y2="45" gradientUnits="userSpaceOnUse"><stop stop-color="#375DFB"/><stop offset="1" stop-color="#22C55E"/></linearGradient></defs>
<circle cx="49" cy="45" r="5" fill="#22C55E" stroke="#fff" stroke-width="2"/>
<circle cx="82" cy="45" r="5" fill="#22C55E" stroke="#fff" stroke-width="2"/>
<circle cx="105" cy="45" r="5" fill="#375DFB" stroke="#fff" stroke-width="2" opacity=".35"/>
<text x="28" y="60" font-size="7" font-family="system-ui" fill="#45608E" font-weight="600">250 pts</text>
<text x="60" y="60" font-size="7" font-family="system-ui" fill="#45608E" font-weight="600">500 pts</text>
<text x="88" y="60" font-size="7" font-family="system-ui" fill="#45608E" font-weight="600">750 pts</text>
<text x="36" y="30" font-size="8" font-family="system-ui" font-weight="700" fill="#375DFB">75% complete</text>
</svg>`,

  draw: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<!-- wheel segments -->
<circle cx="65" cy="46" r="28" fill="none"/>
<path d="M65 46 L65 18 A28 28 0 0 1 93 46 Z" fill="#375DFB" opacity=".55"/>
<path d="M65 46 L93 46 A28 28 0 0 1 65 74 Z" fill="#22C55E" opacity=".5"/>
<path d="M65 46 L65 74 A28 28 0 0 1 37 46 Z" fill="#F59E0B" opacity=".5"/>
<path d="M65 46 L37 46 A28 28 0 0 1 65 18 Z" fill="#9F81FF" opacity=".5"/>
<!-- dividers -->
<line x1="65" y1="18" x2="65" y2="74" stroke="#fff" stroke-width="1.5"/>
<line x1="37" y1="46" x2="93" y2="46" stroke="#fff" stroke-width="1.5"/>
<circle cx="65" cy="46" r="6" fill="#fff"/>
<!-- pointer -->
<polygon points="65,10 61,18 69,18" fill="#DC2626"/>
</svg>`,

  fame: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="14" y="18" width="30" height="54" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="29" cy="32" r="8" fill="#9F81FF" opacity=".3"/>
<text x="24" y="48" font-size="8" font-family="system-ui" fill="#F59E0B">★★★</text>
<rect x="50" y="18" width="30" height="54" rx="8" fill="#FFFFFF" stroke="#F59E0B" stroke-width="1.5"/>
<circle cx="65" cy="32" r="9" fill="#F59E0B" opacity=".25"/>
<text x="59" y="48" font-size="9" font-family="system-ui" fill="#F59E0B">★★★</text>
<text x="56" y="64" font-size="7" font-family="system-ui" font-weight="700" fill="#D97706">#1</text>
<rect x="86" y="18" width="30" height="54" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="101" cy="32" r="8" fill="#375DFB" opacity=".2"/>
<text x="96" y="48" font-size="8" font-family="system-ui" fill="#F59E0B">★★</text>
</svg>`,

  /* ── Tab 3: Analytics & Sponsor ROI ──────────────────── */
  // hero
  roi: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<!-- bar chart -->
<rect x="24" y="120" width="20" height="0" rx="0" fill="none"/>
<rect x="24" y="88" width="20" height="42" rx="4" fill="#375DFB" opacity=".4"/>
<rect x="52" y="68" width="20" height="62" rx="4" fill="#375DFB" opacity=".55"/>
<rect x="80" y="96" width="20" height="34" rx="4" fill="#9F81FF" opacity=".45"/>
<rect x="108" y="56" width="20" height="74" rx="4" fill="#375DFB" opacity=".7"/>
<rect x="136" y="76" width="20" height="54" rx="4" fill="#375DFB" opacity=".5"/>
<text x="24" y="140" font-size="6" font-family="system-ui" fill="#8A94A6">Q1</text>
<text x="52" y="140" font-size="6" font-family="system-ui" fill="#8A94A6">Q2</text>
<text x="80" y="140" font-size="6" font-family="system-ui" fill="#8A94A6">Q3</text>
<text x="108" y="140" font-size="6" font-family="system-ui" fill="#8A94A6">Q4</text>
<text x="136" y="140" font-size="6" font-family="system-ui" fill="#8A94A6">Q5</text>
<!-- ROI badge -->
<rect x="162" y="40" width="44" height="30" rx="8" fill="#10B981" opacity=".12" stroke="#10B981" stroke-width="1"/>
<text x="170" y="58" font-size="12" font-family="system-ui" font-weight="800" fill="#10B981">3x</text>
<text x="167" y="68" font-size="6" font-family="system-ui" fill="#10B981" font-weight="600">ROI</text>
<!-- trend line -->
<path d="M24 88 L52 68 L80 96 L108 56 L136 76 L172 52" stroke="#375DFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity=".6"/>
<circle cx="108" cy="56" r="3.5" fill="#375DFB"/>
<!-- label -->
<rect x="162" y="78" width="44" height="10" rx="5" fill="#375DFB" opacity=".1"/>
<text x="166" y="86" font-size="6" font-family="system-ui" fill="#375DFB" font-weight="600">Sponsor ROI</text>
</svg>`,

  completion: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="65" cy="46" r="26" fill="none" stroke="#E5EBFF" stroke-width="7"/>
<path d="M65 20 a26 26 0 1 1 -18 44" fill="none" stroke="#375DFB" stroke-width="7" stroke-linecap="round"/>
<text x="52" y="50" font-size="13" font-family="system-ui" font-weight="700" fill="#375DFB">78%</text>
</svg>`,

  topplay: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="18" width="98" height="18" rx="7" fill="#FFFFFF" stroke="#F59E0B" stroke-width="1.5"/>
<circle cx="28" cy="27" r="6" fill="#F59E0B" opacity=".4"/>
<text x="38" y="30" font-size="8" font-family="system-ui" font-weight="700" fill="#14213B">1,240 pts</text>
<text x="90" y="30" font-size="7" font-family="system-ui" fill="#F59E0B">★#1</text>
<rect x="16" y="42" width="98" height="14" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="28" cy="49" r="5" fill="#9F81FF" opacity=".3"/>
<text x="38" y="52" font-size="7" font-family="system-ui" fill="#45608E">820 pts</text>
<text x="92" y="52" font-size="7" font-family="system-ui" fill="#9F81FF">#2</text>
<rect x="16" y="62" width="98" height="14" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="28" cy="69" r="5" fill="#375DFB" opacity=".2"/>
<text x="38" y="72" font-size="7" font-family="system-ui" fill="#45608E">690 pts</text>
<text x="92" y="72" font-size="7" font-family="system-ui" fill="#375DFB">#3</text>
</svg>`,

  heatmapg: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="16" width="28" height="18" rx="4" fill="#375DFB" opacity=".2"/>
<rect x="50" y="16" width="28" height="18" rx="4" fill="#375DFB" opacity=".5"/>
<rect x="84" y="16" width="28" height="18" rx="4" fill="#375DFB" opacity=".9"/>
<rect x="16" y="40" width="28" height="18" rx="4" fill="#375DFB" opacity=".7"/>
<rect x="50" y="40" width="28" height="18" rx="4" fill="#375DFB" opacity="1"/>
<rect x="84" y="40" width="28" height="18" rx="4" fill="#375DFB" opacity=".3"/>
<rect x="16" y="64" width="28" height="14" rx="4" fill="#375DFB" opacity=".4"/>
<rect x="50" y="64" width="28" height="14" rx="4" fill="#375DFB" opacity=".8"/>
<rect x="84" y="64" width="28" height="14" rx="4" fill="#375DFB" opacity=".6"/>
</svg>`,

  sponsorroi: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<text x="16" y="28" font-size="10" font-family="system-ui" font-weight="800" fill="#10B981">ROI 3.2x</text>
<rect x="16" y="36" width="94" height="8" rx="4" fill="#10B981" opacity=".12"/>
<rect x="16" y="36" width="72" height="8" rx="4" fill="#10B981" opacity=".5"/>
<text x="16" y="58" font-size="7" font-family="system-ui" fill="#45608E" font-weight="600">Booth visits</text>
<rect x="16" y="62" width="94" height="7" rx="3.5" fill="#375DFB" opacity=".12"/>
<rect x="16" y="62" width="60" height="7" rx="3.5" fill="#375DFB" opacity=".45"/>
<text x="16" y="80" font-size="7" font-family="system-ui" fill="#45608E" font-weight="600">Engagement</text>
<rect x="16" y="82" width="94" height="0" rx="0" fill="none"/>
</svg>`,
};
