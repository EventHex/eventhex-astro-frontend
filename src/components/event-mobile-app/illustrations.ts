// Inline SVG illustrations for the Event Mobile App bento grid.
// Static coded mockups (mobile app theme) — motion comes from the card hover float.
// viewBox ~220x150 for hero (tall) cards, ~130x90 for small cards.

export const emabIllustrations: Record<string, string> = {
  /* ── Tab 1: Attendee Experience ──────────────────────────── */
  // hero — phone mockup with agenda screen
  agenda: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" stroke-width="1.5" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="72" y="16" width="76" height="118" rx="14" stroke-width="1.5" style="fill:color-mix(in srgb, var(--ds-night-2) 70%, var(--ds-blue));stroke:var(--ds-night-card)"/>
<rect x="78" y="26" width="64" height="102" rx="10" style="fill:color-mix(in srgb, var(--ds-surface-tint) 50%, white)"/>
<rect x="84" y="32" width="52" height="6" rx="3" opacity=".3" style="fill:var(--ds-blue)"/>
<rect x="84" y="44" width="52" height="18" rx="5" opacity=".15" stroke-width="1" stroke-opacity=".4" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<text x="88" y="56" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">9:00 · Opening Keynote</text>
<rect x="84" y="68" width="52" height="18" rx="5" style="fill:var(--ds-white)"/>
<text x="88" y="80" font-size="7" font-family="system-ui" style="fill:var(--ds-muted)">10:30 · AI Workshop</text>
<rect x="84" y="92" width="52" height="18" rx="5" style="fill:var(--ds-white)"/>
<text x="88" y="104" font-size="7" font-family="system-ui" style="fill:var(--ds-muted)">12:00 · Networking</text>
<rect x="20" y="40" width="44" height="20" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<text x="26" y="53" font-size="7" font-family="system-ui" font-weight="700" style="fill:color-mix(in srgb, var(--ds-night-card) 70%, var(--ds-blue))">My Schedule</text>
<rect x="158" y="104" width="46" height="18" rx="8" fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.3)" stroke-width="1"/>
<text x="163" y="116" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-cat-green)">3 bookmarked</text>
</svg>`,

  connect: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<circle cx="65" cy="30" r="12" opacity=".12" stroke-width="1" stroke-opacity=".3" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<circle cx="32" cy="58" r="9" opacity=".18" stroke-width="1" style="fill:var(--ds-violet);stroke:var(--ds-violet)"/>
<circle cx="98" cy="58" r="9" opacity=".18" stroke-width="1" style="fill:var(--ds-success);stroke:var(--ds-success)"/>
<line x1="65" y1="42" x2="32" y2="49" stroke-width="1.5" stroke-dasharray="3 2" opacity=".5" style="stroke:var(--ds-blue)"/>
<line x1="65" y1="42" x2="98" y2="49" stroke-width="1.5" stroke-dasharray="3 2" opacity=".5" style="stroke:var(--ds-blue)"/>
<text x="52" y="34" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">92%</text>
<rect x="44" y="70" width="42" height="8" rx="4" opacity=".12" style="fill:var(--ds-blue)"/><rect x="44" y="70" width="38" height="8" rx="4" opacity=".5" style="fill:var(--ds-blue)"/>
</svg>`,

  maps: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="16" y="18" width="36" height="28" rx="4" style="fill:var(--ds-surface-tint)"/><rect x="58" y="18" width="22" height="12" rx="4" opacity=".15" style="fill:var(--ds-blue)"/><rect x="86" y="18" width="28" height="28" rx="4" style="fill:var(--ds-surface-tint)"/>
<rect x="16" y="50" width="24" height="24" rx="4" style="fill:var(--ds-surface-tint)"/><rect x="46" y="36" width="34" height="36" rx="4" opacity=".12" style="fill:var(--ds-violet)"/>
<circle cx="63" cy="52" r="6" opacity=".2" style="fill:var(--ds-blue)"/><circle cx="63" cy="52" r="3" style="fill:var(--ds-blue)"/>
<text x="72" y="68" font-size="7" font-family="system-ui" font-weight="600" style="fill:color-mix(in srgb, var(--ds-night-card) 70%, var(--ds-blue))">Hall B → R3</text>
</svg>`,

  push: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="44" y="12" width="26" height="40" rx="7" stroke-width="1" style="fill:color-mix(in srgb, var(--ds-night-2) 70%, var(--ds-blue));stroke:var(--ds-night-card)"/>
<rect x="48" y="17" width="18" height="30" rx="5" style="fill:color-mix(in srgb, var(--ds-surface-tint) 50%, white)"/>
<rect x="20" y="48" width="90" height="26" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<circle cx="32" cy="61" r="5" opacity=".25" style="fill:var(--ds-blue)"/>
<rect x="42" y="55" width="52" height="5" rx="2.5" opacity=".5" style="fill:var(--ds-ink)"/>
<rect x="42" y="64" width="36" height="4" rx="2" opacity=".5" style="fill:var(--ds-label)"/>
</svg>`,

  profiles: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<circle cx="36" cy="36" r="18" opacity=".12" stroke-width="1" style="fill:var(--ds-blue);stroke:var(--ds-surface-tint)"/>
