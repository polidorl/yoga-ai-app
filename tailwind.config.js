/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9DC185',
        secondary: '#E8F5E9',
        charcoal: '#37474F',
        sage: '#9DC185', 
        'warm-beige': '#F5F5DC',
        'background-light': '#FFFFFF',
        'background-dark': '#1a1a1a', 
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
