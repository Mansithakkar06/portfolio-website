/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        darkBg: '#0b0f17',
        darkCard: '#151c2c',
        primary: '#3b82f6', // blue-500
        primaryLight: '#60a5fa', // blue-400
      }
    },
  },
  plugins: [],
}