<circle cx="36" cy="31" r="8" opacity=".3" style="fill:var(--ds-blue)"/>
<path d="M18 48 a18 18 0 0 1 36 0" opacity=".15" style="fill:var(--ds-blue)"/>
<rect x="62" y="22" width="52" height="6" rx="3" opacity=".5" style="fill:var(--ds-ink)"/>
<rect x="62" y="34" width="38" height="5" rx="2.5" opacity=".3" style="fill:var(--ds-blue)"/>
<rect x="62" y="46" width="46" height="5" rx="2.5" opacity=".4" style="fill:var(--ds-label)"/>
<rect x="62" y="60" width="28" height="14" rx="6" opacity=".12" stroke-width="1" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<text x="67" y="70" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">Connect</text>
</svg>`,

  /* ── Tab 2: Engagement Tools ──────────────────────────── */
  // hero — live poll phone mockup
  polls: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" stroke-width="1.5" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="64" y="16" width="92" height="118" rx="14" stroke-width="1.5" style="fill:color-mix(in srgb, var(--ds-night-2) 70%, var(--ds-blue));stroke:var(--ds-night-card)"/>
<rect x="70" y="26" width="80" height="102" rx="10" style="fill:color-mix(in srgb, var(--ds-surface-tint) 50%, white)"/>
<rect x="76" y="32" width="68" height="7" rx="3.5" opacity=".4" style="fill:var(--ds-ink)"/>
<rect x="76" y="44" width="68" height="22" rx="5" opacity=".12" stroke-width="1" stroke-opacity=".3" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<rect x="80" y="50" width="48" height="10" rx="5" opacity=".35" style="fill:var(--ds-blue)"/>
<text x="128" y="58" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">72%</text>
<rect x="76" y="70" width="68" height="22" rx="5" opacity=".08" stroke-width="1" stroke-opacity=".2" style="fill:var(--ds-violet);stroke:var(--ds-violet)"/>
<rect x="80" y="76" width="18" height="10" rx="5" opacity=".35" style="fill:var(--ds-violet)"/>
<text x="100" y="84" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-violet)">28%</text>
<rect x="76" y="98" width="36" height="5" rx="2.5" opacity=".4" style="fill:var(--ds-label)"/>
<rect x="20" y="96" width="38" height="18" rx="8" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.4)" stroke-width="1"/>
<text x="26" y="108" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-cat-amber)">Live now</text>
<rect x="164" y="40" width="42" height="18" rx="8" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<text x="170" y="52" font-size="7" font-family="system-ui" font-weight="700" style="fill:color-mix(in srgb, var(--ds-night-card) 70%, var(--ds-blue))">248 votes</text>
</svg>`,

  qa: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="16" y="18" width="98" height="18" rx="6" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<text x="22" y="29" font-size="7" font-family="system-ui" style="fill:var(--ds-night-2)">▲ 24  How does the AI match…</text>
<text x="22" y="28" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">▲</text>
<rect x="16" y="42" width="98" height="18" rx="6" stroke-width="1" style="fill:var(--ds-white);stroke:var(--ds-surface-tint)"/>
<text x="22" y="53" font-size="7" font-family="system-ui" style="fill:var(--ds-night-2)">▲ 18  Can we integrate with…</text>
<rect x="16" y="66" width="38" height="12" rx="6" opacity=".12" stroke-width="1" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<text x="22" y="75" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">Upvote</text>
</svg>`,

  feed: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<circle cx="22" cy="26" r="8" opacity=".2" style="fill:var(--ds-blue)"/>
<rect x="36" y="21" width="60" height="5" rx="2.5" opacity=".4" style="fill:var(--ds-ink)"/>
<rect x="36" y="30" width="44" height="4" rx="2" opacity=".35" style="fill:var(--ds-label)"/>
<rect x="16" y="42" width="98" height="6" rx="3" opacity=".08" style="fill:var(--ds-blue)"/>
<circle cx="22" cy="62" r="8" opacity=".2" style="fill:var(--ds-violet)"/>
<rect x="36" y="57" width="48" height="5" rx="2.5" opacity=".35" style="fill:var(--ds-ink)"/>
<rect x="36" y="66" width="34" height="4" rx="2" opacity=".3" style="fill:var(--ds-label)"/>
<rect x="86" y="70" width="28" height="12" rx="6" fill="rgba(34,197,94,0.12)"/>
<text x="91" y="79" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-cat-green)">12 new</text>
</svg>`,

  gamify: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="16" y="18" width="98" height="16" rx="5" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<circle cx="26" cy="26" r="5" opacity=".8" style="fill:var(--ds-warning)"/>
