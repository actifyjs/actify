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
      './src/**/*.{html,js,ts,jsx,tsx}'
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
