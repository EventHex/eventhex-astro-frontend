// Inline SVG illustrations for the Event Mobile App bento grid.
// Static coded mockups (mobile app theme) — motion comes from the card hover float.
// viewBox ~220x150 for hero (tall) cards, ~130x90 for small cards.

export const emabIllustrations: Record<string, string> = {
  /* ── Tab 1: Attendee Experience ──────────────────────────── */
  // hero — phone mockup with agenda screen
  agenda: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="72" y="16" width="76" height="118" rx="14" fill="#1a2340" stroke="#2d3a6e" stroke-width="1.5"/>
<rect x="78" y="26" width="64" height="102" rx="10" fill="#EEF4FF"/>
<rect x="84" y="32" width="52" height="6" rx="3" fill="#375DFB" opacity=".3"/>
<rect x="84" y="44" width="52" height="18" rx="5" fill="#375DFB" opacity=".15" stroke="#375DFB" stroke-width="1" stroke-opacity=".4"/>
<text x="88" y="56" font-size="7" font-family="system-ui" font-weight="700" fill="#375DFB">9:00 · Opening Keynote</text>
<rect x="84" y="68" width="52" height="18" rx="5" fill="#FFFFFF"/>
<text x="88" y="80" font-size="7" font-family="system-ui" fill="#667085">10:30 · AI Workshop</text>
<rect x="84" y="92" width="52" height="18" rx="5" fill="#FFFFFF"/>
<text x="88" y="104" font-size="7" font-family="system-ui" fill="#667085">12:00 · Networking</text>
<rect x="20" y="40" width="44" height="20" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<text x="26" y="53" font-size="7" font-family="system-ui" font-weight="700" fill="#183465">My Schedule</text>
<rect x="158" y="104" width="46" height="18" rx="8" fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.3)" stroke-width="1"/>
<text x="163" y="116" font-size="7" font-family="system-ui" font-weight="700" fill="#15803d">3 bookmarked</text>
</svg>`,

  connect: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="65" cy="30" r="12" fill="#375DFB" opacity=".12" stroke="#375DFB" stroke-width="1" stroke-opacity=".3"/>
<circle cx="32" cy="58" r="9" fill="#9F81FF" opacity=".18" stroke="#9F81FF" stroke-width="1"/>
<circle cx="98" cy="58" r="9" fill="#10B981" opacity=".18" stroke="#10B981" stroke-width="1"/>
<line x1="65" y1="42" x2="32" y2="49" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="3 2" opacity=".5"/>
<line x1="65" y1="42" x2="98" y2="49" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="3 2" opacity=".5"/>
<text x="52" y="34" font-size="8" font-family="system-ui" font-weight="700" fill="#375DFB">92%</text>
<rect x="44" y="70" width="42" height="8" rx="4" fill="#375DFB" opacity=".12"/><rect x="44" y="70" width="38" height="8" rx="4" fill="#375DFB" opacity=".5"/>
</svg>`,

  maps: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="18" width="36" height="28" rx="4" fill="#E5EBFF"/><rect x="58" y="18" width="22" height="12" rx="4" fill="#375DFB" opacity=".15"/><rect x="86" y="18" width="28" height="28" rx="4" fill="#E5EBFF"/>
<rect x="16" y="50" width="24" height="24" rx="4" fill="#E5EBFF"/><rect x="46" y="36" width="34" height="36" rx="4" fill="#9F81FF" opacity=".12"/>
<circle cx="63" cy="52" r="6" fill="#375DFB" opacity=".2"/><circle cx="63" cy="52" r="3" fill="#375DFB"/>
<text x="72" y="68" font-size="7" font-family="system-ui" font-weight="600" fill="#183465">Hall B → R3</text>
</svg>`,

  push: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="44" y="12" width="26" height="40" rx="7" fill="#1a2340" stroke="#2d3a6e" stroke-width="1"/>
<rect x="48" y="17" width="18" height="30" rx="5" fill="#EEF4FF"/>
<rect x="20" y="48" width="90" height="26" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="32" cy="61" r="5" fill="#375DFB" opacity=".25"/>
<rect x="42" y="55" width="52" height="5" rx="2.5" fill="#22272F" opacity=".5"/>
<rect x="42" y="64" width="36" height="4" rx="2" fill="#8A94A6" opacity=".5"/>
</svg>`,

  profiles: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="36" cy="36" r="18" fill="#375DFB" opacity=".12" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="36" cy="31" r="8" fill="#375DFB" opacity=".3"/>
