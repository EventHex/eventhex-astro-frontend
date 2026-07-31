// Inline SVG illustrations for the Event Notifications bento grid.
// Static coded mockups (notifications theme) — motion comes from card hover float.
// viewBox ~220x150 for hero (tall) cards, ~130x90 for small cards.

export const enbIllustrations: Record<string, string> = {
  /* ── Tab 1: Email Notifications ──────────────────────────── */
  // hero
  email: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="22" y="22" width="176" height="54" rx="10" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<path d="M22 32 L110 56 L198 32" stroke="#375DFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity=".4"/>
<rect x="36" y="38" width="80" height="6" rx="3" fill="#22272F" opacity=".3"/>
<rect x="36" y="50" width="56" height="5" rx="2.5" fill="#B4BAC6"/>
<circle cx="190" cy="26" r="8" fill="#EF4444" opacity=".85"/>
<text x="186.5" y="29.5" font-size="8" font-family="system-ui" font-weight="800" fill="#fff">3</text>
<rect x="22" y="88" width="78" height="38" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="30" y="96" width="36" height="5" rx="2.5" fill="#375DFB" opacity=".5"/>
<rect x="30" y="106" width="54" height="4" rx="2" fill="#B4BAC6"/>
<rect x="30" y="114" width="44" height="4" rx="2" fill="#D0D5DD"/>
<rect x="110" y="88" width="90" height="38" rx="8" fill="#375DFB" opacity=".08"/>
<rect x="120" y="96" width="48" height="5" rx="2.5" fill="#375DFB" opacity=".4"/>
<rect x="120" y="106" width="64" height="4" rx="2" fill="#375DFB" opacity=".2"/>
<rect x="120" y="114" width="52" height="4" rx="2" fill="#375DFB" opacity=".15"/>
</svg>`,

  reminders: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="18" width="94" height="16" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="22" y="23" width="22" height="6" rx="3" fill="#375DFB" opacity=".35"/>
<rect x="50" y="23" width="50" height="6" rx="3" fill="#B4BAC6"/>
<rect x="16" y="40" width="94" height="16" rx="6" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="22" y="45" width="22" height="6" rx="3" fill="#375DFB" opacity=".5"/>
<rect x="50" y="45" width="40" height="6" rx="3" fill="#B4BAC6"/>
<rect x="16" y="62" width="94" height="16" rx="6" fill="#375DFB" opacity=".08" stroke="#375DFB" stroke-width="1"/>
<rect x="22" y="67" width="22" height="6" rx="3" fill="#375DFB" opacity=".8"/>
<rect x="50" y="67" width="52" height="6" rx="3" fill="#375DFB" opacity=".3"/>
</svg>`,

  broadcast: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="44" cy="46" r="20" fill="none" stroke="#E5EBFF" stroke-width="1.5"/>
<circle cx="44" cy="46" r="13" fill="none" stroke="#375DFB" stroke-width="1.5" opacity=".3"/>
<circle cx="44" cy="46" r="6" fill="#375DFB" opacity=".7"/>
<rect x="72" y="26" width="42" height="8" rx="4" fill="#375DFB" opacity=".15"/>
<rect x="72" y="40" width="36" height="8" rx="4" fill="#9F81FF" opacity=".2"/>
<rect x="72" y="54" width="42" height="8" rx="4" fill="#375DFB" opacity=".12"/>
<rect x="72" y="68" width="28" height="8" rx="4" fill="#10B981" opacity=".2"/>
</svg>`,

  emailtpl: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="22" y="16" width="86" height="58" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="22" y="16" width="86" height="12" rx="8" fill="#375DFB" opacity=".12"/>
<rect x="22" y="22" width="86" height="6" fill="#375DFB" opacity=".08"/>
<rect x="30" y="34" width="36" height="12" rx="4" fill="#E5EBFF"/>
<rect x="72" y="34" width="28" height="5" rx="2.5" fill="#B4BAC6"/>
<rect x="72" y="44" width="22" height="5" rx="2.5" fill="#D0D5DD"/>
<rect x="30" y="52" width="70" height="5" rx="2.5" fill="#B4BAC6"/>
<rect x="30" y="62" width="50" height="7" rx="3.5" fill="#375DFB" opacity=".25"/>
</svg>`,

  unsub: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="20" y="20" width="90" height="28" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="28" y="28" width="50" height="5" rx="2.5" fill="#375DFB" opacity=".4"/>
<rect x="28" y="37" width="36" height="4" rx="2" fill="#B4BAC6"/>
<rect x="20" y="56" width="42" height="18" rx="8" fill="#EF4444" opacity=".08" stroke="#EF4444" stroke-width="1"/>
<text x="27" y="69" font-size="8" font-family="system-ui" font-weight="700" fill="#EF4444">Bounced</text>
<rect x="68" y="56" width="42" height="18" rx="8" fill="#F59E0B" opacity=".08" stroke="#F59E0B" stroke-width="1"/>
<text x="72" y="69" font-size="8" font-family="system-ui" font-weight="700" fill="#F59E0B">Unsub'd</text>
</svg>`,

  /* ── Tab 2: WhatsApp & Push ───────────────────────────────── */
  whatsapp: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="26" y="20" width="100" height="110" rx="12" fill="#075E54"/>
<rect x="26" y="20" width="100" height="28" rx="12" fill="#054C44"/>
<rect x="26" y="40" width="100" height="8" fill="#054C44"/>
<circle cx="46" cy="34" r="8" fill="rgba(255,255,255,0.2)"/>
<rect x="58" y="30" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.4)"/>
<rect x="36" y="58" width="64" height="18" rx="6" fill="#DCF8C6"/>
<rect x="42" y="63" width="48" height="4" rx="2" fill="rgba(0,0,0,0.15)"/>
<rect x="42" y="70" width="36" height="4" rx="2" fill="rgba(0,0,0,0.1)"/>
<rect x="54" y="82" width="52" height="14" rx="6" fill="#FFFFFF"/>
<rect x="60" y="87" width="38" height="4" rx="2" fill="rgba(0,0,0,0.1)"/>
<rect x="36" y="102" width="72" height="12" rx="6" fill="#DCF8C6"/>
<rect x="42" y="106" width="20" height="4" rx="2" fill="rgba(0,0,0,0.15)"/>
<circle cx="62" cy="108" r="3" fill="#25D366"/>
<circle cx="70" cy="108" r="3" fill="#25D366"/>
<rect x="144" y="24" width="56" height="34" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<text x="152" y="40" font-size="14" font-family="system-ui" font-weight="800" fill="#25D366">98%</text>
<text x="152" y="52" font-size="7" font-family="system-ui" fill="#8A94A6" font-weight="600">open rate</text>
<rect x="144" y="66" width="56" height="18" rx="8" fill="#25D366" opacity=".1"/>
<path d="M152 75 l4 4 8-8" stroke="#25D366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<text x="164" y="78" font-size="7" font-family="system-ui" fill="#25D366" font-weight="700">Delivered</text>
</svg>`,

  wabroadcast: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="30" cy="30" r="10" fill="#25D366" opacity=".15"/>
<path d="M26 30 a4 4 0 0 1 8 0 a4 4 0 0 1 -4 4 v3" stroke="#25D366" stroke-width="1.5" stroke-linecap="round" fill="none"/>
<circle cx="30" cy="40" r="1.5" fill="#25D366"/>
<rect x="46" y="22" width="68" height="7" rx="3.5" fill="#22272F" opacity=".3"/>
<rect x="46" y="35" width="50" height="5" rx="2.5" fill="#B4BAC6"/>
<rect x="16" y="52" width="98" height="10" rx="5" fill="#25D366" opacity=".12"/>
<rect x="16" y="52" width="68" height="10" rx="5" fill="#25D366" opacity=".25"/>
<text x="112" y="60" font-size="8" font-family="system-ui" font-weight="700" fill="#25D366">1.2k</text>
<rect x="16" y="68" width="98" height="10" rx="5" fill="#375DFB" opacity=".08"/>
<rect x="16" y="68" width="44" height="10" rx="5" fill="#375DFB" opacity=".3"/>
<text x="112" y="76" font-size="8" font-family="system-ui" font-weight="700" fill="#375DFB">840</text>
</svg>`,

  push: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="36" y="10" width="58" height="76" rx="10" fill="#0F1629" stroke="#375DFB" stroke-width="1.5" opacity=".8"/>
<rect x="50" y="14" width="30" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
<rect x="42" y="24" width="46" height="30" rx="7" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
<rect x="46" y="28" width="14" height="14" rx="4" fill="#375DFB" opacity=".7"/>
<rect x="64" y="29" width="18" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
<rect x="64" y="36" width="22" height="3" rx="1.5" fill="rgba(255,255,255,0.12)"/>
<rect x="42" y="60" width="46" height="20" rx="6" fill="rgba(55,93,251,0.12)"/>
<rect x="48" y="65" width="30" height="4" rx="2" fill="rgba(55,93,251,0.4)"/>
<rect x="48" y="72" width="20" height="3" rx="1.5" fill="rgba(55,93,251,0.2)"/>
</svg>`,

  inapp: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<path d="M65 14 c-12 0-20 9-20 20 v14 l-6 6 v3 h52 v-3 l-6-6 v-14 c0-11-8-20-20-20 z" fill="#375DFB" opacity=".1" stroke="#375DFB" stroke-width="1.5"/>
<path d="M58 57 a7 7 0 0 0 14 0" stroke="#375DFB" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<circle cx="78" cy="18" r="6" fill="#EF4444" opacity=".85"/>
<text x="75" y="21.5" font-size="7.5" font-family="system-ui" font-weight="800" fill="#fff">2</text>
<rect x="16" y="72" width="38" height="8" rx="4" fill="#375DFB" opacity=".12"/>
<rect x="60" y="72" width="54" height="8" rx="4" fill="#E5EBFF"/>
</svg>`,

  wabot: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="30" cy="30" r="12" fill="#25D366" opacity=".12"/>
<circle cx="30" cy="26" r="5" fill="#25D366" opacity=".5"/>
<path d="M20 38 c0-8 4-12 10-12 s10 4 10 12" fill="#25D366" opacity=".3"/>
<rect x="48" y="20" width="62" height="14" rx="7" fill="#DCF8C6"/>
<rect x="54" y="25" width="42" height="4" rx="2" fill="rgba(0,0,0,0.15)"/>
<rect x="48" y="40" width="50" height="14" rx="7" fill="#FFFFFF" border="1" stroke="#E5EBFF" stroke-width="1"/>
<rect x="54" y="45" width="34" height="4" rx="2" fill="rgba(0,0,0,0.1)"/>
<rect x="16" y="62" width="62" height="14" rx="7" fill="#DCF8C6"/>
<rect x="22" y="67" width="42" height="4" rx="2" fill="rgba(0,0,0,0.15)"/>
<path d="M86 67 l4 4 8-8" stroke="#25D366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="96" cy="71" r="0" fill="none"/>
</svg>`,

  /* ── Tab 3: SMS & Delivery ───────────────────────────────── */
  sms: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="204" height="130" rx="14" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1.5"/>
<rect x="22" y="24" width="110" height="24" rx="10" fill="#375DFB" opacity=".9"/>
<rect x="30" y="30" width="72" height="5" rx="2.5" fill="rgba(255,255,255,0.55)"/>
<rect x="30" y="38" width="50" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
<rect x="22" y="56" width="90" height="22" rx="10" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="30" y="63" width="60" height="5" rx="2.5" fill="#B4BAC6"/>
<rect x="30" y="71" width="40" height="4" rx="2" fill="#D0D5DD"/>
<rect x="36" y="86" width="110" height="22" rx="10" fill="#375DFB" opacity=".85"/>
<rect x="44" y="93" width="76" height="5" rx="2.5" fill="rgba(255,255,255,0.5)"/>
<rect x="44" y="101" width="52" height="4" rx="2" fill="rgba(255,255,255,0.25)"/>
<rect x="144" y="24" width="58" height="26" rx="8" fill="#FFFFFF" stroke="#E5EBFF" stroke-width="1"/>
<text x="152" y="36" font-size="7" font-family="system-ui" font-weight="700" fill="#8A94A6">via Twilio</text>
<rect x="152" y="40" width="32" height="5" rx="2.5" fill="#EF4444" opacity=".5"/>
<rect x="144" y="58" width="58" height="22" rx="8" fill="#10B981" opacity=".08"/>
<path d="M152 69 l4 4 8-8" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<text x="164" y="72" font-size="7.5" font-family="system-ui" fill="#10B981" font-weight="700">99.4%</text>
<text x="164" y="79" font-size="6.5" font-family="system-ui" fill="#8A94A6">delivery</text>
</svg>`,

  queue: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="14" y="36" width="20" height="20" rx="5" fill="#375DFB" opacity=".2" stroke="#375DFB" stroke-width="1"/>
<rect x="38" y="36" width="20" height="20" rx="5" fill="#375DFB" opacity=".35" stroke="#375DFB" stroke-width="1"/>
<rect x="62" y="36" width="20" height="20" rx="5" fill="#375DFB" opacity=".55" stroke="#375DFB" stroke-width="1"/>
<text x="85" y="50" font-size="14" font-family="system-ui" font-weight="700" fill="#375DFB">→</text>
<rect x="98" y="36" width="20" height="20" rx="5" fill="#10B981" opacity=".15" stroke="#10B981" stroke-width="1"/>
<path d="M102 46 l4 4 8-8" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="14" y="20" width="50" height="5" rx="2.5" fill="#375DFB" opacity=".15"/>
<text x="14" y="79" font-size="8" font-family="system-ui" fill="#8A94A6">Queue · Deliver · Confirm</text>
</svg>`,

  tracking: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="28" cy="46" r="8" fill="#10B981" opacity=".15" stroke="#10B981" stroke-width="1.5"/>
<path d="M24 46 l3 3 6-6" stroke="#10B981" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="38" y="43" width="22" height="2" rx="1" fill="#10B981" opacity=".5"/>
<circle cx="68" cy="46" r="8" fill="#10B981" opacity=".15" stroke="#10B981" stroke-width="1.5"/>
<path d="M64 46 l3 3 6-6" stroke="#10B981" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="78" y="43" width="22" height="2" rx="1" fill="#E5EBFF"/>
<circle cx="108" cy="46" r="8" fill="#E5EBFF" stroke="#D0D5DD" stroke-width="1.5"/>
<text x="17" y="30" font-size="7" font-family="system-ui" fill="#8A94A6" font-weight="600">Sent</text>
<text x="56" y="30" font-size="7" font-family="system-ui" fill="#8A94A6" font-weight="600">Delivered</text>
<text x="96" y="30" font-size="7" font-family="system-ui" fill="#B4BAC6" font-weight="600">Opened</text>
</svg>`,

  abtest: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<rect x="16" y="20" width="16" height="16" rx="4" fill="#375DFB" opacity=".8"/>
<text x="20" y="31" font-size="9" font-family="system-ui" font-weight="800" fill="#fff">A</text>
<rect x="36" y="24" width="62" height="8" rx="4" fill="#E5EBFF"/>
<rect x="36" y="24" width="42" height="8" rx="4" fill="#375DFB" opacity=".55"/>
<text x="102" y="31" font-size="8" font-family="system-ui" font-weight="700" fill="#375DFB">65%</text>
<rect x="16" y="46" width="16" height="16" rx="4" fill="#9F81FF" opacity=".8"/>
<text x="19.5" y="57" font-size="9" font-family="system-ui" font-weight="800" fill="#fff">B</text>
<rect x="36" y="50" width="62" height="8" rx="4" fill="#E5EBFF"/>
<rect x="36" y="50" width="28" height="8" rx="4" fill="#9F81FF" opacity=".5"/>
<text x="102" y="57" font-size="8" font-family="system-ui" font-weight="700" fill="#9F81FF">42%</text>
<rect x="16" y="70" width="96" height="6" rx="3" fill="#375DFB" opacity=".08"/>
<rect x="16" y="70" width="62" height="6" rx="3" fill="#375DFB" opacity=".15"/>
</svg>`,

  suppress: `<svg viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="6" width="118" height="78" rx="12" fill="#F5F8FF" stroke="#E5EBFF" stroke-width="1"/>
<circle cx="50" cy="38" r="16" fill="#EF4444" opacity=".07" stroke="#EF4444" stroke-width="1.5"/>
<path d="M41 29 l18 18 M59 29 l-18 18" stroke="#EF4444" stroke-width="2" stroke-linecap="round"/>
<rect x="20" y="62" width="38" height="14" rx="6" fill="#EF4444" opacity=".08" stroke="#EF4444" stroke-width="1"/>
<text x="24" y="72" font-size="7" font-family="system-ui" font-weight="700" fill="#EF4444">Bounced</text>
<rect x="64" y="62" width="42" height="14" rx="6" fill="#F59E0B" opacity=".08" stroke="#F59E0B" stroke-width="1"/>
<text x="68" y="72" font-size="7" font-family="system-ui" font-weight="700" fill="#F59E0B">Unsubscribed</text>
</svg>`,
};
