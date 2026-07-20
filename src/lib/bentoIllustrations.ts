export const ILLOS: Record<string, string> = {

  dashboard: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-dashboard-bar { 0%{height:0;y:100} 100%{} }
  @keyframes ill-dashboard-pulse { 0%,100%{opacity:.6} 50%{opacity:1} }
  .ill-dashboard-b1{animation:ill-dashboard-bar .6s ease both}
  .ill-dashboard-dot{animation:ill-dashboard-pulse 2s ease infinite}
</style>
<rect x="20" y="14" width="240" height="172" rx="10" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
<rect x="20" y="14" width="240" height="28" rx="10" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
<rect x="20" y="36" width="240" height="2" fill="#E5E7EB"/>
<text x="34" y="33" font-size="9" font-family="system-ui" font-weight="600" fill="#1F2937">Analytics Overview</text>
<circle cx="243" cy="28" r="5" fill="#10B981" class="ill-dashboard-dot"/>
<rect x="30" y="52" width="64" height="40" rx="6" fill="#DBEAFE"/>
<text x="40" y="70" font-size="7" fill="#375DFB" font-family="system-ui">Sessions</text>
<text x="40" y="84" font-size="13" fill="#375DFB" font-family="system-ui" font-weight="700">4.2k</text>
<rect x="104" y="52" width="64" height="40" rx="6" fill="#D1FAE5"/>
<text x="114" y="70" font-size="7" fill="#10B981" font-family="system-ui">Revenue</text>
<text x="114" y="84" font-size="13" fill="#10B981" font-family="system-ui" font-weight="700">$18k</text>
<rect x="178" y="52" width="64" height="40" rx="6" fill="#EDE9FE"/>
<text x="188" y="70" font-size="7" fill="#7C3AED" font-family="system-ui">Tickets</text>
<text x="188" y="84" font-size="13" fill="#7C3AED" font-family="system-ui" font-weight="700">1,247</text>
<rect x="30" y="102" width="220" height="74" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
<line x1="30" y1="150" x2="250" y2="150" stroke="#E5E7EB" stroke-width=".5"/>
<rect x="44" y="126" width="18" height="24" rx="2" fill="#DBEAFE"/>
<rect x="72" y="118" width="18" height="32" rx="2" fill="#375DFB"/>
<rect x="100" y="130" width="18" height="20" rx="2" fill="#DBEAFE"/>
<rect x="128" y="112" width="18" height="38" rx="2" fill="#375DFB"/>
<rect x="156" y="122" width="18" height="28" rx="2" fill="#DBEAFE"/>
<rect x="184" y="108" width="18" height="42" rx="2" fill="#375DFB"/>
<rect x="212" y="116" width="18" height="34" rx="2" fill="#6F8BFF"/>
<polyline points="53,140 81,130 109,135 137,118 165,128 193,112 221,120" stroke="#10B981" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<circle cx="221" cy="120" r="3" fill="#10B981" class="ill-dashboard-dot"/>
</svg>`,

  chart: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-chart-grow { 0%{transform:scaleY(0);transform-origin:bottom} 100%{transform:scaleY(1)} }
  .ill-chart-b1{animation:ill-chart-grow .5s .1s ease both}
  .ill-chart-b2{animation:ill-chart-grow .5s .2s ease both}
  .ill-chart-b3{animation:ill-chart-grow .5s .3s ease both}
  .ill-chart-b4{animation:ill-chart-grow .5s .4s ease both}
  .ill-chart-b5{animation:ill-chart-grow .5s .5s ease both}
</style>
<rect x="24" y="20" width="232" height="160" rx="8" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
<text x="36" y="40" font-size="10" font-family="system-ui" font-weight="600" fill="#1F2937">Ticket Sales</text>
<text x="200" y="40" font-size="8" fill="#10B981" font-family="system-ui">↑ 24%</text>
<line x1="36" y1="155" x2="244" y2="155" stroke="#E5E7EB" stroke-width="1"/>
<line x1="36" y1="50" x2="36" y2="155" stroke="#E5E7EB" stroke-width="1"/>
<g class="ill-chart-b1"><rect x="48" y="110" width="28" height="45" rx="3" fill="#DBEAFE"/></g>
<g class="ill-chart-b2"><rect x="86" y="88" width="28" height="67" rx="3" fill="#375DFB"/></g>
<g class="ill-chart-b3"><rect x="124" y="100" width="28" height="55" rx="3" fill="#DBEAFE"/></g>
<g class="ill-chart-b4"><rect x="162" y="74" width="28" height="81" rx="3" fill="#375DFB"/></g>
<g class="ill-chart-b5"><rect x="200" y="60" width="28" height="95" rx="3" fill="#6F8BFF"/></g>
<text x="54" y="168" font-size="7" fill="#9CA3AF" font-family="system-ui">Mon</text>
<text x="92" y="168" font-size="7" fill="#9CA3AF" font-family="system-ui">Tue</text>
<text x="130" y="168" font-size="7" fill="#9CA3AF" font-family="system-ui">Wed</text>
<text x="166" y="168" font-size="7" fill="#9CA3AF" font-family="system-ui">Thu</text>
<text x="206" y="168" font-size="7" fill="#9CA3AF" font-family="system-ui">Fri</text>
</svg>`,

  trend: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-trend-draw { 0%{stroke-dashoffset:300} 100%{stroke-dashoffset:0} }
  @keyframes ill-trend-dot { 0%,100%{r:4} 50%{r:6} }
  .ill-trend-line{stroke-dasharray:300;animation:ill-trend-draw 1.2s ease both}
  .ill-trend-dot{animation:ill-trend-dot 1.5s ease infinite}
</style>
<rect x="24" y="20" width="232" height="160" rx="8" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
<text x="36" y="40" font-size="10" font-family="system-ui" font-weight="600" fill="#1F2937">Growth Trend</text>
<rect x="196" y="28" width="48" height="18" rx="9" fill="#D1FAE5"/>
<text x="204" y="40" font-size="8" fill="#10B981" font-family="system-ui" font-weight="600">↑ 38%</text>
<line x1="36" y1="158" x2="244" y2="158" stroke="#E5E7EB" stroke-width=".5"/>
<line x1="36" y1="50" x2="36" y2="158" stroke="#E5E7EB" stroke-width=".5"/>
<line x1="36" y1="126" x2="244" y2="126" stroke="#E5E7EB" stroke-width=".5" stroke-dasharray="3 3"/>
<line x1="36" y1="94" x2="244" y2="94" stroke="#E5E7EB" stroke-width=".5" stroke-dasharray="3 3"/>
<polyline points="44,148 80,142 110,136 140,122 165,108 192,88 220,72 240,58" stroke="#375DFB" stroke-width="2.5" fill="none" stroke-linecap="round" class="ill-trend-line"/>
<path d="M44,148 80,142 110,136 140,122 165,108 192,88 220,72 240,58 240,158 44,158Z" fill="#375DFB" opacity=".06"/>
<circle cx="240" cy="58" r="4" fill="#375DFB" class="ill-trend-dot"/>
</svg>`,

  video: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-video-pulse { 0%,100%{opacity:.7} 50%{opacity:1} }
  @keyframes ill-video-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
  .ill-video-live{animation:ill-video-pulse 1.5s ease infinite}
  .ill-video-cam{animation:ill-video-float 3s ease infinite}
</style>
<rect x="20" y="14" width="112" height="80" rx="6" fill="#1F2937"/>
<circle cx="76" cy="54" r="16" fill="#375DFB" opacity=".3"/>
<polygon points="70,46 70,62 86,54" fill="#fff"/>
<rect x="140" y="14" width="120" height="80" rx="6" fill="#1F2937"/>
<circle cx="200" cy="54" r="14" fill="#DBEAFE" opacity=".2"/>
<circle cx="200" cy="48" r="8" fill="#DBEAFE" opacity=".4"/>
<rect x="186" y="60" width="28" height="8" rx="4" fill="#DBEAFE" opacity=".3"/>
<rect x="20" y="104" width="112" height="80" rx="6" fill="#1F2937"/>
<circle cx="76" cy="144" r="14" fill="#D1FAE5" opacity=".2"/>
<circle cx="76" cy="138" r="8" fill="#D1FAE5" opacity=".4"/>
<rect x="62" y="150" width="28" height="8" rx="4" fill="#D1FAE5" opacity=".3"/>
<rect x="140" y="104" width="120" height="80" rx="6" fill="#1F2937"/>
<circle cx="200" cy="144" r="16" fill="#375DFB" opacity=".3" class="ill-video-cam"/>
<polygon points="194,136 194,152 210,144" fill="#fff"/>
<rect x="20" y="90" width="240" height="8" fill="#374151"/>
<rect x="28" y="92" width="100" height="4" rx="2" fill="#375DFB" opacity=".5"/>
<rect x="28" y="168" width="52" height="16" rx="4" fill="#EF4444" class="ill-video-live"/>
<text x="35" y="180" font-size="8" fill="#fff" font-family="system-ui" font-weight="600">LIVE</text>
</svg>`,

  stream: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-stream-blink { 0%,100%{opacity:1} 50%{opacity:.3} }
  @keyframes ill-stream-wave { 0%{transform:scaleX(0)} 100%{transform:scaleX(1)} }
  .ill-stream-dot{animation:ill-stream-blink 1s step-end infinite}
  .ill-stream-w1{animation:ill-stream-wave .6s .1s ease both;transform-origin:left}
  .ill-stream-w2{animation:ill-stream-wave .6s .3s ease both;transform-origin:left}
  .ill-stream-w3{animation:ill-stream-wave .6s .5s ease both;transform-origin:left}
</style>
<rect x="20" y="24" width="240" height="138" rx="8" fill="#1F2937"/>
<rect x="20" y="24" width="240" height="28" rx="8" fill="#111827"/>
<rect x="20" y="46" width="240" height="6" fill="#111827"/>
<circle cx="36" cy="38" r="5" fill="#EF4444" class="ill-stream-dot"/>
<text x="46" y="42" font-size="9" fill="#fff" font-family="system-ui" font-weight="600">LIVE</text>
<text x="80" y="42" font-size="8" fill="#9CA3AF" font-family="system-ui">EventHex Summit 2025</text>
<text x="218" y="42" font-size="8" fill="#9CA3AF" font-family="system-ui">2.4k</text>
<rect x="36" y="64" width="208" height="82" rx="4" fill="#374151" opacity=".4"/>
<polygon points="130,88 130,120 158,104" fill="#fff" opacity=".8"/>
<rect x="36" y="152" width="208" height="6" rx="3" fill="#374151"/>
<rect x="36" y="152" width="130" height="6" rx="3" fill="#375DFB"/>
<text x="36" y="175" font-size="7" fill="#9CA3AF" font-family="system-ui">01:04:22</text>
<text x="210" y="175" font-size="7" fill="#9CA3AF" font-family="system-ui">02:30:00</text>
<rect x="36" y="182" width="208" height="24" rx="0" fill="none"/>
<path d="M36 192 Q80 186 124 192 Q168 198 208 188 L244 184" stroke="#6F8BFF" stroke-width="1" fill="none" class="ill-stream-w1"/>
</svg>`,

  captions: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-captions-type { 0%{width:0} 100%{width:140px} }
  @keyframes ill-captions-wave { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(2)} }
  .ill-captions-text{animation:ill-captions-type 2s steps(20) infinite}
  .ill-captions-w1{animation:ill-captions-wave .4s .0s ease infinite;transform-origin:center}
  .ill-captions-w2{animation:ill-captions-wave .4s .1s ease infinite;transform-origin:center}
  .ill-captions-w3{animation:ill-captions-wave .4s .2s ease infinite;transform-origin:center}
  .ill-captions-w4{animation:ill-captions-wave .4s .3s ease infinite;transform-origin:center}
</style>
<rect x="30" y="14" width="220" height="130" rx="8" fill="#1F2937"/>
<rect x="38" y="22" width="204" height="90" rx="4" fill="#374151" opacity=".5"/>
<polygon points="126,52 126,82 150,67" fill="#fff" opacity=".6"/>
<rect x="38" y="116" width="204" height="24" rx="4" fill="#111827"/>
<clipPath id="ill-cap-clip"><rect x="44" y="120" width="140" height="16" rx="2"/></clipPath>
<rect x="44" y="122" width="0" height="12" rx="2" fill="#DBEAFE" opacity=".8" class="ill-captions-text"/>
<text x="46" y="132" font-size="8" fill="#fff" font-family="system-ui">Welcome to EventHex Summit…</text>
<rect x="30" y="156" width="220" height="32" rx="8" fill="#DBEAFE"/>
<text x="44" y="170" font-size="7" fill="#375DFB" font-family="system-ui">Auto-captions</text>
<rect x="44" y="174" width="6" height="10" rx="1" fill="#375DFB" class="ill-captions-w1"/>
<rect x="54" y="170" width="6" height="18" rx="1" fill="#375DFB" class="ill-captions-w2"/>
<rect x="64" y="172" width="6" height="14" rx="1" fill="#375DFB" class="ill-captions-w3"/>
<rect x="74" y="174" width="6" height="10" rx="1" fill="#375DFB" class="ill-captions-w4"/>
</svg>`,

  globe: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-globe-spin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
  @keyframes ill-globe-ping { 0%{r:4;opacity:1} 100%{r:10;opacity:0} }
  .ill-globe-ring{animation:ill-globe-spin 8s linear infinite;transform-origin:140px 100px}
  .ill-globe-ping{animation:ill-globe-ping 1.5s ease-out infinite}
</style>
<circle cx="140" cy="100" r="70" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
<ellipse cx="140" cy="100" rx="36" ry="70" fill="none" stroke="#375DFB" stroke-width="1" opacity=".4" class="ill-globe-ring"/>
<line x1="70" y1="100" x2="210" y2="100" stroke="#375DFB" stroke-width="1" opacity=".3"/>
<line x1="78" y1="70" x2="202" y2="70" stroke="#375DFB" stroke-width=".5" opacity=".3"/>
<line x1="78" y1="130" x2="202" y2="130" stroke="#375DFB" stroke-width=".5" opacity=".3"/>
<circle cx="105" cy="82" r="5" fill="#375DFB"/>
<circle cx="105" cy="82" r="4" fill="#375DFB" class="ill-globe-ping"/>
<circle cx="168" cy="112" r="5" fill="#10B981"/>
<circle cx="168" cy="112" r="4" fill="#10B981" class="ill-globe-ping"/>
<circle cx="140" cy="68" r="5" fill="#F59E0B"/>
<line x1="105" y1="82" x2="168" y2="112" stroke="#375DFB" stroke-width="1" stroke-dasharray="3 2" opacity=".5"/>
<line x1="105" y1="82" x2="140" y2="68" stroke="#10B981" stroke-width="1" stroke-dasharray="3 2" opacity=".5"/>
</svg>`,

  translate: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-translate-slide { 0%{opacity:0;transform:translateX(-8px)} 100%{opacity:1;transform:translateX(0)} }
  @keyframes ill-translate-slidr { 0%{opacity:0;transform:translateX(8px)} 100%{opacity:1;transform:translateX(0)} }
  .ill-translate-l{animation:ill-translate-slide .5s ease both}
  .ill-translate-r{animation:ill-translate-slidr .5s .3s ease both}
</style>
<circle cx="80" cy="100" r="54" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
<text x="58" y="88" font-size="16" font-family="system-ui" font-weight="700" fill="#375DFB">A</text>
<text x="72" y="114" font-size="11" font-family="system-ui" fill="#6F8BFF">en</text>
<circle cx="200" cy="100" r="54" fill="#D1FAE5" stroke="#10B981" stroke-width="1.5"/>
<text x="176" y="92" font-size="20" font-family="system-ui" font-weight="700" fill="#10B981">文</text>
<text x="188" y="114" font-size="11" font-family="system-ui" fill="#10B981">zh</text>
<path d="M128 92 L152 92" stroke="#374151" stroke-width="1.5" marker-end="url(#ill-tr-arr)" opacity=".5"/>
<path d="M152 108 L128 108" stroke="#374151" stroke-width="1.5" marker-end="url(#ill-tr-arr2)" opacity=".5"/>
<defs>
  <marker id="ill-tr-arr" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L6 3L0 6z" fill="#374151" opacity=".5"/></marker>
  <marker id="ill-tr-arr2" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L6 3L0 6z" fill="#374151" opacity=".5"/></marker>
</defs>
<rect x="30" y="162" width="80" height="24" rx="6" fill="#fff" stroke="#375DFB" stroke-width="1" class="ill-translate-l"/>
<text x="42" y="178" font-size="8" fill="#375DFB" font-family="system-ui">Hello world</text>
<rect x="170" y="162" width="80" height="24" rx="6" fill="#fff" stroke="#10B981" stroke-width="1" class="ill-translate-r"/>
<text x="180" y="178" font-size="8" fill="#10B981" font-family="system-ui">你好，世界</text>
</svg>`,

  whatsapp: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-wa-pop { 0%{opacity:0;transform:scale(.8) translateY(8px)} 100%{opacity:1;transform:scale(1) translateY(0)} }
  .ill-wa-b1{animation:ill-wa-pop .4s ease both}
  .ill-wa-b2{animation:ill-wa-pop .4s .2s ease both}
  .ill-wa-b3{animation:ill-wa-pop .4s .4s ease both}
</style>
<circle cx="140" cy="60" r="36" fill="#25D366" opacity=".12"/>
<text x="122" y="70" font-size="28" font-family="system-ui" fill="#25D366">✆</text>
<g class="ill-wa-b1">
  <rect x="30" y="110" width="150" height="32" rx="12" rx="12" fill="#DCF8C6"/>
  <text x="44" y="124" font-size="8" fill="#1F2937" font-family="system-ui">Your ticket is confirmed! 🎉</text>
  <text x="152" y="136" font-size="6" fill="#9CA3AF" font-family="system-ui">10:42</text>
  <text x="166" y="136" font-size="8" fill="#34B7F1" font-family="system-ui">✓✓</text>
</g>
<g class="ill-wa-b2">
  <rect x="100" y="150" width="150" height="32" rx="12" fill="#DCF8C6"/>
  <text x="114" y="164" font-size="8" fill="#1F2937" font-family="system-ui">See you at Gate B, Hall 3!</text>
  <text x="222" y="176" font-size="6" fill="#9CA3AF" font-family="system-ui">10:43</text>
  <text x="236" y="176" font-size="8" fill="#34B7F1" font-family="system-ui">✓✓</text>
</g>
</svg>`,

  chatform: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-chatform-slide { 0%{opacity:0;transform:translateY(6px)} 100%{opacity:1;transform:translateY(0)} }
  .ill-chatform-f1{animation:ill-chatform-slide .4s ease both}
  .ill-chatform-f2{animation:ill-chatform-slide .4s .15s ease both}
  .ill-chatform-f3{animation:ill-chatform-slide .4s .3s ease both}
</style>
<path d="M24 20 L256 20 L256 168 L180 168 L160 188 L140 168 L24 168 Z" fill="#fff" stroke="#375DFB" stroke-width="1.5" rx="8"/>
<rect x="24" y="20" width="232" height="148" rx="8" fill="#fff" stroke="#375DFB" stroke-width="1.5"/>
<polygon points="160,168 180,168 170,186" fill="#375DFB" opacity=".2"/>
<text x="38" y="44" font-size="9" font-family="system-ui" font-weight="600" fill="#375DFB">Register for the event</text>
<g class="ill-chatform-f1">
  <text x="38" y="66" font-size="7" fill="#9CA3AF" font-family="system-ui">Your name</text>
  <rect x="38" y="70" width="200" height="22" rx="4" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
  <text x="46" y="84" font-size="8" fill="#374151" font-family="system-ui">Alex Johnson</text>
</g>
<g class="ill-chatform-f2">
  <text x="38" y="106" font-size="7" fill="#9CA3AF" font-family="system-ui">Email</text>
  <rect x="38" y="110" width="200" height="22" rx="4" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
  <text x="46" y="124" font-size="8" fill="#374151" font-family="system-ui">alex@company.com</text>
</g>
<g class="ill-chatform-f3">
  <rect x="38" y="142" width="80" height="22" rx="11" fill="#375DFB"/>
  <text x="54" y="157" font-size="8" fill="#fff" font-family="system-ui" font-weight="600">Submit →</text>
</g>
</svg>`,

  broadcast: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-broadcast-wave { 0%{opacity:0;transform:scale(.6)} 60%{opacity:1} 100%{opacity:0;transform:scale(1.4)} }
  .ill-broadcast-w1{animation:ill-broadcast-wave 2s .0s ease infinite}
  .ill-broadcast-w2{animation:ill-broadcast-wave 2s .4s ease infinite}
  .ill-broadcast-w3{animation:ill-broadcast-wave 2s .8s ease infinite}
</style>
<circle cx="100" cy="110" r="20" fill="#375DFB"/>
<text x="88" y="118" font-size="16" font-family="system-ui" fill="#fff">📣</text>
<circle cx="100" cy="110" r="32" fill="none" stroke="#375DFB" stroke-width="1.5" opacity=".6" class="ill-broadcast-w1"/>
<circle cx="100" cy="110" r="46" fill="none" stroke="#375DFB" stroke-width="1.5" opacity=".4" class="ill-broadcast-w2"/>
<circle cx="100" cy="110" r="62" fill="none" stroke="#375DFB" stroke-width="1.5" opacity=".2" class="ill-broadcast-w3"/>
<rect x="172" y="40" width="92" height="26" rx="6" fill="#DBEAFE"/>
<text x="182" y="56" font-size="8" fill="#375DFB" font-family="system-ui">✉ Email sent</text>
<rect x="172" y="74" width="92" height="26" rx="6" fill="#DCF8C6"/>
<text x="182" y="90" font-size="8" fill="#25D366" font-family="system-ui">💬 WhatsApp</text>
<rect x="172" y="108" width="92" height="26" rx="6" fill="#D1FAE5"/>
<text x="182" y="124" font-size="8" fill="#10B981" font-family="system-ui">🔔 Push sent</text>
<rect x="172" y="142" width="92" height="26" rx="6" fill="#FEF3C7"/>
<text x="182" y="158" font-size="8" fill="#F59E0B" font-family="system-ui">📱 SMS sent</text>
<path d="M162 53 L172 53" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="3 2"/>
<path d="M162 87 L172 87" stroke="#25D366" stroke-width="1.5" stroke-dasharray="3 2"/>
<path d="M162 121 L172 121" stroke="#10B981" stroke-width="1.5" stroke-dasharray="3 2"/>
<path d="M162 155 L172 155" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="3 2"/>
</svg>`,

  bell: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-bell-ring { 0%,100%{transform:rotate(0) } 20%{transform:rotate(-12deg)} 40%{transform:rotate(12deg)} 60%{transform:rotate(-8deg)} 80%{transform:rotate(8deg)} }
  @keyframes ill-bell-badge { 0%{transform:scale(0)} 100%{transform:scale(1)} }
  .ill-bell-icon{animation:ill-bell-ring 2s 1s ease infinite;transform-origin:140px 80px}
  .ill-bell-badge{animation:ill-bell-badge .3s .5s ease both;transform-origin:170px 56px}
</style>
<g class="ill-bell-icon">
  <path d="M140 34 C118 34 104 50 104 72 L104 96 L92 108 L92 116 L188 116 L188 108 L176 96 L176 72 C176 50 162 34 140 34 Z" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
  <path d="M128 116 C128 124 133.4 130 140 130 C146.6 130 152 124 152 116" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
</g>
<g class="ill-bell-badge">
  <circle cx="170" cy="56" r="14" fill="#EF4444"/>
  <text x="164" y="61" font-size="11" fill="#fff" font-family="system-ui" font-weight="700">3</text>
</g>
<rect x="50" y="148" width="180" height="34" rx="8" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
<circle cx="66" cy="165" r="7" fill="#375DFB"/>
<text x="62" y="169" font-size="8" fill="#fff" font-family="system-ui">!</text>
<rect x="80" y="156" width="100" height="6" rx="3" fill="#1F2937" opacity=".2"/>
<rect x="80" y="166" width="70" height="4" rx="2" fill="#1F2937" opacity=".1"/>
<text x="194" y="163" font-size="7" fill="#9CA3AF" font-family="system-ui">now</text>
</svg>`,

  palette: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-palette-pop { 0%{transform:scale(0)} 100%{transform:scale(1)} }
  .ill-palette-s1{animation:ill-palette-pop .3s .1s ease both;transform-origin:58px 52px}
  .ill-palette-s2{animation:ill-palette-pop .3s .2s ease both;transform-origin:98px 52px}
  .ill-palette-s3{animation:ill-palette-pop .3s .3s ease both;transform-origin:138px 52px}
  .ill-palette-s4{animation:ill-palette-pop .3s .4s ease both;transform-origin:178px 52px}
  .ill-palette-s5{animation:ill-palette-pop .3s .5s ease both;transform-origin:218px 52px}
</style>
<rect x="24" y="20" width="232" height="160" rx="8" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
<text x="36" y="38" font-size="9" font-family="system-ui" font-weight="600" fill="#1F2937">Brand Kit</text>
<g class="ill-palette-s1"><circle cx="58" cy="72" r="20" fill="#375DFB"/></g>
<g class="ill-palette-s2"><circle cx="108" cy="72" r="20" fill="#6F8BFF"/></g>
<g class="ill-palette-s3"><circle cx="158" cy="72" r="20" fill="#10B981"/></g>
<g class="ill-palette-s4"><circle cx="208" cy="72" r="20" fill="#DBEAFE"/><circle cx="208" cy="72" r="19" fill="none" stroke="#375DFB" stroke-width="1"/></g>
<text x="44" y="108" font-size="6" fill="#9CA3AF" font-family="system-ui">#375DFB</text>
<text x="94" y="108" font-size="6" fill="#9CA3AF" font-family="system-ui">#6F8BFF</text>
<text x="144" y="108" font-size="6" fill="#9CA3AF" font-family="system-ui">#10B981</text>
<text x="194" y="108" font-size="6" fill="#9CA3AF" font-family="system-ui">#DBEAFE</text>
<rect x="36" y="120" width="200" height="50" rx="8" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
<rect x="48" y="132" width="60" height="26" rx="6" fill="#375DFB"/>
<text x="56" y="149" font-size="8" fill="#fff" font-family="system-ui" font-weight="700">EventHex</text>
<rect x="120" y="132" width="104" height="26" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
<rect x="130" y="140" width="40" height="8" rx="3" fill="#375DFB" opacity=".2"/>
<rect x="176" y="140" width="36" height="8" rx="3" fill="#E5E7EB"/>
</svg>`,

  building: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-building-rise { 0%{transform:translateY(20px);opacity:0} 100%{transform:translateY(0);opacity:1} }
  .ill-building-b1{animation:ill-building-rise .5s .1s ease both}
  .ill-building-b2{animation:ill-building-rise .5s .25s ease both}
  .ill-building-b3{animation:ill-building-rise .5s .4s ease both}
</style>
<rect x="24" y="170" width="232" height="2" rx="1" fill="#E5E7EB"/>
<g class="ill-building-b1">
  <rect x="34" y="90" width="60" height="80" rx="4" fill="#DBEAFE" stroke="#375DFB" stroke-width="1"/>
  <rect x="44" y="100" width="12" height="16" rx="2" fill="#375DFB" opacity=".4"/>
  <rect x="62" y="100" width="12" height="16" rx="2" fill="#375DFB" opacity=".4"/>
  <rect x="44" y="124" width="12" height="16" rx="2" fill="#375DFB" opacity=".4"/>
  <rect x="62" y="124" width="12" height="16" rx="2" fill="#375DFB" opacity=".4"/>
  <rect x="44" y="148" width="28" height="22" rx="2" fill="#375DFB" opacity=".6"/>
</g>
<g class="ill-building-b2">
  <rect x="110" y="50" width="60" height="120" rx="4" fill="#6F8BFF" stroke="#375DFB" stroke-width="1"/>
  <rect x="120" y="62" width="10" height="14" rx="1" fill="#fff" opacity=".5"/>
  <rect x="136" y="62" width="10" height="14" rx="1" fill="#fff" opacity=".5"/>
  <rect x="120" y="84" width="10" height="14" rx="1" fill="#fff" opacity=".5"/>
  <rect x="136" y="84" width="10" height="14" rx="1" fill="#fff" opacity=".5"/>
  <rect x="120" y="106" width="10" height="14" rx="1" fill="#fff" opacity=".5"/>
  <rect x="136" y="106" width="10" height="14" rx="1" fill="#fff" opacity=".5"/>
  <rect x="120" y="128" width="10" height="14" rx="1" fill="#fff" opacity=".5"/>
  <rect x="136" y="128" width="10" height="14" rx="1" fill="#fff" opacity=".5"/>
  <rect x="122" y="148" width="24" height="22" rx="2" fill="#fff" opacity=".6"/>
</g>
<g class="ill-building-b3">
  <rect x="186" y="70" width="60" height="100" rx="4" fill="#DBEAFE" stroke="#375DFB" stroke-width="1"/>
  <rect x="196" y="80" width="12" height="16" rx="2" fill="#375DFB" opacity=".4"/>
  <rect x="214" y="80" width="12" height="16" rx="2" fill="#375DFB" opacity=".4"/>
  <rect x="196" y="104" width="12" height="16" rx="2" fill="#375DFB" opacity=".4"/>
  <rect x="214" y="104" width="12" height="16" rx="2" fill="#375DFB" opacity=".4"/>
  <rect x="196" y="148" width="28" height="22" rx="2" fill="#375DFB" opacity=".6"/>
</g>
<rect x="40" y="22" width="50" height="20" rx="10" fill="#DBEAFE"/>
<text x="50" y="36" font-size="8" fill="#375DFB" font-family="system-ui">Org A</text>
<rect x="115" y="22" width="50" height="20" rx="10" fill="#6F8BFF"/>
<text x="122" y="36" font-size="8" fill="#fff" font-family="system-ui">Org B</text>
<rect x="190" y="22" width="50" height="20" rx="10" fill="#DBEAFE"/>
<text x="198" y="36" font-size="8" fill="#375DFB" font-family="system-ui">Org C</text>
</svg>`,

  money: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-money-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
  @keyframes ill-money-arrow { 0%{stroke-dashoffset:60} 100%{stroke-dashoffset:0} }
  .ill-money-coin{animation:ill-money-float 2s ease infinite}
  .ill-money-a1{stroke-dasharray:60;animation:ill-money-arrow .8s .3s ease both}
  .ill-money-a2{stroke-dasharray:60;animation:ill-money-arrow .8s .5s ease both}
</style>
<circle cx="140" cy="80" r="40" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2" class="ill-money-coin"/>
<text x="128" y="88" font-size="22" font-family="system-ui" font-weight="700" fill="#F59E0B">$</text>
<rect x="30" y="144" width="70" height="40" rx="8" fill="#D1FAE5" stroke="#10B981" stroke-width="1"/>
<text x="44" y="162" font-size="7" fill="#10B981" font-family="system-ui">Organizer</text>
<text x="44" y="176" font-size="11" fill="#10B981" font-family="system-ui" font-weight="700">70%</text>
<rect x="180" y="144" width="70" height="40" rx="8" fill="#DBEAFE" stroke="#375DFB" stroke-width="1"/>
<text x="190" y="162" font-size="7" fill="#375DFB" font-family="system-ui">Platform</text>
<text x="196" y="176" font-size="11" fill="#375DFB" font-family="system-ui" font-weight="700">30%</text>
<path d="M140 120 L100 144" stroke="#10B981" stroke-width="2" stroke-linecap="round" class="ill-money-a1"/>
<path d="M140 120 L180 144" stroke="#375DFB" stroke-width="2" stroke-linecap="round" class="ill-money-a2"/>
</svg>`,

  calendar: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-calendar-pop { 0%{transform:scale(0);opacity:0} 100%{transform:scale(1);opacity:1} }
  .ill-calendar-slot{animation:ill-calendar-pop .4s .5s ease both;transform-origin:157px 127px}
</style>
<rect x="30" y="26" width="220" height="160" rx="8" fill="#fff" stroke="#E5E7EB" stroke-width="1.5"/>
<rect x="30" y="26" width="220" height="38" rx="8" fill="#375DFB"/>
<rect x="30" y="52" width="220" height="12" fill="#375DFB"/>
<text x="80" y="50" font-size="11" fill="#fff" font-family="system-ui" font-weight="600">April 2025</text>
<circle cx="52" cy="20" r="5" fill="#fff" stroke="#375DFB" stroke-width="1.5"/>
<circle cx="228" cy="20" r="5" fill="#fff" stroke="#375DFB" stroke-width="1.5"/>
<text x="38" y="78" font-size="7" fill="#9CA3AF" font-family="system-ui">M</text>
<text x="66" y="78" font-size="7" fill="#9CA3AF" font-family="system-ui">T</text>
<text x="94" y="78" font-size="7" fill="#9CA3AF" font-family="system-ui">W</text>
<text x="122" y="78" font-size="7" fill="#9CA3AF" font-family="system-ui">T</text>
<text x="150" y="78" font-size="7" fill="#9CA3AF" font-family="system-ui">F</text>
<text x="178" y="78" font-size="7" fill="#9CA3AF" font-family="system-ui">S</text>
<text x="206" y="78" font-size="7" fill="#9CA3AF" font-family="system-ui">S</text>
<text x="37" y="100" font-size="9" fill="#374151" font-family="system-ui">1</text>
<text x="65" y="100" font-size="9" fill="#374151" font-family="system-ui">2</text>
<text x="93" y="100" font-size="9" fill="#374151" font-family="system-ui">3</text>
<text x="121" y="100" font-size="9" fill="#374151" font-family="system-ui">4</text>
<text x="149" y="100" font-size="9" fill="#374151" font-family="system-ui">5</text>
<text x="177" y="100" font-size="9" fill="#374151" font-family="system-ui">6</text>
<text x="205" y="100" font-size="9" fill="#374151" font-family="system-ui">7</text>
<text x="37" y="122" font-size="9" fill="#374151" font-family="system-ui">8</text>
<text x="63" y="122" font-size="9" fill="#374151" font-family="system-ui">9</text>
<text x="89" y="122" font-size="9" fill="#374151" font-family="system-ui">10</text>
<text x="117" y="122" font-size="9" fill="#374151" font-family="system-ui">11</text>
<g class="ill-calendar-slot">
  <circle cx="157" cy="120" r="13" fill="#375DFB"/>
  <text x="151" y="124" font-size="9" fill="#fff" font-family="system-ui" font-weight="700">12</text>
</g>
<text x="183" y="122" font-size="9" fill="#374151" font-family="system-ui">13</text>
<text x="209" y="122" font-size="9" fill="#374151" font-family="system-ui">14</text>
<rect x="36" y="136" width="190" height="18" rx="4" fill="#DBEAFE"/>
<text x="44" y="149" font-size="7" fill="#375DFB" font-family="system-ui">EventHex Summit — 9:00 AM</text>
<text x="36" y="178" font-size="9" fill="#374151" font-family="system-ui">15</text>
<text x="64" y="178" font-size="9" fill="#374151" font-family="system-ui">16</text>
<text x="92" y="178" font-size="9" fill="#374151" font-family="system-ui">17</text>
</svg>`,

  network: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-network-pulse { 0%,100%{opacity:.4} 50%{opacity:1} }
  @keyframes ill-network-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
  .ill-network-hub{animation:ill-network-float 3s ease infinite}
  .ill-network-line{animation:ill-network-pulse 2s ease infinite}
</style>
<circle cx="140" cy="100" r="18" fill="#375DFB" class="ill-network-hub"/>
<text x="133" y="105" font-size="10" fill="#fff" font-family="system-ui">⬡</text>
<circle cx="60" cy="50" r="11" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
<circle cx="60" cy="50" r="6" fill="#375DFB" opacity=".4"/>
<circle cx="220" cy="50" r="11" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
<circle cx="220" cy="50" r="6" fill="#375DFB" opacity=".4"/>
<circle cx="44" cy="148" r="11" fill="#D1FAE5" stroke="#10B981" stroke-width="1.5"/>
<circle cx="44" cy="148" r="6" fill="#10B981" opacity=".4"/>
<circle cx="140" cy="175" r="11" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
<circle cx="140" cy="175" r="6" fill="#375DFB" opacity=".4"/>
<circle cx="236" cy="148" r="11" fill="#D1FAE5" stroke="#10B981" stroke-width="1.5"/>
<circle cx="236" cy="148" r="6" fill="#10B981" opacity=".4"/>
<line x1="71" y1="58" x2="124" y2="90" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="4 2" opacity=".5" class="ill-network-line"/>
<line x1="209" y1="58" x2="156" y2="90" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="4 2" opacity=".5" class="ill-network-line"/>
<line x1="53" y1="155" x2="124" y2="110" stroke="#10B981" stroke-width="1.5" stroke-dasharray="4 2" opacity=".5" class="ill-network-line"/>
<line x1="140" y1="164" x2="140" y2="118" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="4 2" opacity=".5" class="ill-network-line"/>
<line x1="227" y1="155" x2="156" y2="110" stroke="#10B981" stroke-width="1.5" stroke-dasharray="4 2" opacity=".5" class="ill-network-line"/>
</svg>`,

  clipboard: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-clipboard-check { 0%{stroke-dashoffset:16} 100%{stroke-dashoffset:0} }
  .ill-clipboard-c1{stroke-dasharray:16;animation:ill-clipboard-check .4s .2s ease both}
  .ill-clipboard-c2{stroke-dasharray:16;animation:ill-clipboard-check .4s .4s ease both}
  .ill-clipboard-c3{stroke-dasharray:16;animation:ill-clipboard-check .4s .6s ease both}
</style>
<rect x="70" y="14" width="140" height="172" rx="8" fill="#fff" stroke="#E5E7EB" stroke-width="1.5"/>
<rect x="106" y="10" width="68" height="20" rx="10" fill="#374151"/>
<rect x="114" y="13" width="52" height="14" rx="7" fill="#1F2937"/>
<text x="40" y="64" font-size="8" fill="#374151" font-family="system-ui">✓ Task completed</text>
<rect x="80" y="52" width="120" height="26" rx="4" fill="#D1FAE5"/>
<circle cx="92" cy="65" r="7" fill="#10B981"/>
<path d="M88 65l2 2 5-5" stroke="#fff" stroke-width="1.5" fill="none" class="ill-clipboard-c1"/>
<text x="104" y="69" font-size="8" fill="#10B981" font-family="system-ui">Set up tickets</text>
<rect x="80" y="86" width="120" height="26" rx="4" fill="#D1FAE5"/>
<circle cx="92" cy="99" r="7" fill="#10B981"/>
<path d="M88 99l2 2 5-5" stroke="#fff" stroke-width="1.5" fill="none" class="ill-clipboard-c2"/>
<text x="104" y="103" font-size="8" fill="#10B981" font-family="system-ui">Create form</text>
<rect x="80" y="120" width="120" height="26" rx="4" fill="#D1FAE5"/>
<circle cx="92" cy="133" r="7" fill="#10B981"/>
<path d="M88 133l2 2 5-5" stroke="#fff" stroke-width="1.5" fill="none" class="ill-clipboard-c3"/>
<text x="104" y="137" font-size="8" fill="#10B981" font-family="system-ui">Send invites</text>
<rect x="80" y="154" width="120" height="26" rx="4" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
<circle cx="92" cy="167" r="7" fill="#fff" stroke="#E5E7EB" stroke-width="1.5"/>
<text x="104" y="171" font-size="8" fill="#9CA3AF" font-family="system-ui">Publish event</text>
</svg>`,

  poster: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-poster-float { 0%,100%{transform:translateY(0) rotate(-3deg)} 50%{transform:translateY(-5px) rotate(-3deg)} }
  .ill-poster-card{animation:ill-poster-float 3s ease infinite;transform-origin:140px 100px}
</style>
<g class="ill-poster-card">
  <rect x="60" y="20" width="160" height="160" rx="12" fill="#fff" stroke="#E5E7EB" stroke-width="1.5"/>
  <rect x="60" y="20" width="160" height="80" rx="12" fill="#375DFB"/>
  <rect x="60" y="88" width="160" height="12" fill="#375DFB"/>
  <text x="90" y="54" font-size="11" fill="#fff" font-family="system-ui" font-weight="700">EventHex</text>
  <text x="76" y="72" font-size="8" fill="#DBEAFE" font-family="system-ui">Annual Summit 2025</text>
  <rect x="76" y="114" width="128" height="8" rx="4" fill="#1F2937" opacity=".15"/>
  <rect x="76" y="128" width="100" height="6" rx="3" fill="#1F2937" opacity=".1"/>
  <rect x="76" y="140" width="80" height="6" rx="3" fill="#1F2937" opacity=".1"/>
  <rect x="76" y="156" width="60" height="18" rx="9" fill="#375DFB"/>
  <text x="82" y="169" font-size="7" fill="#fff" font-family="system-ui">Register Now</text>
</g>
</svg>`,

  share: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-share-draw { 0%{stroke-dashoffset:80} 100%{stroke-dashoffset:0} }
  @keyframes ill-share-pop { 0%{transform:scale(0)} 100%{transform:scale(1)} }
  .ill-share-l1{stroke-dasharray:80;animation:ill-share-draw .6s .1s ease both}
  .ill-share-l2{stroke-dasharray:80;animation:ill-share-draw .6s .3s ease both}
  .ill-share-l3{stroke-dasharray:80;animation:ill-share-draw .6s .5s ease both}
  .ill-share-n1{animation:ill-share-pop .3s .7s ease both;transform-origin:218px 60px}
  .ill-share-n2{animation:ill-share-pop .3s .8s ease both;transform-origin:218px 100px}
  .ill-share-n3{animation:ill-share-pop .3s .9s ease both;transform-origin:218px 140px}
</style>
<circle cx="62" cy="100" r="20" fill="#375DFB"/>
<text x="56" y="105" font-size="12" fill="#fff" font-family="system-ui">🔗</text>
<path d="M82 90 L198 62" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="4 2" class="ill-share-l1"/>
<path d="M82 100 L198 100" stroke="#6F8BFF" stroke-width="1.5" stroke-dasharray="4 2" class="ill-share-l2"/>
<path d="M82 110 L198 138" stroke="#10B981" stroke-width="1.5" stroke-dasharray="4 2" class="ill-share-l3"/>
<g class="ill-share-n1"><circle cx="218" cy="60" r="14" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/><text x="212" y="64" font-size="10" font-family="system-ui" fill="#375DFB">f</text></g>
<g class="ill-share-n2"><circle cx="218" cy="100" r="14" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/><text x="212" y="104" font-size="8" font-family="system-ui" fill="#375DFB">in</text></g>
<g class="ill-share-n3"><circle cx="218" cy="140" r="14" fill="#D1FAE5" stroke="#10B981" stroke-width="1.5"/><text x="212" y="144" font-size="8" font-family="system-ui" fill="#10B981">✉</text></g>
</svg>`,

  bot: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-bot-blink { 0%,90%,100%{ry:6} 95%{ry:1} }
  @keyframes ill-bot-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
  @keyframes ill-bot-sparkle { 0%,100%{opacity:0;transform:scale(0)} 50%{opacity:1;transform:scale(1)} }
  .ill-bot-eye{animation:ill-bot-blink 3s ease infinite}
  .ill-bot-body{animation:ill-bot-float 3s ease infinite}
  .ill-bot-spark{animation:ill-bot-sparkle 2s ease infinite}
</style>
<g class="ill-bot-body">
  <rect x="90" y="50" width="100" height="80" rx="16" fill="#DBEAFE" stroke="#375DFB" stroke-width="2"/>
  <ellipse cx="125" cy="88" rx="10" ry="6" fill="#375DFB" class="ill-bot-eye"/>
  <ellipse cx="155" cy="88" rx="10" ry="6" fill="#375DFB" class="ill-bot-eye"/>
  <path d="M120 108 Q140 118 160 108" stroke="#375DFB" stroke-width="2" fill="none" stroke-linecap="round"/>
  <rect x="132" y="40" width="16" height="14" rx="3" fill="#375DFB"/>
  <circle cx="140" cy="38" r="5" fill="#6F8BFF"/>
  <rect x="80" y="90" width="12" height="24" rx="6" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
  <rect x="188" y="90" width="12" height="24" rx="6" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
  <rect x="110" y="130" width="22" height="28" rx="8" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
  <rect x="148" y="130" width="22" height="28" rx="8" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
</g>
<text x="214" y="58" font-size="14" font-family="system-ui" fill="#375DFB" class="ill-bot-spark">✦</text>
<text x="54" y="74" font-size="10" font-family="system-ui" fill="#6F8BFF" class="ill-bot-spark">✦</text>
<rect x="46" y="154" width="88" height="28" rx="8" fill="#fff" stroke="#375DFB" stroke-width="1"/>
<text x="56" y="172" font-size="8" fill="#375DFB" font-family="system-ui">How can I help?</text>
<rect x="146" y="154" width="88" height="28" rx="8" fill="#DBEAFE"/>
<text x="154" y="168" font-size="7" fill="#375DFB" font-family="system-ui">Register me for</text>
<text x="154" y="178" font-size="7" fill="#375DFB" font-family="system-ui">the summit!</text>
</svg>`,

  document: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-document-line { 0%{width:0} 100%{} }
  @keyframes ill-document-fade { 0%{opacity:0} 100%{opacity:1} }
  .ill-document-l1{animation:ill-document-fade .4s .1s ease both}
  .ill-document-l2{animation:ill-document-fade .4s .2s ease both}
  .ill-document-l3{animation:ill-document-fade .4s .3s ease both}
  .ill-document-l4{animation:ill-document-fade .4s .4s ease both}
  .ill-document-badge{animation:ill-document-fade .4s .6s ease both}
</style>
<rect x="70" y="18" width="140" height="164" rx="8" fill="#fff" stroke="#E5E7EB" stroke-width="1.5"/>
<rect x="70" y="18" width="140" height="34" rx="8" fill="#DBEAFE"/>
<rect x="70" y="40" width="140" height="12" fill="#DBEAFE"/>
<text x="90" y="40" font-size="9" font-family="system-ui" font-weight="600" fill="#375DFB">Event Summary</text>
<g class="ill-document-l1"><rect x="84" y="62" width="112" height="7" rx="3.5" fill="#1F2937" opacity=".2"/></g>
<g class="ill-document-l2"><rect x="84" y="76" width="90" height="7" rx="3.5" fill="#1F2937" opacity=".15"/></g>
<g class="ill-document-l3"><rect x="84" y="90" width="100" height="7" rx="3.5" fill="#1F2937" opacity=".15"/></g>
<g class="ill-document-l4"><rect x="84" y="104" width="72" height="7" rx="3.5" fill="#1F2937" opacity=".1"/></g>
<line x1="84" y1="122" x2="196" y2="122" stroke="#E5E7EB" stroke-width="1"/>
<rect x="84" y="130" width="50" height="14" rx="3" fill="#DBEAFE"/>
<text x="90" y="141" font-size="7" fill="#375DFB" font-family="system-ui">Sessions: 8</text>
<rect x="142" y="130" width="54" height="14" rx="3" fill="#D1FAE5"/>
<text x="148" y="141" font-size="7" fill="#10B981" font-family="system-ui">Speakers: 12</text>
<rect x="84" y="150" width="48" height="14" rx="3" fill="#FEF3C7"/>
<text x="88" y="161" font-size="7" fill="#F59E0B" font-family="system-ui">Tickets: 500</text>
<g class="ill-document-badge">
  <rect x="160" y="150" width="36" height="20" rx="6" fill="#D1FAE5"/>
  <text x="165" y="163" font-size="8" fill="#10B981" font-family="system-ui" font-weight="600">✓ AI</text>
</g>
</svg>`,

  camera: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-camera-flash { 0%,90%,100%{opacity:0} 92%{opacity:.8} }
  @keyframes ill-camera-scan { 0%{transform:translateY(0)} 100%{transform:translateY(80px)} }
  .ill-camera-flash{animation:ill-camera-flash 3s ease infinite}
  .ill-camera-scan{animation:ill-camera-scan 2s ease-in-out infinite alternate}
</style>
<rect x="60" y="40" width="160" height="120" rx="10" fill="#1F2937"/>
<rect x="60" y="40" width="160" height="22" rx="10" fill="#111827"/>
<rect x="60" y="56" width="160" height="6" fill="#111827"/>
<rect x="110" y="46" width="48" height="10" rx="5" fill="#374151"/>
<rect x="76" y="72" width="128" height="80" rx="6" fill="#374151"/>
<circle cx="140" cy="112" r="28" fill="#DBEAFE" opacity=".15"/>
<circle cx="140" cy="112" r="18" fill="none" stroke="#DBEAFE" stroke-width="1" opacity=".3"/>
<circle cx="140" cy="112" r="8" fill="#DBEAFE" opacity=".4"/>
<line x1="76" y1="90" x2="204" y2="90" stroke="#375DFB" stroke-width="1" opacity=".5" class="ill-camera-scan"/>
<rect x="76" y="72" width="128" height="80" rx="6" fill="#375DFB" opacity=".05" class="ill-camera-flash"/>
<rect x="30" y="148" width="72" height="40" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
<circle cx="66" cy="162" r="10" fill="#DBEAFE"/>
<circle cx="66" cy="162" r="5" fill="#375DFB" opacity=".4"/>
<rect x="34" y="176" width="64" height="6" rx="3" fill="#10B981" opacity=".6"/>
<text x="34" y="184" font-size="6" fill="#10B981" font-family="system-ui">Match: 98%</text>
<rect x="178" y="148" width="72" height="40" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
<circle cx="214" cy="162" r="10" fill="#D1FAE5"/>
<circle cx="214" cy="162" r="5" fill="#10B981" opacity=".4"/>
<rect x="182" y="176" width="64" height="6" rx="3" fill="#10B981" opacity=".6"/>
<text x="182" y="184" font-size="6" fill="#10B981" font-family="system-ui">Verified ✓</text>
</svg>`,

  mic: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-mic-wave { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(1.8)} }
  .ill-mic-w1{animation:ill-mic-wave .5s .0s ease infinite;transform-origin:center}
  .ill-mic-w2{animation:ill-mic-wave .5s .1s ease infinite;transform-origin:center}
  .ill-mic-w3{animation:ill-mic-wave .5s .2s ease infinite;transform-origin:center}
  .ill-mic-w4{animation:ill-mic-wave .5s .3s ease infinite;transform-origin:center}
  .ill-mic-w5{animation:ill-mic-wave .5s .4s ease infinite;transform-origin:center}
</style>
<rect x="118" y="20" width="44" height="76" rx="22" fill="#375DFB"/>
<rect x="128" y="20" width="24" height="76" rx="12" fill="#6F8BFF" opacity=".4"/>
<path d="M94 88 Q94 124 140 124 Q186 124 186 88" stroke="#375DFB" stroke-width="2" fill="none" stroke-linecap="round"/>
<line x1="140" y1="124" x2="140" y2="144" stroke="#375DFB" stroke-width="2"/>
<line x1="116" y1="144" x2="164" y2="144" stroke="#375DFB" stroke-width="2" stroke-linecap="round"/>
<rect x="28" y="100" width="8" height="40" rx="2" fill="#375DFB" opacity=".3" class="ill-mic-w1"/>
<rect x="42" y="90" width="8" height="60" rx="2" fill="#375DFB" opacity=".4" class="ill-mic-w2"/>
<rect x="56" y="96" width="8" height="48" rx="2" fill="#375DFB" opacity=".5" class="ill-mic-w3"/>
<rect x="216" y="96" width="8" height="48" rx="2" fill="#375DFB" opacity=".5" class="ill-mic-w3"/>
<rect x="230" y="90" width="8" height="60" rx="2" fill="#375DFB" opacity=".4" class="ill-mic-w2"/>
<rect x="244" y="100" width="8" height="40" rx="2" fill="#375DFB" opacity=".3" class="ill-mic-w1"/>
<rect x="60" y="158" width="160" height="28" rx="8" fill="#DBEAFE"/>
<text x="82" y="172" font-size="8" fill="#375DFB" font-family="system-ui">Transcribing live…</text>
<rect x="82" y="176" width="50" height="4" rx="2" fill="#375DFB" opacity=".3"/>
</svg>`,

  invoice: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-invoice-fade { 0%{opacity:0;transform:translateY(4px)} 100%{opacity:1;transform:translateY(0)} }
  .ill-invoice-r1{animation:ill-invoice-fade .35s .1s ease both}
  .ill-invoice-r2{animation:ill-invoice-fade .35s .2s ease both}
  .ill-invoice-r3{animation:ill-invoice-fade .35s .3s ease both}
  .ill-invoice-total{animation:ill-invoice-fade .35s .5s ease both}
</style>
<rect x="50" y="14" width="180" height="172" rx="8" fill="#fff" stroke="#E5E7EB" stroke-width="1.5"/>
<rect x="50" y="14" width="180" height="40" rx="8" fill="#375DFB"/>
<rect x="50" y="42" width="180" height="12" fill="#375DFB"/>
<text x="64" y="36" font-size="10" fill="#fff" font-family="system-ui" font-weight="600">INVOICE</text>
<text x="178" y="28" font-size="7" fill="#DBEAFE" font-family="system-ui">#INV-0042</text>
<text x="178" y="40" font-size="6" fill="#DBEAFE" font-family="system-ui">Apr 12, 2025</text>
<line x1="64" y1="76" x2="216" y2="76" stroke="#E5E7EB" stroke-width=".5"/>
<text x="64" y="68" font-size="7" fill="#9CA3AF" font-family="system-ui">ITEM</text>
<text x="190" y="68" font-size="7" fill="#9CA3AF" font-family="system-ui">TOTAL</text>
<g class="ill-invoice-r1">
  <text x="64" y="92" font-size="8" fill="#374151" font-family="system-ui">VIP Ticket ×2</text>
  <text x="190" y="92" font-size="8" fill="#374151" font-family="system-ui">$498</text>
</g>
<g class="ill-invoice-r2">
  <text x="64" y="110" font-size="8" fill="#374151" font-family="system-ui">Workshop Pass ×1</text>
  <text x="190" y="110" font-size="8" fill="#374151" font-family="system-ui">$49</text>
</g>
<g class="ill-invoice-r3">
  <text x="64" y="128" font-size="8" fill="#374151" font-family="system-ui">Processing fee</text>
  <text x="190" y="128" font-size="8" fill="#374151" font-family="system-ui">$5</text>
</g>
<line x1="64" y1="138" x2="216" y2="138" stroke="#E5E7EB" stroke-width="1"/>
<g class="ill-invoice-total">
  <text x="64" y="156" font-size="9" fill="#1F2937" font-family="system-ui" font-weight="700">TOTAL DUE</text>
  <text x="176" y="156" font-size="11" fill="#375DFB" font-family="system-ui" font-weight="700">$552</text>
  <rect x="64" y="164" width="152" height="16" rx="8" fill="#D1FAE5"/>
  <text x="112" y="176" font-size="8" fill="#10B981" font-family="system-ui" font-weight="600">✓ PAID</text>
</g>
</svg>`,

  refund: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-refund-spin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
  @keyframes ill-refund-pop { 0%{transform:scale(0)} 100%{transform:scale(1)} }
  .ill-refund-arrow{animation:ill-refund-spin 3s linear infinite;transform-origin:140px 90px}
  .ill-refund-check{animation:ill-refund-pop .3s 1s ease both;transform-origin:140px 90px}
</style>
<g class="ill-refund-arrow">
  <path d="M140 40 A50 50 0 1 1 90 115" stroke="#375DFB" stroke-width="3" fill="none" stroke-linecap="round"/>
  <polygon points="90,105 78,120 104,122" fill="#375DFB"/>
</g>
<g class="ill-refund-check">
  <circle cx="140" cy="90" r="20" fill="#D1FAE5" stroke="#10B981" stroke-width="2"/>
  <path d="M130 90l7 7 13-13" stroke="#10B981" stroke-width="2.5" fill="none" stroke-linecap="round"/>
</g>
<rect x="50" y="148" width="180" height="40" rx="8" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
<text x="64" y="166" font-size="8" fill="#374151" font-family="system-ui">Refund processed</text>
<text x="64" y="180" font-size="10" fill="#10B981" font-family="system-ui" font-weight="700">$249.00 → returned</text>
</svg>`,

  creditcard: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-cc-tap { 0%{opacity:0;transform:scale(.5)} 60%{opacity:1} 100%{opacity:0;transform:scale(1.5)} }
  @keyframes ill-cc-check { 0%{stroke-dashoffset:20} 100%{stroke-dashoffset:0} }
  .ill-cc-tap{animation:ill-cc-tap 2s ease infinite}
  .ill-cc-check{stroke-dasharray:20;animation:ill-cc-check .5s .5s ease both}
</style>
<rect x="40" y="40" width="200" height="120" rx="12" fill="#375DFB"/>
<rect x="40" y="80" width="200" height="30" fill="#2D4FCC"/>
<circle cx="70" cy="62" r="14" fill="#6F8BFF" opacity=".5"/>
<circle cx="86" cy="62" r="14" fill="#FEF3C7" opacity=".6"/>
<text x="56" y="130" font-size="12" fill="#fff" font-family="system-ui" font-weight="600" letter-spacing="2">•••• 4242</text>
<text x="56" y="148" font-size="7" fill="#DBEAFE" font-family="system-ui">CARDHOLDER NAME</text>
<text x="186" y="148" font-size="7" fill="#DBEAFE" font-family="system-ui">04/28</text>
<circle cx="210" cy="90" r="18" fill="#375DFB" stroke="#fff" stroke-width="1" opacity=".4" class="ill-cc-tap"/>
<circle cx="210" cy="90" r="8" fill="#fff" opacity=".6"/>
<circle cx="140" cy="172" r="18" fill="#D1FAE5" stroke="#10B981" stroke-width="2"/>
<path d="M130 172l7 7 13-13" stroke="#10B981" stroke-width="2.5" fill="none" stroke-linecap="round" class="ill-cc-check"/>
</svg>`,

  lock: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-lock-shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-4px)} 40%{transform:translateX(4px)} 60%{transform:translateX(-2px)} 80%{transform:translateX(2px)} }
  @keyframes ill-lock-glow { 0%,100%{opacity:.2} 50%{opacity:.5} }
  .ill-lock-body{animation:ill-lock-shake 3s 2s ease infinite;transform-origin:140px 120px}
  .ill-lock-glow{animation:ill-lock-glow 2s ease infinite}
</style>
<circle cx="140" cy="110" r="70" fill="#DBEAFE" opacity=".4" class="ill-lock-glow"/>
<g class="ill-lock-body">
  <path d="M110 90 L110 72 A30 30 0 0 1 170 72 L170 90" stroke="#375DFB" stroke-width="3" fill="none" stroke-linecap="round"/>
  <rect x="96" y="90" width="88" height="70" rx="10" fill="#375DFB"/>
  <circle cx="140" cy="120" r="12" fill="#fff"/>
  <rect x="136" y="120" width="8" height="16" rx="4" fill="#375DFB"/>
</g>
<rect x="30" y="170" width="220" height="18" rx="9" fill="#D1FAE5"/>
<text x="80" y="183" font-size="8" fill="#10B981" font-family="system-ui" font-weight="600">🔐 Encrypted end-to-end</text>
</svg>`,

  shield: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-shield-pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }
  @keyframes ill-shield-check { 0%{stroke-dashoffset:30} 100%{stroke-dashoffset:0} }
  .ill-shield-icon{animation:ill-shield-pulse 2s ease infinite;transform-origin:140px 90px}
  .ill-shield-check{stroke-dasharray:30;animation:ill-shield-check .6s .5s ease both}
