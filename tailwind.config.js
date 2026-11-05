/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#080808',
          900: '#11100b',
          800: '#1a1810',
          700: '#282419',
        },
        electric: {
          400: '#ffe44d',
          500: '#ffd400',
          600: '#e5b900',
        },
        cyan: {
          400: '#ffe44d',
          500: '#f0c400',
        },
      },
      boxShadow: {
        glow: '0 0 24px rgba(255,212,0,0.24)',
        'glow-lg': '0 0 60px rgba(255,212,0,0.3)',
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(rgba(255,212,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,212,0,0.045) 1px, transparent 1px)',
        'grid-light':
          'linear-gradient(rgba(180,140,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(180,140,0,0.07) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-slow': {
          '0%,100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
