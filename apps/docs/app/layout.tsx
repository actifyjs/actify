import './globals.css'
import { poppins } from './fonts'
import { Metadata } from 'next'
import { config } from '@/lib/config'
import { ThemeProvider } from 'next-themes'

import App from '@/components/App'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
      <body>
        <ThemeProvider attribute="class">
          <App>
            <Header />
            {children}
            <Footer />
          </App>
        </ThemeProvider>
      </body>
    </html>
  )
}
