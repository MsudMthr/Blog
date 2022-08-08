/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#4cb7e6",
        darkBlue: "#0577a8",
        milkyWhite: "#fefefe",
        dark: "#1d1b1b",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
