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
        customDarkBlue: '#05386B'
      },
      fontFamily: {
        sanchez: ['Sanchez', 'serif'], // 'Sanchez' is the name you give it, 'serif' is a fallback
        // You can add other custom fonts here too
      },
    },
  },
  plugins: [],
};


