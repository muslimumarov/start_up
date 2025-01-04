/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        mobile320: '320px', // 320px uchun maxsus breakpoint
        mobile390: '390px', // 390px uchun maxsus breakpoint
      },
      colors: {
        customOrange: '#FF440D',
      },
    },
  },
  plugins: [],
}