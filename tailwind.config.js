/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],

  theme: {
    extend: {
      boxShadow: {
        new: '0 15px 18px -17px rgb(134, 98, 138, 0.8) ',
      },
    },
  },
  plugins: [],
}
