import App from '@/components/App'
import Main from '@/components/Main'
import Header from '@/components/Header'
import Aside from '@/components/Aside'
import Footer from '@/components/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <App>
      <Header />
      <Aside className="top-16 -translate-x-full md:translate-x-0 w-[240px]" />
      <Main>{children}</Main>
      <Footer />
    </App>
  )
}

export default Layout
