const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const { transform } = require("next/dist/build/swc/generated-native");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        scroll:
          // "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
         "scroll 3s ease-in-out infinite alternate",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-20px)" },
          // from :{transform :"translateX(0)"},
          // to: {
            // transform: "translate(calc(-50% - 0.5rem))",
          //   transform:"translateX(-20%)"
          // },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
