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
      './src/**/*.{html,md,js,ts,jsx,tsx}',
      '../../packages/actify/**/*.{js,ts,jsx,tsx}',
      './node_modules/actify/dist/**/*.{js,ts,jsx,tsx}'
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
