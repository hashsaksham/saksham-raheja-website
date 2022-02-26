const { activeTheme } = require("./styles/themes.js");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "media", // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./flavours/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: { min: "100px", max: "767px" },
      tablet: { min: "768px", max: "1200px" },
      desktop: { min: "1201px", max: "1536px" },

      mobilebelow: { max: "767px" },
      tabletbelow: { max: "1201px" },
      desktopbelow: { max: "1535px" },

      mobileup: { min: "100px" },
      tabletup: { min: "768px" },
      desktopup: { min: "1201px" },

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        ...activeTheme.fonts,
        // sans: ["Lato", ...defaultTheme.fontFamily.sans],
        ...defaultTheme.fontFamily,
      },
      spacing: {
        ...defaultTheme.spacing,
      },
    },
    colors: {
      // aaftab: activeTheme.aaftab, // Background
      // chaand: activeTheme.chaand, // Supporting background shade

      // accent: activeTheme.accent, // Primary Color
      // // accent-secondary: "rgba(255,142,60,1.0), // Hover

      // qurbat: activeTheme.qurbat, // Headline
      // raqs: activeTheme.raqs, // Paragraph

      // noor: activeTheme.noor,
      ...activeTheme.colors,
      ...defaultTheme.colors,
    },
  },
  variants: {
    extend: {
      padding: ["odd", "even"],
      margin: ["odd", "even"],
      backgroundColor: ["odd", "even"],
    },
  },
  plugins: [],
};
