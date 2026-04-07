export const regIllustrations: Record<string, string> = {

  /* ── Tab 1 : Registration Management ─────────────────────── */

  // 1. Per-Ticket Attendee Lists
  reg1: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes reg1SlideIn { 0%{opacity:0;transform:translateX(-8px)} 100%{opacity:1;transform:translateX(0)} }
  @keyframes reg1Pulse { 0%,100%{opacity:.6} 50%{opacity:1} }
  .reg1-row1{animation:reg1SlideIn .5s ease both}
  .reg1-row2{animation:reg1SlideIn .5s .15s ease both}
  .reg1-row3{animation:reg1SlideIn .5s .3s ease both}
  .reg1-row4{animation:reg1SlideIn .5s .45s ease both}
  .reg1-chip{animation:reg1Pulse 2s ease infinite}
</style>
<rect x="30" y="16" width="220" height="28" rx="6" fill="#DBEAFE"/>
<text x="44" y="35" font-size="11" font-family="system-ui" fill="#375DFB" font-weight="600">All Tickets ▾</text>
<rect x="130" y="22" width="44" height="16" rx="8" fill="#375DFB"/>
<text x="137" y="34" font-size="8" fill="#fff" font-family="system-ui">VIP</text>
<rect x="178" y="22" width="60" height="16" rx="8" fill="#fff" stroke="#374151" stroke-width=".5"/>
<text x="185" y="34" font-size="8" fill="#374151" font-family="system-ui">General</text>
<g class="reg1-row1">
  <circle cx="52" cy="68" r="10" fill="#DBEAFE"/><rect x="68" y="62" width="80" height="6" rx="3" fill="#374151" opacity=".25"/>
  <rect x="68" y="72" width="50" height="4" rx="2" fill="#374151" opacity=".12"/>
  <rect x="200" y="64" width="36" height="14" rx="7" fill="#375DFB" class="reg1-chip"/><text x="207" y="74" font-size="7" fill="#fff" font-family="system-ui">VIP</text>
</g>
<g class="reg1-row2">
  <circle cx="52" cy="98" r="10" fill="#D1FAE5"/><rect x="68" y="92" width="90" height="6" rx="3" fill="#374151" opacity=".25"/>
  <rect x="68" y="102" width="40" height="4" rx="2" fill="#374151" opacity=".12"/>
  <rect x="200" y="94" width="36" height="14" rx="7" fill="#10B981"/><text x="205" y="104" font-size="7" fill="#fff" font-family="system-ui">Gen</text>
</g>
<g class="reg1-row3">
  <circle cx="52" cy="128" r="10" fill="#DBEAFE"/><rect x="68" y="122" width="70" height="6" rx="3" fill="#374151" opacity=".25"/>
  <rect x="68" y="132" width="55" height="4" rx="2" fill="#374151" opacity=".12"/>
  <rect x="200" y="124" width="36" height="14" rx="7" fill="#375DFB"/><text x="207" y="134" font-size="7" fill="#fff" font-family="system-ui">VIP</text>
</g>
<g class="reg1-row4">
  <circle cx="52" cy="158" r="10" fill="#D1FAE5"/><rect x="68" y="152" width="85" height="6" rx="3" fill="#374151" opacity=".25"/>
  <rect x="68" y="162" width="45" height="4" rx="2" fill="#374151" opacity=".12"/>
  <rect x="200" y="154" width="36" height="14" rx="7" fill="#10B981"/><text x="205" y="164" font-size="7" fill="#fff" font-family="system-ui">Gen</text>
</g>
</svg>`,

  // 2. Real-Time Tracking
  reg2: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes reg2Count { 0%{opacity:0;transform:translateY(8px)} 50%{opacity:1;transform:translateY(0)} 100%{opacity:1;transform:translateY(0)} }
  @keyframes reg2Bar { 0%{width:0} 100%{width:100%} }
  @keyframes reg2Dot { 0%,100%{r:3} 50%{r:5} }
  .reg2-num1{animation:reg2Count .6s ease both}
  .reg2-num2{animation:reg2Count .6s .2s ease both}
  .reg2-num3{animation:reg2Count .6s .4s ease both}
  .reg2-dot{animation:reg2Dot 1.5s ease infinite}
</style>
<rect x="24" y="20" width="72" height="60" rx="8" fill="#DBEAFE"/>
<text x="36" y="42" font-size="8" font-family="system-ui" fill="#375DFB">Registered</text>
<text x="36" y="64" font-size="22" font-family="system-ui" font-weight="700" fill="#375DFB" class="reg2-num1">1,247</text>
<rect x="104" y="20" width="72" height="60" rx="8" fill="#D1FAE5"/>
<text x="116" y="42" font-size="8" font-family="system-ui" fill="#10B981">Checked In</text>
<text x="116" y="64" font-size="22" font-family="system-ui" font-weight="700" fill="#10B981" class="reg2-num2">842</text>
<rect x="184" y="20" width="72" height="60" rx="8" fill="#FEF3C7"/>
<text x="196" y="42" font-size="8" font-family="system-ui" fill="#F59E0B">Pending</text>
<text x="196" y="64" font-size="22" font-family="system-ui" font-weight="700" fill="#F59E0B" class="reg2-num3">405</text>
<rect x="24" y="96" width="232" height="84" rx="8" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
<line x1="24" y1="140" x2="256" y2="140" stroke="#E5E7EB" stroke-width=".5"/>
<polyline points="40,160 70,148 100,152 130,135 160,128 190,115 220,108 240,100" stroke="#375DFB" stroke-width="2" fill="none" stroke-linecap="round"/>
<circle cx="240" cy="100" fill="#375DFB" class="reg2-dot" r="3"/>
<text x="30" y="174" font-size="7" fill="#9CA3AF" font-family="system-ui">9am</text>
<text x="130" y="174" font-size="7" fill="#9CA3AF" font-family="system-ui">12pm</text>
<text x="230" y="174" font-size="7" fill="#9CA3AF" font-family="system-ui">Now</text>
</svg>`,

  // 3. Payment Status Filtering
  reg3: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes reg3Pop { 0%{transform:scale(0.85);opacity:0} 100%{transform:scale(1);opacity:1} }
  @keyframes reg3Check { 0%{stroke-dashoffset:20} 100%{stroke-dashoffset:0} }
  .reg3-c1{animation:reg3Pop .4s ease both}
  .reg3-c2{animation:reg3Pop .4s .15s ease both}
  .reg3-c3{animation:reg3Pop .4s .3s ease both}
  .reg3-check{stroke-dasharray:20;animation:reg3Check .5s .5s ease both}
</style>
<rect x="30" y="18" width="70" height="26" rx="13" fill="#D1FAE5" class="reg3-c1"/>
<circle cx="44" cy="31" r="5" fill="#10B981"/><path d="M41 31l2 2 4-4" stroke="#fff" stroke-width="1.5" fill="none" class="reg3-check"/>
<text x="54" y="35" font-size="9" fill="#10B981" font-family="system-ui" font-weight="600">Paid</text>
<rect x="108" y="18" width="82" height="26" rx="13" fill="#FEF3C7" class="reg3-c2"/>
<circle cx="122" cy="31" r="5" fill="#F59E0B"/><text x="119" y="34" font-size="8" fill="#fff" font-family="system-ui">!</text>
<text x="132" y="35" font-size="9" fill="#F59E0B" font-family="system-ui" font-weight="600">Pending</text>
<rect x="198" y="18" width="56" height="26" rx="13" fill="#DBEAFE" class="reg3-c3"/>
<text x="212" y="35" font-size="9" fill="#375DFB" font-family="system-ui" font-weight="600">Comp</text>
<g>
  <rect x="30" y="58" width="220" height="32" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <circle cx="52" cy="74" r="8" fill="#DBEAFE"/><rect x="68" y="70" width="80" height="5" rx="2.5" fill="#1F2937" opacity=".15"/>
  <rect x="190" y="68" width="40" height="16" rx="8" fill="#D1FAE5"/><text x="199" y="79" font-size="7" fill="#10B981" font-family="system-ui">Paid</text>
</g>
<g>
  <rect x="30" y="96" width="220" height="32" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <circle cx="52" cy="112" r="8" fill="#D1FAE5"/><rect x="68" y="108" width="70" height="5" rx="2.5" fill="#1F2937" opacity=".15"/>
  <rect x="190" y="106" width="50" height="16" rx="8" fill="#FEF3C7"/><text x="196" y="117" font-size="7" fill="#F59E0B" font-family="system-ui">Pending</text>
</g>
<g>
  <rect x="30" y="134" width="220" height="32" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <circle cx="52" cy="150" r="8" fill="#DBEAFE"/><rect x="68" y="146" width="90" height="5" rx="2.5" fill="#1F2937" opacity=".15"/>
  <rect x="190" y="144" width="40" height="16" rx="8" fill="#D1FAE5"/><text x="199" y="155" font-size="7" fill="#10B981" font-family="system-ui">Paid</text>
</g>
<g>
  <rect x="30" y="172" width="220" height="20" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <circle cx="52" cy="182" r="6" fill="#D1FAE5"/><rect x="68" y="179" width="60" height="4" rx="2" fill="#1F2937" opacity=".1"/>
</g>
</svg>`,

  // 4. Check-In Monitoring
  reg4: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes reg4Fill { 0%{width:0} 100%{width:156px} }
  @keyframes reg4FillPend { 0%{width:0} 100%{width:68px} }
  @keyframes reg4Tick { 0%{stroke-dashoffset:14} 100%{stroke-dashoffset:0} }
  .reg4-bar{animation:reg4Fill 1.2s ease both}
  .reg4-pend{animation:reg4FillPend 1.2s .3s ease both}
  .reg4-tick{stroke-dasharray:14;animation:reg4Tick .6s .8s ease both}
</style>
<text x="40" y="32" font-size="12" font-family="system-ui" font-weight="700" fill="#1F2937">Check-In Progress</text>
<text x="40" y="60" font-size="10" font-family="system-ui" fill="#374151">Checked In</text>
<text x="220" y="60" font-size="10" font-family="system-ui" fill="#10B981" font-weight="600">68%</text>
<rect x="40" y="68" width="200" height="14" rx="7" fill="#E5E7EB"/>
<rect x="40" y="68" height="14" rx="7" fill="#10B981" class="reg4-bar"/>
<text x="40" y="104" font-size="10" font-family="system-ui" fill="#374151">Pending</text>
<text x="220" y="104" font-size="10" font-family="system-ui" fill="#F59E0B" font-weight="600">32%</text>
<rect x="40" y="112" width="200" height="14" rx="7" fill="#E5E7EB"/>
<rect x="40" y="112" height="14" rx="7" fill="#F59E0B" class="reg4-pend"/>
<rect x="40" y="142" width="90" height="44" rx="8" fill="#D1FAE5"/>
<circle cx="62" cy="164" r="10" fill="#10B981"/>
<path d="M57 164l3 3 7-7" stroke="#fff" stroke-width="2" fill="none" class="reg4-tick"/>
<text x="78" y="160" font-size="8" font-family="system-ui" fill="#374151">Checked</text>
<text x="78" y="172" font-size="14" font-family="system-ui" font-weight="700" fill="#10B981">842</text>
<rect x="150" y="142" width="90" height="44" rx="8" fill="#FEF3C7"/>
<circle cx="172" cy="164" r="10" fill="#F59E0B"/>
<text x="169" y="168" font-size="10" fill="#fff" font-family="system-ui">⏳</text>
<text x="188" y="160" font-size="8" font-family="system-ui" fill="#374151">Waiting</text>
<text x="188" y="172" font-size="14" font-family="system-ui" font-weight="700" fill="#F59E0B">405</text>
</svg>`,

  // 5. Attendee Search & Export
  reg5: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes reg5Type { 0%{width:0} 100%{width:60px} }
  @keyframes reg5Blink { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes reg5Fade { 0%{opacity:0;transform:translateY(4px)} 100%{opacity:1;transform:translateY(0)} }
  .reg5-typed{animation:reg5Type 1s steps(8) both}
  .reg5-cursor{animation:reg5Blink .8s step-end infinite}
  .reg5-r1{animation:reg5Fade .4s .8s ease both}
  .reg5-r2{animation:reg5Fade .4s 1s ease both}
</style>
<rect x="30" y="20" width="160" height="32" rx="8" fill="#fff" stroke="#375DFB" stroke-width="1.5"/>
<circle cx="48" cy="36" r="8" fill="none" stroke="#375DFB" stroke-width="1.5"/>
<line x1="54" y1="42" x2="58" y2="46" stroke="#375DFB" stroke-width="1.5"/>
<rect x="64" y="30" width="0" height="10" fill="#DBEAFE" class="reg5-typed"/>
<rect x="124" y="30" width="1.5" height="12" fill="#375DFB" class="reg5-cursor"/>
<rect x="200" y="20" width="56" height="32" rx="8" fill="#375DFB"/>
<text x="210" y="40" font-size="9" fill="#fff" font-family="system-ui" font-weight="600">Export</text>
<path d="M244 32l-4 4m0-8v8h-6" stroke="#fff" stroke-width="1.5" fill="none" transform="rotate(90 242 36)"/>
<g class="reg5-r1">
  <rect x="30" y="66" width="226" height="36" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <circle cx="52" cy="84" r="10" fill="#DBEAFE"/>
  <rect x="70" y="78" width="80" height="5" rx="2.5" fill="#1F2937" opacity=".2"/>
  <rect x="70" y="87" width="50" height="4" rx="2" fill="#1F2937" opacity=".1"/>
  <rect x="200" y="78" width="40" height="14" rx="7" fill="#D1FAE5"/>
  <text x="208" y="88" font-size="7" fill="#10B981" font-family="system-ui">Paid</text>
</g>
<g class="reg5-r2">
  <rect x="30" y="108" width="226" height="36" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <circle cx="52" cy="126" r="10" fill="#D1FAE5"/>
  <rect x="70" y="120" width="70" height="5" rx="2.5" fill="#1F2937" opacity=".2"/>
  <rect x="70" y="129" width="55" height="4" rx="2" fill="#1F2937" opacity=".1"/>
  <rect x="200" y="120" width="40" height="14" rx="7" fill="#D1FAE5"/>
  <text x="208" y="130" font-size="7" fill="#10B981" font-family="system-ui">Paid</text>
</g>
<rect x="30" y="154" width="226" height="26" rx="6" fill="#F9FAFB" stroke="#E5E7EB" stroke-width=".5" opacity=".5"/>
<text x="100" y="172" font-size="8" fill="#9CA3AF" font-family="system-ui">Showing 2 of 1,247 results</text>
</svg>`,

  /* ── Tab 2 : Import & Data ───────────────────────────────── */

  // 6. CSV / Excel Import
  reg6: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes reg6Upload { 0%{transform:translateY(12px);opacity:0} 60%{transform:translateY(-2px);opacity:1} 100%{transform:translateY(0)} }
  @keyframes reg6Glow { 0%,100%{opacity:.3} 50%{opacity:.7} }
  .reg6-arrow{animation:reg6Upload .8s ease both}
  .reg6-glow{animation:reg6Glow 1.5s ease infinite}
</style>
<rect x="80" y="24" width="120" height="90" rx="6" fill="#fff" stroke="#10B981" stroke-width="1.5"/>
<rect x="80" y="24" width="120" height="22" rx="6" fill="#D1FAE5"/>
<text x="110" y="39" font-size="9" font-family="system-ui" fill="#10B981" font-weight="600">.CSV / .XLSX</text>
<line x1="80" y1="56" x2="200" y2="56" stroke="#E5E7EB" stroke-width=".5"/>
<line x1="120" y1="46" x2="120" y2="114" stroke="#E5E7EB" stroke-width=".5"/>
<line x1="160" y1="46" x2="160" y2="114" stroke="#E5E7EB" stroke-width=".5"/>
<rect x="84" y="60" width="32" height="8" rx="2" fill="#DBEAFE"/><rect x="124" y="60" width="32" height="8" rx="2" fill="#DBEAFE"/><rect x="164" y="60" width="32" height="8" rx="2" fill="#DBEAFE"/>
<rect x="84" y="74" width="32" height="6" rx="2" fill="#E5E7EB"/><rect x="124" y="74" width="32" height="6" rx="2" fill="#E5E7EB"/><rect x="164" y="74" width="32" height="6" rx="2" fill="#E5E7EB"/>
<rect x="84" y="86" width="32" height="6" rx="2" fill="#E5E7EB"/><rect x="124" y="86" width="32" height="6" rx="2" fill="#E5E7EB"/><rect x="164" y="86" width="32" height="6" rx="2" fill="#E5E7EB"/>
<rect x="84" y="98" width="32" height="6" rx="2" fill="#E5E7EB"/><rect x="124" y="98" width="32" height="6" rx="2" fill="#E5E7EB"/><rect x="164" y="98" width="32" height="6" rx="2" fill="#E5E7EB"/>
<g class="reg6-arrow">
  <rect x="114" y="128" width="52" height="52" rx="26" fill="#375DFB"/>
  <path d="M140 160v-20m-7 5l7-7 7 7" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
</g>
<circle cx="140" cy="154" r="30" fill="#375DFB" opacity=".08" class="reg6-glow"/>
</svg>`,

  // 7. Duplicate Detection
  reg7: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes reg7Shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-3px)} 75%{transform:translateX(3px)} }
  @keyframes reg7Flag { 0%{opacity:0;transform:scale(.5)} 100%{opacity:1;transform:scale(1)} }
  .reg7-dup{animation:reg7Shake .4s .6s ease both}
  .reg7-flag{animation:reg7Flag .3s .8s ease both;transform-origin:center}
