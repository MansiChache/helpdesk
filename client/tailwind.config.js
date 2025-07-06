/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar: '#55D6C2',
        navbarlight: '#CAF2EC',
        customGreen: '#03cc17',
        customRed: '#EA0000',
        customBlue: '#296EF2',
        customLightGreen: '#5CDB95',
        customDarkBlue: '#05386B',
        customGrey: '#6A6767',
        tableGrey: '#C4C4C4',
        tableGreyD: '#8F8C8C',
      },
      fontFamily: {
        sanchez: ['Sanchez', 'serif'], 
      },
    },
  },
  plugins: [],
};


