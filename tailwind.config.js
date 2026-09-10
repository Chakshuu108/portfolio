/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0d0a1c',
        panel: '#171331',
        panel2: '#1f1a3d',
        line: 'rgba(255,255,255,0.09)',
        coral: '#FF6B57',
        coral2: '#EA4B71',
        violet: '#A379F2',
        violet2: '#6B4FD6',
        mint: '#3DD9B8',
        ink: '#F3F1EC',
        dim: '#9c96b0',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
};
