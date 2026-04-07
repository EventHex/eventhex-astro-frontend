export const exhIllustrations: Record<string, string> = {

  // ── Tab 1: Exhibitor Portal ──────────────────────────────────────────

  /* 1. Self-Service Dashboard — portal dashboard with profile card */
  exh1: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes exhPulseCard { 0%,100%{ opacity:.85 } 50%{ opacity:1 } }
      @keyframes exhSlideUp { 0%{ transform:translateY(6px); opacity:0 } 100%{ transform:translateY(0); opacity:1 } }
    </style>
    <!-- sidebar -->
    <rect x="20" y="24" width="56" height="152" rx="8" fill="#1F2937"/>
    <rect x="28" y="36" width="40" height="6" rx="3" fill="#375DFB"/>
    <rect x="28" y="52" width="36" height="4" rx="2" fill="#374151"/>
    <rect x="28" y="62" width="36" height="4" rx="2" fill="#374151"/>
    <rect x="28" y="72" width="36" height="4" rx="2" fill="#374151"/>
    <rect x="28" y="82" width="36" height="4" rx="2" fill="#374151"/>
    <circle cx="48" cy="156" r="10" fill="#374151"/>
    <circle cx="48" cy="156" r="6" fill="#375DFB" style="animation:exhPulseCard 2s ease infinite"/>
    <!-- main area -->
    <rect x="86" y="24" width="174" height="48" rx="8" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <!-- profile card -->
    <circle cx="110" cy="48" r="14" fill="#DBEAFE"/>
    <circle cx="110" cy="44" r="5" fill="#375DFB"/>
    <path d="M100 56 c0-5 4-9 10-9 s10 4 10 9" fill="#375DFB" opacity=".5"/>
    <rect x="132" y="38" width="60" height="6" rx="3" fill="#1F2937"/>
    <rect x="132" y="50" width="44" height="4" rx="2" fill="#374151" opacity=".5"/>
    <rect x="220" y="38" width="32" height="18" rx="4" fill="#375DFB" opacity=".15"/>
    <text x="236" y="50" text-anchor="middle" font-size="7" fill="#375DFB" font-family="system-ui" font-weight="600">Edit</text>
    <!-- stat cards -->
    <rect x="86" y="82" width="52" height="42" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5" style="animation:exhSlideUp .5s ease both"/>
    <text x="112" y="100" text-anchor="middle" font-size="14" fill="#375DFB" font-family="system-ui" font-weight="700">24</text>
    <text x="112" y="114" text-anchor="middle" font-size="6" fill="#374151" font-family="system-ui">Leads</text>
    <rect x="146" y="82" width="52" height="42" rx="6" fill="white" stroke="#D1FAE5" stroke-width="1.5" style="animation:exhSlideUp .5s ease .1s both"/>
    <text x="172" y="100" text-anchor="middle" font-size="14" fill="#10B981" font-family="system-ui" font-weight="700">8</text>
    <text x="172" y="114" text-anchor="middle" font-size="6" fill="#374151" font-family="system-ui">Products</text>
    <rect x="206" y="82" width="54" height="42" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5" style="animation:exhSlideUp .5s ease .2s both"/>
    <text x="233" y="100" text-anchor="middle" font-size="14" fill="#F59E0B" font-family="system-ui" font-weight="700">3</text>
    <text x="233" y="114" text-anchor="middle" font-size="6" fill="#374151" font-family="system-ui">Team</text>
    <!-- activity bar -->
    <rect x="86" y="134" width="174" height="42" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <text x="96" y="150" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">Recent Activity</text>
    <rect x="96" y="158" width="120" height="4" rx="2" fill="#DBEAFE"/>
    <rect x="96" y="166" width="80" height="4" rx="2" fill="#DBEAFE"/>
  </svg>`,

  /* 2. Booth Setup Wizard — step indicator 1→2→3→4 with progress */
  exh2: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes exhStepFill { 0%{ r:0 } 100%{ r:14 } }
      @keyframes exhLineGrow { 0%{ stroke-dashoffset:44 } 100%{ stroke-dashoffset:0 } }
      @keyframes exhCheckPop { 0%{ transform:scale(0) } 60%{ transform:scale(1.2) } 100%{ transform:scale(1) } }
    </style>
    <!-- progress bar bg -->
    <line x1="62" y1="70" x2="218" y2="70" stroke="#DBEAFE" stroke-width="3" stroke-linecap="round"/>
    <!-- progress bar active -->
    <line x1="62" y1="70" x2="166" y2="70" stroke="#375DFB" stroke-width="3" stroke-linecap="round" stroke-dasharray="104" style="animation:exhLineGrow 1.5s ease both"/>
    <!-- step 1 done -->
    <circle cx="62" cy="70" r="14" fill="#375DFB"/>
    <path d="M56 70 l4 4 8-8" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="animation:exhCheckPop .4s ease both"/>
    <text x="62" y="96" text-anchor="middle" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">Details</text>
    <!-- step 2 done -->
    <circle cx="114" cy="70" r="14" fill="#375DFB"/>
    <path d="M108 70 l4 4 8-8" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="animation:exhCheckPop .4s ease .4s both"/>
    <text x="114" y="96" text-anchor="middle" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">Layout</text>
    <!-- step 3 active -->
    <circle cx="166" cy="70" r="14" fill="white" stroke="#375DFB" stroke-width="2.5"/>
    <text x="166" y="74" text-anchor="middle" font-size="10" fill="#375DFB" font-family="system-ui" font-weight="700">3</text>
    <text x="166" y="96" text-anchor="middle" font-size="7" fill="#375DFB" font-family="system-ui" font-weight="700">Branding</text>
    <!-- step 4 upcoming -->
    <circle cx="218" cy="70" r="14" fill="white" stroke="#DBEAFE" stroke-width="2"/>
    <text x="218" y="74" text-anchor="middle" font-size="10" fill="#374151" opacity=".4" font-family="system-ui" font-weight="700">4</text>
    <text x="218" y="96" text-anchor="middle" font-size="7" fill="#374151" opacity=".4" font-family="system-ui">Publish</text>
    <!-- active step card -->
    <rect x="60" y="112" width="160" height="64" rx="8" fill="white" stroke="#375DFB" stroke-width="1.5"/>
    <text x="80" y="130" font-size="8" fill="#1F2937" font-family="system-ui" font-weight="600">Upload Logo</text>
    <rect x="80" y="136" width="56" height="28" rx="4" fill="#DBEAFE" stroke="#375DFB" stroke-width="1" stroke-dasharray="3 2"/>
    <text x="108" y="153" text-anchor="middle" font-size="7" fill="#375DFB" font-family="system-ui">+ Drop file</text>
    <rect x="148" y="138" width="52" height="10" rx="3" fill="#DBEAFE"/>
    <rect x="148" y="154" width="52" height="10" rx="3" fill="#DBEAFE"/>
  </svg>`,

  /* 3. Product Catalog Management — product cards grid with images */
  exh3: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes exhCardHover { 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-3px) } }
    </style>
    <!-- header -->
    <rect x="24" y="18" width="100" height="10" rx="3" fill="#1F2937"/>
    <rect x="200" y="16" width="56" height="16" rx="4" fill="#375DFB"/>
    <text x="228" y="27" text-anchor="middle" font-size="7" fill="white" font-family="system-ui" font-weight="600">+ Add</text>
    <!-- product card 1 -->
    <rect x="24" y="42" width="72" height="70" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5" style="animation:exhCardHover 3s ease infinite"/>
    <rect x="30" y="48" width="60" height="32" rx="4" fill="#DBEAFE"/>
    <rect x="46" y="56" width="28" height="16" rx="2" fill="#375DFB" opacity=".2"/>
    <path d="M56 60 l4 6 4-3 6 8 H50z" fill="#375DFB" opacity=".4"/>
    <rect x="30" y="86" width="48" height="5" rx="2" fill="#1F2937"/>
    <rect x="30" y="95" width="32" height="4" rx="2" fill="#10B981"/>
    <text x="30" y="107" font-size="6" fill="#374151" font-family="system-ui">$299</text>
    <!-- product card 2 -->
    <rect x="104" y="42" width="72" height="70" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5" style="animation:exhCardHover 3s ease .3s infinite"/>
    <rect x="110" y="48" width="60" height="32" rx="4" fill="#D1FAE5"/>
    <rect x="126" y="56" width="28" height="16" rx="2" fill="#10B981" opacity=".2"/>
    <path d="M136 60 l4 6 4-3 6 8 H130z" fill="#10B981" opacity=".4"/>
    <rect x="110" y="86" width="48" height="5" rx="2" fill="#1F2937"/>
    <rect x="110" y="95" width="32" height="4" rx="2" fill="#10B981"/>
    <text x="110" y="107" font-size="6" fill="#374151" font-family="system-ui">$149</text>
    <!-- product card 3 -->
    <rect x="184" y="42" width="72" height="70" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5" style="animation:exhCardHover 3s ease .6s infinite"/>
    <rect x="190" y="48" width="60" height="32" rx="4" fill="#DBEAFE"/>
    <rect x="206" y="56" width="28" height="16" rx="2" fill="#8B5CF6" opacity=".2"/>
    <path d="M216 60 l4 6 4-3 6 8 H210z" fill="#8B5CF6" opacity=".4"/>
    <rect x="190" y="86" width="48" height="5" rx="2" fill="#1F2937"/>
    <rect x="190" y="95" width="32" height="4" rx="2" fill="#8B5CF6"/>
    <text x="190" y="107" font-size="6" fill="#374151" font-family="system-ui">$499</text>
    <!-- bottom row -->
    <rect x="24" y="122" width="72" height="56" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <rect x="30" y="128" width="60" height="24" rx="4" fill="#DBEAFE" opacity=".5"/>
    <rect x="30" y="158" width="40" height="4" rx="2" fill="#374151" opacity=".4"/>
    <rect x="30" y="166" width="28" height="4" rx="2" fill="#374151" opacity=".3"/>
    <rect x="104" y="122" width="72" height="56" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <rect x="110" y="128" width="60" height="24" rx="4" fill="#D1FAE5" opacity=".5"/>
    <rect x="110" y="158" width="40" height="4" rx="2" fill="#374151" opacity=".4"/>
    <rect x="110" y="166" width="28" height="4" rx="2" fill="#374151" opacity=".3"/>
    <rect x="184" y="122" width="72" height="56" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="220" y="154" text-anchor="middle" font-size="18" fill="#375DFB" opacity=".4" font-family="system-ui">+</text>
  </svg>`,

  /* 4. Team Member Invites — user avatars with + invite button */
  exh4: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes exhAvatarPop { 0%{ transform:scale(0); opacity:0 } 70%{ transform:scale(1.1) } 100%{ transform:scale(1); opacity:1 } }
      @keyframes exhInvitePulse { 0%,100%{ transform:scale(1) } 50%{ transform:scale(1.08) } }
    </style>
    <!-- header -->
    <text x="40" y="34" font-size="9" fill="#1F2937" font-family="system-ui" font-weight="700">Team Members</text>
    <rect x="186" y="22" width="72" height="18" rx="6" fill="#375DFB" style="animation:exhInvitePulse 2s ease infinite"/>
    <text x="222" y="34" text-anchor="middle" font-size="7" fill="white" font-family="system-ui" font-weight="600">+ Invite</text>
    <!-- member row 1 -->
    <rect x="28" y="50" width="224" height="36" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5" style="animation:exhAvatarPop .4s ease both"/>
    <circle cx="52" cy="68" r="12" fill="#375DFB"/>
    <text x="52" y="72" text-anchor="middle" font-size="8" fill="white" font-family="system-ui" font-weight="600">JD</text>
    <rect x="72" y="62" width="64" height="5" rx="2" fill="#1F2937"/>
    <rect x="72" y="72" width="40" height="4" rx="2" fill="#374151" opacity=".4"/>
    <rect x="192" y="60" width="46" height="16" rx="4" fill="#D1FAE5"/>
    <text x="215" y="71" text-anchor="middle" font-size="6" fill="#10B981" font-family="system-ui" font-weight="600">Admin</text>
    <!-- member row 2 -->
    <rect x="28" y="94" width="224" height="36" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5" style="animation:exhAvatarPop .4s ease .15s both"/>
    <circle cx="52" cy="112" r="12" fill="#10B981"/>
    <text x="52" y="116" text-anchor="middle" font-size="8" fill="white" font-family="system-ui" font-weight="600">SM</text>
    <rect x="72" y="106" width="56" height="5" rx="2" fill="#1F2937"/>
    <rect x="72" y="116" width="44" height="4" rx="2" fill="#374151" opacity=".4"/>
    <rect x="192" y="104" width="46" height="16" rx="4" fill="#DBEAFE"/>
    <text x="215" y="115" text-anchor="middle" font-size="6" fill="#375DFB" font-family="system-ui" font-weight="600">Staff</text>
    <!-- member row 3 -->
    <rect x="28" y="138" width="224" height="36" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5" style="animation:exhAvatarPop .4s ease .3s both"/>
    <circle cx="52" cy="156" r="12" fill="#8B5CF6"/>
    <text x="52" y="160" text-anchor="middle" font-size="8" fill="white" font-family="system-ui" font-weight="600">AK</text>
    <rect x="72" y="150" width="52" height="5" rx="2" fill="#1F2937"/>
    <rect x="72" y="160" width="36" height="4" rx="2" fill="#374151" opacity=".4"/>
    <rect x="192" y="148" width="46" height="16" rx="4" fill="#DBEAFE"/>
    <text x="215" y="159" text-anchor="middle" font-size="6" fill="#375DFB" font-family="system-ui" font-weight="600">Staff</text>
    <!-- pending invite -->
    <circle cx="240" cy="156" r="8" fill="#F59E0B" opacity=".15"/>
    <circle cx="240" cy="156" r="3" fill="#F59E0B"/>
  </svg>`,

  /* 5. Document Uploads — file upload area with document icons */
  exh5: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes exhUploadBounce { 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-4px) } }
      @keyframes exhUploadDash { 0%{ stroke-dashoffset:0 } 100%{ stroke-dashoffset:20 } }
    </style>
    <!-- drop zone -->
    <rect x="40" y="24" width="200" height="80" rx="10" fill="#DBEAFE" opacity=".3" stroke="#375DFB" stroke-width="2" stroke-dasharray="6 4" style="animation:exhUploadDash 2s linear infinite"/>
    <!-- upload icon -->
    <g style="animation:exhUploadBounce 2s ease infinite">
      <circle cx="140" cy="50" r="16" fill="white"/>
      <path d="M140 42 v16 M134 46 l6-6 6 6" stroke="#375DFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <text x="140" y="82" text-anchor="middle" font-size="7" fill="#374151" font-family="system-ui">Drag & drop or browse files</text>
    <text x="140" y="94" text-anchor="middle" font-size="6" fill="#374151" opacity=".5" font-family="system-ui">PDF, DOCX, PNG up to 10MB</text>
    <!-- uploaded files -->
    <rect x="40" y="116" width="92" height="32" rx="6" fill="white" stroke="#D1FAE5" stroke-width="1.5"/>
    <rect x="48" y="122" width="20" height="20" rx="4" fill="#EF4444" opacity=".15"/>
    <text x="58" y="136" text-anchor="middle" font-size="7" fill="#EF4444" font-family="system-ui" font-weight="700">PDF</text>
    <rect x="74" y="126" width="48" height="4" rx="2" fill="#1F2937"/>
    <rect x="74" y="134" width="32" height="3" rx="1.5" fill="#374151" opacity=".4"/>
    <rect x="148" y="116" width="92" height="32" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <rect x="156" y="122" width="20" height="20" rx="4" fill="#375DFB" opacity=".15"/>
    <text x="166" y="136" text-anchor="middle" font-size="7" fill="#375DFB" font-family="system-ui" font-weight="700">DOC</text>
    <rect x="182" y="126" width="48" height="4" rx="2" fill="#1F2937"/>
    <rect x="182" y="134" width="32" height="3" rx="1.5" fill="#374151" opacity=".4"/>
    <!-- progress bar file -->
    <rect x="40" y="158" width="200" height="32" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <rect x="48" y="164" width="20" height="20" rx="4" fill="#10B981" opacity=".15"/>
    <text x="58" y="178" text-anchor="middle" font-size="7" fill="#10B981" font-family="system-ui" font-weight="700">PNG</text>
    <rect x="74" y="168" width="100" height="5" rx="2.5" fill="#DBEAFE"/>
    <rect x="74" y="168" width="72" height="5" rx="2.5" fill="#10B981"/>
    <text x="180" y="175" font-size="6" fill="#10B981" font-family="system-ui" font-weight="600">72%</text>
    <circle cx="224" cy="174" r="6" fill="#D1FAE5"/>
    <path d="M221 174 l2 2 4-4" stroke="#10B981" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </svg>`,

  // ── Tab 2: Lead Management ────────────────────────────────────────────

  /* 6. QR Lead Scanning — phone scanning QR code */
  exh6: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes exhScanLine { 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(32px) } }
      @keyframes exhScanGlow { 0%,100%{ opacity:.4 } 50%{ opacity:1 } }
    </style>
    <!-- phone body -->
    <rect x="86" y="20" width="64" height="110" rx="10" fill="#1F2937"/>
    <rect x="90" y="28" width="56" height="94" rx="6" fill="white"/>
    <!-- QR code on phone -->
    <rect x="102" y="42" width="32" height="32" rx="2" fill="white" stroke="#1F2937" stroke-width="1"/>
    <rect x="106" y="46" width="8" height="8" fill="#1F2937"/>
    <rect x="118" y="46" width="8" height="8" fill="#1F2937"/>
    <rect x="106" y="58" width="8" height="8" fill="#1F2937"/>
    <rect x="116" y="56" width="4" height="4" fill="#1F2937"/>
    <rect x="122" y="56" width="4" height="4" fill="#1F2937"/>
    <rect x="116" y="62" width="4" height="4" fill="#1F2937"/>
    <!-- scan line -->
    <line x1="92" y1="46" x2="144" y2="46" stroke="#375DFB" stroke-width="2" opacity=".8" style="animation:exhScanLine 2s ease infinite"/>
    <!-- lead scanned label -->
    <rect x="98" y="82" width="40" height="12" rx="3" fill="#D1FAE5"/>
    <text x="118" y="91" text-anchor="middle" font-size="6" fill="#10B981" font-family="system-ui" font-weight="600">Scanned!</text>
    <!-- contact card result -->
    <rect x="164" y="32" width="92" height="80" rx="8" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <circle cx="188" cy="56" r="12" fill="#DBEAFE"/>
    <circle cx="188" cy="52" r="4" fill="#375DFB"/>
    <path d="M180 62 c0-4 3-7 8-7 s8 3 8 7" fill="#375DFB" opacity=".4"/>
    <rect x="174" y="76" width="72" height="5" rx="2" fill="#1F2937"/>
    <rect x="174" y="86" width="56" height="4" rx="2" fill="#374151" opacity=".4"/>
    <rect x="174" y="96" width="42" height="4" rx="2" fill="#374151" opacity=".3"/>
    <!-- arrow -->
    <path d="M150 72 l8 0" stroke="#375DFB" stroke-width="1.5" stroke-linecap="round" marker-end="url(#exhArrow6)"/>
    <defs><marker id="exhArrow6" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0 L6 3 L0 6z" fill="#375DFB"/></marker></defs>
    <!-- scan counter -->
    <rect x="164" y="122" width="92" height="28" rx="6" fill="#375DFB" opacity=".08"/>
    <text x="210" y="138" text-anchor="middle" font-size="7" fill="#375DFB" font-family="system-ui" font-weight="600">47 leads scanned today</text>
    <!-- floating QR corners -->
    <path d="M28 48 v-16 h16" stroke="#375DFB" stroke-width="2.5" fill="none" stroke-linecap="round" style="animation:exhScanGlow 2s ease infinite"/>
    <path d="M68 48 v-16 h-16" stroke="#375DFB" stroke-width="2.5" fill="none" stroke-linecap="round" style="animation:exhScanGlow 2s ease infinite"/>
    <path d="M28 88 v16 h16" stroke="#375DFB" stroke-width="2.5" fill="none" stroke-linecap="round" style="animation:exhScanGlow 2s ease infinite"/>
    <path d="M68 88 v16 h-16" stroke="#375DFB" stroke-width="2.5" fill="none" stroke-linecap="round" style="animation:exhScanGlow 2s ease infinite"/>
  </svg>`,

  /* 7. Manual Lead Entry — form with pre-filled fields */
  exh7: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes exhCursorBlink { 0%,100%{ opacity:1 } 50%{ opacity:0 } }
      @keyframes exhFieldFade { 0%{ opacity:0; transform:translateY(4px) } 100%{ opacity:1; transform:translateY(0) } }
    </style>
    <!-- form card -->
    <rect x="44" y="16" width="192" height="168" rx="10" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <!-- title -->
    <text x="66" y="38" font-size="9" fill="#1F2937" font-family="system-ui" font-weight="700">New Lead</text>
    <circle cx="56" cy="34" r="6" fill="#375DFB" opacity=".15"/>
    <path d="M53 34 h6 M56 31 v6" stroke="#375DFB" stroke-width="1.5" stroke-linecap="round"/>
    <!-- name field -->
    <text x="60" y="58" font-size="6" fill="#374151" font-family="system-ui" font-weight="600">Full Name</text>
    <rect x="60" y="62" width="160" height="20" rx="4" fill="#DBEAFE" opacity=".3" stroke="#375DFB" stroke-width="1" style="animation:exhFieldFade .4s ease both"/>
    <text x="68" y="76" font-size="7" fill="#1F2937" font-family="system-ui">Sarah Johnson</text>
    <!-- email field -->
    <text x="60" y="96" font-size="6" fill="#374151" font-family="system-ui" font-weight="600">Email</text>
    <rect x="60" y="100" width="160" height="20" rx="4" fill="#DBEAFE" opacity=".3" stroke="#375DFB" stroke-width="1" style="animation:exhFieldFade .4s ease .1s both"/>
    <text x="68" y="114" font-size="7" fill="#1F2937" font-family="system-ui">sarah@company.com</text>
    <!-- company field with cursor -->
    <text x="60" y="134" font-size="6" fill="#374151" font-family="system-ui" font-weight="600">Company</text>
    <rect x="60" y="138" width="160" height="20" rx="4" fill="white" stroke="#375DFB" stroke-width="1.5" style="animation:exhFieldFade .4s ease .2s both"/>
    <text x="68" y="152" font-size="7" fill="#1F2937" font-family="system-ui">TechCorp Inc</text>
    <rect x="120" y="142" width="1.5" height="12" rx=".75" fill="#375DFB" style="animation:exhCursorBlink 1s step-end infinite"/>
    <!-- save button -->
    <rect x="140" y="166" width="72" height="14" rx="4" fill="#375DFB"/>
    <text x="176" y="176" text-anchor="middle" font-size="7" fill="white" font-family="system-ui" font-weight="600">Save Lead</text>
  </svg>`,

  /* 8. Lead Export & CRM Sync — data flowing to CRM box */
  exh8: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes exhFlowDot { 0%{ transform:translateX(0); opacity:0 } 20%{ opacity:1 } 80%{ opacity:1 } 100%{ transform:translateX(62px); opacity:0 } }
      @keyframes exhSyncSpin { 0%{ transform:rotate(0deg) } 100%{ transform:rotate(360deg) } }
    </style>
    <!-- leads source -->
    <rect x="24" y="40" width="80" height="120" rx="8" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <text x="64" y="60" text-anchor="middle" font-size="8" fill="#1F2937" font-family="system-ui" font-weight="700">Leads</text>
    <rect x="34" y="68" width="60" height="8" rx="2" fill="#DBEAFE"/>
    <rect x="34" y="82" width="60" height="8" rx="2" fill="#DBEAFE"/>
    <rect x="34" y="96" width="60" height="8" rx="2" fill="#DBEAFE"/>
    <rect x="34" y="110" width="60" height="8" rx="2" fill="#DBEAFE"/>
    <rect x="34" y="124" width="60" height="8" rx="2" fill="#DBEAFE"/>
    <text x="64" y="148" text-anchor="middle" font-size="7" fill="#375DFB" font-family="system-ui" font-weight="600">247 leads</text>
    <!-- flow arrows -->
    <g>
      <circle cx="118" cy="78" r="3" fill="#375DFB" style="animation:exhFlowDot 1.5s ease infinite"/>
      <circle cx="118" cy="100" r="3" fill="#10B981" style="animation:exhFlowDot 1.5s ease .3s infinite"/>
      <circle cx="118" cy="122" r="3" fill="#8B5CF6" style="animation:exhFlowDot 1.5s ease .6s infinite"/>
    </g>
    <path d="M110 78 h60 M110 100 h60 M110 122 h60" stroke="#DBEAFE" stroke-width="1.5" stroke-dasharray="4 3"/>
    <!-- CRM box -->
    <rect x="176" y="40" width="80" height="120" rx="8" fill="white" stroke="#D1FAE5" stroke-width="1.5"/>
    <rect x="186" y="50" width="60" height="20" rx="4" fill="#10B981" opacity=".15"/>
    <text x="216" y="64" text-anchor="middle" font-size="8" fill="#10B981" font-family="system-ui" font-weight="700">CRM</text>
    <!-- sync icon -->
    <g transform="translate(216, 88)" style="animation:exhSyncSpin 2s linear infinite; transform-origin:216px 88px">
      <path d="M-6 0 a6 6 0 0 1 12 0" stroke="#10B981" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M6 0 a6 6 0 0 1 -12 0" stroke="#10B981" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M5 -3 l1 3 -3 1" fill="#10B981"/>
    </g>
    <text x="216" y="108" text-anchor="middle" font-size="6" fill="#10B981" font-family="system-ui" font-weight="600">Syncing...</text>
    <!-- export buttons -->
    <rect x="186" y="118" width="26" height="14" rx="3" fill="#375DFB" opacity=".1"/>
    <text x="199" y="128" text-anchor="middle" font-size="6" fill="#375DFB" font-family="system-ui" font-weight="600">CSV</text>
    <rect x="218" y="118" width="28" height="14" rx="3" fill="#8B5CF6" opacity=".1"/>
    <text x="232" y="128" text-anchor="middle" font-size="6" fill="#8B5CF6" font-family="system-ui" font-weight="600">Excel</text>
    <rect x="186" y="138" width="60" height="14" rx="3" fill="#10B981" opacity=".1"/>
    <text x="216" y="148" text-anchor="middle" font-size="6" fill="#10B981" font-family="system-ui" font-weight="600">HubSpot Sync</text>
  </svg>`,

  /* 9. Lead Qualification Notes — hot/warm/cold rating chips */
  exh9: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes exhChipGlow { 0%,100%{ filter:brightness(1) } 50%{ filter:brightness(1.15) } }
      @keyframes exhBarGrow { 0%{ width:0 } 100%{ width:100% } }
    </style>
    <!-- lead card -->
    <rect x="28" y="18" width="224" height="54" rx="8" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <circle cx="56" cy="44" r="16" fill="#DBEAFE"/>
    <circle cx="56" cy="40" r="6" fill="#375DFB"/>
    <path d="M46 52 c0-5 4-9 10-9 s10 4 10 9" fill="#375DFB" opacity=".4"/>
    <rect x="82" y="34" width="80" height="6" rx="3" fill="#1F2937"/>
    <rect x="82" y="46" width="56" height="4" rx="2" fill="#374151" opacity=".4"/>
    <rect x="82" y="56" width="40" height="4" rx="2" fill="#374151" opacity=".3"/>
    <!-- hot chip active -->
    <rect x="192" y="30" width="48" height="18" rx="9" fill="#EF4444" style="animation:exhChipGlow 2s ease infinite"/>
    <text x="216" y="42" text-anchor="middle" font-size="7" fill="white" font-family="system-ui" font-weight="700">🔥 Hot</text>
    <!-- rating chips row -->
    <text x="40" y="92" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="700">Qualification</text>
    <rect x="40" y="100" width="52" height="22" rx="11" fill="#EF4444" opacity=".15" stroke="#EF4444" stroke-width="1.5"/>
    <text x="66" y="114" text-anchor="middle" font-size="7" fill="#EF4444" font-family="system-ui" font-weight="600">Hot</text>
    <rect x="100" y="100" width="60" height="22" rx="11" fill="#F59E0B" opacity=".15" stroke="#F59E0B" stroke-width="1.5"/>
    <text x="130" y="114" text-anchor="middle" font-size="7" fill="#F59E0B" font-family="system-ui" font-weight="600">Warm</text>
    <rect x="168" y="100" width="56" height="22" rx="11" fill="#375DFB" opacity=".15" stroke="#375DFB" stroke-width="1.5"/>
    <text x="196" y="114" text-anchor="middle" font-size="7" fill="#375DFB" font-family="system-ui" font-weight="600">Cold</text>
    <!-- notes section -->
    <text x="40" y="142" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="700">Notes</text>
    <rect x="40" y="148" width="200" height="38" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1"/>
    <text x="48" y="162" font-size="6.5" fill="#374151" font-family="system-ui">Interested in premium booth.</text>
    <text x="48" y="174" font-size="6.5" fill="#374151" font-family="system-ui">Requested follow-up next week.</text>
    <!-- stats bar -->
    <rect x="40" y="130" width="52" height="4" rx="2" fill="#EF4444" opacity=".6"/>
    <rect x="92" y="130" width="36" height="4" rx="2" fill="#F59E0B" opacity=".6"/>
    <rect x="128" y="130" width="24" height="4" rx="2" fill="#375DFB" opacity=".6"/>
  </svg>`,

  /* 10. Registration-Based Leads — attendee profile merging with lead */
  exh10: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes exhMergeLeft { 0%{ transform:translateX(0) } 50%{ transform:translateX(20px) } 100%{ transform:translateX(0) } }
      @keyframes exhMergeRight { 0%{ transform:translateX(0) } 50%{ transform:translateX(-20px) } 100%{ transform:translateX(0) } }
      @keyframes exhMergePulse { 0%,100%{ r:18 } 50%{ r:22 } }
    </style>
    <!-- attendee card (left) -->
    <g style="animation:exhMergeLeft 3s ease infinite">
      <rect x="20" y="40" width="88" height="80" rx="8" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
      <circle cx="64" cy="64" r="14" fill="#DBEAFE"/>
      <circle cx="64" cy="60" r="5" fill="#375DFB"/>
      <path d="M54 72 c0-5 4-9 10-9 s10 4 10 9" fill="#375DFB" opacity=".4"/>
      <text x="64" y="90" text-anchor="middle" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">Attendee</text>
      <rect x="36" y="96" width="56" height="4" rx="2" fill="#374151" opacity=".3"/>
      <rect x="42" y="104" width="44" height="4" rx="2" fill="#374151" opacity=".2"/>
    </g>
    <!-- merge icon center -->
    <circle cx="140" cy="80" r="18" fill="#375DFB" opacity=".1" style="animation:exhMergePulse 2s ease infinite"/>
    <circle cx="140" cy="80" r="12" fill="#375DFB"/>
    <path d="M134 80 h12 M140 74 v12" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <!-- lead card (right) -->
    <g style="animation:exhMergeRight 3s ease infinite">
      <rect x="172" y="40" width="88" height="80" rx="8" fill="white" stroke="#D1FAE5" stroke-width="1.5"/>
      <circle cx="216" cy="64" r="14" fill="#D1FAE5"/>
      <circle cx="216" cy="60" r="5" fill="#10B981"/>
      <path d="M206 72 c0-5 4-9 10-9 s10 4 10 9" fill="#10B981" opacity=".4"/>
      <text x="216" y="90" text-anchor="middle" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">Lead</text>
      <rect x="188" y="96" width="56" height="4" rx="2" fill="#374151" opacity=".3"/>
      <rect x="194" y="104" width="44" height="4" rx="2" fill="#374151" opacity=".2"/>
    </g>
    <!-- merged result -->
    <rect x="68" y="136" width="144" height="48" rx="8" fill="white" stroke="#10B981" stroke-width="1.5"/>
    <circle cx="96" cy="160" r="14" fill="#D1FAE5"/>
    <circle cx="96" cy="156" r="5" fill="#10B981"/>
    <path d="M86 168 c0-5 4-9 10-9 s10 4 10 9" fill="#10B981" opacity=".4"/>
    <rect x="118" y="150" width="72" height="5" rx="2" fill="#1F2937"/>
    <rect x="118" y="160" width="52" height="4" rx="2" fill="#374151" opacity=".4"/>
    <rect x="118" y="170" width="40" height="4" rx="2" fill="#10B981" opacity=".5"/>
    <!-- arrow down -->
    <path d="M140 122 v8" stroke="#10B981" stroke-width="1.5" stroke-linecap="round" marker-end="url(#exhMergeArrow)"/>
    <defs><marker id="exhMergeArrow" viewBox="0 0 6 6" refX="3" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L3 6 L6 0z" fill="#10B981"/></marker></defs>
  </svg>`,

  // ── Tab 3: Floor Plans & Logistics ────────────────────────────────────

  /* 11. Interactive Floor Plans — venue floor map with booth areas */
  exh11: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes exhBoothHighlight { 0%,100%{ fill:#375DFB; opacity:.15 } 50%{ fill:#375DFB; opacity:.35 } }
    </style>
    <!-- venue outline -->
    <rect x="24" y="20" width="232" height="160" rx="4" fill="white" stroke="#1F2937" stroke-width="1.5"/>
    <!-- entrance -->
    <rect x="110" y="170" width="60" height="10" rx="2" fill="#1F2937"/>
    <text x="140" y="178" text-anchor="middle" font-size="5" fill="white" font-family="system-ui" font-weight="600">ENTRANCE</text>
    <!-- stage area -->
    <rect x="80" y="28" width="120" height="24" rx="4" fill="#1F2937" opacity=".1" stroke="#1F2937" stroke-width="1"/>
    <text x="140" y="44" text-anchor="middle" font-size="7" fill="#1F2937" font-family="system-ui" font-weight="600">MAIN STAGE</text>
    <!-- booth rows top -->
    <rect x="32" y="62" width="36" height="24" rx="3" fill="#375DFB" opacity=".15" stroke="#375DFB" stroke-width="1"/>
    <text x="50" y="78" text-anchor="middle" font-size="6" fill="#375DFB" font-family="system-ui">A1</text>
    <rect x="76" y="62" width="36" height="24" rx="3" fill="#10B981" opacity=".2" stroke="#10B981" stroke-width="1"/>
    <text x="94" y="78" text-anchor="middle" font-size="6" fill="#10B981" font-family="system-ui">A2</text>
    <rect x="120" y="62" width="36" height="24" rx="3" style="animation:exhBoothHighlight 2s ease infinite" stroke="#375DFB" stroke-width="1.5"/>
    <text x="138" y="78" text-anchor="middle" font-size="6" fill="#375DFB" font-family="system-ui">A3</text>
    <rect x="164" y="62" width="36" height="24" rx="3" fill="#F59E0B" opacity=".15" stroke="#F59E0B" stroke-width="1"/>
    <text x="182" y="78" text-anchor="middle" font-size="6" fill="#F59E0B" font-family="system-ui">A4</text>
    <rect x="208" y="62" width="40" height="24" rx="3" fill="#8B5CF6" opacity=".15" stroke="#8B5CF6" stroke-width="1"/>
    <text x="228" y="78" text-anchor="middle" font-size="6" fill="#8B5CF6" font-family="system-ui">A5</text>
    <!-- aisle label -->
    <text x="140" y="98" text-anchor="middle" font-size="5" fill="#374151" opacity=".5" font-family="system-ui">— Aisle 1 —</text>
    <!-- booth rows bottom -->
    <rect x="32" y="106" width="50" height="28" rx="3" fill="#EF4444" opacity=".12" stroke="#EF4444" stroke-width="1"/>
    <text x="57" y="124" text-anchor="middle" font-size="6" fill="#EF4444" font-family="system-ui">B1</text>
    <rect x="90" y="106" width="50" height="28" rx="3" fill="#375DFB" opacity=".15" stroke="#375DFB" stroke-width="1"/>
    <text x="115" y="124" text-anchor="middle" font-size="6" fill="#375DFB" font-family="system-ui">B2</text>
    <rect x="148" y="106" width="50" height="28" rx="3" fill="#10B981" opacity=".15" stroke="#10B981" stroke-width="1"/>
    <text x="173" y="124" text-anchor="middle" font-size="6" fill="#10B981" font-family="system-ui">B3</text>
    <rect x="206" y="106" width="42" height="28" rx="3" fill="#374151" opacity=".08" stroke="#374151" stroke-width="1" stroke-dasharray="3 2"/>
    <text x="227" y="124" text-anchor="middle" font-size="5" fill="#374151" opacity=".5" font-family="system-ui">Open</text>
    <!-- lounge -->
    <rect x="32" y="144" width="60" height="22" rx="4" fill="#F59E0B" opacity=".1" stroke="#F59E0B" stroke-width="1"/>
    <text x="62" y="158" text-anchor="middle" font-size="5" fill="#F59E0B" font-family="system-ui">Lounge</text>
    <!-- food area -->
    <rect x="196" y="144" width="52" height="22" rx="4" fill="#10B981" opacity=".1" stroke="#10B981" stroke-width="1"/>
    <text x="222" y="158" text-anchor="middle" font-size="5" fill="#10B981" font-family="system-ui">F&amp;B</text>
  </svg>`,

  /* 12. Booth Allocation — numbered booth grid with assignments */
  exh12: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes exhAssign { 0%{ stroke-dashoffset:80 } 100%{ stroke-dashoffset:0 } }
    </style>
    <!-- header -->
    <text x="30" y="28" font-size="8" fill="#1F2937" font-family="system-ui" font-weight="700">Booth Allocation</text>
    <!-- legend -->
    <circle cx="180" cy="24" r="4" fill="#10B981"/>
    <text x="188" y="27" font-size="6" fill="#374151" font-family="system-ui">Assigned</text>
    <circle cx="220" cy="24" r="4" fill="#F59E0B"/>
    <text x="228" y="27" font-size="6" fill="#374151" font-family="system-ui">Pending</text>
    <circle cx="256" cy="24" r="4" fill="#DBEAFE"/>
    <text x="264" y="27" font-size="6" fill="#374151" font-family="system-ui">Free</text>
    <!-- grid row 1 -->
    <rect x="24" y="40" width="48" height="32" rx="4" fill="#10B981" opacity=".15" stroke="#10B981" stroke-width="1.5"/>
    <text x="48" y="53" text-anchor="middle" font-size="8" fill="#10B981" font-family="system-ui" font-weight="700">001</text>
    <text x="48" y="63" text-anchor="middle" font-size="5" fill="#374151" font-family="system-ui">TechCo</text>
    <rect x="80" y="40" width="48" height="32" rx="4" fill="#10B981" opacity=".15" stroke="#10B981" stroke-width="1.5"/>
    <text x="104" y="53" text-anchor="middle" font-size="8" fill="#10B981" font-family="system-ui" font-weight="700">002</text>
    <text x="104" y="63" text-anchor="middle" font-size="5" fill="#374151" font-family="system-ui">DataInc</text>
    <rect x="136" y="40" width="48" height="32" rx="4" fill="#F59E0B" opacity=".15" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="80" style="animation:exhAssign 2s ease both"/>
    <text x="160" y="53" text-anchor="middle" font-size="8" fill="#F59E0B" font-family="system-ui" font-weight="700">003</text>
    <text x="160" y="63" text-anchor="middle" font-size="5" fill="#F59E0B" font-family="system-ui">Pending</text>
    <rect x="192" y="40" width="48" height="32" rx="4" fill="#DBEAFE" stroke="#375DFB" stroke-width="1" stroke-dasharray="3 2"/>
    <text x="216" y="56" text-anchor="middle" font-size="8" fill="#375DFB" opacity=".5" font-family="system-ui" font-weight="700">004</text>
    <!-- grid row 2 -->
    <rect x="24" y="80" width="48" height="32" rx="4" fill="#10B981" opacity=".15" stroke="#10B981" stroke-width="1.5"/>
    <text x="48" y="93" text-anchor="middle" font-size="8" fill="#10B981" font-family="system-ui" font-weight="700">005</text>
    <text x="48" y="103" text-anchor="middle" font-size="5" fill="#374151" font-family="system-ui">CloudAI</text>
    <rect x="80" y="80" width="48" height="32" rx="4" fill="#DBEAFE" stroke="#375DFB" stroke-width="1" stroke-dasharray="3 2"/>
    <text x="104" y="96" text-anchor="middle" font-size="8" fill="#375DFB" opacity=".5" font-family="system-ui" font-weight="700">006</text>
    <rect x="136" y="80" width="48" height="32" rx="4" fill="#10B981" opacity=".15" stroke="#10B981" stroke-width="1.5"/>
    <text x="160" y="93" text-anchor="middle" font-size="8" fill="#10B981" font-family="system-ui" font-weight="700">007</text>
    <text x="160" y="103" text-anchor="middle" font-size="5" fill="#374151" font-family="system-ui">EventPro</text>
    <rect x="192" y="80" width="48" height="32" rx="4" fill="#8B5CF6" opacity=".15" stroke="#8B5CF6" stroke-width="1.5"/>
    <text x="216" y="93" text-anchor="middle" font-size="8" fill="#8B5CF6" font-family="system-ui" font-weight="700">008</text>
    <text x="216" y="103" text-anchor="middle" font-size="5" fill="#374151" font-family="system-ui">Premium</text>
    <!-- summary -->
    <rect x="24" y="122" width="216" height="28" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1"/>
    <rect x="34" y="130" width="100" height="6" rx="3" fill="#DBEAFE"/>
    <rect x="34" y="130" width="68" height="6" rx="3" fill="#10B981"/>
    <text x="34" y="146" font-size="6" fill="#374151" font-family="system-ui">68% allocated · 22 of 32 booths</text>
    <!-- drag tooltip -->
    <rect x="152" y="156" width="106" height="30" rx="6" fill="#1F2937"/>
    <text x="206" y="170" text-anchor="middle" font-size="6" fill="white" font-family="system-ui">Drag to assign →</text>
    <text x="206" y="180" text-anchor="middle" font-size="5" fill="white" opacity=".5" font-family="system-ui">Click to view details</text>
  </svg>`,

  /* 13. Category Management — tag/category filter chips */
  exh13: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes exhTagSlide { 0%{ transform:translateX(-6px); opacity:0 } 100%{ transform:translateX(0); opacity:1 } }
    </style>
    <!-- search bar -->
    <rect x="28" y="20" width="224" height="24" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <circle cx="42" cy="32" r="5" stroke="#374151" stroke-width="1.5" fill="none"/>
    <line x1="46" y1="36" x2="48" y2="38" stroke="#374151" stroke-width="1.5"/>
    <text x="56" y="35" font-size="7" fill="#374151" opacity=".5" font-family="system-ui">Filter categories...</text>
    <!-- category chips row 1 -->
    <rect x="28" y="54" width="72" height="22" rx="11" fill="#375DFB" opacity=".15" stroke="#375DFB" stroke-width="1.5" style="animation:exhTagSlide .3s ease both"/>
    <text x="64" y="68" text-anchor="middle" font-size="7" fill="#375DFB" font-family="system-ui" font-weight="600">Technology</text>
    <rect x="108" y="54" width="62" height="22" rx="11" fill="#10B981" opacity=".15" stroke="#10B981" stroke-width="1.5" style="animation:exhTagSlide .3s ease .05s both"/>
    <text x="139" y="68" text-anchor="middle" font-size="7" fill="#10B981" font-family="system-ui" font-weight="600">Services</text>
    <rect x="178" y="54" width="72" height="22" rx="11" fill="#F59E0B" opacity=".15" stroke="#F59E0B" stroke-width="1.5" style="animation:exhTagSlide .3s ease .1s both"/>
    <text x="214" y="68" text-anchor="middle" font-size="7" fill="#F59E0B" font-family="system-ui" font-weight="600">Marketing</text>
    <!-- category chips row 2 -->
    <rect x="28" y="84" width="56" height="22" rx="11" fill="#8B5CF6" opacity=".15" stroke="#8B5CF6" stroke-width="1.5" style="animation:exhTagSlide .3s ease .15s both"/>
    <text x="56" y="98" text-anchor="middle" font-size="7" fill="#8B5CF6" font-family="system-ui" font-weight="600">Design</text>
    <rect x="92" y="84" width="68" height="22" rx="11" fill="#EF4444" opacity=".15" stroke="#EF4444" stroke-width="1.5" style="animation:exhTagSlide .3s ease .2s both"/>
    <text x="126" y="98" text-anchor="middle" font-size="7" fill="#EF4444" font-family="system-ui" font-weight="600">Education</text>
    <rect x="168" y="84" width="56" height="22" rx="11" fill="#374151" opacity=".1" stroke="#374151" stroke-width="1.5" style="animation:exhTagSlide .3s ease .25s both"/>
    <text x="196" y="98" text-anchor="middle" font-size="7" fill="#374151" font-family="system-ui" font-weight="600">Other</text>
    <!-- filtered results -->
    <rect x="28" y="118" width="224" height="26" rx="5" fill="white" stroke="#375DFB" stroke-width="1.5"/>
    <circle cx="44" cy="131" r="6" fill="#375DFB" opacity=".15"/>
    <rect x="56" y="126" width="64" height="4" rx="2" fill="#1F2937"/>
    <rect x="56" y="134" width="40" height="3" rx="1.5" fill="#374151" opacity=".4"/>
    <rect x="200" y="126" width="40" height="10" rx="3" fill="#375DFB" opacity=".1"/>
    <text x="220" y="134" text-anchor="middle" font-size="5" fill="#375DFB" font-family="system-ui">Technology</text>
    <rect x="28" y="150" width="224" height="26" rx="5" fill="white" stroke="#DBEAFE" stroke-width="1"/>
    <circle cx="44" cy="163" r="6" fill="#10B981" opacity=".15"/>
    <rect x="56" y="158" width="58" height="4" rx="2" fill="#1F2937"/>
    <rect x="56" y="166" width="36" height="3" rx="1.5" fill="#374151" opacity=".4"/>
    <rect x="200" y="158" width="40" height="10" rx="3" fill="#10B981" opacity=".1"/>
    <text x="220" y="166" text-anchor="middle" font-size="5" fill="#10B981" font-family="system-ui">Services</text>
  </svg>`,

  /* 14. Exhibitor Packages — Standard/Premium/Custom cards stacked */
  exh14: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes exhPopular { 0%,100%{ transform:scale(1) } 50%{ transform:scale(1.02) } }
    </style>
    <!-- Standard -->
    <rect x="18" y="28" width="76" height="152" rx="8" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <rect x="18" y="28" width="76" height="28" rx="8" fill="#DBEAFE"/>
    <rect x="18" y="46" width="76" height="10" fill="#DBEAFE"/>
    <text x="56" y="46" text-anchor="middle" font-size="8" fill="#375DFB" font-family="system-ui" font-weight="700">Standard</text>
    <text x="56" y="76" text-anchor="middle" font-size="14" fill="#1F2937" font-family="system-ui" font-weight="700">$499</text>
    <text x="56" y="88" text-anchor="middle" font-size="6" fill="#374151" font-family="system-ui">/event</text>
    <line x1="28" y1="96" x2="84" y2="96" stroke="#DBEAFE" stroke-width="1"/>
    <text x="36" y="110" font-size="6" fill="#374151" font-family="system-ui">✓ 1 booth</text>
    <text x="36" y="122" font-size="6" fill="#374151" font-family="system-ui">✓ 2 passes</text>
    <text x="36" y="134" font-size="6" fill="#374151" font-family="system-ui">✓ Basic listing</text>
    <text x="36" y="146" font-size="6" fill="#374151" opacity=".4" font-family="system-ui">✗ Lead scan</text>
    <rect x="28" y="158" width="56" height="14" rx="4" fill="white" stroke="#375DFB" stroke-width="1"/>
    <text x="56" y="168" text-anchor="middle" font-size="6" fill="#375DFB" font-family="system-ui" font-weight="600">Select</text>
    <!-- Premium (highlighted) -->
    <rect x="102" y="16" width="76" height="168" rx="8" fill="white" stroke="#375DFB" stroke-width="2" style="animation:exhPopular 3s ease infinite"/>
    <rect x="102" y="16" width="76" height="28" rx="8" fill="#375DFB"/>
    <rect x="102" y="34" width="76" height="10" fill="#375DFB"/>
    <text x="140" y="34" text-anchor="middle" font-size="8" fill="white" font-family="system-ui" font-weight="700">Premium</text>
    <rect x="118" y="12" width="44" height="12" rx="6" fill="#F59E0B"/>
    <text x="140" y="21" text-anchor="middle" font-size="6" fill="white" font-family="system-ui" font-weight="700">POPULAR</text>
    <text x="140" y="66" text-anchor="middle" font-size="14" fill="#1F2937" font-family="system-ui" font-weight="700">$999</text>
    <text x="140" y="78" text-anchor="middle" font-size="6" fill="#374151" font-family="system-ui">/event</text>
    <line x1="112" y1="86" x2="168" y2="86" stroke="#DBEAFE" stroke-width="1"/>
    <text x="120" y="100" font-size="6" fill="#374151" font-family="system-ui">✓ 2 booths</text>
    <text x="120" y="112" font-size="6" fill="#374151" font-family="system-ui">✓ 5 passes</text>
    <text x="120" y="124" font-size="6" fill="#374151" font-family="system-ui">✓ Featured listing</text>
    <text x="120" y="136" font-size="6" fill="#374151" font-family="system-ui">✓ Lead scanning</text>
    <text x="120" y="148" font-size="6" fill="#374151" font-family="system-ui">✓ Analytics</text>
    <rect x="112" y="158" width="56" height="16" rx="5" fill="#375DFB"/>
    <text x="140" y="169" text-anchor="middle" font-size="6" fill="white" font-family="system-ui" font-weight="600">Select</text>
    <!-- Custom -->
    <rect x="186" y="28" width="76" height="152" rx="8" fill="white" stroke="#8B5CF6" stroke-width="1.5"/>
    <rect x="186" y="28" width="76" height="28" rx="8" fill="#8B5CF6" opacity=".15"/>
    <rect x="186" y="46" width="76" height="10" fill="#8B5CF6" opacity=".15"/>
    <text x="224" y="46" text-anchor="middle" font-size="8" fill="#8B5CF6" font-family="system-ui" font-weight="700">Custom</text>
    <text x="224" y="76" text-anchor="middle" font-size="12" fill="#1F2937" font-family="system-ui" font-weight="700">Custom</text>
    <text x="224" y="88" text-anchor="middle" font-size="6" fill="#374151" font-family="system-ui">Contact us</text>
    <line x1="196" y1="96" x2="252" y2="96" stroke="#8B5CF6" opacity=".3" stroke-width="1"/>
    <text x="204" y="110" font-size="6" fill="#374151" font-family="system-ui">✓ Unlimited</text>
    <text x="204" y="122" font-size="6" fill="#374151" font-family="system-ui">✓ VIP passes</text>
    <text x="204" y="134" font-size="6" fill="#374151" font-family="system-ui">✓ Keynote slot</text>
    <text x="204" y="146" font-size="6" fill="#374151" font-family="system-ui">✓ Full analytics</text>
    <rect x="196" y="158" width="56" height="14" rx="4" fill="white" stroke="#8B5CF6" stroke-width="1"/>
    <text x="224" y="168" text-anchor="middle" font-size="6" fill="#8B5CF6" font-family="system-ui" font-weight="600">Contact</text>
  </svg>`,

  /* 15. FAQ Management — Q&A accordion list */
  exh15: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes exhAccordionOpen { 0%{ max-height:0; opacity:0 } 100%{ max-height:40px; opacity:1 } }
      @keyframes exhChevronRotate { 0%{ transform:rotate(0deg) } 100%{ transform:rotate(180deg) } }
    </style>
    <!-- title -->
    <text x="32" y="28" font-size="9" fill="#1F2937" font-family="system-ui" font-weight="700">FAQ Management</text>
    <rect x="200" y="16" width="56" height="16" rx="4" fill="#375DFB"/>
    <text x="228" y="27" text-anchor="middle" font-size="7" fill="white" font-family="system-ui" font-weight="600">+ Add</text>
    <!-- FAQ item 1 (expanded) -->
    <rect x="24" y="40" width="232" height="56" rx="6" fill="white" stroke="#375DFB" stroke-width="1.5"/>
    <circle cx="40" cy="54" r="8" fill="#375DFB" opacity=".1"/>
    <text x="40" y="58" text-anchor="middle" font-size="8" fill="#375DFB" font-family="system-ui" font-weight="700">Q</text>
    <rect x="54" y="50" width="150" height="5" rx="2" fill="#1F2937"/>
    <!-- chevron up -->
    <path d="M236 50 l4 4 4-4" stroke="#375DFB" stroke-width="1.5" fill="none" stroke-linecap="round" transform="rotate(180 240 52)"/>
    <!-- answer area -->
    <rect x="54" y="66" width="186" height="4" rx="2" fill="#374151" opacity=".3"/>
    <rect x="54" y="74" width="160" height="4" rx="2" fill="#374151" opacity=".3"/>
    <rect x="54" y="82" width="120" height="4" rx="2" fill="#374151" opacity=".2"/>
    <!-- FAQ item 2 (collapsed) -->
    <rect x="24" y="104" width="232" height="28" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <circle cx="40" cy="118" r="8" fill="#10B981" opacity=".1"/>
    <text x="40" y="122" text-anchor="middle" font-size="8" fill="#10B981" font-family="system-ui" font-weight="700">Q</text>
    <rect x="54" y="114" width="140" height="5" rx="2" fill="#1F2937"/>
    <path d="M236 114 l4 4 4-4" stroke="#374151" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- FAQ item 3 (collapsed) -->
    <rect x="24" y="140" width="232" height="28" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1.5"/>
    <circle cx="40" cy="154" r="8" fill="#F59E0B" opacity=".1"/>
    <text x="40" y="158" text-anchor="middle" font-size="8" fill="#F59E0B" font-family="system-ui" font-weight="700">Q</text>
    <rect x="54" y="150" width="128" height="5" rx="2" fill="#1F2937"/>
    <path d="M236 150 l4 4 4-4" stroke="#374151" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- FAQ item 4 (collapsed) -->
    <rect x="24" y="176" width="232" height="16" rx="6" fill="white" stroke="#DBEAFE" stroke-width="1" opacity=".5"/>
    <rect x="54" y="180" width="100" height="4" rx="2" fill="#374151" opacity=".2"/>
  </svg>`,

};
