'use client'

import App from '@/components/App'
import Console from '@/components/Console'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider storageKey="color-mode">
      <App>
        <Header />
        {children}
        <Footer />
        <Console />
        <Toaster richColors position="top-center" />
      </App>
    </ThemeProvider>
  )
}
