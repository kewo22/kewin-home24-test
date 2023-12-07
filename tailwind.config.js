/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundColor: {
        primary: "#f45334",
        secondary: "#2f3133",
      },
      colors: {
        primary: "#f45334",
        secondary: "#2f3133",
        text: {
          primary: "#2f3133",
        },
      },
    },
  },
  plugins: [],
};
