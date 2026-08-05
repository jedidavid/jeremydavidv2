/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["src/**/*.{html,njk}"],
  theme: {
    extend: {
      fontSize: {
        "8/2xl": "7rem",
      },
    },
    container: {
      padding: "1rem",
    },
    fontFamily: {
      body: ["Work Sans", "sans-serif"],
      heading: ["DM Serif Display", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
