// Inline SVG illustrations for the Event Payment Processing bento grid.
// Static coded mockups (payment theme) — motion comes from the card hover float.
// viewBox ~220x150 for hero (tall) cards, ~130x90 for small cards.

export const eppbIllustrations: Record<string, string> = {
  /* ── Tab 1: Supported Gateways ──────────────────────────── */
  // hero: gateway engine — shows 3 gateway logos + OAuth connect flow
  gateways: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="var(--ds-surface)" stroke="var(--ds-surface-tint)" stroke-width="1.5"/>
<rect x="20" y="22" width="56" height="34" rx="8" fill="var(--ds-blue)" opacity=".10"/>
<text x="30" y="36" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-blue)">Stripe</text>
<rect x="28" y="42" width="34" height="4" rx="2" fill="var(--ds-blue)" opacity=".3"/>
<rect x="82" y="22" width="56" height="34" rx="8" fill="var(--ds-violet)" opacity=".12"/>
<text x="90" y="36" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-cat-indigo)">Razorpay</text>
<rect x="90" y="42" width="34" height="4" rx="2" fill="var(--ds-cat-indigo)" opacity=".3"/>
<rect x="144" y="22" width="56" height="34" rx="8" fill="var(--ds-success)" opacity=".12"/>
<text x="152" y="36" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-success)">Tap Pay</text>
<rect x="152" y="42" width="34" height="4" rx="2" fill="var(--ds-success)" opacity=".3"/>
<rect x="30" y="70" width="160" height="34" rx="8" fill="var(--ds-blue)" opacity=".08" stroke="var(--ds-blue)" stroke-width="1" stroke-dasharray="4 3"/>
<text x="80" y="91" font-size="9" font-family="system-ui" font-weight="600" fill="var(--ds-blue)">OAuth Connect →</text>
<rect x="30" y="114" width="70" height="16" rx="4" fill="var(--ds-blue)" opacity=".15"/>
<rect x="110" y="114" width="80" height="16" rx="4" fill="var(--ds-success)" opacity=".12"/>
<text x="40" y="126" font-size="8" font-family="system-ui" fill="var(--ds-blue)">Direct settlement</text>
<text x="118" y="126" font-size="8" font-family="system-ui" fill="var(--ds-success)">PCI DSS compliant</text>
</svg>`,

  // small: Razorpay — UPI + card grid
  razorpay: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="var(--ds-surface)" stroke="var(--ds-surface-tint)" stroke-width="1"/>
<rect x="16" y="18" width="44" height="24" rx="6" fill="var(--ds-violet)" opacity=".15"/>
<text x="24" y="33" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-cat-indigo)">UPI</text>
<rect x="68" y="18" width="44" height="24" rx="6" fill="var(--ds-blue)" opacity=".12"/>
<text x="76" y="33" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-blue)">Cards</text>
<rect x="16" y="50" width="44" height="24" rx="6" fill="var(--ds-success)" opacity=".12"/>
<text x="20" y="65" font-size="8" font-family="system-ui" font-weight="600" fill="var(--ds-success)">Net Banking</text>
<rect x="68" y="50" width="44" height="24" rx="6" fill="var(--ds-warning)" opacity=".12"/>
<text x="76" y="65" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-warning)">Wallets</text>
</svg>`,

  // small: Tap Payments — MENA card brands
  tap: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="var(--ds-surface)" stroke="var(--ds-surface-tint)" stroke-width="1"/>
<rect x="16" y="20" width="96" height="20" rx="4" fill="var(--ds-blue)" opacity=".10"/>
<text x="24" y="34" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-blue)">KNET · mada · Visa · MC</text>
<rect x="16" y="48" width="40" height="26" rx="6" fill="var(--ds-blue)" opacity=".18"/>
<text x="24" y="65" font-size="8" font-family="system-ui" font-weight="600" fill="var(--ds-blue)">GCC</text>
<rect x="64" y="48" width="48" height="26" rx="6" fill="var(--ds-violet)" opacity=".15"/>
<text x="72" y="65" font-size="8" font-family="system-ui" font-weight="600" fill="var(--ds-cat-indigo)">MENA</text>
</svg>`,

  // small: Offline Payments — cash/cheque log
  offline: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="var(--ds-surface)" stroke="var(--ds-surface-tint)" stroke-width="1"/>
<rect x="16" y="18" width="96" height="14" rx="4" fill="var(--ds-ink)" opacity=".06"/>
<text x="22" y="29" font-size="8" font-family="system-ui" fill="var(--ds-body)">Cash · Cheque · Bank Transfer</text>
<rect x="16" y="38" width="70" height="8" rx="4" fill="var(--ds-blue)" opacity=".12"/><rect x="16" y="38" width="70" height="8" rx="4" fill="var(--ds-blue)" opacity=".3"/>
<text x="90" y="46" font-size="8" font-family="system-ui" fill="var(--ds-success)">✓ Paid</text>
<rect x="16" y="52" width="58" height="8" rx="4" fill="var(--ds-warning)" opacity=".18"/>
<text x="78" y="60" font-size="8" font-family="system-ui" fill="var(--ds-warning)">Pending</text>
<rect x="16" y="66" width="64" height="8" rx="4" fill="var(--ds-blue)" opacity=".2"/>
<text x="84" y="74" font-size="8" font-family="system-ui" fill="var(--ds-success)">✓ Paid</text>
</svg>`,

  // small: Complimentary Tickets — 100% discount badge
  comp: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="var(--ds-surface)" stroke="var(--ds-surface-tint)" stroke-width="1"/>
