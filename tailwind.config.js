const defaultTheme = require('tailwindcss/defaultTheme');
const { withTV } = require('tailwind-variants/transformer');

/** @type {import('tailwindcss').Config} */
export default withTV({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        xs: '1px 1px 3px 0px rgba(0, 0, 0, 0.15)',
        sm: '2px 2px 3px 0px rgba(0, 0, 0, 0.15)',
        md: '0px 3px 6px 0px rgba(0, 0, 0, 0.15)',
        lg: '0px 5px 15px 0px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        brand: {
          100: '#f1f1f1',
          200: '#bcbec0',
          300: '#808080',
          400: '#4e4e4f',
        },
        primary: {
          100: '#F0F7FD',
          200: '#ECEFF9',
          300: '#4296E2',
          400: '#055BCE',
          500: '#0D3DB8',
          600: '#00153E',
        },
        success: {
          100: '#EBF5F2',
          400: '#058758',
        },
        error: {
          100: '#FDEEEF',
          400: '#E02D3C',
        },
        alert: {
          100: '#FCF4ED',
          400: '#DF893D',
        },
        accent: {
          100: '#FFFCEC',
          400: '#F5C73D',
        },
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
});
