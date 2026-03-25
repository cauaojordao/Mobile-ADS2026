const nativewind = require("nativewind/preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [nativewind],
  theme: {
    extend: {},
  },
  plugins: [],
};
