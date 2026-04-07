export const spoIllustrations: Record<string, string> = {
  // 1. Tiered Sponsor Categories — Gold/Silver/Bronze tier badges stacked
  spo1: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes spoTierSlide { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
      @keyframes spoTierGlow { 0%,100%{opacity:0.7} 50%{opacity:1} }
    </style>
    <rect x="30" y="20" width="220" height="160" rx="12" fill="#1F2937" opacity="0.05"/>
    <g style="animation:spoTierSlide 3s ease-in-out infinite">
      <rect x="60" y="30" width="160" height="38" rx="8" fill="#F59E0B" opacity="0.15"/>
      <rect x="62" y="32" width="156" height="34" rx="6" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
      <circle cx="82" cy="49" r="10" fill="#F59E0B" opacity="0.3"/>
      <text x="82" y="53" text-anchor="middle" font-size="10" font-weight="700" fill="#F59E0B">G</text>
      <rect x="100" y="42" width="80" height="6" rx="3" fill="#F59E0B" opacity="0.4"/>
      <rect x="100" y="52" width="50" height="4" rx="2" fill="#F59E0B" opacity="0.25"/>
      <circle cx="210" cy="49" r="5" fill="#F59E0B" style="animation:spoTierGlow 2s ease-in-out infinite"/>
    </g>
    <g style="animation:spoTierSlide 3s ease-in-out 0.3s infinite">
      <rect x="60" y="78" width="160" height="38" rx="8" fill="#374151" opacity="0.1"/>
      <rect x="62" y="80" width="156" height="34" rx="6" fill="none" stroke="#374151" stroke-width="1.5" opacity="0.4"/>
      <circle cx="82" cy="97" r="10" fill="#374151" opacity="0.2"/>
      <text x="82" y="101" text-anchor="middle" font-size="10" font-weight="700" fill="#374151">S</text>
      <rect x="100" y="90" width="80" height="6" rx="3" fill="#374151" opacity="0.25"/>
      <rect x="100" y="100" width="50" height="4" rx="2" fill="#374151" opacity="0.15"/>
      <circle cx="210" cy="97" r="5" fill="#374151" opacity="0.3"/>
    </g>
    <g style="animation:spoTierSlide 3s ease-in-out 0.6s infinite">
      <rect x="60" y="126" width="160" height="38" rx="8" fill="#EF4444" opacity="0.08"/>
      <rect x="62" y="128" width="156" height="34" rx="6" fill="none" stroke="#EF4444" stroke-width="1.5" opacity="0.35"/>
      <circle cx="82" cy="145" r="10" fill="#EF4444" opacity="0.15"/>
      <text x="82" y="149" text-anchor="middle" font-size="10" font-weight="700" fill="#EF4444">B</text>
      <rect x="100" y="138" width="80" height="6" rx="3" fill="#EF4444" opacity="0.2"/>
      <rect x="100" y="148" width="50" height="4" rx="2" fill="#EF4444" opacity="0.12"/>
      <circle cx="210" cy="145" r="5" fill="#EF4444" opacity="0.25"/>
    </g>
  </svg>`,

  // 2. Logo Placement Control — device screens with logo placeholders
  spo2: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes spoLogoFade { 0%,100%{opacity:0.3} 50%{opacity:0.8} }
      @keyframes spoLogoPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }
    </style>
    <rect x="20" y="25" width="130" height="90" rx="6" fill="#1F2937" opacity="0.08"/>
    <rect x="22" y="27" width="126" height="86" rx="4" fill="none" stroke="#374151" stroke-width="1.5" opacity="0.3"/>
    <rect x="30" y="35" width="110" height="12" rx="2" fill="#375DFB" opacity="0.12"/>
    <rect x="45" y="55" width="54" height="36" rx="4" fill="#DBEAFE" stroke="#375DFB" stroke-width="1" stroke-dasharray="3 2" style="animation:spoLogoFade 2.5s ease-in-out infinite"/>
    <path d="M64 67 L72 73 L80 65 L86 75 L58 75Z" fill="#375DFB" opacity="0.3"/>
    <circle cx="66" cy="66" r="3" fill="#375DFB" opacity="0.4"/>
    <rect x="55" y="96" width="34" height="4" rx="2" fill="#374151" opacity="0.2"/>
    <rect x="155" y="40" width="60" height="110" rx="8" fill="#1F2937" opacity="0.08"/>
    <rect x="157" y="42" width="56" height="106" rx="6" fill="none" stroke="#374151" stroke-width="1.5" opacity="0.3"/>
    <rect x="175" y="45" width="20" height="3" rx="1.5" fill="#374151" opacity="0.2"/>
    <rect x="163" y="55" width="44" height="10" rx="2" fill="#375DFB" opacity="0.1"/>
    <rect x="168" y="72" width="34" height="24" rx="3" fill="#DBEAFE" stroke="#375DFB" stroke-width="1" stroke-dasharray="3 2" style="animation:spoLogoFade 2.5s ease-in-out 0.5s infinite"/>
    <path d="M179 80 L185 86 L191 78 L195 88 L173 88Z" fill="#375DFB" opacity="0.3"/>
    <rect x="165" y="102" width="40" height="3" rx="1.5" fill="#374151" opacity="0.15"/>
    <rect x="170" y="108" width="30" height="3" rx="1.5" fill="#374151" opacity="0.1"/>
    <rect x="237" y="55" width="30" height="90" rx="6" fill="#1F2937" opacity="0.06"/>
    <rect x="243" y="70" width="18" height="12" rx="2" fill="#DBEAFE" stroke="#375DFB" stroke-width="0.8" stroke-dasharray="2 2" style="animation:spoLogoFade 2.5s ease-in-out 1s infinite"/>
    <rect x="243" y="90" width="18" height="12" rx="2" fill="#DBEAFE" stroke="#375DFB" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.5"/>
    <rect x="243" y="110" width="18" height="12" rx="2" fill="#DBEAFE" stroke="#375DFB" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.3"/>
  </svg>`,

  // 3. Sponsor Website Links — link icon with URL bar
  spo3: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes spoLinkBounce { 0%,100%{transform:translateX(0)} 50%{transform:translateX(4px)} }
      @keyframes spoLinkGlow { 0%,100%{opacity:0.5} 50%{opacity:1} }
    </style>
    <rect x="40" y="50" width="200" height="100" rx="10" fill="#1F2937" opacity="0.06"/>
    <rect x="40" y="50" width="200" height="28" rx="10" fill="#374151" opacity="0.08"/>
    <circle cx="55" cy="64" r="4" fill="#EF4444" opacity="0.5"/>
    <circle cx="67" cy="64" r="4" fill="#F59E0B" opacity="0.5"/>
    <circle cx="79" cy="64" r="4" fill="#10B981" opacity="0.5"/>
    <rect x="95" y="58" width="130" height="12" rx="6" fill="white" stroke="#374151" stroke-width="1" opacity="0.6"/>
    <rect x="100" y="62" width="6" height="4" rx="1" fill="#10B981" opacity="0.6"/>
    <rect x="110" y="62" width="60" height="4" rx="2" fill="#375DFB" opacity="0.4" style="animation:spoLinkGlow 2s ease-in-out infinite"/>
    <g style="animation:spoLinkBounce 2.5s ease-in-out infinite">
      <circle cx="115" cy="112" r="16" fill="none" stroke="#375DFB" stroke-width="2" opacity="0.5"/>
      <circle cx="145" cy="112" r="16" fill="none" stroke="#375DFB" stroke-width="2" opacity="0.5"/>
      <path d="M125 105 L135 105" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M125 112 L135 112" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M125 119 L135 119" stroke="#375DFB" stroke-width="2.5" stroke-linecap="round"/>
    </g>
    <path d="M170 108 L185 108 L180 103 M185 108 L180 113" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation:spoLinkBounce 2.5s ease-in-out 0.3s infinite"/>
    <rect x="70" y="135" width="50" height="4" rx="2" fill="#374151" opacity="0.15"/>
    <rect x="130" y="135" width="80" height="4" rx="2" fill="#375DFB" opacity="0.2"/>
  </svg>`,

  // 4. Contact Information — contact card with phone/email icons
  spo4: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes spoCardFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
      @keyframes spoIconPop { 0%,100%{transform:scale(1)} 50%{transform:scale(1.1)} }
    </style>
    <rect x="45" y="30" width="190" height="140" rx="12" fill="white" stroke="#374151" stroke-width="1" opacity="0.5" style="animation:spoCardFloat 4s ease-in-out infinite"/>
    <rect x="45" y="30" width="190" height="40" rx="12" fill="#375DFB" opacity="0.08"/>
    <circle cx="80" cy="50" r="16" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
    <circle cx="80" cy="46" r="5" fill="#375DFB" opacity="0.4"/>
    <path d="M70 58 Q80 64 90 58" fill="#375DFB" opacity="0.3"/>
    <rect x="105" y="42" width="70" height="6" rx="3" fill="#1F2937" opacity="0.3"/>
    <rect x="105" y="52" width="50" height="4" rx="2" fill="#374151" opacity="0.15"/>
    <g style="animation:spoIconPop 3s ease-in-out infinite">
      <circle cx="75" cy="90" r="8" fill="#10B981" opacity="0.12"/>
      <path d="M71 87 L71 93 Q71 95 73 95 L77 95 Q79 95 79 93 L79 91 L77 89 L75 90 L73 88Z" fill="#10B981" opacity="0.6"/>
    </g>
    <rect x="90" y="87" width="100" height="5" rx="2.5" fill="#374151" opacity="0.15"/>
    <g style="animation:spoIconPop 3s ease-in-out 0.5s infinite">
      <circle cx="75" cy="115" r="8" fill="#375DFB" opacity="0.12"/>
      <rect x="69" y="111" width="12" height="8" rx="2" fill="none" stroke="#375DFB" stroke-width="1.2" opacity="0.6"/>
      <path d="M69 112 L75 117 L81 112" fill="none" stroke="#375DFB" stroke-width="1" opacity="0.5"/>
    </g>
    <rect x="90" y="112" width="120" height="5" rx="2.5" fill="#374151" opacity="0.15"/>
    <g style="animation:spoIconPop 3s ease-in-out 1s infinite">
      <circle cx="75" cy="140" r="8" fill="#F59E0B" opacity="0.12"/>
      <circle cx="75" cy="140" r="4" fill="none" stroke="#F59E0B" stroke-width="1.2" opacity="0.6"/>
      <circle cx="75" cy="140" r="1.5" fill="#F59E0B" opacity="0.5"/>
    </g>
    <rect x="90" y="137" width="80" height="5" rx="2.5" fill="#374151" opacity="0.15"/>
  </svg>`,

  // 5. Sponsor Description — text block with rich formatting indicators
  spo5: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes spoTypeCursor { 0%,50%{opacity:1} 51%,100%{opacity:0} }
      @keyframes spoTextFade { 0%{width:0} 100%{width:100%} }
    </style>
    <rect x="35" y="20" width="210" height="160" rx="10" fill="#1F2937" opacity="0.05"/>
    <rect x="45" y="28" width="190" height="26" rx="4" fill="#374151" opacity="0.06"/>
    <text x="52" y="45" font-size="10" font-weight="700" fill="#1F2937" opacity="0.5">B</text>
    <text x="66" y="45" font-size="10" font-style="italic" fill="#1F2937" opacity="0.5">I</text>
    <text x="78" y="45" font-size="10" text-decoration="underline" fill="#1F2937" opacity="0.5">U</text>
    <rect x="88" y="38" width="1" height="12" fill="#374151" opacity="0.2"/>
    <rect x="95" y="40" width="12" height="8" rx="1" fill="none" stroke="#374151" stroke-width="1" opacity="0.3"/>
    <rect x="112" y="40" width="12" height="8" rx="1" fill="none" stroke="#374151" stroke-width="1" opacity="0.3"/>
    <rect x="129" y="40" width="12" height="8" rx="1" fill="none" stroke="#374151" stroke-width="1" opacity="0.3"/>
    <rect x="50" y="64" width="160" height="5" rx="2.5" fill="#1F2937" opacity="0.25"/>
    <rect x="50" y="75" width="140" height="5" rx="2.5" fill="#1F2937" opacity="0.18"/>
    <rect x="50" y="86" width="170" height="5" rx="2.5" fill="#1F2937" opacity="0.2"/>
    <rect x="50" y="97" width="100" height="5" rx="2.5" fill="#1F2937" opacity="0.15"/>
    <rect x="50" y="114" width="50" height="6" rx="3" fill="#375DFB" opacity="0.3"/>
    <rect x="50" y="126" width="155" height="5" rx="2.5" fill="#1F2937" opacity="0.2"/>
    <rect x="50" y="137" width="130" height="5" rx="2.5" fill="#1F2937" opacity="0.16"/>
    <rect x="50" y="148" width="160" height="5" rx="2.5" fill="#1F2937" opacity="0.2"/>
    <rect x="50" y="159" width="80" height="5" rx="2.5" fill="#1F2937" opacity="0.13"/>
    <rect x="132" y="159" width="2" height="8" fill="#375DFB" style="animation:spoTypeCursor 1s step-end infinite"/>
  </svg>`,

  // 6. Website Sponsor Section — website mockup with tier-organized logos
  spo6: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes spoWebScroll { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
      @keyframes spoLogoShine { 0%{opacity:0.2} 50%{opacity:0.6} 100%{opacity:0.2} }
    </style>
    <rect x="30" y="15" width="220" height="170" rx="8" fill="#1F2937" opacity="0.06"/>
    <rect x="30" y="15" width="220" height="22" rx="8" fill="#374151" opacity="0.08"/>
    <circle cx="44" cy="26" r="3" fill="#EF4444" opacity="0.4"/>
    <circle cx="54" cy="26" r="3" fill="#F59E0B" opacity="0.4"/>
    <circle cx="64" cy="26" r="3" fill="#10B981" opacity="0.4"/>
    <rect x="100" y="22" width="80" height="8" rx="4" fill="#374151" opacity="0.08"/>
    <text x="140" y="52" text-anchor="middle" font-size="7" font-weight="600" fill="#F59E0B" opacity="0.7">GOLD SPONSORS</text>
    <g style="animation:spoLogoShine 3s ease-in-out infinite">
      <rect x="55" y="58" width="50" height="28" rx="4" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1"/>
      <rect x="67" y="66" width="26" height="4" rx="2" fill="#F59E0B" opacity="0.4"/>
      <rect x="70" y="74" width="20" height="3" rx="1.5" fill="#F59E0B" opacity="0.25"/>
    </g>
    <g style="animation:spoLogoShine 3s ease-in-out 0.3s infinite">
      <rect x="115" y="58" width="50" height="28" rx="4" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1"/>
      <rect x="127" y="66" width="26" height="4" rx="2" fill="#F59E0B" opacity="0.4"/>
      <rect x="130" y="74" width="20" height="3" rx="1.5" fill="#F59E0B" opacity="0.25"/>
    </g>
    <g style="animation:spoLogoShine 3s ease-in-out 0.6s infinite">
      <rect x="175" y="58" width="50" height="28" rx="4" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1"/>
      <rect x="187" y="66" width="26" height="4" rx="2" fill="#F59E0B" opacity="0.4"/>
      <rect x="190" y="74" width="20" height="3" rx="1.5" fill="#F59E0B" opacity="0.25"/>
    </g>
    <text x="140" y="102" text-anchor="middle" font-size="6" font-weight="600" fill="#374151" opacity="0.5">SILVER SPONSORS</text>
    <rect x="60" y="108" width="36" height="20" rx="3" fill="#374151" opacity="0.06" stroke="#374151" stroke-width="0.8" opacity="0.2"/>
    <rect x="102" y="108" width="36" height="20" rx="3" fill="#374151" opacity="0.06" stroke="#374151" stroke-width="0.8" opacity="0.2"/>
    <rect x="144" y="108" width="36" height="20" rx="3" fill="#374151" opacity="0.06" stroke="#374151" stroke-width="0.8" opacity="0.2"/>
    <rect x="186" y="108" width="36" height="20" rx="3" fill="#374151" opacity="0.06" stroke="#374151" stroke-width="0.8" opacity="0.2"/>
    <text x="140" y="145" text-anchor="middle" font-size="6" font-weight="600" fill="#EF4444" opacity="0.4">BRONZE SPONSORS</text>
    <rect x="50" y="150" width="28" height="16" rx="2" fill="#EF4444" opacity="0.04" stroke="#EF4444" stroke-width="0.6" opacity="0.2"/>
    <rect x="84" y="150" width="28" height="16" rx="2" fill="#EF4444" opacity="0.04" stroke="#EF4444" stroke-width="0.6" opacity="0.2"/>
    <rect x="118" y="150" width="28" height="16" rx="2" fill="#EF4444" opacity="0.04" stroke="#EF4444" stroke-width="0.6" opacity="0.2"/>
    <rect x="152" y="150" width="28" height="16" rx="2" fill="#EF4444" opacity="0.04" stroke="#EF4444" stroke-width="0.6" opacity="0.2"/>
    <rect x="186" y="150" width="28" height="16" rx="2" fill="#EF4444" opacity="0.04" stroke="#EF4444" stroke-width="0.6" opacity="0.2"/>
  </svg>`,

  // 7. Mobile App Sponsor Logos — phone screen with sponsor logos
  spo7: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes spoAppScroll { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
      @keyframes spoAppPing { 0%{r:3} 50%{r:5;opacity:0.3} 100%{r:3} }
    </style>
    <rect x="90" y="10" width="100" height="180" rx="14" fill="#1F2937" opacity="0.08"/>
    <rect x="92" y="12" width="96" height="176" rx="12" fill="none" stroke="#374151" stroke-width="1.5" opacity="0.3"/>
    <rect x="120" y="16" width="40" height="4" rx="2" fill="#374151" opacity="0.15"/>
    <rect x="98" y="28" width="84" height="14" rx="3" fill="#375DFB" opacity="0.1"/>
    <rect x="105" y="33" width="50" height="4" rx="2" fill="#375DFB" opacity="0.3"/>
    <text x="140" y="56" text-anchor="middle" font-size="6" font-weight="600" fill="#374151" opacity="0.5">Sponsors</text>
    <g style="animation:spoAppScroll 4s ease-in-out infinite">
      <rect x="100" y="62" width="36" height="28" rx="4" fill="#FEF3C7" stroke="#F59E0B" stroke-width="0.8"/>
      <rect x="108" y="70" width="20" height="4" rx="2" fill="#F59E0B" opacity="0.4"/>
      <rect x="110" y="78" width="16" height="3" rx="1.5" fill="#F59E0B" opacity="0.2"/>
      <rect x="144" y="62" width="36" height="28" rx="4" fill="#FEF3C7" stroke="#F59E0B" stroke-width="0.8"/>
      <rect x="152" y="70" width="20" height="4" rx="2" fill="#F59E0B" opacity="0.4"/>
      <rect x="154" y="78" width="16" height="3" rx="1.5" fill="#F59E0B" opacity="0.2"/>
      <rect x="100" y="98" width="36" height="28" rx="4" fill="#374151" opacity="0.05" stroke="#374151" stroke-width="0.8" opacity="0.25"/>
      <rect x="108" y="106" width="20" height="4" rx="2" fill="#374151" opacity="0.2"/>
      <rect x="110" y="114" width="16" height="3" rx="1.5" fill="#374151" opacity="0.1"/>
      <rect x="144" y="98" width="36" height="28" rx="4" fill="#374151" opacity="0.05" stroke="#374151" stroke-width="0.8" opacity="0.25"/>
      <rect x="152" y="106" width="20" height="4" rx="2" fill="#374151" opacity="0.2"/>
      <rect x="154" y="114" width="16" height="3" rx="1.5" fill="#374151" opacity="0.1"/>
      <rect x="100" y="134" width="36" height="28" rx="4" fill="#EF4444" opacity="0.04" stroke="#EF4444" stroke-width="0.6" opacity="0.2"/>
      <rect x="144" y="134" width="36" height="28" rx="4" fill="#EF4444" opacity="0.04" stroke="#EF4444" stroke-width="0.6" opacity="0.2"/>
    </g>
    <rect x="98" y="170" width="84" height="12" rx="3" fill="#374151" opacity="0.05"/>
    <circle cx="118" cy="176" r="2" fill="#374151" opacity="0.2"/>
    <circle cx="140" cy="176" r="2" fill="#375DFB" opacity="0.4"/>
    <circle cx="162" cy="176" r="2" fill="#374151" opacity="0.2"/>
  </svg>`,

  // 8. Badge Sponsor Branding — badge/lanyard with sponsor logo area
  spo8: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes spoBadgeSwing { 0%,100%{transform:rotate(0deg)} 25%{transform:rotate(2deg)} 75%{transform:rotate(-2deg)} }
      @keyframes spoBadgeShine { 0%,100%{opacity:0.3} 50%{opacity:0.7} }
    </style>
    <g style="animation:spoBadgeSwing 4s ease-in-out infinite;transform-origin:140px 10px">
      <line x1="140" y1="0" x2="140" y2="38" stroke="#375DFB" stroke-width="2.5" opacity="0.3"/>
      <rect x="100" y="8" width="80" height="12" rx="6" fill="#375DFB" opacity="0.15"/>
      <rect x="95" y="38" width="90" height="140" rx="8" fill="white" stroke="#374151" stroke-width="1.2" opacity="0.5"/>
      <rect x="95" y="38" width="90" height="30" rx="8" fill="#375DFB" opacity="0.08"/>
      <text x="140" y="58" text-anchor="middle" font-size="7" font-weight="600" fill="#375DFB" opacity="0.6">TECH SUMMIT 2026</text>
      <circle cx="140" cy="85" r="14" fill="#DBEAFE" stroke="#375DFB" stroke-width="1"/>
      <circle cx="140" cy="82" r="5" fill="#375DFB" opacity="0.3"/>
      <path d="M131 92 Q140 98 149 92" fill="#375DFB" opacity="0.2"/>
      <rect x="115" y="106" width="50" height="5" rx="2.5" fill="#1F2937" opacity="0.3"/>
      <rect x="120" y="115" width="40" height="4" rx="2" fill="#374151" opacity="0.15"/>
      <rect x="102" y="132" width="76" height="22" rx="4" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1" stroke-dasharray="3 2" style="animation:spoBadgeShine 3s ease-in-out infinite"/>
      <text x="140" y="140" text-anchor="middle" font-size="5" fill="#F59E0B" opacity="0.5">SPONSOR</text>
      <rect x="118" y="144" width="44" height="4" rx="2" fill="#F59E0B" opacity="0.25"/>
      <circle cx="140" y="165" r="4" fill="#375DFB" opacity="0.15"/>
    </g>
  </svg>`,

  // 9. Email Sponsor Mentions — email template with sponsor block
  spo9: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes spoEmailSlide { 0%{transform:translateY(8px);opacity:0} 20%,100%{transform:translateY(0);opacity:1} }
      @keyframes spoEmailHighlight { 0%,100%{fill-opacity:0.08} 50%{fill-opacity:0.15} }
    </style>
    <rect x="45" y="15" width="190" height="170" rx="8" fill="white" stroke="#374151" stroke-width="1" opacity="0.4"/>
    <rect x="45" y="15" width="190" height="35" rx="8" fill="#375DFB" opacity="0.06"/>
    <rect x="60" y="25" width="60" height="6" rx="3" fill="#375DFB" opacity="0.3"/>
    <rect x="60" y="35" width="100" height="4" rx="2" fill="#374151" opacity="0.12"/>
    <rect x="200" y="25" width="20" height="14" rx="3" fill="#375DFB" opacity="0.08"/>
    <g style="animation:spoEmailSlide 2s ease-out">
      <rect x="55" y="58" width="170" height="5" rx="2.5" fill="#1F2937" opacity="0.2"/>
      <rect x="55" y="68" width="140" height="5" rx="2.5" fill="#1F2937" opacity="0.15"/>
      <rect x="55" y="78" width="160" height="5" rx="2.5" fill="#1F2937" opacity="0.18"/>
      <rect x="55" y="88" width="90" height="5" rx="2.5" fill="#1F2937" opacity="0.12"/>
    </g>
    <rect x="55" y="100" width="170" height="1" fill="#374151" opacity="0.1"/>
    <rect x="55" y="108" width="170" height="55" rx="6" fill="#F59E0B" style="animation:spoEmailHighlight 3s ease-in-out infinite"/>
    <text x="140" y="120" text-anchor="middle" font-size="6" font-weight="600" fill="#F59E0B" opacity="0.7">SPONSORED BY</text>
    <rect x="80" y="128" width="40" height="22" rx="3" fill="white" opacity="0.5"/>
    <rect x="88" y="134" width="24" height="4" rx="2" fill="#F59E0B" opacity="0.4"/>
    <rect x="90" y="142" width="18" height="3" rx="1.5" fill="#F59E0B" opacity="0.2"/>
    <rect x="135" y="128" width="40" height="22" rx="3" fill="white" opacity="0.5"/>
    <rect x="143" y="134" width="24" height="4" rx="2" fill="#F59E0B" opacity="0.4"/>
    <rect x="145" y="142" width="18" height="3" rx="1.5" fill="#F59E0B" opacity="0.2"/>
    <rect x="55" y="170" width="170" height="1" fill="#374151" opacity="0.1"/>
    <rect x="100" y="176" width="80" height="4" rx="2" fill="#374151" opacity="0.1"/>
  </svg>`,

  // 10. Digital Signage Placement — wide screen with sponsor rotation
  spo10: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes spoSignageRotate { 0%,30%{opacity:1} 33%,63%{opacity:0} 66%,96%{opacity:0} 100%{opacity:1} }
      @keyframes spoSignageRotate2 { 0%,30%{opacity:0} 33%,63%{opacity:1} 66%,96%{opacity:0} 100%{opacity:0} }
      @keyframes spoSignageRotate3 { 0%,30%{opacity:0} 33%,63%{opacity:0} 66%,96%{opacity:1} 100%{opacity:0} }
    </style>
    <rect x="25" y="30" width="230" height="115" rx="6" fill="#1F2937" opacity="0.08"/>
    <rect x="27" y="32" width="226" height="111" rx="4" fill="none" stroke="#374151" stroke-width="2" opacity="0.25"/>
    <rect x="120" y="145" width="40" height="6" rx="1" fill="#374151" opacity="0.15"/>
    <rect x="110" y="151" width="60" height="4" rx="2" fill="#374151" opacity="0.1"/>
    <rect x="35" y="40" width="210" height="24" rx="4" fill="#375DFB" opacity="0.08"/>
    <rect x="50" y="48" width="80" height="6" rx="3" fill="#375DFB" opacity="0.25"/>
    <rect x="180" y="46" width="50" height="10" rx="3" fill="#375DFB" opacity="0.1"/>
    <g style="animation:spoSignageRotate 6s linear infinite">
      <rect x="60" y="76" width="160" height="50" rx="6" fill="#FEF3C7" opacity="0.5"/>
      <rect x="90" y="86" width="100" height="8" rx="4" fill="#F59E0B" opacity="0.4"/>
      <rect x="100" y="100" width="80" height="5" rx="2.5" fill="#F59E0B" opacity="0.2"/>
      <rect x="110" y="110" width="60" height="4" rx="2" fill="#F59E0B" opacity="0.15"/>
    </g>
    <g style="animation:spoSignageRotate2 6s linear infinite">
      <rect x="60" y="76" width="160" height="50" rx="6" fill="#DBEAFE" opacity="0.5"/>
      <rect x="90" y="86" width="100" height="8" rx="4" fill="#375DFB" opacity="0.4"/>
      <rect x="100" y="100" width="80" height="5" rx="2.5" fill="#375DFB" opacity="0.2"/>
      <rect x="110" y="110" width="60" height="4" rx="2" fill="#375DFB" opacity="0.15"/>
    </g>
    <g style="animation:spoSignageRotate3 6s linear infinite">
      <rect x="60" y="76" width="160" height="50" rx="6" fill="#D1FAE5" opacity="0.5"/>
      <rect x="90" y="86" width="100" height="8" rx="4" fill="#10B981" opacity="0.4"/>
      <rect x="100" y="100" width="80" height="5" rx="2.5" fill="#10B981" opacity="0.2"/>
      <rect x="110" y="110" width="60" height="4" rx="2" fill="#10B981" opacity="0.15"/>
    </g>
    <circle cx="130" cy="170" r="3" fill="#F59E0B" opacity="0.5"/>
    <circle cx="140" cy="170" r="3" fill="#375DFB" opacity="0.5"/>
    <circle cx="150" cy="170" r="3" fill="#10B981" opacity="0.5"/>
  </svg>`,

  // 11. Sponsor Impression Tracking — eye icon + impression counter
  spo11: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes spoEyeBlink { 0%,40%,60%,100%{transform:scaleY(1)} 50%{transform:scaleY(0.1)} }
      @keyframes spoCountUp { 0%{opacity:0;transform:translateY(5px)} 100%{opacity:1;transform:translateY(0)} }
    </style>
    <rect x="30" y="25" width="220" height="150" rx="12" fill="#1F2937" opacity="0.04"/>
    <g style="animation:spoEyeBlink 4s ease-in-out infinite;transform-origin:100px 75px">
      <ellipse cx="100" cy="75" rx="40" ry="25" fill="none" stroke="#375DFB" stroke-width="2.5" opacity="0.4"/>
      <circle cx="100" cy="75" r="14" fill="#DBEAFE" stroke="#375DFB" stroke-width="1.5"/>
      <circle cx="100" cy="75" r="7" fill="#375DFB" opacity="0.6"/>
      <circle cx="103" cy="72" r="2.5" fill="white" opacity="0.7"/>
    </g>
    <g style="animation:spoCountUp 2s ease-out">
      <rect x="160" y="40" width="80" height="35" rx="8" fill="#D1FAE5" stroke="#10B981" stroke-width="1"/>
      <text x="200" y="55" text-anchor="middle" font-size="7" fill="#10B981" opacity="0.6">Impressions</text>
      <text x="200" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="#10B981" opacity="0.8">24.5K</text>
    </g>
    <rect x="50" y="115" width="180" height="50" rx="6" fill="#375DFB" opacity="0.04"/>
    <rect x="60" y="122" width="30" height="22" rx="3" fill="#375DFB" opacity="0.1"/>
    <rect x="60" y="148" width="30" height="4" rx="2" fill="#374151" opacity="0.15"/>
    <rect x="100" y="122" width="30" height="30" rx="3" fill="#375DFB" opacity="0.15"/>
    <rect x="100" y="148" width="30" height="4" rx="2" fill="#374151" opacity="0.15"/>
    <rect x="140" y="122" width="30" height="18" rx="3" fill="#375DFB" opacity="0.08"/>
    <rect x="140" y="148" width="30" height="4" rx="2" fill="#374151" opacity="0.15"/>
    <rect x="180" y="122" width="30" height="35" rx="3" fill="#375DFB" opacity="0.2"/>
    <rect x="180" y="148" width="30" height="4" rx="2" fill="#374151" opacity="0.15"/>
    <text x="60" y="143" text-anchor="start" font-size="6" fill="#375DFB" opacity="0.4">Mon</text>
    <text x="100" y="143" text-anchor="start" font-size="6" fill="#375DFB" opacity="0.4">Tue</text>
    <text x="140" y="143" text-anchor="start" font-size="6" fill="#375DFB" opacity="0.4">Wed</text>
    <text x="180" y="143" text-anchor="start" font-size="6" fill="#375DFB" opacity="0.4">Thu</text>
  </svg>`,

  // 12. Click-Through Analytics — cursor clicking + analytics chart
  spo12: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes spoClick { 0%,70%{transform:scale(1)} 80%{transform:scale(0.9)} 90%,100%{transform:scale(1)} }
      @keyframes spoRipple { 0%{r:0;opacity:0.6} 100%{r:18;opacity:0} }
      @keyframes spoChartGrow { 0%{transform:scaleY(0)} 100%{transform:scaleY(1)} }
    </style>
    <rect x="25" y="20" width="230" height="160" rx="10" fill="#1F2937" opacity="0.04"/>
    <g style="animation:spoClick 2s ease-in-out infinite;transform-origin:75px 70px">
      <path d="M68 55 L68 85 L76 78 L85 90 L90 87 L81 75 L90 72Z" fill="#375DFB" opacity="0.6"/>
      <circle cx="68" cy="55" r="0" fill="#375DFB" style="animation:spoRipple 2s ease-out infinite"/>
    </g>
    <rect x="50" y="95" width="50" height="8" rx="4" fill="#375DFB" opacity="0.15"/>
    <text x="75" y="101" text-anchor="middle" font-size="6" fill="#375DFB" opacity="0.5">3.2% CTR</text>
    <rect x="130" y="30" width="115" height="80" rx="6" fill="#375DFB" opacity="0.04"/>
    <polyline points="140,95 155,80 170,85 185,60 200,50 215,55 230,35" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="140,95 155,80 170,85 185,60 200,50 215,55 230,35" fill="url(#spoGrad)" opacity="0.15"/>
    <defs><linearGradient id="spoGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#10B981"/><stop offset="100%" stop-color="#10B981" stop-opacity="0"/></linearGradient></defs>
    <circle cx="230" cy="35" r="3" fill="#10B981" opacity="0.7"/>
    <rect x="130" y="95" width="115" height="1" fill="#374151" opacity="0.1"/>
    <rect x="40" y="120" width="200" height="55" rx="6" fill="#375DFB" opacity="0.04"/>
    <rect x="55" y="130" width="40" height="8" rx="2" fill="#374151" opacity="0.1"/>
    <text x="75" y="136" text-anchor="middle" font-size="5" fill="#374151" opacity="0.5">Sponsor A</text>
    <rect x="55" y="142" width="40" height="8" rx="4" fill="#10B981" opacity="0.25"/>
    <rect x="55" y="155" width="40" height="6" rx="2" fill="#374151" opacity="0.06"/>
    <text x="75" y="160" text-anchor="middle" font-size="5" fill="#374151" opacity="0.4">4.1%</text>
    <rect x="120" y="130" width="40" height="8" rx="2" fill="#374151" opacity="0.1"/>
    <text x="140" y="136" text-anchor="middle" font-size="5" fill="#374151" opacity="0.5">Sponsor B</text>
    <rect x="120" y="142" width="30" height="8" rx="4" fill="#375DFB" opacity="0.2"/>
    <rect x="120" y="155" width="40" height="6" rx="2" fill="#374151" opacity="0.06"/>
    <text x="140" y="160" text-anchor="middle" font-size="5" fill="#374151" opacity="0.4">2.8%</text>
    <rect x="185" y="130" width="40" height="8" rx="2" fill="#374151" opacity="0.1"/>
    <text x="205" y="136" text-anchor="middle" font-size="5" fill="#374151" opacity="0.5">Sponsor C</text>
    <rect x="185" y="142" width="35" height="8" rx="4" fill="#F59E0B" opacity="0.25"/>
    <rect x="185" y="155" width="40" height="6" rx="2" fill="#374151" opacity="0.06"/>
    <text x="205" y="160" text-anchor="middle" font-size="5" fill="#374151" opacity="0.4">3.5%</text>
  </svg>`,

  // 13. Partner Spotlight Features — spotlight/star highlight block
  spo13: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes spoSpotlight { 0%,100%{opacity:0.15} 50%{opacity:0.35} }
      @keyframes spoStarSpin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
      @keyframes spoStarPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.15)} }
    </style>
    <ellipse cx="140" cy="95" rx="90" ry="70" fill="#F59E0B" style="animation:spoSpotlight 3s ease-in-out infinite"/>
    <path d="M140 15 L120 10 L125 30 L105 20 L115 38" stroke="#F59E0B" stroke-width="1" opacity="0.2" stroke-linecap="round"/>
    <path d="M140 15 L160 10 L155 30 L175 20 L165 38" stroke="#F59E0B" stroke-width="1" opacity="0.2" stroke-linecap="round"/>
    <rect x="80" y="50" width="120" height="100" rx="10" fill="white" stroke="#F59E0B" stroke-width="1.5" opacity="0.7"/>
    <rect x="80" y="50" width="120" height="28" rx="10" fill="#FEF3C7"/>
    <g style="animation:spoStarPulse 2s ease-in-out infinite;transform-origin:140px 64px">
      <polygon points="140,52 143,60 152,60 145,66 148,74 140,69 132,74 135,66 128,60 137,60" fill="#F59E0B" opacity="0.7"/>
    </g>
    <circle cx="140" cy="100" r="14" fill="#DBEAFE" stroke="#375DFB" stroke-width="1"/>
    <rect x="132" y="95" width="16" height="10" rx="2" fill="#375DFB" opacity="0.3"/>
    <rect x="105" y="122" width="70" height="5" rx="2.5" fill="#1F2937" opacity="0.25"/>
    <rect x="110" y="132" width="60" height="4" rx="2" fill="#374151" opacity="0.12"/>
    <rect x="100" y="142" width="80" height="4" rx="2" fill="#374151" opacity="0.1"/>
    <circle cx="45" cy="50" r="3" fill="#F59E0B" opacity="0.2" style="animation:spoStarSpin 8s linear infinite;transform-origin:45px 50px"/>
    <circle cx="235" cy="60" r="2" fill="#F59E0B" opacity="0.15"/>
    <circle cx="55" cy="160" r="2" fill="#F59E0B" opacity="0.1"/>
    <circle cx="225" cy="150" r="3" fill="#F59E0B" opacity="0.15"/>
  </svg>`,

  // 14. Sponsor Comparison Reports — side-by-side bar chart comparison
  spo14: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes spoBarGrow { 0%{transform:scaleY(0)} 100%{transform:scaleY(1)} }
      @keyframes spoCompareSlide { 0%{opacity:0;transform:translateX(-10px)} 100%{opacity:1;transform:translateX(0)} }
    </style>
    <rect x="25" y="15" width="230" height="170" rx="10" fill="#1F2937" opacity="0.04"/>
    <rect x="35" y="22" width="80" height="6" rx="3" fill="#1F2937" opacity="0.25"/>
    <rect x="35" y="32" width="50" height="4" rx="2" fill="#374151" opacity="0.12"/>
    <circle cx="200" cy="28" r="5" fill="#375DFB" opacity="0.1"/>
    <rect x="197" y="26" width="6" height="4" rx="1" fill="#375DFB" opacity="0.3"/>
    <text x="212" y="30" font-size="5" fill="#374151" opacity="0.4">Sponsor A</text>
    <circle cx="200" cy="40" r="5" fill="#10B981" opacity="0.1"/>
    <rect x="197" y="38" width="6" height="4" rx="1" fill="#10B981" opacity="0.3"/>
    <text x="212" y="42" font-size="5" fill="#374151" opacity="0.4">Sponsor B</text>
    <line x1="50" y1="55" x2="50" y2="160" stroke="#374151" stroke-width="0.5" opacity="0.2"/>
    <line x1="50" y1="160" x2="240" y2="160" stroke="#374151" stroke-width="0.5" opacity="0.2"/>
    <g style="animation:spoBarGrow 1.5s ease-out;transform-origin:bottom">
      <rect x="60" y="85" width="16" height="75" rx="3" fill="#375DFB" opacity="0.35"/>
      <rect x="78" y="100" width="16" height="60" rx="3" fill="#10B981" opacity="0.35"/>
      <text x="77" y="172" text-anchor="middle" font-size="5" fill="#374151" opacity="0.4">Views</text>
    </g>
    <g style="animation:spoBarGrow 1.5s ease-out 0.2s;transform-origin:bottom">
      <rect x="110" y="105" width="16" height="55" rx="3" fill="#375DFB" opacity="0.35"/>
      <rect x="128" y="70" width="16" height="90" rx="3" fill="#10B981" opacity="0.35"/>
      <text x="127" y="172" text-anchor="middle" font-size="5" fill="#374151" opacity="0.4">Clicks</text>
    </g>
    <g style="animation:spoBarGrow 1.5s ease-out 0.4s;transform-origin:bottom">
      <rect x="160" y="115" width="16" height="45" rx="3" fill="#375DFB" opacity="0.35"/>
      <rect x="178" y="95" width="16" height="65" rx="3" fill="#10B981" opacity="0.35"/>
      <text x="177" y="172" text-anchor="middle" font-size="5" fill="#374151" opacity="0.4">Leads</text>
    </g>
    <g style="animation:spoBarGrow 1.5s ease-out 0.6s;transform-origin:bottom">
      <rect x="210" y="78" width="16" height="82" rx="3" fill="#375DFB" opacity="0.35"/>
      <rect x="228" y="90" width="16" height="70" rx="3" fill="#10B981" opacity="0.35"/>
      <text x="227" y="172" text-anchor="middle" font-size="5" fill="#374151" opacity="0.4">ROI</text>
    </g>
  </svg>`,

  // 15. Sponsorship Value Reporting — PDF document with charts
  spo15: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes spoDocFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
      @keyframes spoPieRotate { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
      @keyframes spoCheckPop { 0%{transform:scale(0)} 50%{transform:scale(1.2)} 100%{transform:scale(1)} }
    </style>
    <g style="animation:spoDocFloat 4s ease-in-out infinite">
      <path d="M75 20 L195 20 L205 30 L205 180 L75 180Z" fill="white" stroke="#374151" stroke-width="1" opacity="0.5"/>
      <path d="M195 20 L195 30 L205 30" fill="none" stroke="#374151" stroke-width="1" opacity="0.3"/>
      <rect x="85" y="30" width="40" height="5" rx="2.5" fill="#EF4444" opacity="0.6"/>
      <text x="88" y="34" font-size="5" font-weight="700" fill="white">PDF</text>
      <rect x="85" y="42" width="90" height="6" rx="3" fill="#1F2937" opacity="0.25"/>
      <rect x="85" y="52" width="60" height="4" rx="2" fill="#374151" opacity="0.12"/>
      <g style="transform-origin:120px 85px">
        <circle cx="120" cy="85" r="20" fill="#DBEAFE" stroke="#375DFB" stroke-width="1"/>
        <path d="M120 85 L120 65 A20 20 0 0 1 138 78Z" fill="#375DFB" opacity="0.5"/>
        <path d="M120 85 L138 78 A20 20 0 0 1 130 103Z" fill="#10B981" opacity="0.5"/>
        <path d="M120 85 L130 103 A20 20 0 0 1 107 100Z" fill="#F59E0B" opacity="0.5"/>
      </g>
      <rect x="150" y="72" width="6" height="6" rx="1" fill="#375DFB" opacity="0.4"/>
      <rect x="159" y="73" width="30" height="4" rx="2" fill="#374151" opacity="0.15"/>
      <rect x="150" y="82" width="6" height="6" rx="1" fill="#10B981" opacity="0.4"/>
      <rect x="159" y="83" width="25" height="4" rx="2" fill="#374151" opacity="0.15"/>
      <rect x="150" y="92" width="6" height="6" rx="1" fill="#F59E0B" opacity="0.4"/>
      <rect x="159" y="93" width="28" height="4" rx="2" fill="#374151" opacity="0.15"/>
      <line x1="85" y1="115" x2="195" y2="115" stroke="#374151" stroke-width="0.5" opacity="0.15"/>
      <rect x="85" y="122" width="50" height="5" rx="2.5" fill="#1F2937" opacity="0.2"/>
      <rect x="90" y="134" width="100" height="30" rx="4" fill="#D1FAE5" opacity="0.4"/>
      <rect x="96" y="140" width="8" height="18" rx="2" fill="#10B981" opacity="0.3"/>
      <rect x="108" y="146" width="8" height="12" rx="2" fill="#10B981" opacity="0.25"/>
      <rect x="120" y="138" width="8" height="20" rx="2" fill="#10B981" opacity="0.35"/>
      <rect x="132" y="150" width="8" height="8" rx="2" fill="#10B981" opacity="0.2"/>
      <rect x="144" y="142" width="8" height="16" rx="2" fill="#10B981" opacity="0.3"/>
      <rect x="156" y="136" width="8" height="22" rx="2" fill="#10B981" opacity="0.4"/>
      <rect x="168" y="144" width="8" height="14" rx="2" fill="#10B981" opacity="0.28"/>
      <rect x="85" y="170" width="110" height="4" rx="2" fill="#374151" opacity="0.1"/>
    </g>
    <g style="animation:spoCheckPop 1s ease-out">
      <circle cx="225" cy="35" r="16" fill="#D1FAE5" stroke="#10B981" stroke-width="1.5"/>
      <path d="M217 35 L222 40 L233 29" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </svg>`,
};