<path d="M18 48 a18 18 0 0 1 36 0" fill="#375DFB" opacity=".15"/>
<rect x="62" y="22" width="52" height="6" rx="3" fill="#22272F" opacity=".5"/>
<rect x="62" y="34" width="38" height="5" rx="2.5" fill="#375DFB" opacity=".3"/>
<rect x="62" y="46" width="46" height="5" rx="2.5" fill="#8A94A6" opacity=".4"/>
<rect x="62" y="60" width="28" height="14" rx="6" fill="#375DFB" opacity=".12" stroke="#375DFB" stroke-width="1"/>
<text x="67" y="70" font-size="7" font-family="system-ui" font-weight="700" fill="#375DFB">Connect</text>
</svg>`,

  /* ── Tab 2: Engagement Tools ──────────────────────────── */
  // hero — live poll phone mockup
  polls: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="64" y="16" width="92" height="118" rx="14" fill="#1a2340" stroke="#2d3a6e" stroke-width="1.5"/>
<rect x="70" y="26" width="80" height="102" rx="10" fill="#EEF4FF"/>
<rect x="76" y="32" width="68" height="7" rx="3.5" fill="#22272F" opacity=".4"/>
<rect x="76" y="44" width="68" height="22" rx="5" fill="#375DFB" opacity=".12" stroke="#375DFB" stroke-width="1" stroke-opacity=".3"/>
<rect x="80" y="50" width="48" height="10" rx="5" fill="#375DFB" opacity=".35"/>
<text x="128" y="58" font-size="7" font-family="system-ui" font-weight="700" fill="#375DFB">72%</text>
<rect x="76" y="70" width="68" height="22" rx="5" fill="#9F81FF" opacity=".08" stroke="#9F81FF" stroke-width="1" stroke-opacity=".2"/>
<rect x="80" y="76" width="18" height="10" rx="5" fill="#9F81FF" opacity=".35"/>
<text x="100" y="84" font-size="7" font-family="system-ui" font-weight="700" fill="#7C5CFF">28%</text>
<rect x="76" y="98" width="36" height="5" rx="2.5" fill="#8A94A6" opacity=".4"/>
<rect x="20" y="96" width="38" height="18" rx="8" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.4)" stroke-width="1"/>
<text x="26" y="108" font-size="7" font-family="system-ui" font-weight="700" fill="#a16207">Live now</text>
<rect x="164" y="40" width="42" height="18" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<text x="170" y="52" font-size="7" font-family="system-ui" font-weight="700" fill="#183465">248 votes</text>
</svg>`,

  qa: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="18" width="98" height="18" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<text x="22" y="29" font-size="7" font-family="system-ui" fill="#14213b">▲ 24  How does the AI match…</text>
<text x="22" y="28" font-size="7" font-family="system-ui" font-weight="700" fill="#375DFB">▲</text>
<rect x="16" y="42" width="98" height="18" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<text x="22" y="53" font-size="7" font-family="system-ui" fill="#14213b">▲ 18  Can we integrate with…</text>
<rect x="16" y="66" width="38" height="12" rx="6" fill="#375DFB" opacity=".12" stroke="#375DFB" stroke-width="1"/>
<text x="22" y="75" font-size="7" font-family="system-ui" font-weight="700" fill="#375DFB">Upvote</text>
</svg>`,

  feed: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="22" cy="26" r="8" fill="#375DFB" opacity=".2"/>
<rect x="36" y="21" width="60" height="5" rx="2.5" fill="#22272F" opacity=".4"/>
<rect x="36" y="30" width="44" height="4" rx="2" fill="#8A94A6" opacity=".35"/>
<rect x="16" y="42" width="98" height="6" rx="3" fill="#375DFB" opacity=".08"/>
<circle cx="22" cy="62" r="8" fill="#9F81FF" opacity=".2"/>
<rect x="36" y="57" width="48" height="5" rx="2.5" fill="#22272F" opacity=".35"/>
<rect x="36" y="66" width="34" height="4" rx="2" fill="#8A94A6" opacity=".3"/>
<rect x="86" y="70" width="28" height="12" rx="6" fill="rgba(34,197,94,0.12)"/>
<text x="91" y="79" font-size="7" font-family="system-ui" font-weight="700" fill="#15803d">12 new</text>
</svg>`,

  gamify: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="18" width="98" height="16" rx="5" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="26" cy="26" r="5" fill="#F59E0B" opacity=".8"/>
