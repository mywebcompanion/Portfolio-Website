/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'fira-code': ['Fira Code', 'monospace'],
        'tilt-prism': ['Tilt Prism', 'cursive'],
        'slackside': ['Sloackside One', 'cursive'],
      },
      colors: {
        'backgroundPrimary': '#2b2b2b',
        'grPrimary': '#F06000',
        // 'grPrimary': '#9333ea',
        'grSecondary': '#ffffff',
        // 'grSecondary': '#0ea5e9',
      },
      keyframes: {
        typing: {
          '0%': { width: 0, borderRightWidth: '0px' },
          '7%': { width: '100%', borderRightWidth: '2px' },
          '18%': { width: '100%', borderRightWidth: '2px' },
          '25%': { width: 0, borderRightWidth: '0px' },
          '100%': { width: 0, borderRightWidth: '0px' }
        },
        blinkCaret: {
          '0%': {borderColor: 'transparent'},
          '50%': {borderColor: '#2563eb'},
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
      },
      backgroundImage: {
        'content-background': "url('./public/background.jpg')",
      },
    },
  },
  plugins: [],
}
