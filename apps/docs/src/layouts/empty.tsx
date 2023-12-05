import React from 'react'
import App from '@/components/App'
import Main from '@/components/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Layout: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children }) => {
  return (
    <App>
      <Header />
      <Main className="p-2 md:p-0 flex flex-col">{children}</Main>
      <Footer />
    </App>
  )
}

export default Layout
