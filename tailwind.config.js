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
    },
    extend: {
      flexGrow: {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
      },
      flexShrink: {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
      },
      fontFamily: {
        ...activeTheme.fonts,
        ...defaultTheme.fontFamily,
      },
      spacing: {
        ...defaultTheme.spacing,
      },
    },
    colors: {
      // ...defaultTheme.colors,
      ...activeTheme.colors,
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
