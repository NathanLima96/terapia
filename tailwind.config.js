/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFAF1',
          100: '#FBF5E3',
          200: '#F6E7BB',
          300: '#F1D993',
          400: '#ECCC6C',
          500: '#E7BE44',
          600: '#D4A821',
          700: '#A8861A',
          800: '#7C6313',
          900: '#50400C',
        },
      },
    },
  },
  plugins: [],
};