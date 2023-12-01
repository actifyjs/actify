// @ts-nocheck
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'
import { withMaterialColors } from 'tailwind-material-colors'

delete colors['lightBlue']
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']

export default withMaterialColors(
  {
    darkMode: 'class',
    content: [
      './packages/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{html,md,js,ts,jsx,tsx}',
      './node_modules/react-tailwindcss-select/dist/index.esm.js',
      './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
    ],
    plugins: [typography],
    theme: {
      extend: {
        colors: { ...colors }
      }
    }
  },
  {
    primary: '#006a6a'
    // primary: '#5b6400'
  }
) satisfies Config
