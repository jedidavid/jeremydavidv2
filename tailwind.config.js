/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["src/**/*.{html,njk}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1740px",
    },
    extend: {
      flex: {
        sticky: "1 0 auto",
      },
      fontSize: {
        "8/2xl": "7rem",
      },
      colors: {
        "matte-black": "#151515",
      },
    },
    container: {
      padding: "1rem",
    },
    fontFamily: {
      body: ["Karla", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