</style>
<rect x="36" y="30" width="130" height="70" rx="8" fill="#fff" stroke="#E5E7EB" stroke-width="1.5"/>
<circle cx="66" cy="58" r="14" fill="#DBEAFE"/>
<rect x="88" y="50" width="60" height="6" rx="3" fill="#1F2937" opacity=".2"/>
<rect x="88" y="62" width="40" height="4" rx="2" fill="#1F2937" opacity=".1"/>
<text x="88" y="82" font-size="7" fill="#9CA3AF" font-family="system-ui">john@example.com</text>
<g class="reg7-dup">
  <rect x="114" y="60" width="130" height="70" rx="8" fill="#fff" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="4 2"/>
  <circle cx="144" cy="88" r="14" fill="#FEE2E2"/>
  <rect x="166" y="80" width="60" height="6" rx="3" fill="#1F2937" opacity=".2"/>
  <rect x="166" y="92" width="40" height="4" rx="2" fill="#1F2937" opacity=".1"/>
  <text x="166" y="112" font-size="7" fill="#9CA3AF" font-family="system-ui">john@example.com</text>
</g>
<g class="reg7-flag">
  <rect x="100" y="46" width="78" height="24" rx="12" fill="#EF4444"/>
  <text x="110" y="62" font-size="9" fill="#fff" font-family="system-ui" font-weight="600">⚠ Duplicate</text>
