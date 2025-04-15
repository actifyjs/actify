import './app.css'

import { Metadata } from 'next'
import { poppins } from './fonts'

export const metadata: Metadata = {
  title: 'Actify',
  description: 'React Material Design 3 Components Library',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/short-cut-icon.png',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <body>{children}</body>
    </html>
  )
}
