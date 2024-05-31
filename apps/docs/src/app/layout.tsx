import './globals.css'

import { Metadata } from 'next'
import { config } from '@/lib/config'
import { poppins } from './fonts'

export const metadata: Metadata = {
  title: {
    default: config.metadata.title,
    template: '%s | Actify'
  },
  description: config.metadata.description,
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
