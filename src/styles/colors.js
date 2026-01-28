// // src/styles/colors.js

// // Color Palette based on Agriculture & Land Survey 
// // (Final Version using your logo-extracted codes)
// // (Applying the 60-30-10 Rule)

// export const COLORS = {
//     // === 60% DOMINANT NEUTRALS (Backgrounds, Main Surface) ===
//     // Used for backgrounds and main text for maximum contrast and readability.
//     neutralWhite: '#FFFFFF', // YOUR CODE: Pure White (Base background)
//     neutralLightGray: '#F2F2F2', // Reverted to a clean, very light gray for page background separation
//     neutralDarkGray: '#555424',  // YOUR CODE: Very Deep Olive (Primary text color - professional and subtle)

//     // === 30% SECONDARY COLORS (Structure, Text, Brand Identity) ===
//     // Used for headers, navigation, cards, and structural elements.
//     // Earth/Agriculture Color
//     secondaryGreen: '#5A592C', // YOUR CODE: Deep Olive Green (Brand primary color, used for structure)
//     secondaryBrown: '#9D7F2F', // YOUR CODE: Muted Gold/Brown (For footers, cards, secondary headers)

//     // Professional/Tech Color (Keeping a neutral dark color for data/tech elements)
//     secondaryBlue: '#4B5563', // Used here as a Slate Gray (reliable, corporate color for data/navigation)

//     // === 10% ACCENT COLORS (Call-to-Action, Alerts, Key Data) ===
//     // Accent for Interactive Elements
//     accentCTA: '#CDB623',    // YOUR CODE: Bright Gold/Mustard (High-contrast, high-impact buttons)

//     // Status Colors (standard colors for clear user feedback)
//     statusSuccess: '#4CAF50', // Standard Success Green
//     statusError: '#C0392B',   // Standard Error Red
//     statusWarning: '#F39C12', // Standard Warning Yellow
// };

// // Also export a theme object for easy access
// export const THEME = {
//     // Theme references updated with your logo colors:
//     primaryBackground: COLORS.neutralLightGray,
//     secondaryElement: COLORS.secondaryGreen,
//     ctaButton: COLORS.accentCTA,
//     bodyText: COLORS.neutralDarkGray,
// };








// src/styles/colors.js
// Premium Agriculture + SaaS UX Color System
// Designed for modern dashboards, marketing pages, and data-heavy UI
// 60–30–10 rule strictly enforced

export const COLORS = {
    // ─────────────────────────────────────────
    // 60% — NEUTRAL FOUNDATION (UX & Readability)
    // ─────────────────────────────────────────
    white: '#FFFFFF',              // Primary background
    surface: '#F8FAF9',             // Page sections, cards
    surfaceMuted: '#EEF2F0',        // Tables, dividers, hover states

    textPrimary: '#1F2933',         // Headings (near-black, high contrast)
    textSecondary: '#4B5563',       // Body text, labels
    textMuted: '#6B7280',           // Helper text, metadata

    borderLight: '#E5E7EB',          // Subtle borders
    borderStrong: '#D1D5DB',

    // ─────────────────────────────────────────
    // 30% — BRAND & STRUCTURE (Agriculture + Tech)
    // ─────────────────────────────────────────
    brandGreen: '#2F6B4F',           // Primary brand color (deep agri green)
    brandGreenSoft: '#E3EFE9',       // Pills, highlights, badges

    techBlueGray: '#334155',         // Navigation, icons, data emphasis
    techBlueSoft: '#E8EDF3',         // Charts background, panels

    earthBrown: '#8B6A2B',           // Footers, separators, premium sections
    earthBrownSoft: '#F3EAD7',

    // ─────────────────────────────────────────
    // 10% — ACCENTS & ACTION (Used Sparingly)
    // ─────────────────────────────────────────
    accentPrimary: '#D4A017',        // CTA buttons (gold, premium)
    accentHover: '#B89214',

    link: '#2563EB',                 // Links & interactive text
    linkHover: '#1D4ED8',

    // ─────────────────────────────────────────
    // STATUS / FEEDBACK (Dashboards & Forms)
    // ─────────────────────────────────────────
    success: '#16A34A',
    successSoft: '#DCFCE7',

    warning: '#F59E0B',
    warningSoft: '#FEF3C7',

    error: '#DC2626',
    errorSoft: '#FEE2E2',

    info: '#0284C7',
    infoSoft: '#E0F2FE',
};

// Centralized theme aliases (use everywhere)
export const THEME = {
    background: COLORS.surface,
    card: COLORS.white,

    heading: COLORS.textPrimary,
    body: COLORS.textSecondary,
    mutedText: COLORS.textMuted,

    primary: COLORS.brandGreen,
    secondary: COLORS.techBlueGray,

    cta: COLORS.accentPrimary,
    ctaHover: COLORS.accentHover,

    border: COLORS.borderLight,
};
