const { withMaterialColors } = require('tailwind-material-colors')

module.exports = withMaterialColors(
  {
    darkMode: 'class',
    content: ['./packages/**/*.{js,ts,jsx,tsx}', './src/**/*.{html,js,ts,jsx,tsx}'],
    plugins: [
      require('@tailwindcss/typography'),
      require('tailwindcss-elevation')({
        color: '0,0,0',
        opacityBoost: '0.12'
      })
    ]
    // themes: {
    //   extends: {
    //     colors: {
    //     }
    //   }
    // }
  },
  {
    primary: '#006a6a'
  }
)