</g>
<rect x="56" y="148" width="74" height="30" rx="6" fill="#D1FAE5" stroke="#10B981" stroke-width="1"/>
<text x="68" y="167" font-size="9" fill="#10B981" font-family="system-ui" font-weight="600">Merge</text>
<rect x="150" y="148" width="74" height="30" rx="6" fill="#FEE2E2" stroke="#EF4444" stroke-width="1"/>
<text x="162" y="167" font-size="9" fill="#EF4444" font-family="system-ui" font-weight="600">Remove</text>
</svg>`,

  // 8. Field Mapping Wizard
  reg8: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes reg8Draw { 0%{stroke-dashoffset:60} 100%{stroke-dashoffset:0} }
  @keyframes reg8Pop { 0%{opacity:0;transform:scale(.8)} 100%{opacity:1;transform:scale(1)} }
  .reg8-line1{stroke-dasharray:60;animation:reg8Draw .8s ease both}
  .reg8-line2{stroke-dasharray:60;animation:reg8Draw .8s .2s ease both}
  .reg8-line3{stroke-dasharray:60;animation:reg8Draw .8s .4s ease both}
  .reg8-line4{stroke-dasharray:60;animation:reg8Draw .8s .6s ease both}
  .reg8-ok{animation:reg8Pop .3s .9s ease both}
</style>
<text x="30" y="22" font-size="9" font-family="system-ui" fill="#9CA3AF" font-weight="600">CSV COLUMNS</text>
<text x="180" y="22" font-size="9" font-family="system-ui" fill="#9CA3AF" font-weight="600">YOUR FIELDS</text>
<rect x="20" y="32" width="90" height="26" rx="5" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
<text x="32" y="49" font-size="9" fill="#374151" font-family="system-ui">first_name</text>
<rect x="20" y="66" width="90" height="26" rx="5" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
<text x="32" y="83" font-size="9" fill="#374151" font-family="system-ui">email_addr</text>
<rect x="20" y="100" width="90" height="26" rx="5" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
<text x="32" y="117" font-size="9" fill="#374151" font-family="system-ui">phone_no</text>
<rect x="20" y="134" width="90" height="26" rx="5" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
<text x="32" y="151" font-size="9" fill="#374151" font-family="system-ui">tix_type</text>
<rect x="170" y="32" width="90" height="26" rx="5" fill="#DBEAFE" stroke="#375DFB" stroke-width="1"/>
<text x="182" y="49" font-size="9" fill="#375DFB" font-family="system-ui" font-weight="600">First Name</text>
<rect x="170" y="66" width="90" height="26" rx="5" fill="#DBEAFE" stroke="#375DFB" stroke-width="1"/>
<text x="182" y="83" font-size="9" fill="#375DFB" font-family="system-ui" font-weight="600">Email</text>
<rect x="170" y="100" width="90" height="26" rx="5" fill="#DBEAFE" stroke="#375DFB" stroke-width="1"/>
<text x="182" y="117" font-size="9" fill="#375DFB" font-family="system-ui" font-weight="600">Phone</text>
<rect x="170" y="134" width="90" height="26" rx="5" fill="#DBEAFE" stroke="#375DFB" stroke-width="1"/>
<text x="182" y="151" font-size="9" fill="#375DFB" font-family="system-ui" font-weight="600">Ticket Type</text>
<path d="M110 45 L170 45" stroke="#375DFB" stroke-width="1.5" marker-end="url(#reg8arr)" class="reg8-line1"/>
<path d="M110 79 L170 79" stroke="#375DFB" stroke-width="1.5" marker-end="url(#reg8arr)" class="reg8-line2"/>
<path d="M110 113 L170 113" stroke="#375DFB" stroke-width="1.5" marker-end="url(#reg8arr)" class="reg8-line3"/>
<path d="M110 147 L170 147" stroke="#375DFB" stroke-width="1.5" marker-end="url(#reg8arr)" class="reg8-line4"/>
<defs><marker id="reg8arr" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L6 3L0 6z" fill="#375DFB"/></marker></defs>
<g class="reg8-ok">
  <rect x="105" y="170" width="70" height="22" rx="11" fill="#D1FAE5"/>
  <text x="115" y="185" font-size="9" fill="#10B981" font-family="system-ui" font-weight="600">✓ Mapped</text>
</g>
</svg>`,

  // 9. Bulk Registration
  reg9: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes reg9Stack { 0%{opacity:0;transform:translateY(10px)} 100%{opacity:1;transform:translateY(0)} }
  @keyframes reg9Badge { 0%{transform:scale(0)} 100%{transform:scale(1)} }
  .reg9-c1{animation:reg9Stack .4s ease both}
  .reg9-c2{animation:reg9Stack .4s .12s ease both}
  .reg9-c3{animation:reg9Stack .4s .24s ease both}
  .reg9-c4{animation:reg9Stack .4s .36s ease both}
  .reg9-c5{animation:reg9Stack .4s .48s ease both}
  .reg9-badge{animation:reg9Badge .3s .7s ease both;transform-origin:210px 28px}