</style>
<g class="ill-shield-icon">
  <path d="M140 18 L186 36 L186 84 C186 122 140 152 140 152 C140 152 94 122 94 84 L94 36 Z" fill="#DBEAFE" stroke="#375DFB" stroke-width="2"/>
  <path d="M118 84l14 14 30-30" stroke="#375DFB" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="ill-shield-check"/>
</g>
<rect x="30" y="160" width="220" height="30" rx="8" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
<text x="50" y="175" font-size="7" fill="#374151" font-family="system-ui">✓ GDPR Compliant</text>
<text x="160" y="175" font-size="7" fill="#374151" font-family="system-ui">✓ SOC 2</text>
<text x="50" y="185" font-size="7" fill="#374151" font-family="system-ui">✓ PCI DSS Level 1</text>
<text x="160" y="185" font-size="7" fill="#374151" font-family="system-ui">✓ ISO 27001</text>
</svg>`,

  user: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-user-slide { 0%{opacity:0;transform:translateX(10px)} 100%{opacity:1;transform:translateX(0)} }
  @keyframes ill-user-toggle { 0%,49%{transform:translateX(0)} 50%,100%{transform:translateX(18px)} }
  .ill-user-card{animation:ill-user-slide .5s ease both}
  .ill-user-tog{animation:ill-user-toggle 3s ease infinite}
</style>
<g class="ill-user-card">
  <rect x="40" y="20" width="200" height="160" rx="10" fill="#fff" stroke="#E5E7EB" stroke-width="1.5"/>
  <circle cx="140" cy="68" r="28" fill="#DBEAFE"/>
  <circle cx="140" cy="60" r="16" fill="#375DFB" opacity=".5"/>
  <path d="M112 80 Q112 96 140 96 Q168 96 168 80" fill="#DBEAFE"/>
  <text x="100" y="118" font-size="10" font-family="system-ui" font-weight="600" fill="#1F2937">Alex Johnson</text>
  <text x="100" y="130" font-size="7" fill="#9CA3AF" font-family="system-ui">alex@company.com</text>
  <line x1="56" y1="142" x2="224" y2="142" stroke="#E5E7EB" stroke-width=".5"/>
  <text x="56" y="158" font-size="7" fill="#374151" font-family="system-ui">Marketing emails</text>
  <rect x="180" y="148" width="36" height="16" rx="8" fill="#E5E7EB"/>
  <circle cx="188" cy="156" r="6" fill="#fff" class="ill-user-tog"/>
  <text x="56" y="174" font-size="7" fill="#374151" font-family="system-ui">Event updates</text>
  <rect x="180" y="164" width="36" height="16" rx="8" fill="#10B981"/>
  <circle cx="210" cy="172" r="6" fill="#fff"/>
</g>
</svg>`,

  refresh: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-refresh-spin { 0%{transform:rotate(0)} 100%{transform:rotate(360deg)} }
  @keyframes ill-refresh-flow { 0%{stroke-dashoffset:80} 100%{stroke-dashoffset:0} }
  .ill-refresh-icon{animation:ill-refresh-spin 3s linear infinite;transform-origin:140px 100px}
  .ill-refresh-l{stroke-dasharray:80;animation:ill-refresh-flow 1s ease infinite}