<rect x="38" y="23" width="40" height="6" rx="3" fill="#22272F" opacity=".45"/>
<text x="100" y="29" font-size="7" font-family="system-ui" font-weight="700" fill="#375DFB">820</text>
<rect x="16" y="40" width="98" height="16" rx="5" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="26" cy="48" r="5" fill="#8A94A6" opacity=".6"/>
<rect x="38" y="45" width="36" height="6" rx="3" fill="#22272F" opacity=".3"/>
<text x="100" y="51" font-size="7" font-family="system-ui" font-weight="700" fill="#9F81FF">715</text>
<rect x="16" y="62" width="98" height="16" rx="5" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="26" cy="70" r="5" fill="#C97534" opacity=".6"/>
<rect x="38" y="67" width="32" height="6" rx="3" fill="#22272F" opacity=".25"/>
<text x="100" y="73" font-size="7" font-family="system-ui" font-weight="700" fill="#8A94A6">690</text>
</svg>`,

  feedback: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<text x="16" y="42" font-size="26" font-family="system-ui" fill="#F59E0B">★★★★</text>
<text x="112" y="42" font-size="26" font-family="system-ui" fill="#D0D5DD" opacity=".6">★</text>
<rect x="30" y="52" width="70" height="8" rx="4" fill="#375DFB" opacity=".12"/><rect x="30" y="52" width="48" height="8" rx="4" fill="#375DFB" opacity=".4"/>
<text x="36" y="72" font-size="8" font-family="system-ui" font-weight="700" fill="#375DFB">4.2 avg rating</text>
</svg>`,

  /* ── Tab 3: Organizer Controls ──────────────────────────── */
  // hero — organizer dashboard
  analytics: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="20" y="22" width="56" height="34" rx="8" fill="#375DFB" opacity=".10"/>
<text x="28" y="38" font-size="9" font-family="system-ui" font-weight="700" fill="#375DFB">85%</text>
<text x="28" y="48" font-size="7" font-family="system-ui" fill="#8A94A6">Adoption</text>
<rect x="84" y="22" width="56" height="34" rx="8" fill="#9F81FF" opacity=".12"/>
<text x="92" y="38" font-size="9" font-family="system-ui" font-weight="700" fill="#7C5CFF">4.2K</text>
<text x="92" y="48" font-size="7" font-family="system-ui" fill="#8A94A6">Active Users</text>
<rect x="148" y="22" width="54" height="34" rx="8" fill="#10B981" opacity=".12"/>
<text x="156" y="38" font-size="9" font-family="system-ui" font-weight="700" fill="#10B981">98%</text>
<text x="156" y="48" font-size="7" font-family="system-ui" fill="#8A94A6">Uptime</text>
<rect x="20" y="64" width="182" height="66" rx="8" fill="rgba(55,93,251,0.04)" stroke="#E5EBFF" stroke-width="1"/>
<path d="M28 120 L58 104 L88 110 L118 88 L148 94 L178 72 L196 78" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M28 120 L58 104 L88 110 L118 88 L148 94 L178 72 L196 78 L196 122 L28 122 Z" fill="#375DFB" opacity=".06"/>
<circle cx="118" cy="88" r="3.5" fill="#375DFB"/><circle cx="178" cy="72" r="3.5" fill="#9F81FF"/>
</svg>`,

  sponsor: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="16" width="98" height="16" rx="5" fill="#375DFB" opacity=".12" stroke="#375DFB" stroke-width="1"/>
<text x="22" y="27" font-size="7" font-family="system-ui" font-weight="700" fill="#375DFB">Banner Placement</text>
<rect x="16" y="38" width="98" height="16" rx="5" fill="#9F81FF" opacity=".10" stroke="#9F81FF" stroke-width="1"/>
<text x="22" y="49" font-size="7" font-family="system-ui" font-weight="700" fill="#7C5CFF">Splash Screen</text>
<rect x="16" y="60" width="98" height="16" rx="5" fill="#F59E0B" opacity=".10" stroke="#F59E0B" stroke-width="1"/>
<text x="22" y="71" font-size="7" font-family="system-ui" font-weight="700" fill="#a16207">Push Sponsorship</text>
</svg>`,

  moderate: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="18" width="98" height="16" rx="5" fill="#10B981" opacity=".10" stroke="#10B981" stroke-width="1"/>
