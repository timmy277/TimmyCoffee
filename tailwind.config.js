/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Karka': ['Karla', 'sans-serif']
      },
      colors: {
        'light-coffee': '#C89F94'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        }
      },
      animation: {
        slideDown: 'slideDown 0.7s ease-in-out',
      }
    },
  },
  plugins: [],
}