</style>
<rect x="20" y="60" width="90" height="80" rx="8" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
<text x="36" y="96" font-size="8" font-family="system-ui" fill="#375DFB" font-weight="600">Salesforce</text>
<rect x="36" y="104" width="58" height="6" rx="3" fill="#375DFB" opacity=".3"/>
<rect x="36" y="114" width="42" height="5" rx="2.5" fill="#375DFB" opacity=".2"/>
<rect x="170" y="60" width="90" height="80" rx="8" fill="#D1FAE5" stroke="#10B981" stroke-width="1.5"/>
<text x="183" y="96" font-size="8" font-family="system-ui" fill="#10B981" font-weight="600">EventHex</text>
<rect x="183" y="104" width="58" height="6" rx="3" fill="#10B981" opacity=".3"/>
<rect x="183" y="114" width="42" height="5" rx="2.5" fill="#10B981" opacity=".2"/>
<g class="ill-refresh-icon">
  <path d="M140 72 A28 28 0 1 1 112 100" stroke="#374151" stroke-width="2" fill="none" stroke-linecap="round"/>
  <polygon points="112,88 100,100 122,104" fill="#374151"/>
</g>
<path d="M110 100 L170 100" stroke="#374151" stroke-width="1.5" stroke-dasharray="4 3" class="ill-refresh-l" opacity=".4"/>
</svg>`,

  code: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-code-type { 0%{opacity:0} 100%{opacity:1} }
  @keyframes ill-code-cursor { 0%,100%{opacity:1} 50%{opacity:0} }
  .ill-code-l1{animation:ill-code-type .3s .1s ease both}
  .ill-code-l2{animation:ill-code-type .3s .3s ease both}
  .ill-code-l3{animation:ill-code-type .3s .5s ease both}
  .ill-code-l4{animation:ill-code-type .3s .7s ease both}
  .ill-code-cursor{animation:ill-code-cursor .8s step-end infinite}
</style>
<rect x="24" y="20" width="232" height="160" rx="8" fill="#1F2937"/>
<rect x="24" y="20" width="232" height="28" rx="8" fill="#111827"/>
<rect x="24" y="42" width="232" height="6" fill="#111827"/>
<circle cx="40" cy="34" r="4" fill="#EF4444"/>
<circle cx="54" cy="34" r="4" fill="#F59E0B"/>
<circle cx="68" cy="34" r="4" fill="#10B981"/>
<text x="40" y="56" font-size="9" fill="#9CA3AF" font-family="system-ui">1</text>
<text x="40" y="72" font-size="9" fill="#9CA3AF" font-family="system-ui">2</text>
<text x="40" y="88" font-size="9" fill="#9CA3AF" font-family="system-ui">3</text>
<text x="40" y="104" font-size="9" fill="#9CA3AF" font-family="system-ui">4</text>
<text x="40" y="120" font-size="9" fill="#9CA3AF" font-family="system-ui">5</text>
<g class="ill-code-l1"><text x="58" y="56" font-size="9" fill="#6F8BFF" font-family="monospace">import</text><text x="104" y="56" font-size="9" fill="#D1FAE5" font-family="monospace">{ EventHex }</text><text x="200" y="56" font-size="9" fill="#6F8BFF" font-family="monospace">from</text></g>
<g class="ill-code-l2"><text x="58" y="72" font-size="9" fill="#DBEAFE" font-family="monospace">  '</text><text x="76" y="72" font-size="9" fill="#FEF3C7" font-family="monospace">@eventhex/sdk</text><text x="188" y="72" font-size="9" fill="#DBEAFE" font-family="monospace">';</text></g>
<g class="ill-code-l3"><text x="58" y="104" font-size="9" fill="#6F8BFF" font-family="monospace">const</text><text x="100" y="104" font-size="9" fill="#D1FAE5" font-family="monospace">eh</text><text x="116" y="104" font-size="9" fill="#DBEAFE" font-family="monospace">= new</text><text x="152" y="104" font-size="9" fill="#FEF3C7" font-family="monospace">EventHex</text><text x="212" y="104" font-size="9" fill="#DBEAFE" font-family="monospace">();</text></g>
<g class="ill-code-l4"><text x="58" y="120" font-size="9" fill="#D1FAE5" font-family="monospace">eh</text><text x="74" y="120" font-size="9" fill="#DBEAFE" font-family="monospace">.</text><text x="78" y="120" font-size="9" fill="#6F8BFF" font-family="monospace">registerAttendee</text><text x="204" y="120" font-size="9" fill="#DBEAFE" font-family="monospace">(</text></g>
<rect x="58" y="126" width="2" height="12" fill="#fff" class="ill-code-cursor"/>
</svg>`,

  webhook: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-webhook-bolt { 0%,100%{opacity:.4} 50%{opacity:1} }
  @keyframes ill-webhook-flow { 0%{stroke-dashoffset:100} 100%{stroke-dashoffset:0} }
  .ill-webhook-bolt{animation:ill-webhook-bolt 1s ease infinite}
  .ill-webhook-f1{stroke-dasharray:100;animation:ill-webhook-flow 1.5s ease infinite}
