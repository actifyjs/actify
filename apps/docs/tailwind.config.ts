import typography from '@tailwindcss/typography'
import { withMaterialColors } from 'tailwind-material-colors'

export default withMaterialColors(
  {
    darkMode: 'class',
    content: [
      './src/**/*.{html,md,js,ts,jsx,tsx}',
      './node_modules/actify/dist/**/*.{js,ts,jsx,tsx}'
    ],
    plugins: [typography]
  },
  {
    primary: '#006a6a'
    // primary: '#5b6400'
  },
  {
    extend: true
  }
)
