import App from '@/packages/components/App'
import Main from '@/packages/components/Main'
import Header from '@/packages/components/Header'
import Drawer from '@/packages/components/Drawer'
import Footer from '@/packages/components/Footer'
import ListItemLink from '@/packages/components/Lists/ListItemLink'
import components from './components.json'

const Layout = ({ children }) => {
  return (
    <App>
      <Header />
      <Drawer>
        <ul className="overflow-y-auto overflow-x-hidden">
          {components.map((component, index) =>
            component.children ? (
              component.children.map((child, index) => (
                <ListItemLink
                  key={index}
                  headline={child.name + (child.status || '')}
                  to={`/${component.name.toLowerCase()}/` + child.name.toLowerCase().split(' ').join('-')}
                />
              ))
            ) : (
              <ListItemLink
                key={index}
                headline={component.name + (component.status || '')}
                to={'/' + component.name.toLowerCase().split(' ').join('-')}
              />
            )
          )}
        </ul>
      </Drawer>
      <Main>{children}</Main>
      <Footer />
    </App>
  )
}

export default Layout