</style>
<g class="reg9-c1">
  <rect x="50" y="18" width="180" height="30" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <circle cx="72" cy="33" r="9" fill="#DBEAFE"/><rect x="90" y="29" width="70" height="5" rx="2.5" fill="#1F2937" opacity=".18"/>
  <rect x="168" y="27" width="44" height="14" rx="7" fill="#D1FAE5"/><text x="176" y="37" font-size="7" fill="#10B981" font-family="system-ui">Added</text>
</g>
<g class="reg9-c2">
  <rect x="50" y="54" width="180" height="30" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <circle cx="72" cy="69" r="9" fill="#D1FAE5"/><rect x="90" y="65" width="60" height="5" rx="2.5" fill="#1F2937" opacity=".18"/>
  <rect x="168" y="63" width="44" height="14" rx="7" fill="#D1FAE5"/><text x="176" y="73" font-size="7" fill="#10B981" font-family="system-ui">Added</text>
</g>
<g class="reg9-c3">
  <rect x="50" y="90" width="180" height="30" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <circle cx="72" cy="105" r="9" fill="#DBEAFE"/><rect x="90" y="101" width="75" height="5" rx="2.5" fill="#1F2937" opacity=".18"/>
  <rect x="168" y="99" width="44" height="14" rx="7" fill="#D1FAE5"/><text x="176" y="109" font-size="7" fill="#10B981" font-family="system-ui">Added</text>