</style>
<circle cx="60" cy="100" r="24" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
<text x="48" y="104" font-size="10" fill="#375DFB" font-family="system-ui">POST</text>
<circle cx="220" cy="60" r="18" fill="#D1FAE5" stroke="#10B981" stroke-width="1.5"/>
<text x="210" y="64" font-size="8" fill="#10B981" font-family="system-ui">CRM</text>
<circle cx="220" cy="140" r="18" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
<text x="210" y="144" font-size="8" fill="#375DFB" font-family="system-ui">Slack</text>
<path d="M84 88 L202 68" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="4 3" class="ill-webhook-f1"/>
<path d="M84 112 L202 132" stroke="#10B981" stroke-width="1.5" stroke-dasharray="4 3" class="ill-webhook-f1"/>
<polygon points="138,84 148,100 128,100" fill="#F59E0B" class="ill-webhook-bolt"/>
<polygon points="148,100 134,116 144,116 130,130 148,114 138,114" fill="#F59E0B" class="ill-webhook-bolt"/>
</svg>`,

  qr: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-qr-scan { 0%{transform:translateY(0)} 100%{transform:translateY(120px)} }
  @keyframes ill-qr-beep { 0%,90%,100%{opacity:0} 92%{opacity:1} }
  .ill-qr-line{animation:ill-qr-scan 2s ease-in-out infinite alternate}
  .ill-qr-beep{animation:ill-qr-beep 2s ease infinite}
</style>
<rect x="60" y="20" width="160" height="160" rx="8" fill="#fff" stroke="#E5E7EB" stroke-width="1.5"/>
<rect x="72" y="32" width="48" height="48" rx="4" fill="none" stroke="#1F2937" stroke-width="2"/>
<rect x="80" y="40" width="32" height="32" rx="2" fill="#1F2937"/>
<rect x="88" y="48" width="16" height="16" rx="1" fill="#fff"/>
<rect x="160" y="32" width="48" height="48" rx="4" fill="none" stroke="#1F2937" stroke-width="2"/>
<rect x="168" y="40" width="32" height="32" rx="2" fill="#1F2937"/>
<rect x="176" y="48" width="16" height="16" rx="1" fill="#fff"/>
<rect x="72" y="120" width="48" height="48" rx="4" fill="none" stroke="#1F2937" stroke-width="2"/>
<rect x="80" y="128" width="32" height="32" rx="2" fill="#1F2937"/>
<rect x="88" y="136" width="16" height="16" rx="1" fill="#fff"/>
<rect x="160" y="88" width="10" height="10" rx="1" fill="#1F2937"/>
<rect x="174" y="88" width="10" height="10" rx="1" fill="#1F2937"/>
<rect x="188" y="88" width="10" height="10" rx="1" fill="#1F2937"/>
<rect x="160" y="102" width="10" height="10" rx="1" fill="#1F2937"/>
<rect x="188" y="102" width="10" height="10" rx="1" fill="#1F2937"/>
<rect x="160" y="116" width="38" height="10" rx="1" fill="#1F2937"/>
<rect x="68" y="84" width="164" height="2" rx="1" fill="#375DFB" opacity=".8" class="ill-qr-line"/>
<rect x="60" y="20" width="160" height="160" rx="8" fill="#375DFB" opacity=".04" class="ill-qr-beep"/>
</svg>`,

  portal: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-portal-fade { 0%{opacity:0;transform:translateY(6px)} 100%{opacity:1;transform:translateY(0)} }
  .ill-portal-f1{animation:ill-portal-fade .4s .1s ease both}
  .ill-portal-f2{animation:ill-portal-fade .4s .25s ease both}
  .ill-portal-btn{animation:ill-portal-fade .4s .4s ease both}
