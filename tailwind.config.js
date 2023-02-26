/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#F59E0B",
        dark: "#18181B",
        mid: "#A1A1AA",
        light: "#F8F8F8"
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
        open_sans: ['var(--font-open_sans)', ...fontFamily.sans],
      }
    },
  },
  plugins: [],
}