<path d="M26 26 l4 4 6-7" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<text x="40" y="29" font-size="7" font-family="system-ui" font-weight="600" fill="#14213b">Approved</text>
<rect x="16" y="40" width="98" height="16" rx="5" fill="#F59E0B" opacity=".10" stroke="#F59E0B" stroke-width="1"/>
<circle cx="26" cy="48" r="4" fill="#F59E0B" opacity=".5"/>
<text x="40" y="51" font-size="7" font-family="system-ui" font-weight="600" fill="#14213b">Pending review</text>
<rect x="16" y="62" width="98" height="16" rx="5" fill="#EF4444" opacity=".08" stroke="#EF4444" stroke-width="1"/>
<text x="28" y="73" font-size="8" font-family="system-ui" font-weight="700" fill="#EF4444">✕</text>
<text x="40" y="73" font-size="7" font-family="system-ui" font-weight="600" fill="#14213b">Flagged</text>
</svg>`,

  qr: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="30" y="14" width="50" height="50" rx="6" fill="#FFFFFF" stroke="#375DFB" stroke-width="1.5"/>
<rect x="36" y="20" width="14" height="14" rx="2" fill="#14213b"/><rect x="36" y="20" width="14" height="14" rx="2" fill="none" stroke="#FFFFFF" stroke-width="2"/>
<rect x="60" y="20" width="14" height="14" rx="2" fill="#14213b"/>
<rect x="36" y="44" width="14" height="14" rx="2" fill="#14213b"/>
<rect x="54" y="36" width="6" height="6" rx="1" fill="#375DFB" opacity=".6"/>
<rect x="62" y="36" width="6" height="6" rx="1" fill="#14213b" opacity=".5"/>
<rect x="54" y="44" width="6" height="6" rx="1" fill="#14213b" opacity=".5"/>
<rect x="62" y="44" width="6" height="6" rx="1" fill="#375DFB" opacity=".4"/>
<rect x="26" y="70" width="78" height="10" rx="5" fill="#375DFB" opacity=".12"/>
<text x="42" y="78" font-size="7" font-family="system-ui" font-weight="700" fill="#375DFB">Scan to check in</text>
</svg>`,

  offline: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="40" y="14" width="50" height="42" rx="8" fill="#375DFB" opacity=".10" stroke="#375DFB" stroke-width="1" stroke-opacity=".3"/>
<path d="M55 30 a10 10 0 0 1 20 0" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round" fill="none"/>
<path d="M50 36 a15 15 0 0 1 30 0" stroke="#375DFB" stroke-width="1.5" stroke-linecap="round" fill="none" opacity=".3"/>
<line x1="55" y1="20" x2="75" y2="50" stroke="#375DFB" stroke-width="2" stroke-linecap="round" opacity=".4"/>
<circle cx="65" cy="46" r="3" fill="#375DFB" opacity=".6"/>
<rect x="26" y="62" width="34" height="12" rx="5" fill="#375DFB" opacity=".12"/>
<text x="30" y="71" font-size="7" font-family="system-ui" font-weight="600" fill="#375DFB">Agenda</text>
<rect x="66" y="62" width="38" height="12" rx="5" fill="#10B981" opacity=".12"/>
<text x="70" y="71" font-size="7" font-family="system-ui" font-weight="600" fill="#10B981">Cached</text>
</svg>`,
};
