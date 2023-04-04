/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx,vue}",],
  theme: {
    extend: {
      fontFamily: {
        'Oswald': ['Oswald', ...defaultTheme.fontFamily.sans],
        'Poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
        'Righteous': ['Righteous', ...defaultTheme.fontFamily.sans],

      },
    },
  },
  plugins: [],
}
