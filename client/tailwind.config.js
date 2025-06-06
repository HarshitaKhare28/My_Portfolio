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
        'site-dark-teal': '#1a2526', // Header color
        'site-blue-purple': '#1c252f', // Middle sections
        'site-light-purple': '#25263f', // Lower sections
      },
    },
  },
  plugins: [],
};