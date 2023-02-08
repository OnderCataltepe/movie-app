/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        amaticSc: ['Amatic SC', 'cursive'],
        merriweather: ['Merriweather Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif']
      },
      keyframes: {
        topToBottom: {
          from: { top: '-500px' },
          to: { top: '0px' }
        },
        leftToRight: {
          from: { left: '-500px' },
          to: { left: '-42px' }
        }
      },
      animation: {
        topToBottom: 'topToBottom 0.25s',
        leftToRight: 'leftToRight 0.25s'
      },
      backgroundImage: {
        blueSky:
          'linear-gradient(to right, #2c52fd, #0068ff, #007bff, #008bfe, #309af9, #30a8f9, #41b4f6, #59c0f3, #61cef2, #73dbf1, #8ae7ee, #a3f2ed)',
        blackSky: 'linear-gradient(to right, #000000, #000000)'
      }
    }
  },
  staticPageGenerationTimeout: 1000,
  plugins: []
};