<circle cx="65" cy="45" r="26" fill="var(--ds-success)" opacity=".10"/>
<text x="44" y="42" font-size="13" font-family="system-ui" font-weight="700" fill="var(--ds-success)">100%</text>
<text x="47" y="56" font-size="9" font-family="system-ui" fill="var(--ds-success)">OFF</text>
<rect x="22" y="72" width="84" height="8" rx="4" fill="var(--ds-success)" opacity=".15"/>
</svg>`,

  /* ── Tab 2: Checkout & Pricing ──────────────────────────── */
  // hero: checkout screen with ticket tiers
  checkout: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="34" y="10" width="152" height="130" rx="14" fill="var(--ds-white)" stroke="var(--ds-surface-tint)" stroke-width="1.5"/>
<rect x="48" y="22" width="80" height="8" rx="4" fill="var(--ds-ink)" opacity=".45"/>
<rect x="48" y="38" width="124" height="22" rx="6" fill="var(--ds-blue)" opacity=".08" stroke="var(--ds-blue)" stroke-width="1"/>
<text x="56" y="52" font-size="9" font-family="system-ui" fill="var(--ds-blue)">Early Bird — $49</text>
<text x="152" y="52" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-blue)">×1</text>
<rect x="48" y="66" width="124" height="22" rx="6" fill="var(--ds-violet)" opacity=".08"/>
<text x="56" y="80" font-size="9" font-family="system-ui" fill="var(--ds-cat-indigo)">Standard — $79</text>
<text x="152" y="80" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-cat-indigo)">×2</text>
<rect x="48" y="94" width="124" height="22" rx="6" fill="var(--ds-warning)" opacity=".08"/>
<text x="56" y="108" font-size="9" font-family="system-ui" fill="var(--ds-warning)">VIP — $149</text>
<text x="152" y="108" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-warning)">×1</text>
<rect x="48" y="122" width="124" height="12" rx="6" fill="var(--ds-blue)" opacity=".9"/>
<text x="90" y="132" font-size="8" font-family="system-ui" font-weight="700" fill="var(--ds-white)">Checkout →</text>
</svg>`,

  // small: Promo & Discount Codes
  promo: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="var(--ds-surface)" stroke="var(--ds-surface-tint)" stroke-width="1"/>
<rect x="16" y="22" width="96" height="18" rx="6" fill="var(--ds-blue)" opacity=".08" stroke="var(--ds-blue)" stroke-width="1" stroke-dasharray="4 2"/>
<text x="44" y="35" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-blue)">SAVE20</text>
<rect x="16" y="48" width="60" height="8" rx="4" fill="var(--ds-blue)" opacity=".2"/>
<text x="80" y="56" font-size="8" font-family="system-ui" fill="var(--ds-success)">−20%</text>
<rect x="16" y="62" width="44" height="8" rx="4" fill="var(--ds-violet)" opacity=".2"/>
<text x="64" y="70" font-size="8" font-family="system-ui" fill="var(--ds-violet)">50 uses left</text>
</svg>`,

  // small: Group Purchases
  group: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="var(--ds-surface)" stroke="var(--ds-surface-tint)" stroke-width="1"/>
<circle cx="34" cy="38" r="12" fill="var(--ds-blue)" opacity=".15"/>
<circle cx="58" cy="38" r="12" fill="var(--ds-violet)" opacity=".15"/>
<circle cx="82" cy="38" r="12" fill="var(--ds-success)" opacity=".15"/>
<text x="29" y="42" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-blue)">A</text>
<text x="53" y="42" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-cat-indigo)">B</text>
<text x="77" y="42" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-success)">C</text>
<rect x="16" y="60" width="96" height="14" rx="4" fill="var(--ds-blue)" opacity=".10"/>
<text x="34" y="71" font-size="8" font-family="system-ui" fill="var(--ds-blue)">1 checkout · 3 tickets</text>
</svg>`,

  // small: Currency Display
  currency: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="var(--ds-surface)" stroke="var(--ds-surface-tint)" stroke-width="1"/>
