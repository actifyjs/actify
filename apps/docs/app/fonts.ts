import { Poppins, Fira_Code } from 'next/font/google'

export const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const fira_code = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap'
})