</g>
<g class="reg9-c4">
  <rect x="50" y="126" width="180" height="30" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <circle cx="72" cy="141" r="9" fill="#D1FAE5"/><rect x="90" y="137" width="65" height="5" rx="2.5" fill="#1F2937" opacity=".18"/>
  <rect x="168" y="135" width="44" height="14" rx="7" fill="#D1FAE5"/><text x="176" y="145" font-size="7" fill="#10B981" font-family="system-ui">Added</text>
</g>
<g class="reg9-c5">
  <rect x="50" y="162" width="180" height="30" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <circle cx="72" cy="177" r="9" fill="#DBEAFE"/><rect x="90" y="173" width="55" height="5" rx="2.5" fill="#1F2937" opacity=".18"/>
  <rect x="168" y="171" width="44" height="14" rx="7" fill="#D1FAE5"/><text x="176" y="181" font-size="7" fill="#10B981" font-family="system-ui">Added</text>
</g>
<g class="reg9-badge">
  <rect x="188" y="16" width="44" height="24" rx="12" fill="#375DFB"/>
  <text x="198" y="33" font-size="11" fill="#fff" font-family="system-ui" font-weight="700">+50</text>
</g>
</svg>`,

  // 10. Import History
  reg10: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes reg10Appear { 0%{opacity:0;transform:translateX(-6px)} 100%{opacity:1;transform:translateX(0)} }
  @keyframes reg10Check { 0%{stroke-dashoffset:12} 100%{stroke-dashoffset:0} }
  .reg10-e1{animation:reg10Appear .4s ease both}
  .reg10-e2{animation:reg10Appear .4s .15s ease both}
  .reg10-e3{animation:reg10Appear .4s .3s ease both}
  .reg10-e4{animation:reg10Appear .4s .45s ease both}
  .reg10-chk{stroke-dasharray:12;animation:reg10Check .4s .6s ease both}
</style>
<line x1="60" y1="20" x2="60" y2="185" stroke="#E5E7EB" stroke-width="2"/>
<g class="reg10-e1">
  <circle cx="60" cy="36" r="8" fill="#D1FAE5" stroke="#10B981" stroke-width="1.5"/>
  <path d="M56 36l3 3 5-5" stroke="#10B981" stroke-width="1.5" fill="none" class="reg10-chk"/>
  <rect x="78" y="24" width="160" height="24" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <text x="86" y="37" font-size="8" fill="#374151" font-family="system-ui">vip-attendees.csv</text>
  <text x="180" y="37" font-size="7" fill="#10B981" font-family="system-ui">248 imported</text>
  <text x="86" y="46" font-size="6" fill="#9CA3AF" font-family="system-ui">Today, 2:30 PM</text>
</g>
<g class="reg10-e2">
  <circle cx="60" cy="76" r="8" fill="#D1FAE5" stroke="#10B981" stroke-width="1.5"/>
  <path d="M56 76l3 3 5-5" stroke="#10B981" stroke-width="1.5" fill="none"/>
  <rect x="78" y="64" width="160" height="24" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <text x="86" y="77" font-size="8" fill="#374151" font-family="system-ui">speakers-list.xlsx</text>
  <text x="180" y="77" font-size="7" fill="#10B981" font-family="system-ui">56 imported</text>
  <text x="86" y="86" font-size="6" fill="#9CA3AF" font-family="system-ui">Today, 11:15 AM</text>
</g>
<g class="reg10-e3">
  <circle cx="60" cy="116" r="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5"/>
  <text x="57" y="120" font-size="9" fill="#F59E0B" font-family="system-ui" font-weight="700">!</text>
  <rect x="78" y="104" width="160" height="24" rx="6" fill="#fff" stroke="#F59E0B" stroke-width="1"/>
  <text x="86" y="117" font-size="8" fill="#374151" font-family="system-ui">workshop-reg.csv</text>
  <text x="176" y="117" font-size="7" fill="#F59E0B" font-family="system-ui">3 warnings</text>
  <text x="86" y="126" font-size="6" fill="#9CA3AF" font-family="system-ui">Yesterday, 4:00 PM</text>
</g>
<g class="reg10-e4">
  <circle cx="60" cy="156" r="8" fill="#D1FAE5" stroke="#10B981" stroke-width="1.5"/>
  <path d="M56 156l3 3 5-5" stroke="#10B981" stroke-width="1.5" fill="none"/>
  <rect x="78" y="144" width="160" height="24" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <text x="86" y="157" font-size="8" fill="#374151" font-family="system-ui">general-admission.csv</text>
  <text x="176" y="157" font-size="7" fill="#10B981" font-family="system-ui">1,024 imported</text>
  <text x="86" y="166" font-size="6" fill="#9CA3AF" font-family="system-ui">Apr 5, 9:00 AM</text>
</g>
</svg>`,

  /* ── Tab 3 : Forms & Fields ──────────────────────────────── */

  // 11. Custom Registration Fields
  reg11: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes reg11Slide { 0%{opacity:0;transform:translateY(6px)} 100%{opacity:1;transform:translateY(0)} }
  .reg11-f1{animation:reg11Slide .35s ease both}
  .reg11-f2{animation:reg11Slide .35s .1s ease both}
  .reg11-f3{animation:reg11Slide .35s .2s ease both}
  .reg11-f4{animation:reg11Slide .35s .3s ease both}
  .reg11-f5{animation:reg11Slide .35s .4s ease both}