<text x="18" y="40" font-size="20" font-family="system-ui" font-weight="700" fill="var(--ds-blue)" opacity=".6">$</text>
<text x="46" y="40" font-size="20" font-family="system-ui" font-weight="700" fill="var(--ds-violet)" opacity=".5">€</text>
<text x="74" y="40" font-size="20" font-family="system-ui" font-weight="700" fill="var(--ds-success)" opacity=".5">₹</text>
<text x="99" y="40" font-size="20" font-family="system-ui" font-weight="700" fill="var(--ds-warning)" opacity=".5">د</text>
<rect x="16" y="52" width="96" height="6" rx="3" fill="var(--ds-blue)" opacity=".12"/>
<rect x="16" y="64" width="60" height="6" rx="3" fill="var(--ds-blue)" opacity=".08"/>
</svg>`,

  // small: Tax & VAT
  tax: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="var(--ds-surface)" stroke="var(--ds-surface-tint)" stroke-width="1"/>
<rect x="16" y="18" width="96" height="8" rx="3" fill="var(--ds-ink)" opacity=".06"/>
<text x="20" y="27" font-size="8" font-family="system-ui" fill="var(--ds-body)">Subtotal</text>
<text x="88" y="27" font-size="8" font-family="system-ui" font-weight="600" fill="var(--ds-ink)">$200</text>
<rect x="16" y="32" width="96" height="8" rx="3" fill="var(--ds-ink)" opacity=".04"/>
<text x="20" y="41" font-size="8" font-family="system-ui" fill="var(--ds-body)">VAT 5%</text>
<text x="90" y="41" font-size="8" font-family="system-ui" fill="var(--ds-warning)">+$10</text>
<line x1="16" y1="46" x2="112" y2="46" stroke="var(--ds-surface-tint)" stroke-width="1"/>
<text x="20" y="60" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-blue)">Total</text>
<text x="84" y="60" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-blue)">$210</text>
<rect x="16" y="66" width="96" height="12" rx="4" fill="var(--ds-blue)" opacity=".08"/>
<text x="30" y="76" font-size="7" font-family="system-ui" fill="var(--ds-blue)">Tax lines on receipt</text>
</svg>`,

  /* ── Tab 3: Refunds & Reporting ──────────────────────────── */
  // hero: revenue dashboard with refund + export
  reporting: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="var(--ds-surface)" stroke="var(--ds-surface-tint)" stroke-width="1.5"/>
<rect x="20" y="22" width="60" height="34" rx="8" fill="var(--ds-success)" opacity=".12"/>
<text x="28" y="38" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-success)">$48,200</text>
<text x="28" y="50" font-size="7" font-family="system-ui" fill="var(--ds-success)">Gross Revenue</text>
<rect x="86" y="22" width="56" height="34" rx="8" fill="var(--ds-blue)" opacity=".10"/>
<text x="94" y="38" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-blue)">$46,900</text>
<text x="94" y="50" font-size="7" font-family="system-ui" fill="var(--ds-blue)">Net Revenue</text>
<rect x="148" y="22" width="52" height="34" rx="8" fill="var(--ds-danger)" opacity=".08"/>
<text x="156" y="38" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-danger)">$1,300</text>
<text x="156" y="50" font-size="7" font-family="system-ui" fill="var(--ds-danger)">Refunded</text>
<path d="M22 120 L52 102 L82 108 L112 84 L142 90 L172 66 L200 72" stroke="var(--ds-success)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M22 120 L52 102 L82 108 L112 84 L142 90 L172 66 L200 72 L200 130 L22 130 Z" fill="var(--ds-success)" opacity=".06"/>
<circle cx="172" cy="66" r="3.5" fill="var(--ds-success)"/><circle cx="112" cy="84" r="3.5" fill="var(--ds-blue)"/>
</svg>`,

  // small: Transaction Export
  txexport: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="var(--ds-surface)" stroke="var(--ds-surface-tint)" stroke-width="1"/>
<rect x="22" y="18" width="38" height="44" rx="6" fill="var(--ds-success)" opacity=".10" stroke="var(--ds-success)" stroke-width="1"/>
<text x="30" y="44" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-success)">CSV</text>
<path d="M46 54 L46 62 L38 62 L50 72 L62 62 L54 62 L54 54 Z" fill="var(--ds-success)" opacity=".5"/>
<rect x="70" y="18" width="38" height="44" rx="6" fill="var(--ds-blue)" opacity=".10" stroke="var(--ds-blue)" stroke-width="1"/>
<text x="76" y="44" font-size="9" font-family="system-ui" font-weight="700" fill="var(--ds-blue)">XLS</text>
<path d="M94 54 L94 62 L86 62 L98 72 L110 62 L102 62 L102 54 Z" fill="var(--ds-blue)" opacity=".5"/>
</svg>`,

  // small: Reconciliation View
  reconcile: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="var(--ds-surface)" stroke="var(--ds-surface-tint)" stroke-width="1"/>
