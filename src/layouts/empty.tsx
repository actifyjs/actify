import App from 'src/components/App'
import Main from 'src/components/Main'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const Layout = ({ children }) => {
  return (
    <App>
      <Header />
      <Main className="p-2 md:p-0 flex flex-col">{children}</Main>
      <Footer />
    </App>
  )
}

export default Layout