</style>
<text x="40" y="24" font-size="10" font-family="system-ui" font-weight="600" fill="#1F2937">Registration Form</text>
<g class="reg11-f1">
  <text x="40" y="48" font-size="8" fill="#374151" font-family="system-ui">Full Name *</text>
  <rect x="40" y="52" width="200" height="24" rx="5" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <text x="50" y="68" font-size="8" fill="#9CA3AF" font-family="system-ui">Enter your full name</text>
</g>
<g class="reg11-f2">
  <text x="40" y="94" font-size="8" fill="#374151" font-family="system-ui">Email *</text>
  <rect x="40" y="98" width="200" height="24" rx="5" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <text x="50" y="114" font-size="8" fill="#9CA3AF" font-family="system-ui">you@company.com</text>
</g>
<g class="reg11-f3">
  <text x="40" y="140" font-size="8" fill="#374151" font-family="system-ui">Company</text>
  <rect x="40" y="144" width="96" height="24" rx="5" fill="#fff" stroke="#375DFB" stroke-width="1.5"/>
  <text x="50" y="160" font-size="8" fill="#375DFB" font-family="system-ui">Acme Inc.</text>
  <text x="144" y="140" font-size="8" fill="#374151" font-family="system-ui">Dietary ▾</text>
  <rect x="144" y="144" width="96" height="24" rx="5" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <text x="154" y="160" font-size="8" fill="#9CA3AF" font-family="system-ui">Select…</text>
</g>
<g class="reg11-f4">
  <rect x="40" y="178" width="12" height="12" rx="2" fill="#375DFB"/>
  <path d="M43 184l2 2 4-4" stroke="#fff" stroke-width="1.5" fill="none"/>
  <text x="58" y="189" font-size="8" fill="#374151" font-family="system-ui">I agree to the Code of Conduct</text>
