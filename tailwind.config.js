/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports =  withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  fontSize: {
    xs: '0.625rem',
    sm: '0.75rem',
    base: '.875rem',
    xl: '1.125rem',
    '2xl': '1.875rem',
    '3xl': '2.25rem',
 
  },
    
    screens: {
      'mobile': '480px',
      // => @media (min-width: 480px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
  },

    extend: {fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  },
  plugins: [],
});