</style>
<rect x="40" y="20" width="200" height="160" rx="10" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1.5"/>
<rect x="40" y="20" width="200" height="36" rx="10" fill="#375DFB"/>
<rect x="40" y="46" width="200" height="10" fill="#375DFB"/>
<text x="108" y="44" font-size="10" fill="#fff" font-family="system-ui" font-weight="600">Attendee Portal</text>
<circle cx="140" cy="88" r="22" fill="#DBEAFE"/>
<circle cx="140" cy="80" r="12" fill="#375DFB" opacity=".5"/>
<path d="M118 92 Q118 108 140 108 Q162 108 162 92" fill="#DBEAFE"/>
<g class="ill-portal-f1">
  <text x="64" y="128" font-size="7" fill="#9CA3AF" font-family="system-ui">Email address</text>
  <rect x="64" y="132" width="152" height="20" rx="4" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <text x="72" y="146" font-size="8" fill="#374151" font-family="system-ui">alex@company.com</text>
</g>
<g class="ill-portal-f2">
  <text x="64" y="162" font-size="7" fill="#9CA3AF" font-family="system-ui">Password</text>
  <rect x="64" y="166" width="152" height="20" rx="4" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
  <text x="72" y="180" font-size="10" fill="#374151" font-family="system-ui">••••••••</text>
