// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      animation: {
        'scroll-gradient': 'scroll-gradient 20s ease infinite',
      },
      keyframes: {
        'scroll-gradient': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      colors: {
        'site-dark-teal': '#0f172a', // Clean dark background
        'site-blue-purple': '#1e293b', // Slightly lighter
        'site-light-purple': '#334155', // Accent areas
      },
    },
  },
  plugins: [],
};