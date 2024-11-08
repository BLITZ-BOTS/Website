/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "serif"], // Adds "Lato" as a custom font family
      },
      colors: {
        'blitz-gradient-left': '#DD2832',
        'blitz-gradient-right': '#FF30A0',
        'background': "#151517", 
        'secondary-background': "#272727", 
        'textPrimary': "#ffffff", 
      },
    },
  },
  plugins: [],
}