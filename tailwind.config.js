/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color:{
        shopeeOrange: '#ee4d2d',
        shopeeRed: '#d0011b',
      }
    },
  },
  plugins: [],
}

