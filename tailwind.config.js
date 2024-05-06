/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter:["Inter", "sans-serif"],
      },
      colors: {
        'main-text-color': '#FAFAFA',
        'main-active-color':'#DB4444'
      },
    },
  },
  plugins: [],
}