<rect x="38" y="23" width="40" height="6" rx="3" opacity=".45" style="fill:var(--ds-ink)"/>
<text x="100" y="29" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">820</text>
<rect x="16" y="40" width="98" height="16" rx="5" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<circle cx="26" cy="48" r="5" opacity=".6" style="fill:var(--ds-label)"/>
<rect x="38" y="45" width="36" height="6" rx="3" opacity=".3" style="fill:var(--ds-ink)"/>
<text x="100" y="51" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-violet)">715</text>
<rect x="16" y="62" width="98" height="16" rx="5" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<circle cx="26" cy="70" r="5" opacity=".6" style="fill:var(--ds-cat-orange)"/>
<rect x="38" y="67" width="32" height="6" rx="3" opacity=".25" style="fill:var(--ds-ink)"/>
<text x="100" y="73" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-label)">690</text>
</svg>`,

  feedback: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<text x="16" y="42" font-size="26" font-family="system-ui" style="fill:var(--ds-warning)">★★★★</text>
<text x="112" y="42" font-size="26" font-family="system-ui" opacity=".6" style="fill:var(--ds-line-strong)">★</text>
<rect x="30" y="52" width="70" height="8" rx="4" opacity=".12" style="fill:var(--ds-blue)"/><rect x="30" y="52" width="48" height="8" rx="4" opacity=".4" style="fill:var(--ds-blue)"/>
<text x="36" y="72" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">4.2 avg rating</text>
</svg>`,

  /* ── Tab 3: Organizer Controls ──────────────────────────── */
  // hero — organizer dashboard
  analytics: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" stroke-width="1.5" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="20" y="22" width="56" height="34" rx="8" opacity=".10" style="fill:var(--ds-blue)"/>
<text x="28" y="38" font-size="9" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">85%</text>
<text x="28" y="48" font-size="7" font-family="system-ui" style="fill:var(--ds-label)">Adoption</text>
<rect x="84" y="22" width="56" height="34" rx="8" opacity=".12" style="fill:var(--ds-violet)"/>
<text x="92" y="38" font-size="9" font-family="system-ui" font-weight="700" style="fill:var(--ds-violet)">4.2K</text>
<text x="92" y="48" font-size="7" font-family="system-ui" style="fill:var(--ds-label)">Active Users</text>
<rect x="148" y="22" width="54" height="34" rx="8" opacity=".12" style="fill:var(--ds-success)"/>
<text x="156" y="38" font-size="9" font-family="system-ui" font-weight="700" style="fill:var(--ds-success)">98%</text>
<text x="156" y="48" font-size="7" font-family="system-ui" style="fill:var(--ds-label)">Uptime</text>
<rect x="20" y="64" width="182" height="66" rx="8" fill="rgba(55,93,251,0.04)" stroke-width="1" style="stroke:var(--ds-surface-tint)"/>
<path d="M28 120 L58 104 L88 110 L118 88 L148 94 L178 72 L196 78" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" style="stroke:var(--ds-blue)"/>
<path d="M28 120 L58 104 L88 110 L118 88 L148 94 L178 72 L196 78 L196 122 L28 122 Z" opacity=".06" style="fill:var(--ds-blue)"/>
<circle cx="118" cy="88" r="3.5" style="fill:var(--ds-blue)"/><circle cx="178" cy="72" r="3.5" style="fill:var(--ds-violet)"/>
</svg>`,

  sponsor: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="16" y="16" width="98" height="16" rx="5" opacity=".12" stroke-width="1" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<text x="22" y="27" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">Banner Placement</text>
<rect x="16" y="38" width="98" height="16" rx="5" opacity=".10" stroke-width="1" style="fill:var(--ds-violet);stroke:var(--ds-violet)"/>
<text x="22" y="49" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-violet)">Splash Screen</text>
<rect x="16" y="60" width="98" height="16" rx="5" opacity=".10" stroke-width="1" style="fill:var(--ds-warning);stroke:var(--ds-warning)"/>
<text x="22" y="71" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-cat-amber)">Push Sponsorship</text>
</svg>`,

  moderate: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="16" y="18" width="98" height="16" rx="5" opacity=".10" stroke-width="1" style="fill:var(--ds-success);stroke:var(--ds-success)"/>
