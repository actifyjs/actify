import App from '@/src/components/App'
import Main from '@/src/components/Main'
import Header from '@/src/components/Header'
import Drawer from '@/src/components/Drawer'
import Footer from '@/src/components/Footer'
import ItemLink from '@/src/components/ItemLink'
import components from './components.json'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <App>
      <Header />
      {pathname != '/' ? (
        <Drawer width={180}>
          <ul className="overflow-y-auto overflow-x-hidden">
            <ItemLink to="/getting-started/icon">Icon</ItemLink>
            <ItemLink to="/getting-started/theme">Theme</ItemLink>
            {components.map((component, index) =>
              component.children ? (
                component.children.map((child, index) => (
                  <ItemLink
                    key={index}
                    to={
                      `/components/${component.name.toLowerCase()}/` +
                      child.name.toLowerCase().split(' ').join('-')
                    }
                  >
                    {child.name}
                  </ItemLink>
                ))
              ) : (
                <ItemLink
                  key={index}
                  to={
                    '/components/' +
                    component.name.toLowerCase().split(' ').join('-')
                  }
                >
                  {component.name}
                </ItemLink>
              )
            )}
          </ul>
        </Drawer>
      ) : null}
      <Main>{children}</Main>
      <Footer />
    </App>
  )
}

export default Layout