</g>
</svg>`,

  // 12. Conditional Logic
  reg12: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes reg12Draw { 0%{stroke-dashoffset:100} 100%{stroke-dashoffset:0} }
  @keyframes reg12Pop { 0%{opacity:0;transform:scale(.7)} 100%{opacity:1;transform:scale(1)} }
  .reg12-path{stroke-dasharray:100;animation:reg12Draw 1s ease both}
  .reg12-yes{animation:reg12Pop .3s .7s ease both;transform-origin:center}
  .reg12-no{animation:reg12Pop .3s .9s ease both;transform-origin:center}
</style>
<rect x="90" y="12" width="100" height="30" rx="6" fill="#DBEAFE" stroke="#375DFB" stroke-width="1"/>
<text x="104" y="31" font-size="9" fill="#375DFB" font-family="system-ui" font-weight="600">Ticket = VIP?</text>
<path d="M140 42 L140 60" stroke="#374151" stroke-width="1.5" class="reg12-path"/>
<polygon points="140,62 130,82 140,102 150,82" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1"/>
<text x="128" y="86" font-size="9" fill="#F59E0B" font-family="system-ui" font-weight="600">IF</text>
<path d="M130 82 L60 82 L60 120" stroke="#10B981" stroke-width="1.5" class="reg12-path"/>
<path d="M150 82 L220 82 L220 120" stroke="#EF4444" stroke-width="1.5" class="reg12-path"/>
<text x="70" y="78" font-size="8" fill="#10B981" font-family="system-ui" font-weight="600">YES</text>
<text x="195" y="78" font-size="8" fill="#EF4444" font-family="system-ui" font-weight="600">NO</text>
<g class="reg12-yes">
  <rect x="16" y="120" width="88" height="52" rx="6" fill="#D1FAE5" stroke="#10B981" stroke-width="1"/>
  <text x="26" y="139" font-size="8" fill="#10B981" font-family="system-ui" font-weight="600">Show fields:</text>
  <text x="26" y="153" font-size="7" fill="#374151" font-family="system-ui">• Meal preference</text>
  <text x="26" y="164" font-size="7" fill="#374151" font-family="system-ui">• VIP lounge pass</text>
</g>
<g class="reg12-no">
  <rect x="176" y="120" width="88" height="52" rx="6" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
  <text x="186" y="139" font-size="8" fill="#374151" font-family="system-ui" font-weight="600">Show fields:</text>
  <text x="186" y="153" font-size="7" fill="#374151" font-family="system-ui">• Session picks</text>
  <text x="186" y="164" font-size="7" fill="#374151" font-family="system-ui">• T-shirt size</text>
</g>
<path d="M60 172 L140 190 L220 172" stroke="#374151" stroke-width="1" stroke-dasharray="3 2" fill="none"/>
<circle cx="140" cy="190" r="5" fill="#375DFB"/>
<text x="130" y="194" font-size="6" fill="#fff" font-family="system-ui">✓</text>
</svg>`,

  // 13. Form Builder
  reg13: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes reg13Drag { 0%{transform:translate(0,0);opacity:.5} 50%{transform:translate(90px,30px);opacity:.9} 100%{transform:translate(90px,30px);opacity:0} }
  @keyframes reg13Drop { 0%{opacity:0;height:0} 100%{opacity:1;height:28px} }
  .reg13-ghost{animation:reg13Drag 2s ease infinite}
  .reg13-new{animation:reg13Drop .4s 1s ease both}
</style>
<rect x="16" y="14" width="80" height="172" rx="6" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
<text x="24" y="32" font-size="8" font-family="system-ui" fill="#9CA3AF" font-weight="600">FIELDS</text>
<rect x="22" y="40" width="68" height="22" rx="4" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
<text x="30" y="55" font-size="7" fill="#374151" font-family="system-ui">Aa Text</text>
<rect x="22" y="68" width="68" height="22" rx="4" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
<text x="30" y="83" font-size="7" fill="#374151" font-family="system-ui">@ Email</text>
<rect x="22" y="96" width="68" height="22" rx="4" fill="#fff" stroke="#375DFB" stroke-width="1.5"/>
<text x="30" y="111" font-size="7" fill="#375DFB" font-family="system-ui" font-weight="600">▾ Dropdown</text>
<rect x="22" y="124" width="68" height="22" rx="4" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
<text x="30" y="139" font-size="7" fill="#374151" font-family="system-ui">☑ Checkbox</text>
<rect x="22" y="152" width="68" height="22" rx="4" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
<text x="30" y="167" font-size="7" fill="#374151" font-family="system-ui"># Number</text>
<rect x="110" y="14" width="154" height="172" rx="6" fill="#fff" stroke="#375DFB" stroke-width="1.5"/>
<text x="118" y="32" font-size="8" font-family="system-ui" fill="#375DFB" font-weight="600">FORM CANVAS</text>
<rect x="118" y="42" width="138" height="24" rx="4" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
<text x="126" y="58" font-size="7" fill="#374151" font-family="system-ui">Full Name</text>
<rect x="118" y="72" width="138" height="24" rx="4" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
<text x="126" y="88" font-size="7" fill="#374151" font-family="system-ui">Email Address</text>
<rect x="118" y="102" width="138" height="28" rx="4" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="4 2" class="reg13-new"/>
<text x="150" y="120" font-size="7" fill="#375DFB" font-family="system-ui">Drop field here</text>
<g class="reg13-ghost" opacity="0">
  <rect x="22" y="96" width="68" height="22" rx="4" fill="#375DFB" opacity=".15" stroke="#375DFB" stroke-width="1"/>
  <text x="30" y="111" font-size="7" fill="#375DFB" font-family="system-ui">▾ Dropdown</text>
