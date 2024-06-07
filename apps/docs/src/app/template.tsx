'use client'

import App from '@/components/App'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider storageKey="color-mode">
      <App>
        <Header />
        <>{children}</>
        <Footer />
        <Toaster richColors position="top-center" />
      </App>
    </ThemeProvider>
  )
}
