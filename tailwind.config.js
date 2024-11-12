/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#34495e',
      },
      backgroundColor:{
        primary:'#000',
        
      }
    },
  },
  plugins: [],
}