<path d="M26 26 l4 4 6-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--ds-success)"/>
<text x="40" y="29" font-size="7" font-family="system-ui" font-weight="600" style="fill:var(--ds-night-2)">Approved</text>
<rect x="16" y="40" width="98" height="16" rx="5" opacity=".10" stroke-width="1" style="fill:var(--ds-warning);stroke:var(--ds-warning)"/>
<circle cx="26" cy="48" r="4" opacity=".5" style="fill:var(--ds-warning)"/>
<text x="40" y="51" font-size="7" font-family="system-ui" font-weight="600" style="fill:var(--ds-night-2)">Pending review</text>
<rect x="16" y="62" width="98" height="16" rx="5" opacity=".08" stroke-width="1" style="fill:var(--ds-danger);stroke:var(--ds-danger)"/>
<text x="28" y="73" font-size="8" font-family="system-ui" font-weight="700" style="fill:var(--ds-danger)">✕</text>
<text x="40" y="73" font-size="7" font-family="system-ui" font-weight="600" style="fill:var(--ds-night-2)">Flagged</text>
</svg>`,

  qr: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="30" y="14" width="50" height="50" rx="6" stroke-width="1.5" style="fill:var(--ds-white);stroke:var(--ds-blue)"/>
<rect x="36" y="20" width="14" height="14" rx="2" style="fill:var(--ds-night-2)"/><rect x="36" y="20" width="14" height="14" rx="2" fill="none" stroke-width="2" style="stroke:var(--ds-white)"/>
<rect x="60" y="20" width="14" height="14" rx="2" style="fill:var(--ds-night-2)"/>
<rect x="36" y="44" width="14" height="14" rx="2" style="fill:var(--ds-night-2)"/>
<rect x="54" y="36" width="6" height="6" rx="1" opacity=".6" style="fill:var(--ds-blue)"/>
<rect x="62" y="36" width="6" height="6" rx="1" opacity=".5" style="fill:var(--ds-night-2)"/>
<rect x="54" y="44" width="6" height="6" rx="1" opacity=".5" style="fill:var(--ds-night-2)"/>
<rect x="62" y="44" width="6" height="6" rx="1" opacity=".4" style="fill:var(--ds-blue)"/>
<rect x="26" y="70" width="78" height="10" rx="5" opacity=".12" style="fill:var(--ds-blue)"/>
<text x="42" y="78" font-size="7" font-family="system-ui" font-weight="700" style="fill:var(--ds-blue)">Scan to check in</text>
</svg>`,

  offline: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" stroke-width="1" style="fill:var(--ds-surface);stroke:var(--ds-surface-tint)"/>
<rect x="40" y="14" width="50" height="42" rx="8" opacity=".10" stroke-width="1" stroke-opacity=".3" style="fill:var(--ds-blue);stroke:var(--ds-blue)"/>
<path d="M55 30 a10 10 0 0 1 20 0" stroke-width="2.5" stroke-linecap="round" fill="none" style="stroke:var(--ds-blue)"/>
<path d="M50 36 a15 15 0 0 1 30 0" stroke-width="1.5" stroke-linecap="round" fill="none" opacity=".3" style="stroke:var(--ds-blue)"/>
<line x1="55" y1="20" x2="75" y2="50" stroke-width="2" stroke-linecap="round" opacity=".4" style="stroke:var(--ds-blue)"/>
<circle cx="65" cy="46" r="3" opacity=".6" style="fill:var(--ds-blue)"/>
<rect x="26" y="62" width="34" height="12" rx="5" opacity=".12" style="fill:var(--ds-blue)"/>
<text x="30" y="71" font-size="7" font-family="system-ui" font-weight="600" style="fill:var(--ds-blue)">Agenda</text>
<rect x="66" y="62" width="38" height="12" rx="5" opacity=".12" style="fill:var(--ds-success)"/>
<text x="70" y="71" font-size="7" font-family="system-ui" font-weight="600" style="fill:var(--ds-success)">Cached</text>
</svg>`,
};
