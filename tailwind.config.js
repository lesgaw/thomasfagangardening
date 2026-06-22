/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — natural, fresh, trustworthy
        leaf: {
          50: '#f1f8ee',
          100: '#dceed3',
          200: '#bbdda9',
          300: '#92c577',
          400: '#6ba84e',
          500: '#4d8a32', // primary brand green
          600: '#3b6e26',
          700: '#2f561f',
          800: '#28451d',
          900: '#223a1b',
        },
        bark: {
          50: '#f6f4f1',
          100: '#e8e2da',
          200: '#d2c5b6',
          300: '#b6a18b',
          400: '#9c8069',
          500: '#856a53',
          600: '#6c5443',
          700: '#574338',
          800: '#473831',
          900: '#3d312b',
        },
        sun: {
          400: '#f6c453',
          500: '#f0b429',
        },
        cream: '#faf8f3',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(34, 58, 27, 0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