</g>
<rect x="118" y="140" width="138" height="24" rx="4" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
<text x="126" y="156" font-size="7" fill="#374151" font-family="system-ui">Phone Number</text>
</svg>`,

  // 14. GDPR Consent Fields
  reg14: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes reg14Shield { 0%{transform:scale(.8);opacity:0} 100%{transform:scale(1);opacity:1} }
  @keyframes reg14Check { 0%{stroke-dashoffset:20} 100%{stroke-dashoffset:0} }
  @keyframes reg14Fade { 0%{opacity:0} 100%{opacity:1} }
  .reg14-shield{animation:reg14Shield .5s ease both;transform-origin:140px 60px}
  .reg14-tick{stroke-dasharray:20;animation:reg14Check .5s .5s ease both}
  .reg14-row1{animation:reg14Fade .3s .4s ease both}
  .reg14-row2{animation:reg14Fade .3s .6s ease both}
  .reg14-row3{animation:reg14Fade .3s .8s ease both}
</style>
<g class="reg14-shield">
  <path d="M140 16 L172 30 L172 60 C172 82 140 100 140 100 C140 100 108 82 108 60 L108 30 Z" fill="#DBEAFE" stroke="#375DFB" stroke-width="2"/>
  <path d="M126 56l8 8 18-18" stroke="#375DFB" stroke-width="3" fill="none" stroke-linecap="round" class="reg14-tick"/>
</g>
<g class="reg14-row1">
  <rect x="36" y="112" width="14" height="14" rx="3" fill="#375DFB"/>
  <path d="M40 119l2 2 5-5" stroke="#fff" stroke-width="1.5" fill="none"/>
  <text x="56" y="123" font-size="8" fill="#374151" font-family="system-ui">I consent to data processing per GDPR Art.6</text>
</g>
<g class="reg14-row2">
  <rect x="36" y="136" width="14" height="14" rx="3" fill="#375DFB"/>
  <path d="M40 143l2 2 5-5" stroke="#fff" stroke-width="1.5" fill="none"/>
  <text x="56" y="147" font-size="8" fill="#374151" font-family="system-ui">I agree to receive event communications</text>
</g>
<g class="reg14-row3">
  <rect x="36" y="160" width="14" height="14" rx="3" fill="#fff" stroke="#E5E7EB" stroke-width="1.5"/>
  <text x="56" y="171" font-size="8" fill="#374151" font-family="system-ui">Share my info with sponsors (optional)</text>
</g>
<rect x="36" y="182" width="80" height="8" rx="4" fill="#E5E7EB"/>
<text x="38" y="189" font-size="5" fill="#9CA3AF" font-family="system-ui">Read our Privacy Policy</text>
</svg>`,

  // 15. Multi-Ticket Registration
  reg15: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes reg15Fan { 0%{transform:rotate(0) translateY(0);opacity:0} 100%{opacity:1} }
  @keyframes reg15Stamp { 0%{transform:scale(0) rotate(-15deg)} 100%{transform:scale(1) rotate(0)} }
  .reg15-t1{animation:reg15Fan .4s ease both}
  .reg15-t2{animation:reg15Fan .4s .15s ease both}
  .reg15-t3{animation:reg15Fan .4s .3s ease both}
  .reg15-stamp{animation:reg15Stamp .3s .6s ease both;transform-origin:center}
</style>
<g class="reg15-t1" transform="translate(20,10)">
  <rect x="0" y="0" width="110" height="60" rx="8" fill="#DBEAFE" stroke="#375DFB" stroke-width="1"/>
  <line x1="76" y1="0" x2="76" y2="60" stroke="#375DFB" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="10" y="18" font-size="7" fill="#375DFB" font-family="system-ui" font-weight="600">GENERAL</text>
  <text x="10" y="32" font-size="12" fill="#375DFB" font-family="system-ui" font-weight="700">$99</text>
  <rect x="10" y="40" width="50" height="4" rx="2" fill="#375DFB" opacity=".2"/>
  <text x="82" y="34" font-size="7" fill="#375DFB" font-family="system-ui">×2</text>
</g>
<g class="reg15-t2" transform="translate(85,65)">
  <rect x="0" y="0" width="110" height="60" rx="8" fill="#D1FAE5" stroke="#10B981" stroke-width="1"/>
  <line x1="76" y1="0" x2="76" y2="60" stroke="#10B981" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="10" y="18" font-size="7" fill="#10B981" font-family="system-ui" font-weight="600">VIP</text>
  <text x="10" y="32" font-size="12" fill="#10B981" font-family="system-ui" font-weight="700">$249</text>
  <rect x="10" y="40" width="50" height="4" rx="2" fill="#10B981" opacity=".2"/>
  <text x="82" y="34" font-size="7" fill="#10B981" font-family="system-ui">×1</text>
</g>
<g class="reg15-t3" transform="translate(150,120)">
  <rect x="0" y="0" width="110" height="60" rx="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1"/>
  <line x1="76" y1="0" x2="76" y2="60" stroke="#F59E0B" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="10" y="18" font-size="7" fill="#F59E0B" font-family="system-ui" font-weight="600">WORKSHOP</text>
  <text x="10" y="32" font-size="12" fill="#F59E0B" font-family="system-ui" font-weight="700">$49</text>
  <rect x="10" y="40" width="50" height="4" rx="2" fill="#F59E0B" opacity=".2"/>
  <text x="82" y="34" font-size="7" fill="#F59E0B" font-family="system-ui">×3</text>
</g>
<g class="reg15-stamp">
  <rect x="20" y="140" width="80" height="40" rx="8" fill="#375DFB"/>
  <text x="30" y="157" font-size="7" fill="#fff" font-family="system-ui">TOTAL</text>
  <text x="30" y="172" font-size="14" fill="#fff" font-family="system-ui" font-weight="700">$594</text>
</g>
</svg>`,

};
