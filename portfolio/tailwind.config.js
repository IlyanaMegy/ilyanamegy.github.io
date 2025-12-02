/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#CBB9A6",
        lavender: "#AF9FBF",
        bg: "#F7F3F1",
        muted: "#9E9BA0",
        text: "#1F1D1E",
      },
    },
    fontFamily: {
      nav: ['"Nunito"', "serif"],
    },
  },
  plugins: [],
};
