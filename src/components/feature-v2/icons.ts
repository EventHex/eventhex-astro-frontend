/* ═══════════════════════════════════════════════════════════════
   Shared SVG Icons for FeatureV2 pages
   All icons are 22×22, viewBox 0 0 24 24, stroke #375DFB.
   Usage: import { icons } from "./icons"; then icons.users etc.
   ═══════════════════════════════════════════════════════════════ */

const c = "#375DFB";

export const icons: Record<string, string> = {
  /* ── General / UI ── */
  users: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="4" stroke="${c}" stroke-width="2"/><path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" stroke="${c}" stroke-width="2" stroke-linecap="round"/><circle cx="17" cy="7" r="3" stroke="${c}" stroke-width="1.5" opacity="0.6"/><path d="M20 21v-1.5a3 3 0 00-2-2.83" stroke="${c}" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/></svg>`,
  lock: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="${c}" stroke-width="2"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="${c}" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16" r="1.5" fill="${c}"/></svg>`,
  shield: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  settings: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="${c}" stroke-width="2"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 008.58 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 8.58a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09c-.658.003-1.25.396-1.51 1z" stroke="${c}" stroke-width="2"/></svg>`,
  notification: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.73 21a2 2 0 01-3.46 0" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
  download: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  upload: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  share: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="18" cy="5" r="3" stroke="${c}" stroke-width="2"/><circle cx="6" cy="12" r="3" stroke="${c}" stroke-width="2"/><circle cx="18" cy="19" r="3" stroke="${c}" stroke-width="2"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="${c}" stroke-width="2"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="${c}" stroke-width="2"/></svg>`,
  globe: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="${c}" stroke-width="2"/><line x1="2" y1="12" x2="22" y2="12" stroke="${c}" stroke-width="2"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="${c}" stroke-width="2"/></svg>`,
  star: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  edit: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="${c}" stroke-width="2" stroke-linecap="round"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  layout: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="${c}" stroke-width="2"/><line x1="3" y1="9" x2="21" y2="9" stroke="${c}" stroke-width="2"/><line x1="9" y1="21" x2="9" y2="9" stroke="${c}" stroke-width="2"/></svg>`,

  /* ── Charts / Analytics ── */
  chart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  trendUp: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="17 6 23 6 23 12" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  pieChart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21.21 15.89A10 10 0 118 2.83" stroke="${c}" stroke-width="2" stroke-linecap="round"/><path d="M22 12A10 10 0 0012 2v10z" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /* ── Money / Business ── */
  dollar: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><line x1="12" y1="1" x2="12" y2="23" stroke="${c}" stroke-width="2"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
  ticket: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22 10V6a2 2 0 00-2-2H4a2 2 0 00-2 2v4a2 2 0 010 4v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 010-4z" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="10" y1="4" x2="10" y2="8" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/><line x1="10" y1="16" x2="10" y2="20" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  creditCard: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="1" y="4" width="22" height="16" rx="2" stroke="${c}" stroke-width="2"/><line x1="1" y1="10" x2="23" y2="10" stroke="${c}" stroke-width="2"/></svg>`,

  /* ── Communication ── */
  smartphone: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="${c}" stroke-width="2"/><line x1="12" y1="18" x2="12.01" y2="18" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
  qrCode: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="8" height="8" rx="1" stroke="${c}" stroke-width="2"/><rect x="14" y="2" width="8" height="8" rx="1" stroke="${c}" stroke-width="2"/><rect x="2" y="14" width="8" height="8" rx="1" stroke="${c}" stroke-width="2"/><rect x="14" y="14" width="3" height="3" fill="${c}"/><rect x="19" y="14" width="3" height="3" fill="${c}"/><rect x="14" y="19" width="3" height="3" fill="${c}"/><rect x="19" y="19" width="3" height="3" fill="${c}"/></svg>`,
  externalLink: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="${c}" stroke-width="2" stroke-linecap="round"/><polyline points="15 3 21 3 21 9" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="10" y1="14" x2="21" y2="3" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
  clipboard: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" stroke="${c}" stroke-width="2" stroke-linecap="round"/><rect x="8" y="2" width="8" height="4" rx="1" stroke="${c}" stroke-width="2"/></svg>`,

  /* ── AI / Brain ── */
  sparkle: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  mic: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" stroke="${c}" stroke-width="2"/><path d="M19 10v2a7 7 0 01-14 0v-2" stroke="${c}" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="19" x2="12" y2="23" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
  robot: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="8" width="16" height="12" rx="2" stroke="${c}" stroke-width="2"/><circle cx="9" cy="14" r="1.5" fill="${c}"/><circle cx="15" cy="14" r="1.5" fill="${c}"/><line x1="12" y1="4" x2="12" y2="8" stroke="${c}" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="3" r="1" fill="${c}"/><line x1="1" y1="14" x2="4" y2="14" stroke="${c}" stroke-width="2" stroke-linecap="round"/><line x1="20" y1="14" x2="23" y2="14" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,

  /* ── Location / Map ── */
  map: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="8" y1="2" x2="8" y2="18" stroke="${c}" stroke-width="2"/><line x1="16" y1="6" x2="16" y2="22" stroke="${c}" stroke-width="2"/></svg>`,

  /* ── Calendar ── */
  calendar: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="${c}" stroke-width="2"/><line x1="16" y1="2" x2="16" y2="6" stroke="${c}" stroke-width="2" stroke-linecap="round"/><line x1="8" y1="2" x2="8" y2="6" stroke="${c}" stroke-width="2" stroke-linecap="round"/><line x1="3" y1="10" x2="21" y2="10" stroke="${c}" stroke-width="2"/></svg>`,
};