</g>
</svg>`,

  mail: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-mail-fly { 0%{transform:translate(0,0) rotate(0)} 60%{transform:translate(60px,-30px) rotate(-8deg);opacity:1} 100%{transform:translate(120px,-60px) rotate(-12deg);opacity:0} }
  @keyframes ill-mail-open { 0%{d:path("M50 70 L140 40 L230 70")} 100%{d:path("M50 70 L140 100 L230 70")} }
  .ill-mail-env{animation:ill-mail-fly 3s ease-out infinite}
</style>
<rect x="50" y="60" width="180" height="120" rx="8" fill="#fff" stroke="#375DFB" stroke-width="1.5"/>
<path d="M50 68 L140 114 L230 68" stroke="#375DFB" stroke-width="1.5" fill="none"/>
<line x1="50" y1="180" x2="100" y2="132" stroke="#375DFB" stroke-width="1" opacity=".4"/>
<line x1="230" y1="180" x2="180" y2="132" stroke="#375DFB" stroke-width="1" opacity=".4"/>
<rect x="72" y="94" width="136" height="72" rx="4" fill="#F9FAFB"/>
<rect x="80" y="104" width="100" height="6" rx="3" fill="#1F2937" opacity=".2"/>
<rect x="80" y="116" width="120" height="5" rx="2.5" fill="#1F2937" opacity=".12"/>
<rect x="80" y="127" width="90" height="5" rx="2.5" fill="#1F2937" opacity=".12"/>
<rect x="80" y="144" width="60" height="16" rx="8" fill="#375DFB"/>
<text x="86" y="156" font-size="7" fill="#fff" font-family="system-ui">View Ticket →</text>
<g class="ill-mail-env" opacity="1">
  <rect x="50" y="20" width="50" height="36" rx="4" fill="#DBEAFE" stroke="#375DFB" stroke-width="1"/>
  <path d="M50 26 L75 38 L100 26" stroke="#375DFB" stroke-width="1" fill="none"/>
</g>
</svg>`,

  search: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes ill-search-pulse { 0%,100%{r:18} 50%{r:22} }
  @keyframes ill-search-highlight { 0%,100%{fill:#DBEAFE;opacity:.5} 50%{fill:#375DFB;opacity:.2} }
  .ill-search-circle{animation:ill-search-pulse 2s ease infinite}
  .ill-search-hl{animation:ill-search-highlight 2s ease infinite}
</style>
<rect x="24" y="14" width="232" height="172" rx="8" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
<rect x="36" y="28" width="208" height="28" rx="6" fill="#F9FAFB" stroke="#375DFB" stroke-width="1.5"/>
<circle cx="54" cy="42" r="7" fill="none" stroke="#375DFB" stroke-width="1.5" class="ill-search-circle"/>
<line x1="59" y1="47" x2="64" y2="52" stroke="#375DFB" stroke-width="1.5"/>
<rect x="70" y="36" width="140" height="12" rx="4" fill="#DBEAFE"/>
<text x="74" y="46" font-size="8" fill="#375DFB" font-family="system-ui">semantic venue search…</text>
<rect x="36" y="68" width="208" height="28" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1" class="ill-search-hl"/>
<text x="50" y="82" font-size="8" fill="#374151" font-family="system-ui" font-weight="600">Grand Convention Hall</text>
<text x="50" y="92" font-size="7" fill="#9CA3AF" font-family="system-ui">matches: seating, AV, catering</text>
<rect x="36" y="102" width="208" height="28" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
<text x="50" y="116" font-size="8" fill="#374151" font-family="system-ui">City Expo Centre</text>
<text x="50" y="126" font-size="7" fill="#9CA3AF" font-family="system-ui">capacity 5,000 · outdoor area</text>
<rect x="36" y="136" width="208" height="28" rx="6" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
<text x="50" y="150" font-size="8" fill="#374151" font-family="system-ui">Riverside Forum</text>
<text x="50" y="160" font-size="7" fill="#9CA3AF" font-family="system-ui">hybrid-ready · fast WiFi</text>
<text x="36" y="180" font-size="7" fill="#9CA3AF" font-family="system-ui">Powered by vector search · 3 results</text>
</svg>`,

};
