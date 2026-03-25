/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'uil-dark': '#2C2C2C',
        'uil-gold': '#FFD700',
        'uil-green': '#A8D5BA',
        'uil-coral': '#E11D48',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
};
