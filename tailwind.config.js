/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["src/**/*.{html,njk}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        sticky: "1 0 auto",
      },
      fontSize: {
        "8/2xl": "7rem",
      },
      colors: {
        "matte-black": "#151515",
        "granite-gray": "#646464",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradient: "gradient 6s linear infinite",
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
