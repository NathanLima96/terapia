/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fff9e6',
          100: '#ffedb3',
          200: '#ffe180',
          300: '#ffd54d',
          400: '#ffc91a',
          500: '#e6b300',
          600: '#b38900',
          700: '#805f00',
          800: '#4d3900',
          900: '#1a1300',
        },
        cosmic: {
          50: '#f0f9ff',
          100: '#dbeafe',
          200: '#1a1a2e',
          300: '#0f172a',
          400: '#0a0a18',
          500: '#050509',
          900: '#000000',
        },
      },
      backgroundImage: {
        'radial-gold': 'radial-gradient(circle, rgba(230,179,0,0.2) 0%, rgba(0,0,0,0) 70%)',
        'cosmic-gradient': 'linear-gradient(to bottom, rgba(26, 26, 46, 0.8), rgba(10, 10, 24, 0.9))',
      },
      animation: {
        'cosmic-pulse': 'cosmic-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        'cosmic-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};