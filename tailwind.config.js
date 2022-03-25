const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    "pageBackground": "#F0F0F0",
    "primary": "#257143",
    "cardVariantPrimary": "#F8F8F8",
    "cardVariantSecondary": "#F4F4F4",
    "bodyText": "#6C6C6C",
  },
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      display: ["Inter", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"],
    },

    extend: {
      colors: colors,

      backgroundImage: {
        "footer": "url('/src/images/footer-rab.png')",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/line-clamp"),
  ],
};
