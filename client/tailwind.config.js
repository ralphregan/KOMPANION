/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Comic Sans MS"', 'cursive', 'sans-serif'],
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0px 0px 3px 5px rgba(300, 200, 12, 0.5)" }, 
          "50%": { boxShadow: "0px 0px 20px 10px rgba(240, 240, 240, 0.9)" }, 
        },
      },
      animation: {
        glow: "glow 10s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), 
    function ({ addUtilities }) {
      // Adding writing-mode-horizontal-tb utility
      addUtilities({
        '.writing-mode-horizontal-tb': { 'writing-mode': 'horizontal-tb' },
        '.writing-mode-vertical-lr': { 'writing-mode': 'vertical-lr' },
        '.writing-mode-vertical-rl': { 'writing-mode': 'vertical-rl' },
      });
    },
  ],
};