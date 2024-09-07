/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/*.{html,js,jsx}', './index.html'],
  theme: {
    extend: {
      // Adding custom animations and keyframes
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        'gradient-move': 'gradient 5s ease infinite'
      }
    }
  },
  plugins: []
};
