export const afbIllustrations: Record<string, string> = {
  // 1. Speak to Create Forms — microphone with sound waves + form appearing
  afb1: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes afbWave1 { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1)} }
      @keyframes afbWave2 { 0%,100%{opacity:0.2;transform:scale(0.7)} 50%{opacity:0.8;transform:scale(1.1)} }
      @keyframes afbFormSlide { 0%{opacity:0;transform:translateX(10px)} 100%{opacity:1;transform:translateX(0)} }
    </style>
    <!-- Microphone -->
    <rect x="60" y="50" width="36" height="56" rx="18" fill="#375DFB" opacity="0.15"/>
    <rect x="66" y="56" width="24" height="44" rx="12" fill="#375DFB"/>
    <path d="M54 88 Q54 116 78 116 Q102 116 102 88" stroke="#375DFB" stroke-width="2.5" fill="none"/>
    <line x1="78" y1="116" x2="78" y2="132" stroke="#375DFB" stroke-width="2.5"/>
    <line x1="64" y1="132" x2="92" y2="132" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Sound waves -->
    <path d="M108 72 Q118 78 108 92" stroke="#375DFB" stroke-width="2" fill="none" opacity="0.6" style="animation:afbWave1 1.5s ease-in-out infinite"/>
    <path d="M116 62 Q132 78 116 102" stroke="#375DFB" stroke-width="2" fill="none" opacity="0.4" style="animation:afbWave2 1.5s ease-in-out infinite 0.3s"/>
    <path d="M124 54 Q144 78 124 110" stroke="#375DFB" stroke-width="2" fill="none" opacity="0.25" style="animation:afbWave1 1.5s ease-in-out infinite 0.6s"/>
    <!-- Arrow -->
    <path d="M140 82 L158 82" stroke="#374151" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#afb1arrow)"/>
    <defs><marker id="afb1arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill="#374151"/></marker></defs>
    <!-- Form appearing -->
    <g style="animation:afbFormSlide 1.2s ease-out forwards">
      <rect x="164" y="42" width="76" height="108" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
      <rect x="172" y="52" width="40" height="5" rx="2" fill="#375DFB" opacity="0.7"/>
      <rect x="172" y="64" width="60" height="10" rx="3" fill="#DBEAFE"/>
      <rect x="172" y="82" width="60" height="10" rx="3" fill="#DBEAFE"/>
      <rect x="172" y="100" width="60" height="10" rx="3" fill="#DBEAFE"/>
      <rect x="172" y="120" width="36" height="14" rx="4" fill="#375DFB"/>
      <text x="190" y="131" font-size="7" fill="white" font-family="system-ui" text-anchor="middle">Submit</text>
    </g>
  </svg>`,

  // 2. AI Field Detection — sparkle/AI icon detecting field types
  afb2: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes afbSpark { 0%,100%{opacity:0.4;transform:scale(0.8)} 50%{opacity:1;transform:scale(1.2)} }
      @keyframes afbDetect { 0%{stroke-dashoffset:40} 100%{stroke-dashoffset:0} }
    </style>
    <!-- AI Brain/Sparkle -->
    <circle cx="80" cy="100" r="32" fill="#375DFB" opacity="0.1"/>
    <circle cx="80" cy="100" r="22" fill="#375DFB" opacity="0.2"/>
    <!-- Sparkle star -->
    <path d="M80 78 L83 92 L96 96 L83 100 L80 114 L77 100 L64 96 L77 92Z" fill="#375DFB" style="animation:afbSpark 2s ease-in-out infinite"/>
    <!-- Scanning lines -->
    <g style="animation:afbDetect 2s linear infinite">
      <line x1="120" y1="60" x2="200" y2="60" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.5"/>
      <line x1="120" y1="85" x2="200" y2="85" stroke="#10B981" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.5"/>
      <line x1="120" y1="110" x2="200" y2="110" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.5"/>
      <line x1="120" y1="135" x2="200" y2="135" stroke="#8B5CF6" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.5"/>
    </g>
    <!-- Detected field badges -->
    <rect x="206" y="52" width="48" height="16" rx="4" fill="#DBEAFE"/>
    <text x="230" y="63" font-size="7" fill="#375DFB" font-family="system-ui" text-anchor="middle">Name</text>
    <rect x="206" y="77" width="48" height="16" rx="4" fill="#D1FAE5"/>
    <text x="230" y="88" font-size="7" fill="#10B981" font-family="system-ui" text-anchor="middle">Email</text>
    <rect x="206" y="102" width="48" height="16" rx="4" fill="#FEF3C7"/>
    <text x="230" y="113" font-size="7" fill="#F59E0B" font-family="system-ui" text-anchor="middle">Phone</text>
    <rect x="206" y="127" width="48" height="16" rx="4" fill="#EDE9FE"/>
    <text x="230" y="138" font-size="7" fill="#8B5CF6" font-family="system-ui" text-anchor="middle">Date</text>
  </svg>`,

  // 3. Natural Language Processing — speech bubble becoming form fields
  afb3: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes afbBubble { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
      @keyframes afbFieldFade { 0%{opacity:0;transform:translateY(8px)} 100%{opacity:1;transform:translateY(0)} }
    </style>
    <!-- Speech bubble -->
    <g style="animation:afbBubble 3s ease-in-out infinite">
      <rect x="30" y="40" width="100" height="70" rx="10" fill="#375DFB" opacity="0.12"/>
      <rect x="36" y="46" width="88" height="58" rx="8" fill="white" stroke="#375DFB" stroke-width="1.5"/>
      <polygon points="60,104 70,118 80,104" fill="white" stroke="#375DFB" stroke-width="1.5"/>
      <rect x="44" y="56" width="72" height="4" rx="2" fill="#374151" opacity="0.4"/>
      <rect x="44" y="66" width="56" height="4" rx="2" fill="#374151" opacity="0.3"/>
      <rect x="44" y="76" width="64" height="4" rx="2" fill="#374151" opacity="0.25"/>
      <rect x="44" y="86" width="40" height="4" rx="2" fill="#374151" opacity="0.2"/>
    </g>
    <!-- Transform arrow -->
    <path d="M138 82 L156 82" stroke="#375DFB" stroke-width="2" marker-end="url(#afb3arrow)"/>
    <defs><marker id="afb3arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7Z" fill="#375DFB"/></marker></defs>
    <!-- Sparkle on arrow -->
    <circle cx="147" cy="76" r="3" fill="#F59E0B" opacity="0.7"/>
    <circle cx="151" cy="88" r="2" fill="#F59E0B" opacity="0.5"/>
    <!-- Form fields -->
    <g style="animation:afbFieldFade 1s ease-out forwards">
      <rect x="164" y="42" width="86" height="116" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
      <text x="172" y="58" font-size="6" fill="#374151" font-family="system-ui" opacity="0.6">Full Name</text>
      <rect x="172" y="62" width="70" height="12" rx="3" fill="#DBEAFE" opacity="0.5"/>
      <text x="172" y="88" font-size="6" fill="#374151" font-family="system-ui" opacity="0.6">Email Address</text>
      <rect x="172" y="92" width="70" height="12" rx="3" fill="#DBEAFE" opacity="0.5"/>
      <text x="172" y="118" font-size="6" fill="#374151" font-family="system-ui" opacity="0.6">Company</text>
      <rect x="172" y="122" width="70" height="12" rx="3" fill="#DBEAFE" opacity="0.5"/>
      <rect x="172" y="142" width="40" height="12" rx="4" fill="#375DFB"/>
      <text x="192" y="151" font-size="6" fill="white" font-family="system-ui" text-anchor="middle">Submit</text>
    </g>
  </svg>`,

  // 4. Template Suggestions — AI suggesting matching templates
  afb4: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes afbGlow { 0%,100%{opacity:0.5} 50%{opacity:1} }
      @keyframes afbSlideUp { 0%{opacity:0;transform:translateY(6px)} 100%{opacity:1;transform:translateY(0)} }
    </style>
    <!-- AI icon -->
    <circle cx="56" cy="100" r="26" fill="#375DFB" opacity="0.12"/>
    <path d="M56 82 L59 94 L70 98 L59 102 L56 114 L53 102 L42 98 L53 94Z" fill="#375DFB" style="animation:afbGlow 2s ease-in-out infinite"/>
    <!-- Suggestion lines -->
    <line x1="88" y1="74" x2="108" y2="58" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.4"/>
    <line x1="88" y1="100" x2="108" y2="100" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.4"/>
    <line x1="88" y1="126" x2="108" y2="142" stroke="#375DFB" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.4"/>
    <!-- Template cards -->
    <g style="animation:afbSlideUp 0.6s ease-out forwards">
      <rect x="112" y="36" width="70" height="44" rx="5" fill="white" stroke="#10B981" stroke-width="1.5"/>
      <rect x="120" y="44" width="30" height="3" rx="1.5" fill="#10B981" opacity="0.7"/>
      <rect x="120" y="52" width="54" height="6" rx="2" fill="#D1FAE5"/>
      <rect x="120" y="62" width="54" height="6" rx="2" fill="#D1FAE5"/>
      <text x="168" y="44" font-size="7" fill="#10B981" font-family="system-ui">96%</text>
    </g>
    <g style="animation:afbSlideUp 0.6s ease-out 0.2s forwards" opacity="0.9">
      <rect x="112" y="88" width="70" height="44" rx="5" fill="white" stroke="#375DFB" stroke-width="1.5"/>
      <rect x="120" y="96" width="30" height="3" rx="1.5" fill="#375DFB" opacity="0.7"/>
      <rect x="120" y="104" width="54" height="6" rx="2" fill="#DBEAFE"/>
      <rect x="120" y="114" width="54" height="6" rx="2" fill="#DBEAFE"/>
      <text x="168" y="96" font-size="7" fill="#375DFB" font-family="system-ui">82%</text>
    </g>
    <g style="animation:afbSlideUp 0.6s ease-out 0.4s forwards" opacity="0.7">
      <rect x="112" y="140" width="70" height="44" rx="5" fill="white" stroke="#F59E0B" stroke-width="1.5"/>
      <rect x="120" y="148" width="30" height="3" rx="1.5" fill="#F59E0B" opacity="0.7"/>
      <rect x="120" y="156" width="54" height="6" rx="2" fill="#FEF3C7"/>
      <rect x="120" y="166" width="54" height="6" rx="2" fill="#FEF3C7"/>
      <text x="168" y="148" font-size="7" fill="#F59E0B" font-family="system-ui">68%</text>
    </g>
    <!-- Highlight best match -->
    <rect x="196" y="38" width="52" height="20" rx="6" fill="#D1FAE5"/>
    <text x="222" y="52" font-size="7" fill="#10B981" font-family="system-ui" text-anchor="middle">Best Match</text>
  </svg>`,

  // 5. Multi-Language Voice — globe with multiple language flags
  afb5: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes afbSpin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
      @keyframes afbPop { 0%,100%{transform:scale(1)} 50%{transform:scale(1.1)} }
    </style>
    <!-- Globe -->
    <circle cx="140" cy="100" r="44" fill="#375DFB" opacity="0.08"/>
    <circle cx="140" cy="100" r="36" fill="none" stroke="#375DFB" stroke-width="1.5"/>
    <ellipse cx="140" cy="100" rx="20" ry="36" fill="none" stroke="#375DFB" stroke-width="1" opacity="0.5"/>
    <line x1="104" y1="100" x2="176" y2="100" stroke="#375DFB" stroke-width="1" opacity="0.4"/>
    <line x1="140" y1="64" x2="140" y2="136" stroke="#375DFB" stroke-width="1" opacity="0.4"/>
    <ellipse cx="140" cy="82" rx="32" ry="6" fill="none" stroke="#375DFB" stroke-width="0.8" opacity="0.3"/>
    <ellipse cx="140" cy="118" rx="32" ry="6" fill="none" stroke="#375DFB" stroke-width="0.8" opacity="0.3"/>
    <!-- Language badges orbiting -->
    <g style="animation:afbPop 3s ease-in-out infinite">
      <rect x="58" y="54" width="32" height="18" rx="4" fill="white" stroke="#EF4444" stroke-width="1.2"/>
      <text x="74" y="66" font-size="7" fill="#EF4444" font-family="system-ui" text-anchor="middle">EN</text>
    </g>
    <g style="animation:afbPop 3s ease-in-out infinite 0.5s">
      <rect x="190" y="48" width="32" height="18" rx="4" fill="white" stroke="#375DFB" stroke-width="1.2"/>
      <text x="206" y="60" font-size="7" fill="#375DFB" font-family="system-ui" text-anchor="middle">FR</text>
    </g>
    <g style="animation:afbPop 3s ease-in-out infinite 1s">
      <rect x="196" y="120" width="32" height="18" rx="4" fill="white" stroke="#F59E0B" stroke-width="1.2"/>
      <text x="212" y="132" font-size="7" fill="#F59E0B" font-family="system-ui" text-anchor="middle">ES</text>
    </g>
    <g style="animation:afbPop 3s ease-in-out infinite 1.5s">
      <rect x="52" y="118" width="32" height="18" rx="4" fill="white" stroke="#10B981" stroke-width="1.2"/>
      <text x="68" y="130" font-size="7" fill="#10B981" font-family="system-ui" text-anchor="middle">AR</text>
    </g>
    <g style="animation:afbPop 3s ease-in-out infinite 2s">
      <rect x="122" y="148" width="36" height="18" rx="4" fill="white" stroke="#8B5CF6" stroke-width="1.2"/>
      <text x="140" y="160" font-size="7" fill="#8B5CF6" font-family="system-ui" text-anchor="middle">DE</text>
    </g>
    <!-- Mic icon on globe -->
    <rect x="133" y="90" width="14" height="20" rx="7" fill="#375DFB" opacity="0.6"/>
  </svg>`,

  // 6. Drag-and-Drop Editor — canvas with drag handles on fields
  afb6: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes afbDrag { 0%{transform:translate(0,0)} 30%{transform:translate(4px,-8px)} 60%{transform:translate(0,-20px)} 100%{transform:translate(0,0)} }
      @keyframes afbCursor { 0%,100%{transform:translate(0,0)} 40%{transform:translate(4px,-12px)} }
    </style>
    <!-- Canvas -->
    <rect x="50" y="30" width="180" height="140" rx="8" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <rect x="50" y="30" width="180" height="22" rx="8" fill="#DBEAFE" opacity="0.5"/>
    <text x="140" y="45" font-size="7" fill="#375DFB" font-family="system-ui" text-anchor="middle" font-weight="600">Form Builder</text>
    <!-- Field 1 -->
    <g>
      <rect x="66" y="62" width="148" height="22" rx="4" fill="white" stroke="#374151" stroke-width="1" opacity="0.3"/>
      <circle cx="74" cy="73" r="2" fill="#374151" opacity="0.4"/>
      <circle cx="74" cy="69" r="2" fill="#374151" opacity="0.4"/>
      <circle cx="74" cy="77" r="2" fill="#374151" opacity="0.4"/>
      <text x="84" y="76" font-size="7" fill="#374151" font-family="system-ui" opacity="0.5">Full Name</text>
    </g>
    <!-- Field 2 being dragged -->
    <g style="animation:afbDrag 3s ease-in-out infinite">
      <rect x="66" y="92" width="148" height="22" rx="4" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
      <circle cx="74" cy="103" r="2" fill="#375DFB"/>
      <circle cx="74" cy="99" r="2" fill="#375DFB"/>
      <circle cx="74" cy="107" r="2" fill="#375DFB"/>
      <text x="84" y="106" font-size="7" fill="#375DFB" font-family="system-ui">Email Address</text>
    </g>
    <!-- Field 3 -->
    <g>
      <rect x="66" y="122" width="148" height="22" rx="4" fill="white" stroke="#374151" stroke-width="1" opacity="0.3"/>
      <circle cx="74" cy="133" r="2" fill="#374151" opacity="0.4"/>
      <circle cx="74" cy="129" r="2" fill="#374151" opacity="0.4"/>
      <circle cx="74" cy="137" r="2" fill="#374151" opacity="0.4"/>
      <text x="84" y="136" font-size="7" fill="#374151" font-family="system-ui" opacity="0.5">Phone Number</text>
    </g>
    <!-- Cursor -->
    <g style="animation:afbCursor 3s ease-in-out infinite">
      <path d="M220 98 L220 114 L226 110 L232 118 L235 116 L229 108 L236 106Z" fill="#1F2937"/>
    </g>
  </svg>`,

  // 7. Conditional Logic — if/then diamond branch diagram
  afb7: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes afbFlow { 0%{stroke-dashoffset:20} 100%{stroke-dashoffset:0} }
      @keyframes afbPulse { 0%,100%{opacity:0.7} 50%{opacity:1} }
    </style>
    <!-- Start node -->
    <rect x="108" y="20" width="64" height="24" rx="12" fill="#375DFB"/>
    <text x="140" y="36" font-size="7" fill="white" font-family="system-ui" text-anchor="middle">Form Start</text>
    <!-- Line to diamond -->
    <line x1="140" y1="44" x2="140" y2="64" stroke="#374151" stroke-width="1.5" style="animation:afbFlow 2s linear infinite"/>
    <!-- Diamond -->
    <g style="animation:afbPulse 2s ease-in-out infinite">
      <polygon points="140,64 172,88 140,112 108,88" fill="#F59E0B" opacity="0.15" stroke="#F59E0B" stroke-width="1.5"/>
      <text x="140" y="90" font-size="6.5" fill="#F59E0B" font-family="system-ui" text-anchor="middle" font-weight="600">Role?</text>
    </g>
    <!-- Yes branch (left) -->
    <line x1="108" y1="88" x2="60" y2="88" stroke="#10B981" stroke-width="1.5"/>
    <line x1="60" y1="88" x2="60" y2="132" stroke="#10B981" stroke-width="1.5"/>
    <text x="84" y="82" font-size="6" fill="#10B981" font-family="system-ui" text-anchor="middle">Speaker</text>
    <rect x="28" y="132" width="64" height="28" rx="5" fill="#D1FAE5" stroke="#10B981" stroke-width="1"/>
    <text x="60" y="146" font-size="6" fill="#10B981" font-family="system-ui" text-anchor="middle">Bio fields</text>
    <text x="60" y="155" font-size="5.5" fill="#10B981" font-family="system-ui" text-anchor="middle">+ Upload</text>
    <!-- No branch (right) -->
    <line x1="172" y1="88" x2="220" y2="88" stroke="#375DFB" stroke-width="1.5"/>
    <line x1="220" y1="88" x2="220" y2="132" stroke="#375DFB" stroke-width="1.5"/>
    <text x="196" y="82" font-size="6" fill="#375DFB" font-family="system-ui" text-anchor="middle">Attendee</text>
    <rect x="188" y="132" width="64" height="28" rx="5" fill="#DBEAFE" stroke="#375DFB" stroke-width="1"/>
    <text x="220" y="146" font-size="6" fill="#375DFB" font-family="system-ui" text-anchor="middle">Ticket type</text>
    <text x="220" y="155" font-size="5.5" fill="#375DFB" font-family="system-ui" text-anchor="middle">+ Prefs</text>
    <!-- Down branch -->
    <line x1="140" y1="112" x2="140" y2="140" stroke="#8B5CF6" stroke-width="1.5"/>
    <text x="148" y="128" font-size="6" fill="#8B5CF6" font-family="system-ui">Other</text>
    <rect x="108" y="140" width="64" height="28" rx="5" fill="#EDE9FE" stroke="#8B5CF6" stroke-width="1"/>
    <text x="140" y="158" font-size="6" fill="#8B5CF6" font-family="system-ui" text-anchor="middle">Basic info</text>
  </svg>`,

  // 8. Custom Field Types — varied field type icons (text, dropdown, date, file)
  afb8: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes afbHover { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
    </style>
    <!-- Row 1 -->
    <!-- Text field -->
    <g style="animation:afbHover 3s ease-in-out infinite">
      <rect x="28" y="32" width="100" height="52" rx="8" fill="white" stroke="#375DFB" stroke-width="1.5"/>
      <text x="42" y="52" font-size="14" fill="#375DFB" font-family="system-ui" font-weight="700">T</text>
      <text x="58" y="52" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">Text Input</text>
      <rect x="40" y="60" width="76" height="10" rx="3" fill="#DBEAFE" opacity="0.5"/>
      <text x="48" y="68" font-size="6" fill="#374151" font-family="system-ui" opacity="0.4">Enter text...</text>
    </g>
    <!-- Dropdown -->
    <g style="animation:afbHover 3s ease-in-out infinite 0.4s">
      <rect x="152" y="32" width="100" height="52" rx="8" fill="white" stroke="#10B981" stroke-width="1.5"/>
      <rect x="164" y="46" width="14" height="10" rx="2" fill="#D1FAE5"/>
      <path d="M167 49 L171 54 L175 49" stroke="#10B981" stroke-width="1.5" fill="none"/>
      <text x="184" y="54" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">Dropdown</text>
      <rect x="164" y="62" width="76" height="10" rx="3" fill="#D1FAE5" opacity="0.5"/>
      <text x="172" y="70" font-size="6" fill="#374151" font-family="system-ui" opacity="0.4">Select option</text>
    </g>
    <!-- Row 2 -->
    <!-- Date picker -->
    <g style="animation:afbHover 3s ease-in-out infinite 0.8s">
      <rect x="28" y="100" width="100" height="52" rx="8" fill="white" stroke="#F59E0B" stroke-width="1.5"/>
      <rect x="40" y="112" width="14" height="14" rx="2" fill="#FEF3C7"/>
      <text x="47" y="123" font-size="8" fill="#F59E0B" font-family="system-ui" text-anchor="middle" font-weight="700">31</text>
      <text x="60" y="122" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">Date Picker</text>
      <rect x="40" y="132" width="76" height="10" rx="3" fill="#FEF3C7" opacity="0.5"/>
      <text x="48" y="140" font-size="6" fill="#374151" font-family="system-ui" opacity="0.4">DD / MM / YYYY</text>
    </g>
    <!-- File upload -->
    <g style="animation:afbHover 3s ease-in-out infinite 1.2s">
      <rect x="152" y="100" width="100" height="52" rx="8" fill="white" stroke="#8B5CF6" stroke-width="1.5"/>
      <path d="M166 124 L173 116 L180 124" stroke="#8B5CF6" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <line x1="173" y1="116" x2="173" y2="128" stroke="#8B5CF6" stroke-width="1.5" stroke-linecap="round"/>
      <text x="186" y="122" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">File Upload</text>
      <rect x="164" y="132" width="76" height="10" rx="3" fill="#EDE9FE" opacity="0.5"/>
      <text x="172" y="140" font-size="6" fill="#374151" font-family="system-ui" opacity="0.4">Choose file...</text>
    </g>
    <!-- Center plus icon -->
    <circle cx="140" cy="170" r="10" fill="#375DFB" opacity="0.1"/>
    <line x1="135" y1="170" x2="145" y2="170" stroke="#375DFB" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="140" y1="165" x2="140" y2="175" stroke="#375DFB" stroke-width="1.5" stroke-linecap="round"/>
    <text x="156" y="174" font-size="6" fill="#375DFB" font-family="system-ui">Add Field</text>
  </svg>`,

  // 9. Form Templates — template gallery grid
  afb9: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes afbCardHover { 0%,100%{transform:scale(1)} 50%{transform:scale(1.03)} }
    </style>
    <!-- Header -->
    <text x="140" y="26" font-size="8" fill="#1F2937" font-family="system-ui" text-anchor="middle" font-weight="600">Template Gallery</text>
    <!-- Search bar -->
    <rect x="64" y="34" width="152" height="18" rx="9" fill="#DBEAFE" opacity="0.4"/>
    <circle cx="76" cy="43" r="4" fill="none" stroke="#375DFB" stroke-width="1"/>
    <line x1="79" y1="46" x2="82" y2="49" stroke="#375DFB" stroke-width="1"/>
    <text x="88" y="47" font-size="6" fill="#374151" font-family="system-ui" opacity="0.4">Search templates...</text>
    <!-- Grid of templates -->
    <!-- Card 1 -->
    <g style="animation:afbCardHover 4s ease-in-out infinite">
      <rect x="28" y="62" width="68" height="56" rx="5" fill="white" stroke="#375DFB" stroke-width="1.5"/>
      <rect x="36" y="70" width="52" height="4" rx="2" fill="#375DFB" opacity="0.3"/>
      <rect x="36" y="78" width="52" height="8" rx="2" fill="#DBEAFE" opacity="0.5"/>
      <rect x="36" y="90" width="52" height="8" rx="2" fill="#DBEAFE" opacity="0.5"/>
      <rect x="36" y="102" width="28" height="8" rx="3" fill="#375DFB"/>
      <text x="50" y="109" font-size="5.5" fill="white" font-family="system-ui" text-anchor="middle">Use</text>
    </g>
    <text x="62" y="130" font-size="5.5" fill="#374151" font-family="system-ui" text-anchor="middle">Registration</text>
    <!-- Card 2 -->
    <g style="animation:afbCardHover 4s ease-in-out infinite 0.5s">
      <rect x="106" y="62" width="68" height="56" rx="5" fill="white" stroke="#10B981" stroke-width="1.5"/>
      <rect x="114" y="70" width="52" height="4" rx="2" fill="#10B981" opacity="0.3"/>
      <rect x="114" y="78" width="52" height="8" rx="2" fill="#D1FAE5" opacity="0.5"/>
      <rect x="114" y="90" width="52" height="8" rx="2" fill="#D1FAE5" opacity="0.5"/>
      <rect x="114" y="102" width="28" height="8" rx="3" fill="#10B981"/>
      <text x="128" y="109" font-size="5.5" fill="white" font-family="system-ui" text-anchor="middle">Use</text>
    </g>
    <text x="140" y="130" font-size="5.5" fill="#374151" font-family="system-ui" text-anchor="middle">Feedback</text>
    <!-- Card 3 -->
    <g style="animation:afbCardHover 4s ease-in-out infinite 1s">
      <rect x="184" y="62" width="68" height="56" rx="5" fill="white" stroke="#F59E0B" stroke-width="1.5"/>
      <rect x="192" y="70" width="52" height="4" rx="2" fill="#F59E0B" opacity="0.3"/>
      <rect x="192" y="78" width="52" height="8" rx="2" fill="#FEF3C7" opacity="0.5"/>
      <rect x="192" y="90" width="52" height="8" rx="2" fill="#FEF3C7" opacity="0.5"/>
      <rect x="192" y="102" width="28" height="8" rx="3" fill="#F59E0B"/>
      <text x="206" y="109" font-size="5.5" fill="white" font-family="system-ui" text-anchor="middle">Use</text>
    </g>
    <text x="218" y="130" font-size="5.5" fill="#374151" font-family="system-ui" text-anchor="middle">CFP Submission</text>
    <!-- Row 2 -->
    <!-- Card 4 -->
    <rect x="28" y="140" width="68" height="56" rx="5" fill="white" stroke="#8B5CF6" stroke-width="1.5" opacity="0.6"/>
    <rect x="36" y="148" width="52" height="4" rx="2" fill="#8B5CF6" opacity="0.2"/>
    <rect x="36" y="156" width="52" height="8" rx="2" fill="#EDE9FE" opacity="0.4"/>
    <rect x="36" y="168" width="52" height="8" rx="2" fill="#EDE9FE" opacity="0.4"/>
    <!-- Card 5 -->
    <rect x="106" y="140" width="68" height="56" rx="5" fill="white" stroke="#EF4444" stroke-width="1.5" opacity="0.6"/>
    <rect x="114" y="148" width="52" height="4" rx="2" fill="#EF4444" opacity="0.2"/>
    <rect x="114" y="156" width="52" height="8" rx="2" fill="#FEE2E2" opacity="0.4"/>
    <rect x="114" y="168" width="52" height="8" rx="2" fill="#FEE2E2" opacity="0.4"/>
    <!-- Card 6 -->
    <rect x="184" y="140" width="68" height="56" rx="5" fill="white" stroke="#374151" stroke-width="1.5" opacity="0.6"/>
    <rect x="192" y="148" width="52" height="4" rx="2" fill="#374151" opacity="0.2"/>
    <rect x="192" y="156" width="52" height="8" rx="2" fill="#E5E7EB" opacity="0.4"/>
    <rect x="192" y="168" width="52" height="8" rx="2" fill="#E5E7EB" opacity="0.4"/>
  </svg>`,

  // 10. Pre-Fill from Registration — data flowing from one form to another
  afb10: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes afbDataFlow { 0%{transform:translateX(0);opacity:0} 50%{opacity:1} 100%{transform:translateX(48px);opacity:0} }
    </style>
    <!-- Source form (registration) -->
    <rect x="24" y="36" width="80" height="128" rx="6" fill="white" stroke="#375DFB" stroke-width="1.5"/>
    <rect x="24" y="36" width="80" height="20" rx="6" fill="#375DFB" opacity="0.1"/>
    <text x="64" y="50" font-size="6.5" fill="#375DFB" font-family="system-ui" text-anchor="middle" font-weight="600">Registration</text>
    <text x="32" y="68" font-size="5.5" fill="#374151" font-family="system-ui" opacity="0.5">Name</text>
    <rect x="32" y="72" width="64" height="10" rx="3" fill="#DBEAFE"/>
    <text x="40" y="80" font-size="5.5" fill="#375DFB" font-family="system-ui">John Doe</text>
    <text x="32" y="94" font-size="5.5" fill="#374151" font-family="system-ui" opacity="0.5">Email</text>
    <rect x="32" y="98" width="64" height="10" rx="3" fill="#DBEAFE"/>
    <text x="40" y="106" font-size="5" fill="#375DFB" font-family="system-ui">john@co.io</text>
    <text x="32" y="120" font-size="5.5" fill="#374151" font-family="system-ui" opacity="0.5">Company</text>
    <rect x="32" y="124" width="64" height="10" rx="3" fill="#DBEAFE"/>
    <text x="40" y="132" font-size="5.5" fill="#375DFB" font-family="system-ui">Acme Inc</text>
    <!-- Data flow dots -->
    <g>
      <circle r="3" fill="#375DFB" opacity="0.7" style="animation:afbDataFlow 2s ease-in-out infinite">
        <animateMotion dur="2s" repeatCount="indefinite" path="M110,78 Q134,78 158,78"/>
      </circle>
      <circle r="3" fill="#10B981" opacity="0.7" style="animation:afbDataFlow 2s ease-in-out infinite 0.4s">
        <animateMotion dur="2s" repeatCount="indefinite" path="M110,104 Q134,100 158,100"/>
      </circle>
      <circle r="3" fill="#F59E0B" opacity="0.7" style="animation:afbDataFlow 2s ease-in-out infinite 0.8s">
        <animateMotion dur="2s" repeatCount="indefinite" path="M110,130 Q134,122 158,122"/>
      </circle>
    </g>
    <!-- Arrow -->
    <path d="M112 100 L162 100" stroke="#374151" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.3"/>
    <text x="137" y="94" font-size="6" fill="#374151" font-family="system-ui" text-anchor="middle" opacity="0.5">auto-fill</text>
    <!-- Target form (session feedback) -->
    <rect x="168" y="36" width="86" height="128" rx="6" fill="white" stroke="#10B981" stroke-width="1.5"/>
    <rect x="168" y="36" width="86" height="20" rx="6" fill="#10B981" opacity="0.1"/>
    <text x="211" y="50" font-size="6.5" fill="#10B981" font-family="system-ui" text-anchor="middle" font-weight="600">Session Feedback</text>
    <text x="176" y="68" font-size="5.5" fill="#374151" font-family="system-ui" opacity="0.5">Name</text>
    <rect x="176" y="72" width="70" height="10" rx="3" fill="#D1FAE5"/>
    <text x="184" y="80" font-size="5.5" fill="#10B981" font-family="system-ui">John Doe ✓</text>
    <text x="176" y="94" font-size="5.5" fill="#374151" font-family="system-ui" opacity="0.5">Rating</text>
    <rect x="176" y="98" width="70" height="10" rx="3" fill="white" stroke="#D1FAE5" stroke-width="1"/>
    <text x="176" y="120" font-size="5.5" fill="#374151" font-family="system-ui" opacity="0.5">Comments</text>
    <rect x="176" y="124" width="70" height="24" rx="3" fill="white" stroke="#D1FAE5" stroke-width="1"/>
  </svg>`,

  // 11. Email Notifications per Submission — envelope with sent checkmark
  afb11: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes afbEnvSend { 0%,100%{transform:translateY(0)} 30%{transform:translateY(-6px)} }
      @keyframes afbCheckPop { 0%{transform:scale(0)} 50%{transform:scale(1.2)} 100%{transform:scale(1)} }
    </style>
    <!-- Form submission card -->
    <rect x="28" y="56" width="72" height="88" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <rect x="36" y="64" width="30" height="4" rx="2" fill="#375DFB" opacity="0.5"/>
    <rect x="36" y="74" width="56" height="8" rx="2" fill="#DBEAFE" opacity="0.5"/>
    <rect x="36" y="88" width="56" height="8" rx="2" fill="#DBEAFE" opacity="0.5"/>
    <rect x="36" y="102" width="56" height="8" rx="2" fill="#DBEAFE" opacity="0.5"/>
    <rect x="36" y="118" width="32" height="12" rx="4" fill="#375DFB"/>
    <text x="52" y="127" font-size="6" fill="white" font-family="system-ui" text-anchor="middle">Submit</text>
    <!-- Arrow -->
    <path d="M108 100 L130 100" stroke="#374151" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.3"/>
    <!-- Envelope -->
    <g style="animation:afbEnvSend 2.5s ease-in-out infinite">
      <rect x="140" y="64" width="88" height="58" rx="6" fill="white" stroke="#375DFB" stroke-width="1.5"/>
      <path d="M140 64 L184 98 L228 64" stroke="#375DFB" stroke-width="1.5" fill="none"/>
      <path d="M140 122 L168 98" stroke="#375DFB" stroke-width="1" fill="none" opacity="0.3"/>
      <path d="M228 122 L200 98" stroke="#375DFB" stroke-width="1" fill="none" opacity="0.3"/>
      <!-- Email preview lines -->
      <rect x="156" y="100" width="56" height="3" rx="1.5" fill="#374151" opacity="0.15"/>
      <rect x="156" y="108" width="40" height="3" rx="1.5" fill="#374151" opacity="0.1"/>
    </g>
    <!-- Checkmark badge -->
    <g style="animation:afbCheckPop 1s ease-out forwards">
      <circle cx="222" cy="70" r="12" fill="#10B981"/>
      <path d="M216 70 L220 74 L228 66" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <!-- Notification badges below -->
    <rect x="148" y="138" width="72" height="20" rx="5" fill="#D1FAE5"/>
    <text x="184" y="152" font-size="6.5" fill="#10B981" font-family="system-ui" text-anchor="middle">Sent to admin ✓</text>
  </svg>`,

  // 12. WhatsApp Notifications — phone with WhatsApp-style message
  afb12: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes afbMsgPop { 0%{opacity:0;transform:scale(0.8) translateY(8px)} 100%{opacity:1;transform:scale(1) translateY(0)} }
      @keyframes afbBuzz { 0%,100%{transform:rotate(0)} 25%{transform:rotate(2deg)} 75%{transform:rotate(-2deg)} }
    </style>
    <!-- Phone frame -->
    <g style="animation:afbBuzz 0.5s ease-in-out 2">
      <rect x="90" y="24" width="100" height="160" rx="14" fill="#1F2937"/>
      <rect x="96" y="38" width="88" height="132" rx="4" fill="white"/>
      <!-- WhatsApp header -->
      <rect x="96" y="38" width="88" height="22" fill="#10B981"/>
      <circle cx="110" cy="49" r="6" fill="white" opacity="0.3"/>
      <text x="122" y="52" font-size="6.5" fill="white" font-family="system-ui" font-weight="600">EventHex Bot</text>
      <!-- Messages -->
      <g style="animation:afbMsgPop 0.5s ease-out forwards">
        <rect x="102" y="68" width="66" height="32" rx="6" fill="#D1FAE5"/>
        <text x="108" y="79" font-size="5.5" fill="#1F2937" font-family="system-ui" font-weight="600">New Submission!</text>
        <text x="108" y="89" font-size="5" fill="#374151" font-family="system-ui">John Doe registered</text>
        <text x="156" y="96" font-size="4.5" fill="#374151" font-family="system-ui" opacity="0.5">10:24</text>
      </g>
      <g style="animation:afbMsgPop 0.5s ease-out 0.4s forwards" opacity="0">
        <rect x="102" y="108" width="66" height="32" rx="6" fill="#D1FAE5"/>
        <text x="108" y="119" font-size="5.5" fill="#1F2937" font-family="system-ui" font-weight="600">Feedback Received</text>
        <text x="108" y="129" font-size="5" fill="#374151" font-family="system-ui">Rating: ★★★★★</text>
        <text x="156" y="136" font-size="4.5" fill="#374151" font-family="system-ui" opacity="0.5">10:26</text>
      </g>
      <g style="animation:afbMsgPop 0.5s ease-out 0.8s forwards" opacity="0">
        <rect x="102" y="148" width="66" height="16" rx="6" fill="#DBEAFE"/>
        <text x="108" y="159" font-size="5" fill="#375DFB" font-family="system-ui">View all responses →</text>
      </g>
      <!-- Notch -->
      <rect x="124" y="26" width="32" height="6" rx="3" fill="#374151"/>
    </g>
    <!-- WhatsApp icon -->
    <circle cx="212" cy="50" r="16" fill="#10B981"/>
    <path d="M206 56 Q204 62 208 62 L210 62 Q209 65 212 64 Q217 62 219 58 Q220 53 218 49 Q215 44 210 44 Q205 44 203 48 Q202 50 203 53 L204 54 Q203 55 204 56Z" fill="white"/>
  </svg>`,

  // 13. GDPR Consent Management — shield + consent checkboxes
  afb13: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes afbShield { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }
      @keyframes afbCheck { 0%{stroke-dashoffset:20} 100%{stroke-dashoffset:0} }
    </style>
    <!-- Shield -->
    <g style="animation:afbShield 3s ease-in-out infinite">
      <path d="M80 40 L80 110 Q80 140 110 156 Q140 140 140 110 L140 40 Z" fill="#375DFB" opacity="0.08" stroke="#375DFB" stroke-width="1.5"/>
      <path d="M110 52 L96 52 L96 80 Q96 106 110 118 Q124 106 124 80 L124 52 Z" fill="#375DFB" opacity="0.15"/>
      <!-- Lock icon -->
      <rect x="103" y="78" width="14" height="12" rx="2" fill="#375DFB"/>
      <path d="M106 78 L106 72 Q106 66 110 66 Q114 66 114 72 L114 78" fill="none" stroke="#375DFB" stroke-width="1.5"/>
      <circle cx="110" cy="84" r="2" fill="white"/>
      <text x="110" y="106" font-size="7" fill="#375DFB" font-family="system-ui" text-anchor="middle" font-weight="700">GDPR</text>
    </g>
    <!-- Consent checkboxes -->
    <g>
      <rect x="160" y="44" width="96" height="112" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
      <text x="208" y="60" font-size="6.5" fill="#1F2937" font-family="system-ui" text-anchor="middle" font-weight="600">Consent Settings</text>
      <!-- Checkbox 1 - checked -->
      <rect x="170" y="70" width="12" height="12" rx="2" fill="#10B981"/>
      <path d="M173 76 L175 78 L179 74" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round" style="animation:afbCheck 1s ease-out forwards"/>
      <text x="188" y="80" font-size="6" fill="#374151" font-family="system-ui">Data processing</text>
      <!-- Checkbox 2 - checked -->
      <rect x="170" y="90" width="12" height="12" rx="2" fill="#10B981"/>
      <path d="M173 96 L175 98 L179 94" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round" style="animation:afbCheck 1s ease-out 0.3s forwards"/>
      <text x="188" y="100" font-size="6" fill="#374151" font-family="system-ui">Email marketing</text>
      <!-- Checkbox 3 - unchecked -->
      <rect x="170" y="110" width="12" height="12" rx="2" fill="white" stroke="#374151" stroke-width="1" opacity="0.4"/>
      <text x="188" y="120" font-size="6" fill="#374151" font-family="system-ui" opacity="0.5">Third-party sharing</text>
      <!-- Checkbox 4 - checked -->
      <rect x="170" y="130" width="12" height="12" rx="2" fill="#10B981"/>
      <path d="M173 136 L175 138 L179 134" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round" style="animation:afbCheck 1s ease-out 0.6s forwards"/>
      <text x="188" y="140" font-size="6" fill="#374151" font-family="system-ui">Cookie consent</text>
    </g>
  </svg>`,

  // 14. Captcha Protection — robot/captcha verification box
  afb14: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes afbRobotShake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-3px)} 75%{transform:translateX(3px)} }
      @keyframes afbCheckbox { 0%{transform:scale(0)} 100%{transform:scale(1)} }
    </style>
    <!-- Robot blocked -->
    <g style="animation:afbRobotShake 1s ease-in-out 2" opacity="0.4">
      <rect x="32" y="56" width="48" height="44" rx="6" fill="#374151" opacity="0.15"/>
      <rect x="40" y="64" width="32" height="28" rx="4" fill="#374151" opacity="0.3"/>
      <!-- Robot eyes -->
      <circle cx="50" cy="74" r="4" fill="white"/>
      <circle cx="50" cy="74" r="2" fill="#EF4444"/>
      <circle cx="64" cy="74" r="4" fill="white"/>
      <circle cx="64" cy="74" r="2" fill="#EF4444"/>
      <!-- Robot mouth -->
      <rect x="48" y="82" width="18" height="3" rx="1.5" fill="white"/>
      <!-- Antenna -->
      <line x1="56" y1="64" x2="56" y2="54" stroke="#374151" stroke-width="1.5"/>
      <circle cx="56" cy="52" r="3" fill="#EF4444" opacity="0.6"/>
      <!-- Body -->
      <rect x="42" y="100" width="28" height="20" rx="3" fill="#374151" opacity="0.2"/>
      <!-- Arms -->
      <line x1="42" y1="106" x2="32" y2="114" stroke="#374151" stroke-width="2" opacity="0.2"/>
      <line x1="70" y1="106" x2="80" y2="114" stroke="#374151" stroke-width="2" opacity="0.2"/>
    </g>
    <!-- Block symbol -->
    <circle cx="56" cy="88" r="20" fill="none" stroke="#EF4444" stroke-width="2" opacity="0.5"/>
    <line x1="42" y1="74" x2="70" y2="102" stroke="#EF4444" stroke-width="2" opacity="0.5"/>
    <!-- CAPTCHA box -->
    <rect x="110" y="50" width="140" height="100" rx="8" fill="white" stroke="#374151" stroke-width="1.5" opacity="0.8"/>
    <!-- Checkbox area -->
    <g style="animation:afbCheckbox 0.5s ease-out 1s forwards">
      <rect x="126" y="70" width="20" height="20" rx="4" fill="#10B981"/>
      <path d="M131 80 L134 83 L141 76" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <text x="154" y="84" font-size="8" fill="#1F2937" font-family="system-ui">I'm not a robot</text>
    <!-- reCAPTCHA style branding -->
    <line x1="126" y1="106" x2="234" y2="106" stroke="#374151" stroke-width="0.5" opacity="0.2"/>
    <rect x="210" y="112" width="24" height="24" rx="3" fill="#DBEAFE" opacity="0.5"/>
    <text x="222" y="126" font-size="5" fill="#375DFB" font-family="system-ui" text-anchor="middle">🔒</text>
    <text x="222" y="134" font-size="4" fill="#374151" font-family="system-ui" text-anchor="middle" opacity="0.4">Secure</text>
    <text x="134" y="122" font-size="5" fill="#374151" font-family="system-ui" opacity="0.4">Protected by smart CAPTCHA</text>
  </svg>`,

  // 15. Approval Workflows — pipeline with approve/reject actions
  afb15: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes afbPipeFlow { 0%{stroke-dashoffset:16} 100%{stroke-dashoffset:0} }
      @keyframes afbActionPulse { 0%,100%{opacity:0.8} 50%{opacity:1} }
    </style>
    <!-- Step 1: Submitted -->
    <rect x="16" y="44" width="56" height="36" rx="6" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.2"/>
    <text x="44" y="58" font-size="6" fill="#375DFB" font-family="system-ui" text-anchor="middle" font-weight="600">Submitted</text>
    <text x="44" y="70" font-size="5" fill="#375DFB" font-family="system-ui" text-anchor="middle" opacity="0.6">Form #247</text>
    <!-- Arrow 1 -->
    <line x1="72" y1="62" x2="96" y2="62" stroke="#374151" stroke-width="1.5" stroke-dasharray="4 2" style="animation:afbPipeFlow 1.5s linear infinite"/>
    <!-- Step 2: Under Review -->
    <rect x="98" y="44" width="56" height="36" rx="6" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.2"/>
    <text x="126" y="58" font-size="6" fill="#F59E0B" font-family="system-ui" text-anchor="middle" font-weight="600">Review</text>
    <text x="126" y="70" font-size="5" fill="#F59E0B" font-family="system-ui" text-anchor="middle" opacity="0.6">Pending</text>
    <!-- Arrow 2 splits -->
    <line x1="154" y1="62" x2="172" y2="62" stroke="#374151" stroke-width="1.5" stroke-dasharray="4 2" style="animation:afbPipeFlow 1.5s linear infinite 0.5s"/>
    <!-- Branch point -->
    <circle cx="178" cy="62" r="4" fill="#374151" opacity="0.3"/>
    <!-- Approve path (top) -->
    <line x1="178" y1="58" x2="178" y2="38" stroke="#10B981" stroke-width="1.5"/>
    <line x1="178" y1="38" x2="206" y2="38" stroke="#10B981" stroke-width="1.5"/>
    <g style="animation:afbActionPulse 2s ease-in-out infinite">
      <rect x="208" y="22" width="56" height="32" rx="6" fill="#D1FAE5" stroke="#10B981" stroke-width="1.5"/>
      <circle cx="224" cy="38" r="8" fill="#10B981"/>
      <path d="M220 38 L222 40 L228 34" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <text x="241" y="42" font-size="6" fill="#10B981" font-family="system-ui" font-weight="600">Approve</text>
    </g>
    <!-- Reject path (bottom) -->
    <line x1="178" y1="66" x2="178" y2="86" stroke="#EF4444" stroke-width="1.5"/>
    <line x1="178" y1="86" x2="206" y2="86" stroke="#EF4444" stroke-width="1.5"/>
    <g style="animation:afbActionPulse 2s ease-in-out infinite 0.5s">
      <rect x="208" y="70" width="56" height="32" rx="6" fill="#FEE2E2" stroke="#EF4444" stroke-width="1.5"/>
      <circle cx="224" cy="86" r="8" fill="#EF4444"/>
      <path d="M220 82 L228 90 M228 82 L220 90" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <text x="241" y="90" font-size="6" fill="#EF4444" font-family="system-ui" font-weight="600">Reject</text>
    </g>
    <!-- Approved path continues -->
    <line x1="264" y1="38" x2="264" y2="130" stroke="#10B981" stroke-width="1.5" stroke-dasharray="4 2"/>
    <!-- Final step -->
    <rect x="224" y="130" width="48" height="32" rx="6" fill="#D1FAE5" stroke="#10B981" stroke-width="1.2"/>
    <text x="248" y="146" font-size="5.5" fill="#10B981" font-family="system-ui" text-anchor="middle" font-weight="600">Confirmed</text>
    <text x="248" y="156" font-size="5" fill="#10B981" font-family="system-ui" text-anchor="middle">Email sent</text>
    <!-- Rejected path note -->
    <rect x="208" y="112" width="48" height="20" rx="5" fill="#FEE2E2" opacity="0.5"/>
    <text x="232" y="126" font-size="5" fill="#EF4444" font-family="system-ui" text-anchor="middle">Notify user</text>
    <line x1="232" y1="102" x2="232" y2="112" stroke="#EF4444" stroke-width="1" stroke-dasharray="2 2"/>
    <!-- Stats bar at bottom -->
    <rect x="16" y="164" width="192" height="20" rx="5" fill="#374151" opacity="0.05"/>
    <text x="24" y="178" font-size="5.5" fill="#374151" font-family="system-ui" opacity="0.5">Pipeline:</text>
    <circle cx="62" cy="174" r="4" fill="#10B981"/>
    <text x="72" y="178" font-size="5.5" fill="#374151" font-family="system-ui">12 approved</text>
    <circle cx="120" cy="174" r="4" fill="#EF4444"/>
    <text x="130" y="178" font-size="5.5" fill="#374151" font-family="system-ui">3 rejected</text>
    <circle cx="178" cy="174" r="4" fill="#F59E0B"/>
    <text x="188" y="178" font-size="5.5" fill="#374151" font-family="system-ui">5 pending</text>
  </svg>`,
};