<rect x="10" y="20" width="50" height="54" rx="6" fill="var(--ds-blue)" opacity=".06"/>
<rect x="68" y="20" width="50" height="54" rx="6" fill="var(--ds-success)" opacity=".06"/>
<text x="18" y="34" font-size="7" font-family="system-ui" font-weight="600" fill="var(--ds-blue)">EventHex</text>
<text x="74" y="34" font-size="7" font-family="system-ui" font-weight="600" fill="var(--ds-success)">Gateway</text>
<rect x="16" y="40" width="36" height="5" rx="2" fill="var(--ds-blue)" opacity=".3"/>
<rect x="74" y="40" width="36" height="5" rx="2" fill="var(--ds-success)" opacity=".3"/>
<rect x="16" y="51" width="36" height="5" rx="2" fill="var(--ds-blue)" opacity=".2"/>
<rect x="74" y="51" width="36" height="5" rx="2" fill="var(--ds-success)" opacity=".2"/>
<line x1="65" y1="20" x2="65" y2="74" stroke="var(--ds-surface-tint)" stroke-width="1.5" stroke-dasharray="3 2"/>
<text x="56" y="66" font-size="9" font-family="system-ui" fill="var(--ds-success)">✓</text>
</svg>`,

  // small: Revenue Roll-Up
  rollup: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="var(--ds-surface)" stroke="var(--ds-surface-tint)" stroke-width="1"/>
<rect x="16" y="52" width="18" height="22" rx="3" fill="var(--ds-blue)" opacity=".35"/>
<rect x="40" y="40" width="18" height="34" rx="3" fill="var(--ds-blue)" opacity=".5"/>
<rect x="64" y="30" width="18" height="44" rx="3" fill="var(--ds-violet)" opacity=".45"/>
<rect x="88" y="20" width="18" height="54" rx="3" fill="var(--ds-blue)" opacity=".7"/>
<path d="M16 66 L40 58 L64 46 L88 32" stroke="var(--ds-success)" stroke-width="2" stroke-linecap="round" fill="none"/>
<text x="16" y="20" font-size="8" font-family="system-ui" font-weight="700" fill="var(--ds-blue)">All Events ↑</text>
</svg>`,

  // small: Revenue Reports
  revreport: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="var(--ds-surface)" stroke="var(--ds-surface-tint)" stroke-width="1"/>
<rect x="16" y="18" width="96" height="8" rx="3" fill="var(--ds-ink)" opacity=".06"/>
<text x="20" y="27" font-size="8" font-family="system-ui" fill="var(--ds-body)">Gross Sales</text>
<text x="82" y="27" font-size="8" font-family="system-ui" font-weight="700" fill="var(--ds-success)">$48.2k</text>
<text x="20" y="41" font-size="8" font-family="system-ui" fill="var(--ds-body)">Gateway Fees</text>
<text x="78" y="41" font-size="8" font-family="system-ui" font-weight="700" fill="var(--ds-danger)">−$1.3k</text>
<text x="20" y="55" font-size="8" font-family="system-ui" fill="var(--ds-body)">Net Revenue</text>
<text x="80" y="55" font-size="8" font-family="system-ui" font-weight="700" fill="var(--ds-blue)">$46.9k</text>
<line x1="16" y1="60" x2="112" y2="60" stroke="var(--ds-surface-tint)" stroke-width="1"/>
<rect x="16" y="66" width="96" height="12" rx="4" fill="var(--ds-blue)" opacity=".08"/>
<text x="28" y="76" font-size="7" font-family="system-ui" fill="var(--ds-blue)">By ticket type breakdown</text>
</svg>`,
};
