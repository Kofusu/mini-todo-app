/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#16ABF8',
        customBlack: '#111111',
        customWhite: '#E5E5E5',
      },
      boxShadow: {
        customShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
  important: true,
}
