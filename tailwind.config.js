/** @type {import('tailwindcss').Config} */
const path=require("path")
module.exports = {
 content:[
"./app/**/*.{js,jsx,ts,tsx}",
"./components/**/*{.js,.ts,.jsx,.tsx}"
], 



  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }

  ],
}

