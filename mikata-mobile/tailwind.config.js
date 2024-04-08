/** @type {import('tailwindcss').Config} */
const { colors, borderWidth, spacing } = require("./theme");

module.exports = {
  content: ["./src/App.{js,jsx,ts,tsx}", "./src/containers/**/*.{js,jsx,ts,tsx}",  "./src/pages/**/*.{js,jsx,ts,tsx}",  "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: borderWidth,
      colors: colors,
      spacing: spacing
    },
  },
  plugins: [],
}

