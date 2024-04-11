/** @type {import('tailwindcss').Config} */
export default {
  darkMode:['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-1': '#000000',
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}