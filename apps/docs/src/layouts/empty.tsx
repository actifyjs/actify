import React from 'react'
import App from '@/components/App'
import Main from '@/components/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLocation } from 'react-router-dom'

const Layout: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <App>
      <Header />
      <Main
        className={`${
          pathname == '/' || pathname == '/playground' ? 'col-start-1' : ''
        } p-2 md:p-0 flex flex-col`}
      >
        {children}
      </Main>
      <Footer
        className={`${
          pathname == '/' || pathname == '/playground' ? 'col-start-1' : ''
        }`}
      />
    </App>
  )
}

export default Layout
