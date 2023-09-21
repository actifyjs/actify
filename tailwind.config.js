const colors = require('tailwindcss/colors')
const { withMaterialColors } = require('tailwind-material-colors')

delete colors['lightBlue']
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']

module.exports = withMaterialColors(
  {
    darkMode: 'class',
    content: [
      './packages/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{html,md,js,ts,jsx,tsx}',
      './node_modules/react-tailwindcss-select/dist/index.esm.js'
    ],
    plugins: [require('@tailwindcss/typography')],
    theme: {
      extend: {
        colors: {
          ...colors
        }
      }
    }
  },
  {
    primary: '#006a6a' // '#6750A4'
  }
)
