/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundPrimary': '#101016'
      },
      keyframes: {
        typing: {
          '0%': { width: 0, borderRightWidth: '0px' },
          '10%': { width: '100%', borderRightWidth: '2px' },
          '15%': { width: '100%', borderRightWidth: '2px' },
          '25%': { width: 0, borderRightWidth: '0px' },
          '100%': { width: 0, borderRightWidth: '0px' }
        },
        blinkCaret: {
          '0%': {borderColor: 'transparent'},
          '50%': {borderColor: 'blue'},
          '100%': {borderColor: 'transparent'}
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        // 'typewriter': 'typing 3s steps(18, end) infinite, blinkCaret .75s linear infinite'
        'typewriter': 'typing 3s steps(18, end) 3s infinite'
      },
      boxShadow: {
        'imageOutline': '0 0px 50px 25px rgb(0 0 0 / 1)'
      }
    },
  },
  plugins: [],
}
