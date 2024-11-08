/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blitz-gradient-left': '#DD2832',
        'blitz-gradient-right': '#FF30A0',
      },
    },
  },
  plugins: [],
}