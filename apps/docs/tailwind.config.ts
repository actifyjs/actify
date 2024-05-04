import typography from '@tailwindcss/typography'
import { withMaterialColors } from 'tailwind-material-colors'

export default withMaterialColors(
  {
    darkMode: 'class',
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './node_modules/actify/**/*.tsx'
    ],
    plugins: [typography]
  },
  {
    primary: '#006a6a'
  },
  {
    extend: true
  }
)
