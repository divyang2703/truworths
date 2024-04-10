/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        span:['Radley'],
        body:['Belleza'],
        para:['Cinzel'],
      }
    },
  },
  plugins: [],
}

