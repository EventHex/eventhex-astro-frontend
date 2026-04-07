export const cdbIllustrations: Record<string, string> = {

  // 1. Event Portfolio View — list of event cards with status badges
  cdb1: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes cdbCardSlide { 0% { transform: translateY(6px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
      .cdb-card-1 { animation: cdbCardSlide 0.5s ease-out both; }
      .cdb-card-2 { animation: cdbCardSlide 0.5s ease-out 0.15s both; }
      .cdb-card-3 { animation: cdbCardSlide 0.5s ease-out 0.3s both; }
    </style>
    <rect x="30" y="16" width="220" height="28" rx="6" fill="#1F2937"/>
    <rect x="38" y="24" width="60" height="5" rx="2" fill="#DBEAFE"/>
    <rect x="38" y="33" width="30" height="3" rx="1" fill="#374151"/>
    <circle cx="232" cy="30" r="8" fill="#375DFB" opacity="0.2"/>
    <rect x="228" y="27" width="8" height="1.5" rx="0.75" fill="#375DFB"/>
    <rect x="231.25" y="23.75" width="1.5" height="8" rx="0.75" fill="#375DFB"/>
    <g class="cdb-card-1">
      <rect x="30" y="52" width="220" height="38" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1"/>
      <rect x="42" y="60" width="8" height="8" rx="2" fill="#DBEAFE"/>
      <rect x="56" y="60" width="70" height="5" rx="2" fill="#1F2937"/>
      <rect x="56" y="69" width="45" height="3" rx="1" fill="#374151" opacity="0.5"/>
      <rect x="186" y="62" width="48" height="16" rx="8" fill="#D1FAE5"/>
      <text x="210" y="73" font-size="7" fill="#10B981" text-anchor="middle" font-family="system-ui" font-weight="600">Live</text>
    </g>
    <g class="cdb-card-2">
      <rect x="30" y="96" width="220" height="38" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1"/>
      <rect x="42" y="104" width="8" height="8" rx="2" fill="#DBEAFE"/>
      <rect x="56" y="104" width="80" height="5" rx="2" fill="#1F2937"/>
      <rect x="56" y="113" width="50" height="3" rx="1" fill="#374151" opacity="0.5"/>
      <rect x="186" y="106" width="48" height="16" rx="8" fill="#DBEAFE"/>
      <text x="210" y="117" font-size="7" fill="#375DFB" text-anchor="middle" font-family="system-ui" font-weight="600">Draft</text>
    </g>
    <g class="cdb-card-3">
      <rect x="30" y="140" width="220" height="38" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1"/>
      <rect x="42" y="148" width="8" height="8" rx="2" fill="#DBEAFE"/>
      <rect x="56" y="148" width="65" height="5" rx="2" fill="#1F2937"/>
      <rect x="56" y="157" width="40" height="3" rx="1" fill="#374151" opacity="0.5"/>
      <rect x="186" y="150" width="48" height="16" rx="8" fill="#FEF3C7"/>
      <text x="210" y="161" font-size="7" fill="#F59E0B" text-anchor="middle" font-family="system-ui" font-weight="600">Soon</text>
    </g>
  </svg>`,

  // 2. One-Click Event Cloning — event card with clone/duplicate icon
  cdb2: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes cdbClonePulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); } }
      @keyframes cdbCloneSlide { 0% { transform: translate(0,0); opacity: 1; } 50% { transform: translate(12px,8px); opacity: 0.6; } 100% { transform: translate(12px,8px); opacity: 1; } }
      .cdb-clone-btn { animation: cdbClonePulse 2s ease-in-out infinite; transform-origin: 210px 100px; }
      .cdb-clone-ghost { animation: cdbCloneSlide 2.5s ease-in-out infinite; }
    </style>
    <rect x="40" y="40" width="160" height="100" rx="10" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <rect x="40" y="40" width="160" height="30" rx="10" fill="#375DFB"/>
    <rect x="40" y="60" width="160" height="10" fill="#375DFB"/>
    <rect x="52" y="48" width="80" height="6" rx="2" fill="white" opacity="0.9"/>
    <rect x="52" y="58" width="50" height="4" rx="1" fill="white" opacity="0.5"/>
    <rect x="52" y="82" width="100" height="4" rx="2" fill="#1F2937" opacity="0.6"/>
    <rect x="52" y="92" width="80" height="4" rx="2" fill="#374151" opacity="0.3"/>
    <rect x="52" y="102" width="60" height="4" rx="2" fill="#374151" opacity="0.3"/>
    <rect x="52" y="118" width="55" height="14" rx="4" fill="#D1FAE5"/>
    <text x="79" y="128" font-size="7" fill="#10B981" text-anchor="middle" font-family="system-ui" font-weight="600">Published</text>
    <g class="cdb-clone-ghost" opacity="0.35">
      <rect x="52" y="48" width="160" height="100" rx="10" fill="white" stroke="#375DFB" stroke-width="1" stroke-dasharray="4 2"/>
    </g>
    <g class="cdb-clone-btn">
      <circle cx="210" cy="100" r="18" fill="#375DFB"/>
      <rect x="203" y="91" width="14" height="11" rx="2" fill="none" stroke="white" stroke-width="1.5"/>
      <rect x="207" y="95" width="14" height="11" rx="2" fill="#375DFB" stroke="white" stroke-width="1.5"/>
    </g>
  </svg>`,

  // 3. Cross-Event Analytics — multi-line comparison chart
  cdb3: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes cdbLineDraw1 { 0% { stroke-dashoffset: 300; } 100% { stroke-dashoffset: 0; } }
      @keyframes cdbLineDraw2 { 0% { stroke-dashoffset: 300; } 100% { stroke-dashoffset: 0; } }
      .cdb-line-1 { stroke-dasharray: 300; animation: cdbLineDraw1 2s ease-out both; }
      .cdb-line-2 { stroke-dasharray: 300; animation: cdbLineDraw2 2s ease-out 0.3s both; }
    </style>
    <rect x="30" y="20" width="220" height="160" rx="8" fill="white" stroke="#DBEAFE" stroke-width="1"/>
    <rect x="38" y="28" width="70" height="5" rx="2" fill="#1F2937"/>
    <rect x="38" y="37" width="45" height="3" rx="1" fill="#374151" opacity="0.5"/>
    <line x1="55" y1="60" x2="55" y2="160" stroke="#E5E7EB" stroke-width="1"/>
    <line x1="55" y1="160" x2="235" y2="160" stroke="#E5E7EB" stroke-width="1"/>
    <line x1="55" y1="90" x2="235" y2="90" stroke="#E5E7EB" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="55" y1="120" x2="235" y2="120" stroke="#E5E7EB" stroke-width="0.5" stroke-dasharray="3 3"/>
    <text x="48" y="93" font-size="6" fill="#374151" text-anchor="end" font-family="system-ui">500</text>
    <text x="48" y="123" font-size="6" fill="#374151" text-anchor="end" font-family="system-ui">250</text>
    <text x="48" y="163" font-size="6" fill="#374151" text-anchor="end" font-family="system-ui">0</text>
    <polyline class="cdb-line-1" points="55,145 85,130 115,110 145,95 175,85 205,75 235,68" stroke="#375DFB" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline class="cdb-line-2" points="55,150 85,142 115,135 145,125 175,118 205,108 235,100" stroke="#10B981" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="55,148 85,148 115,140 145,138 175,130 205,128 235,130" stroke="#F59E0B" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
    <circle cx="235" cy="68" r="3" fill="#375DFB"/>
    <circle cx="235" cy="100" r="3" fill="#10B981"/>
    <circle cx="235" cy="130" r="3" fill="#F59E0B"/>
    <rect x="160" y="28" width="8" height="4" rx="1" fill="#375DFB"/>
    <text x="172" y="32" font-size="6" fill="#374151" font-family="system-ui">Event A</text>
    <rect x="200" y="28" width="8" height="4" rx="1" fill="#10B981"/>
    <text x="212" y="32" font-size="6" fill="#374151" font-family="system-ui">Event B</text>
  </svg>`,

  // 4. Bulk Operations — checkbox list with bulk action bar
  cdb4: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes cdbCheckPop { 0% { transform: scale(0); } 60% { transform: scale(1.2); } 100% { transform: scale(1); } }
      @keyframes cdbBarSlide { 0% { transform: translateY(10px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
      .cdb-check-1 { animation: cdbCheckPop 0.4s ease-out 0.2s both; transform-origin: 48px 56px; }
      .cdb-check-2 { animation: cdbCheckPop 0.4s ease-out 0.4s both; transform-origin: 48px 88px; }
      .cdb-check-3 { animation: cdbCheckPop 0.4s ease-out 0.6s both; transform-origin: 48px 120px; }
      .cdb-bulk-bar { animation: cdbBarSlide 0.5s ease-out 0.8s both; }
    </style>
    <rect x="30" y="20" width="220" height="24" rx="6" fill="#1F2937"/>
    <rect x="42" y="28" width="6" height="6" rx="1" fill="none" stroke="#DBEAFE" stroke-width="1"/>
    <rect x="56" y="28" width="40" height="5" rx="1" fill="#DBEAFE" opacity="0.6"/>
    <rect x="110" y="28" width="30" height="5" rx="1" fill="#DBEAFE" opacity="0.6"/>
    <rect x="160" y="28" width="35" height="5" rx="1" fill="#DBEAFE" opacity="0.6"/>
    <rect x="210" y="28" width="25" height="5" rx="1" fill="#DBEAFE" opacity="0.6"/>
    <g>
      <rect x="30" y="48" width="220" height="28" rx="0" fill="white" stroke="#DBEAFE" stroke-width="0.5"/>
      <g class="cdb-check-1">
        <rect x="42" y="56" width="10" height="10" rx="2" fill="#375DFB"/>
        <polyline points="44.5,61 47,63.5 50,58.5" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <rect x="60" y="57" width="60" height="4" rx="1" fill="#1F2937"/>
      <rect x="60" y="64" width="35" height="3" rx="1" fill="#374151" opacity="0.4"/>
      <rect x="190" y="58" width="40" height="12" rx="6" fill="#D1FAE5"/>
    </g>
    <g>
      <rect x="30" y="80" width="220" height="28" rx="0" fill="white" stroke="#DBEAFE" stroke-width="0.5"/>
      <g class="cdb-check-2">
        <rect x="42" y="88" width="10" height="10" rx="2" fill="#375DFB"/>
        <polyline points="44.5,93 47,95.5 50,90.5" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <rect x="60" y="89" width="70" height="4" rx="1" fill="#1F2937"/>
      <rect x="60" y="96" width="40" height="3" rx="1" fill="#374151" opacity="0.4"/>
      <rect x="190" y="90" width="40" height="12" rx="6" fill="#DBEAFE"/>
    </g>
    <g>
      <rect x="30" y="112" width="220" height="28" rx="0" fill="white" stroke="#DBEAFE" stroke-width="0.5"/>
      <g class="cdb-check-3">
        <rect x="42" y="120" width="10" height="10" rx="2" fill="#375DFB"/>
        <polyline points="44.5,125 47,127.5 50,122.5" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <rect x="60" y="121" width="55" height="4" rx="1" fill="#1F2937"/>
      <rect x="60" y="128" width="30" height="3" rx="1" fill="#374151" opacity="0.4"/>
      <rect x="190" y="122" width="40" height="12" rx="6" fill="#FEF3C7"/>
    </g>
    <g>
      <rect x="30" y="144" width="220" height="28" rx="0" fill="#F9FAFB" stroke="#DBEAFE" stroke-width="0.5"/>
      <rect x="42" y="152" width="10" height="10" rx="2" fill="none" stroke="#D1D5DB" stroke-width="1"/>
      <rect x="60" y="153" width="50" height="4" rx="1" fill="#374151" opacity="0.3"/>
      <rect x="60" y="160" width="32" height="3" rx="1" fill="#374151" opacity="0.2"/>
    </g>
    <g class="cdb-bulk-bar">
      <rect x="55" y="176" width="170" height="20" rx="10" fill="#375DFB"/>
      <text x="92" y="189" font-size="7" fill="white" font-family="system-ui" font-weight="600">3 selected</text>
      <line x1="132" y1="180" x2="132" y2="192" stroke="white" stroke-width="0.5" opacity="0.4"/>
      <text x="148" y="189" font-size="7" fill="white" font-family="system-ui" opacity="0.9">Archive</text>
      <text x="190" y="189" font-size="7" fill="white" font-family="system-ui" opacity="0.9">Export</text>
    </g>
  </svg>`,

  // 5. Event Categories — folder/category tags
  cdb5: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes cdbTagFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
      .cdb-tag-1 { animation: cdbTagFloat 3s ease-in-out infinite; }
      .cdb-tag-2 { animation: cdbTagFloat 3s ease-in-out 0.4s infinite; }
      .cdb-tag-3 { animation: cdbTagFloat 3s ease-in-out 0.8s infinite; }
      .cdb-tag-4 { animation: cdbTagFloat 3s ease-in-out 1.2s infinite; }
      .cdb-tag-5 { animation: cdbTagFloat 3s ease-in-out 1.6s infinite; }
    </style>
    <rect x="40" y="30" width="80" height="65" rx="8" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <rect x="40" y="30" width="35" height="12" rx="4" fill="#375DFB"/>
    <rect x="40" y="38" width="80" height="4" rx="0" fill="#375DFB" opacity="0.1"/>
    <rect x="50" y="52" width="50" height="4" rx="2" fill="#1F2937"/>
    <rect x="50" y="60" width="30" height="3" rx="1" fill="#374151" opacity="0.4"/>
    <rect x="50" y="72" width="20" height="3" rx="1" fill="#375DFB" opacity="0.5"/>
    <text x="50" y="87" font-size="14" font-family="system-ui">📁</text>
    <rect x="160" y="30" width="80" height="65" rx="8" fill="white" stroke="#D1FAE5" stroke-width="1.5"/>
    <rect x="160" y="30" width="35" height="12" rx="4" fill="#10B981"/>
    <rect x="160" y="38" width="80" height="4" rx="0" fill="#10B981" opacity="0.1"/>
    <rect x="170" y="52" width="55" height="4" rx="2" fill="#1F2937"/>
    <rect x="170" y="60" width="35" height="3" rx="1" fill="#374151" opacity="0.4"/>
    <rect x="170" y="72" width="18" height="3" rx="1" fill="#10B981" opacity="0.5"/>
    <text x="170" y="87" font-size="14" font-family="system-ui">📁</text>
    <g class="cdb-tag-1">
      <rect x="30" y="115" width="72" height="22" rx="11" fill="#DBEAFE"/>
      <text x="66" y="129" font-size="8" fill="#375DFB" text-anchor="middle" font-family="system-ui" font-weight="600">Conferences</text>
    </g>
    <g class="cdb-tag-2">
      <rect x="108" y="115" width="58" height="22" rx="11" fill="#D1FAE5"/>
      <text x="137" y="129" font-size="8" fill="#10B981" text-anchor="middle" font-family="system-ui" font-weight="600">Webinars</text>
    </g>
    <g class="cdb-tag-3">
      <rect x="172" y="115" width="72" height="22" rx="11" fill="#FEF3C7"/>
      <text x="208" y="129" font-size="8" fill="#F59E0B" text-anchor="middle" font-family="system-ui" font-weight="600">Workshops</text>
    </g>
    <g class="cdb-tag-4">
      <rect x="50" y="145" width="58" height="22" rx="11" fill="#EDE9FE"/>
      <text x="79" y="159" font-size="8" fill="#8B5CF6" text-anchor="middle" font-family="system-ui" font-weight="600">Meetups</text>
    </g>
    <g class="cdb-tag-5">
      <rect x="114" y="145" width="72" height="22" rx="11" fill="#FEE2E2"/>
      <text x="150" y="159" font-size="8" fill="#EF4444" text-anchor="middle" font-family="system-ui" font-weight="600">Trade Shows</text>
    </g>
  </svg>`,

  // 6. Role-Based Access — 5 role level badges
  cdb6: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes cdbBadgePop { 0% { transform: scale(0); opacity: 0; } 70% { transform: scale(1.1); } 100% { transform: scale(1); opacity: 1; } }
      .cdb-badge-1 { animation: cdbBadgePop 0.4s ease-out 0.1s both; transform-origin: 140px 40px; }
      .cdb-badge-2 { animation: cdbBadgePop 0.4s ease-out 0.25s both; transform-origin: 80px 85px; }
      .cdb-badge-3 { animation: cdbBadgePop 0.4s ease-out 0.4s both; transform-origin: 200px 85px; }
      .cdb-badge-4 { animation: cdbBadgePop 0.4s ease-out 0.55s both; transform-origin: 80px 135px; }
      .cdb-badge-5 { animation: cdbBadgePop 0.4s ease-out 0.7s both; transform-origin: 200px 135px; }
    </style>
    <line x1="140" y1="55" x2="80" y2="72" stroke="#DBEAFE" stroke-width="1.5"/>
    <line x1="140" y1="55" x2="200" y2="72" stroke="#DBEAFE" stroke-width="1.5"/>
    <line x1="80" y1="100" x2="80" y2="120" stroke="#DBEAFE" stroke-width="1.5"/>
    <line x1="200" y1="100" x2="200" y2="120" stroke="#DBEAFE" stroke-width="1.5"/>
    <g class="cdb-badge-1">
      <rect x="104" y="22" width="72" height="36" rx="8" fill="#375DFB"/>
      <circle cx="124" cy="36" r="6" fill="white" opacity="0.3"/>
      <rect x="133" y="33" width="32" height="4" rx="2" fill="white" opacity="0.9"/>
      <text x="149" y="48" font-size="6" fill="white" text-anchor="middle" font-family="system-ui" opacity="0.7">Full Access</text>
    </g>
    <g class="cdb-badge-2">
      <rect x="44" y="72" width="72" height="30" rx="8" fill="#10B981"/>
      <circle cx="62" cy="87" r="5" fill="white" opacity="0.3"/>
      <text x="90" y="85" font-size="7" fill="white" text-anchor="middle" font-family="system-ui" font-weight="600">Manager</text>
      <text x="90" y="93" font-size="5.5" fill="white" text-anchor="middle" font-family="system-ui" opacity="0.7">Edit Events</text>
    </g>
    <g class="cdb-badge-3">
      <rect x="164" y="72" width="72" height="30" rx="8" fill="#8B5CF6"/>
      <circle cx="182" cy="87" r="5" fill="white" opacity="0.3"/>
      <text x="210" y="85" font-size="7" fill="white" text-anchor="middle" font-family="system-ui" font-weight="600">Editor</text>
      <text x="210" y="93" font-size="5.5" fill="white" text-anchor="middle" font-family="system-ui" opacity="0.7">Edit Content</text>
    </g>
    <g class="cdb-badge-4">
      <rect x="44" y="120" width="72" height="30" rx="8" fill="#F59E0B"/>
      <circle cx="62" cy="135" r="5" fill="white" opacity="0.3"/>
      <text x="90" y="133" font-size="7" fill="white" text-anchor="middle" font-family="system-ui" font-weight="600">Check-in</text>
      <text x="90" y="141" font-size="5.5" fill="white" text-anchor="middle" font-family="system-ui" opacity="0.7">Scan Only</text>
    </g>
    <g class="cdb-badge-5">
      <rect x="164" y="120" width="72" height="30" rx="8" fill="#374151"/>
      <circle cx="182" cy="135" r="5" fill="white" opacity="0.3"/>
      <text x="210" y="133" font-size="7" fill="white" text-anchor="middle" font-family="system-ui" font-weight="600">Viewer</text>
      <text x="210" y="141" font-size="5.5" fill="white" text-anchor="middle" font-family="system-ui" opacity="0.7">Read Only</text>
    </g>
    <text x="140" y="175" font-size="7" fill="#374151" text-anchor="middle" font-family="system-ui" opacity="0.6">5 permission levels</text>
  </svg>`,

  // 7. Team Member Invites — invitation email with user icon
  cdb7: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes cdbEnvOpen { 0% { transform: rotateX(0deg); } 50% { transform: rotateX(-20deg); } 100% { transform: rotateX(0deg); } }
      @keyframes cdbUserPop { 0%,70% { transform: scale(0); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
      .cdb-env-flap { animation: cdbEnvOpen 3s ease-in-out infinite; transform-origin: 140px 60px; }
      .cdb-user-pop { animation: cdbUserPop 2s ease-out both; transform-origin: center; }
    </style>
    <rect x="60" y="55" width="160" height="100" rx="8" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <g class="cdb-env-flap">
      <polygon points="60,55 140,95 220,55" fill="#DBEAFE" stroke="#375DFB" stroke-width="0.5" opacity="0.5"/>
    </g>
    <polygon points="60,155 140,115 220,155" fill="#F0F5FF" stroke="none"/>
    <rect x="85" y="78" width="110" height="5" rx="2" fill="#1F2937" opacity="0.7"/>
    <rect x="85" y="88" width="90" height="4" rx="1" fill="#374151" opacity="0.3"/>
    <rect x="85" y="96" width="70" height="4" rx="1" fill="#374151" opacity="0.3"/>
    <rect x="105" y="108" width="70" height="18" rx="6" fill="#375DFB"/>
    <text x="140" y="120" font-size="7" fill="white" text-anchor="middle" font-family="system-ui" font-weight="600">Accept Invite</text>
    <g class="cdb-user-pop">
      <circle cx="220" cy="45" r="16" fill="#D1FAE5"/>
      <circle cx="220" cy="40" r="5" fill="#10B981"/>
      <path d="M210,50 Q220,55 230,50" stroke="#10B981" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="232" cy="36" r="5" fill="#375DFB"/>
      <text x="232" y="39" font-size="7" fill="white" text-anchor="middle" font-family="system-ui" font-weight="700">+</text>
    </g>
  </svg>`,

  // 8. Event-Level Admins — admin icon linked to specific events
  cdb8: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes cdbLinkPulse { 0%,100% { stroke-opacity: 0.3; } 50% { stroke-opacity: 1; } }
      .cdb-link-line { animation: cdbLinkPulse 2s ease-in-out infinite; }
    </style>
    <circle cx="70" cy="70" r="20" fill="#DBEAFE"/>
    <circle cx="70" cy="64" r="7" fill="#375DFB"/>
    <path d="M56,80 Q70,88 84,80" stroke="#375DFB" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <rect x="58" y="90" width="24" height="10" rx="5" fill="#375DFB"/>
    <text x="70" y="98" font-size="6" fill="white" text-anchor="middle" font-family="system-ui" font-weight="600">Admin</text>
    <circle cx="70" cy="150" r="16" fill="#D1FAE5"/>
    <circle cx="70" cy="145" r="5.5" fill="#10B981"/>
    <path d="M59,158 Q70,164 81,158" stroke="#10B981" stroke-width="2" fill="none" stroke-linecap="round"/>
    <rect x="150" y="40" width="95" height="30" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1"/>
    <rect x="158" y="48" width="8" height="8" rx="2" fill="#375DFB" opacity="0.2"/>
    <rect x="172" y="48" width="50" height="4" rx="1" fill="#1F2937"/>
    <rect x="172" y="56" width="30" height="3" rx="1" fill="#374151" opacity="0.4"/>
    <rect x="150" y="80" width="95" height="30" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1"/>
    <rect x="158" y="88" width="8" height="8" rx="2" fill="#10B981" opacity="0.2"/>
    <rect x="172" y="88" width="55" height="4" rx="1" fill="#1F2937"/>
    <rect x="172" y="96" width="35" height="3" rx="1" fill="#374151" opacity="0.4"/>
    <rect x="150" y="120" width="95" height="30" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1"/>
    <rect x="158" y="128" width="8" height="8" rx="2" fill="#F59E0B" opacity="0.2"/>
    <rect x="172" y="128" width="45" height="4" rx="1" fill="#1F2937"/>
    <rect x="172" y="136" width="28" height="3" rx="1" fill="#374151" opacity="0.4"/>
    <line class="cdb-link-line" x1="90" y1="70" x2="150" y2="55" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="4 2"/>
    <line class="cdb-link-line" x1="90" y1="70" x2="150" y2="95" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="4 2"/>
    <line x1="86" y1="150" x2="150" y2="135" stroke="#10B981" stroke-width="1.5" stroke-dasharray="4 2" opacity="0.5"/>
  </svg>`,

  // 9. Activity Logging — timeline/audit log with entries
  cdb9: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes cdbLogEntry { 0% { transform: translateX(-8px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
      .cdb-log-1 { animation: cdbLogEntry 0.4s ease-out 0.1s both; }
      .cdb-log-2 { animation: cdbLogEntry 0.4s ease-out 0.3s both; }
      .cdb-log-3 { animation: cdbLogEntry 0.4s ease-out 0.5s both; }
      .cdb-log-4 { animation: cdbLogEntry 0.4s ease-out 0.7s both; }
      .cdb-log-5 { animation: cdbLogEntry 0.4s ease-out 0.9s both; }
    </style>
    <rect x="30" y="12" width="220" height="176" rx="8" fill="white" stroke="#DBEAFE" stroke-width="1"/>
    <rect x="38" y="20" width="65" height="5" rx="2" fill="#1F2937"/>
    <rect x="38" y="29" width="40" height="3" rx="1" fill="#374151" opacity="0.4"/>
    <line x1="62" y1="44" x2="62" y2="180" stroke="#DBEAFE" stroke-width="1.5"/>
    <g class="cdb-log-1">
      <circle cx="62" cy="52" r="5" fill="#375DFB"/>
      <rect x="76" y="46" width="150" height="16" rx="4" fill="#F0F5FF"/>
      <rect x="82" y="49" width="80" height="4" rx="1" fill="#1F2937"/>
      <rect x="82" y="56" width="50" height="3" rx="1" fill="#374151" opacity="0.4"/>
      <text x="220" y="56" font-size="5.5" fill="#374151" opacity="0.5" text-anchor="end" font-family="system-ui">2m ago</text>
    </g>
    <g class="cdb-log-2">
      <circle cx="62" cy="78" r="5" fill="#10B981"/>
      <rect x="76" y="72" width="150" height="16" rx="4" fill="#F0FDF4"/>
      <rect x="82" y="75" width="90" height="4" rx="1" fill="#1F2937"/>
      <rect x="82" y="82" width="55" height="3" rx="1" fill="#374151" opacity="0.4"/>
      <text x="220" y="82" font-size="5.5" fill="#374151" opacity="0.5" text-anchor="end" font-family="system-ui">15m ago</text>
    </g>
    <g class="cdb-log-3">
      <circle cx="62" cy="104" r="5" fill="#F59E0B"/>
      <rect x="76" y="98" width="150" height="16" rx="4" fill="#FFFBEB"/>
      <rect x="82" y="101" width="75" height="4" rx="1" fill="#1F2937"/>
      <rect x="82" y="108" width="45" height="3" rx="1" fill="#374151" opacity="0.4"/>
      <text x="220" y="108" font-size="5.5" fill="#374151" opacity="0.5" text-anchor="end" font-family="system-ui">1h ago</text>
    </g>
    <g class="cdb-log-4">
      <circle cx="62" cy="130" r="5" fill="#8B5CF6"/>
      <rect x="76" y="124" width="150" height="16" rx="4" fill="#F5F3FF"/>
      <rect x="82" y="127" width="85" height="4" rx="1" fill="#1F2937"/>
      <rect x="82" y="134" width="48" height="3" rx="1" fill="#374151" opacity="0.4"/>
      <text x="220" y="134" font-size="5.5" fill="#374151" opacity="0.5" text-anchor="end" font-family="system-ui">3h ago</text>
    </g>
    <g class="cdb-log-5">
      <circle cx="62" cy="156" r="5" fill="#EF4444"/>
      <rect x="76" y="150" width="150" height="16" rx="4" fill="#FEF2F2"/>
      <rect x="82" y="153" width="70" height="4" rx="1" fill="#1F2937"/>
      <rect x="82" y="160" width="42" height="3" rx="1" fill="#374151" opacity="0.4"/>
      <text x="220" y="160" font-size="5.5" fill="#374151" opacity="0.5" text-anchor="end" font-family="system-ui">1d ago</text>
    </g>
  </svg>`,

  // 10. Permission Templates — template card with checkboxes
  cdb10: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes cdbTemplateGlow { 0%,100% { filter: drop-shadow(0 0 0px transparent); } 50% { filter: drop-shadow(0 0 6px rgba(55,93,251,0.3)); } }
      .cdb-template-card { animation: cdbTemplateGlow 3s ease-in-out infinite; }
    </style>
    <g class="cdb-template-card">
      <rect x="55" y="18" width="170" height="164" rx="10" fill="white" stroke="#375DFB" stroke-width="1.5"/>
      <rect x="55" y="18" width="170" height="32" rx="10" fill="#375DFB"/>
      <rect x="55" y="40" width="170" height="10" fill="#375DFB"/>
      <rect x="68" y="26" width="10" height="10" rx="3" fill="white" opacity="0.3"/>
      <rect x="68" y="27" width="10" height="8" rx="2" fill="none"/>
      <path d="M71,31 L72.5,33 L76,28.5" stroke="white" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <rect x="84" y="28" width="80" height="5" rx="2" fill="white" opacity="0.9"/>
      <rect x="84" y="37" width="50" height="3" rx="1" fill="white" opacity="0.5"/>
    </g>
    <g>
      <rect x="72" y="62" width="10" height="10" rx="2" fill="#375DFB"/>
      <polyline points="74.5,67 76.5,69.5 80,64.5" stroke="white" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="90" y="64" width="70" height="4" rx="1" fill="#1F2937"/>
      <text x="200" y="70" font-size="6" fill="#10B981" font-family="system-ui" font-weight="600">Allow</text>
    </g>
    <g>
      <rect x="72" y="82" width="10" height="10" rx="2" fill="#375DFB"/>
      <polyline points="74.5,87 76.5,89.5 80,84.5" stroke="white" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="90" y="84" width="80" height="4" rx="1" fill="#1F2937"/>
      <text x="200" y="90" font-size="6" fill="#10B981" font-family="system-ui" font-weight="600">Allow</text>
    </g>
    <g>
      <rect x="72" y="102" width="10" height="10" rx="2" fill="#375DFB"/>
      <polyline points="74.5,107 76.5,109.5 80,104.5" stroke="white" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="90" y="104" width="65" height="4" rx="1" fill="#1F2937"/>
      <text x="200" y="110" font-size="6" fill="#10B981" font-family="system-ui" font-weight="600">Allow</text>
    </g>
    <g>
      <rect x="72" y="122" width="10" height="10" rx="2" fill="none" stroke="#D1D5DB" stroke-width="1.2"/>
      <rect x="90" y="124" width="75" height="4" rx="1" fill="#1F2937" opacity="0.5"/>
      <text x="200" y="130" font-size="6" fill="#EF4444" font-family="system-ui" font-weight="600">Deny</text>
    </g>
    <g>
      <rect x="72" y="142" width="10" height="10" rx="2" fill="none" stroke="#D1D5DB" stroke-width="1.2"/>
      <rect x="90" y="144" width="55" height="4" rx="1" fill="#1F2937" opacity="0.5"/>
      <text x="200" y="150" font-size="6" fill="#EF4444" font-family="system-ui" font-weight="600">Deny</text>
    </g>
    <rect x="80" y="162" width="60" height="14" rx="4" fill="#375DFB"/>
    <text x="110" y="172" font-size="6.5" fill="white" text-anchor="middle" font-family="system-ui" font-weight="600">Apply</text>
    <rect x="148" y="162" width="60" height="14" rx="4" fill="white" stroke="#D1D5DB" stroke-width="1"/>
    <text x="178" y="172" font-size="6.5" fill="#374151" text-anchor="middle" font-family="system-ui">Customize</text>
  </svg>`,

  // 11. Brand Customization — color palette + logo placeholder
  cdb11: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes cdbColorShift { 0%,100% { transform: scale(1); } 50% { transform: scale(1.1); } }
      .cdb-swatch-active { animation: cdbColorShift 2s ease-in-out infinite; }
    </style>
    <rect x="30" y="20" width="100" height="90" rx="10" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <rect x="45" y="35" width="70" height="50" rx="6" fill="#F3F4F6" stroke="#D1D5DB" stroke-width="1" stroke-dasharray="4 2"/>
    <text x="80" y="57" font-size="8" fill="#9CA3AF" text-anchor="middle" font-family="system-ui">Your Logo</text>
    <text x="80" y="70" font-size="16" text-anchor="middle">🖼️</text>
    <rect x="48" y="92" width="54" height="10" rx="3" fill="#375DFB"/>
    <text x="75" y="100" font-size="6" fill="white" text-anchor="middle" font-family="system-ui" font-weight="600">Upload</text>
    <rect x="150" y="20" width="100" height="90" rx="10" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <text x="164" y="38" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">Brand Colors</text>
    <g class="cdb-swatch-active">
      <circle cx="172" cy="56" r="10" fill="#375DFB" stroke="white" stroke-width="2"/>
    </g>
    <circle cx="196" cy="56" r="10" fill="#10B981" stroke="white" stroke-width="2"/>
    <circle cx="220" cy="56" r="10" fill="#F59E0B" stroke="white" stroke-width="2"/>
    <circle cx="172" cy="80" r="10" fill="#EF4444" stroke="white" stroke-width="2"/>
    <circle cx="196" cy="80" r="10" fill="#8B5CF6" stroke="white" stroke-width="2"/>
    <circle cx="220" cy="80" r="10" fill="#1F2937" stroke="white" stroke-width="2"/>
    <rect x="30" y="124" width="220" height="56" rx="10" fill="white" stroke="#DBEAFE" stroke-width="1"/>
    <text x="46" y="142" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">Typography</text>
    <text x="46" y="158" font-size="12" fill="#1F2937" font-family="system-ui" font-weight="700">Heading Style</text>
    <text x="46" y="172" font-size="8" fill="#374151" font-family="system-ui">Body text preview — Aa Bb Cc 123</text>
    <rect x="198" y="134" width="42" height="14" rx="4" fill="#DBEAFE"/>
    <text x="219" y="144" font-size="6" fill="#375DFB" text-anchor="middle" font-family="system-ui" font-weight="600">Change</text>
  </svg>`,

  // 12. Custom Terminology — text labels being renamed/swapped
  cdb12: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes cdbSwapArrow { 0%,100% { transform: translateX(0); } 50% { transform: translateX(4px); } }
      .cdb-swap-arrow { animation: cdbSwapArrow 1.5s ease-in-out infinite; }
    </style>
    <rect x="30" y="20" width="220" height="160" rx="8" fill="white" stroke="#DBEAFE" stroke-width="1"/>
    <rect x="38" y="28" width="90" height="5" rx="2" fill="#1F2937"/>
    <rect x="38" y="37" width="55" height="3" rx="1" fill="#374151" opacity="0.4"/>
    <rect x="38" y="52" width="84" height="24" rx="6" fill="#F3F4F6" stroke="#D1D5DB" stroke-width="1"/>
    <text x="80" y="67" font-size="8" fill="#374151" text-anchor="middle" font-family="system-ui">"Attendees"</text>
    <g class="cdb-swap-arrow">
      <path d="M130,60 L146,60" stroke="#375DFB" stroke-width="2" stroke-linecap="round"/>
      <path d="M142,56 L148,60 L142,64" stroke="#375DFB" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M148,68 L132,68" stroke="#375DFB" stroke-width="2" stroke-linecap="round"/>
      <path d="M136,64 L130,68 L136,72" stroke="#375DFB" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <rect x="158" y="52" width="84" height="24" rx="6" fill="#DBEAFE" stroke="#375DFB" stroke-width="1"/>
    <text x="200" y="67" font-size="8" fill="#375DFB" text-anchor="middle" font-family="system-ui" font-weight="600">"Participants"</text>
    <line x1="38" y1="90" x2="242" y2="90" stroke="#E5E7EB" stroke-width="0.5"/>
    <rect x="38" y="100" width="84" height="24" rx="6" fill="#F3F4F6" stroke="#D1D5DB" stroke-width="1"/>
    <text x="80" y="115" font-size="8" fill="#374151" text-anchor="middle" font-family="system-ui">"Sessions"</text>
    <g class="cdb-swap-arrow">
      <path d="M130,108 L146,108" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
      <path d="M142,104 L148,108 L142,112" stroke="#10B981" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M148,116 L132,116" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
      <path d="M136,112 L130,116 L136,120" stroke="#10B981" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <rect x="158" y="100" width="84" height="24" rx="6" fill="#D1FAE5" stroke="#10B981" stroke-width="1"/>
    <text x="200" y="115" font-size="8" fill="#10B981" text-anchor="middle" font-family="system-ui" font-weight="600">"Workshops"</text>
    <line x1="38" y1="138" x2="242" y2="138" stroke="#E5E7EB" stroke-width="0.5"/>
    <rect x="38" y="148" width="84" height="24" rx="6" fill="#F3F4F6" stroke="#D1D5DB" stroke-width="1"/>
    <text x="80" y="163" font-size="8" fill="#374151" text-anchor="middle" font-family="system-ui">"Tickets"</text>
    <g class="cdb-swap-arrow">
      <path d="M130,156 L146,156" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round"/>
      <path d="M142,152 L148,156 L142,160" stroke="#8B5CF6" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M148,164 L132,164" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round"/>
      <path d="M136,160 L130,164 L136,168" stroke="#8B5CF6" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <rect x="158" y="148" width="84" height="24" rx="6" fill="#EDE9FE" stroke="#8B5CF6" stroke-width="1"/>
    <text x="200" y="163" font-size="8" fill="#8B5CF6" text-anchor="middle" font-family="system-ui" font-weight="600">"Passes"</text>
  </svg>`,

  // 13. Billing & Subscription — plan card with pricing
  cdb13: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes cdbPlanGlow { 0%,100% { box-shadow: 0 0 0 transparent; opacity: 1; } 50% { opacity: 0.95; } }
      .cdb-plan-active { animation: cdbPlanGlow 3s ease-in-out infinite; }
    </style>
    <rect x="22" y="22" width="110" height="156" rx="10" fill="white" stroke="#D1D5DB" stroke-width="1"/>
    <rect x="30" y="32" width="40" height="14" rx="7" fill="#F3F4F6"/>
    <text x="50" y="42" font-size="7" fill="#374151" text-anchor="middle" font-family="system-ui" font-weight="600">Starter</text>
    <text x="77" y="68" font-size="20" fill="#1F2937" text-anchor="middle" font-family="system-ui" font-weight="700">$29</text>
    <text x="77" y="80" font-size="7" fill="#374151" text-anchor="middle" font-family="system-ui" opacity="0.6">/month</text>
    <line x1="34" y1="90" x2="120" y2="90" stroke="#E5E7EB" stroke-width="0.5"/>
    <circle cx="40" cy="104" r="3" fill="#D1D5DB"/>
    <rect x="48" y="101" width="60" height="4" rx="1" fill="#374151" opacity="0.4"/>
    <circle cx="40" cy="118" r="3" fill="#D1D5DB"/>
    <rect x="48" y="115" width="50" height="4" rx="1" fill="#374151" opacity="0.4"/>
    <circle cx="40" cy="132" r="3" fill="#D1D5DB"/>
    <rect x="48" y="129" width="55" height="4" rx="1" fill="#374151" opacity="0.4"/>
    <rect x="36" y="150" width="82" height="16" rx="6" fill="white" stroke="#D1D5DB" stroke-width="1"/>
    <text x="77" y="161" font-size="7" fill="#374151" text-anchor="middle" font-family="system-ui">Select</text>
    <g class="cdb-plan-active">
      <rect x="148" y="16" width="116" height="168" rx="10" fill="white" stroke="#375DFB" stroke-width="2"/>
      <rect x="172" y="8" width="46" height="16" rx="8" fill="#375DFB"/>
      <text x="195" y="19" font-size="6.5" fill="white" text-anchor="middle" font-family="system-ui" font-weight="600">Popular</text>
      <rect x="158" y="34" width="34" height="14" rx="7" fill="#DBEAFE"/>
      <text x="175" y="44" font-size="7" fill="#375DFB" text-anchor="middle" font-family="system-ui" font-weight="600">Pro</text>
      <text x="206" y="70" font-size="20" fill="#375DFB" text-anchor="middle" font-family="system-ui" font-weight="700">$79</text>
      <text x="206" y="82" font-size="7" fill="#374151" text-anchor="middle" font-family="system-ui" opacity="0.6">/month</text>
      <line x1="162" y1="92" x2="250" y2="92" stroke="#DBEAFE" stroke-width="0.5"/>
      <circle cx="168" cy="106" r="3" fill="#375DFB"/>
      <rect x="176" y="103" width="65" height="4" rx="1" fill="#1F2937"/>
      <circle cx="168" cy="120" r="3" fill="#375DFB"/>
      <rect x="176" y="117" width="55" height="4" rx="1" fill="#1F2937"/>
      <circle cx="168" cy="134" r="3" fill="#375DFB"/>
      <rect x="176" y="131" width="60" height="4" rx="1" fill="#1F2937"/>
      <circle cx="168" cy="148" r="3" fill="#375DFB"/>
      <rect x="176" y="145" width="48" height="4" rx="1" fill="#1F2937"/>
      <rect x="162" y="158" width="88" height="18" rx="6" fill="#375DFB"/>
      <text x="206" y="170" font-size="7.5" fill="white" text-anchor="middle" font-family="system-ui" font-weight="600">Current Plan</text>
    </g>
  </svg>`,

  // 14. Usage Tracking — usage meter/progress bars
  cdb14: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes cdbBarFill1 { 0% { width: 0; } 100% { width: 130px; } }
      @keyframes cdbBarFill2 { 0% { width: 0; } 100% { width: 90px; } }
      @keyframes cdbBarFill3 { 0% { width: 0; } 100% { width: 155px; } }
      @keyframes cdbBarFill4 { 0% { width: 0; } 100% { width: 60px; } }
      .cdb-fill-1 { animation: cdbBarFill1 1s ease-out 0.2s both; }
      .cdb-fill-2 { animation: cdbBarFill2 1s ease-out 0.4s both; }
      .cdb-fill-3 { animation: cdbBarFill3 1s ease-out 0.6s both; }
      .cdb-fill-4 { animation: cdbBarFill4 1s ease-out 0.8s both; }
    </style>
    <rect x="30" y="16" width="220" height="168" rx="8" fill="white" stroke="#DBEAFE" stroke-width="1"/>
    <rect x="42" y="26" width="60" height="5" rx="2" fill="#1F2937"/>
    <rect x="42" y="35" width="80" height="3" rx="1" fill="#374151" opacity="0.4"/>
    <text x="42" y="60" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">Events Created</text>
    <text x="230" y="60" font-size="7" fill="#374151" text-anchor="end" font-family="system-ui" opacity="0.6">65 / 100</text>
    <rect x="42" y="66" width="188" height="8" rx="4" fill="#F3F4F6"/>
    <rect class="cdb-fill-1" x="42" y="66" width="130" height="8" rx="4" fill="#375DFB"/>
    <text x="42" y="96" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">Registrations</text>
    <text x="230" y="96" font-size="7" fill="#374151" text-anchor="end" font-family="system-ui" opacity="0.6">4.5K / 10K</text>
    <rect x="42" y="102" width="188" height="8" rx="4" fill="#F3F4F6"/>
    <rect class="cdb-fill-2" x="42" y="102" width="90" height="8" rx="4" fill="#10B981"/>
    <text x="42" y="132" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">Storage Used</text>
    <text x="230" y="132" font-size="7" fill="#EF4444" text-anchor="end" font-family="system-ui" font-weight="600">8.2 / 10 GB</text>
    <rect x="42" y="138" width="188" height="8" rx="4" fill="#F3F4F6"/>
    <rect class="cdb-fill-3" x="42" y="138" width="155" height="8" rx="4" fill="#EF4444"/>
    <text x="42" y="168" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">API Calls</text>
    <text x="230" y="168" font-size="7" fill="#374151" text-anchor="end" font-family="system-ui" opacity="0.6">12K / 50K</text>
    <rect x="42" y="174" width="188" height="8" rx="4" fill="#F3F4F6"/>
    <rect class="cdb-fill-4" x="42" y="174" width="60" height="8" rx="4" fill="#F59E0B"/>
  </svg>`,

  // 15. Domain Management — domain URL bar with custom domain
  cdb15: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes cdbCursorBlink { 0%,50% { opacity: 1; } 51%,100% { opacity: 0; } }
      @keyframes cdbCheckAppear { 0% { transform: scale(0); } 100% { transform: scale(1); } }
      .cdb-cursor { animation: cdbCursorBlink 1s step-end infinite; }
      .cdb-domain-check { animation: cdbCheckAppear 0.4s ease-out 1s both; transform-origin: 228px 67px; }
    </style>
    <rect x="30" y="20" width="220" height="160" rx="8" fill="white" stroke="#DBEAFE" stroke-width="1"/>
    <rect x="42" y="30" width="80" height="5" rx="2" fill="#1F2937"/>
    <rect x="42" y="39" width="55" height="3" rx="1" fill="#374151" opacity="0.4"/>
    <rect x="42" y="54" width="196" height="28" rx="8" fill="#F3F4F6" stroke="#D1D5DB" stroke-width="1"/>
    <circle cx="56" cy="68" r="5" fill="#10B981" opacity="0.2"/>
    <path d="M53,68 L59,68 M56,65 L56,71" stroke="#10B981" stroke-width="1" opacity="0.5"/>
    <text x="66" y="71" font-size="8" fill="#374151" font-family="monospace">events.yourcompany.com</text>
    <rect class="cdb-cursor" x="194" y="62" width="1.5" height="12" rx="0.5" fill="#375DFB"/>
    <g class="cdb-domain-check">
      <circle cx="228" cy="67" r="7" fill="#D1FAE5"/>
      <polyline points="224,67 227,70 232,64" stroke="#10B981" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <line x1="42" y1="96" x2="238" y2="96" stroke="#E5E7EB" stroke-width="0.5"/>
    <text x="42" y="114" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">DNS Configuration</text>
    <rect x="42" y="122" width="196" height="20" rx="4" fill="#1F2937"/>
    <text x="50" y="135" font-size="6.5" fill="#10B981" font-family="monospace">CNAME  events  →  cname.eventhex.ai</text>
    <rect x="42" y="146" width="196" height="20" rx="4" fill="#1F2937"/>
    <text x="50" y="159" font-size="6.5" fill="#F59E0B" font-family="monospace">TXT    _verify  →  ehx-verify=abc123</text>
    <rect x="190" y="100" width="48" height="14" rx="4" fill="#D1FAE5"/>
    <text x="214" y="110" font-size="6.5" fill="#10B981" text-anchor="middle" font-family="system-ui" font-weight="600">Verified</text>
  </svg>`,

};
