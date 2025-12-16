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
    screens: {
      'xsm': '480px',
      'sm': '640px',
      'md': '768px',
      'midlg': '900px',
      'lg': '1024px',
      'midxl': '1100px',
      'xl': '1280px',
      'mid2xl': '1360px',
      '2xl': '1536px',
      '3xl': '1700px',
      '4xl': '1900px',
    },
    fontFamily: {
      nav: ['"Nunito"', "serif"],
    },
  },
  plugins: [],
};
