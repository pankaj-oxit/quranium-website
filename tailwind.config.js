/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        ripple: {
          '0%': { 
            transform: 'translate(-50%, -50%) scale(0)',
            opacity: '0.5'
          },
          '100%': { 
            transform: 'translate(-50%, -50%) scale(8)',
            opacity: '0'
          },
        },
      },
      animation: {
        ripple: 'ripple 0.8s ease-out',
      },
    },
  },
  plugins: [],
} 