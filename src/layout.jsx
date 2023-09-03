import App from '@/src/components/App'
import Main from '@/src/components/Main'
import Header from '@/src/components/Header'
import Drawer from '@/src/components/Drawer'
import Footer from '@/src/components/Footer'
import components from './components.json'
import { useLocation } from 'react-router-dom'
import { List, ListItemLink, ListGroup } from 'actify'

const Layout = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <App>
      <Header />
      {pathname != '/' ? (
        <Drawer width={180}>
          <List>
            <ListItemLink to="/getting-started/icon">Icon</ListItemLink>
            <ListItemLink to="/getting-started/theme">Theme</ListItemLink>
            {components.map((component, index) =>
              component.children ? (
                <ListGroup key={index} label={component.label}>
                  {component.children.map((child, index) => (
                    <ListItemLink
                      key={index}
                      to={
                        `/components/${component.label.toLowerCase()}/` +
                        child.name.toLowerCase().split(' ').join('-')
                      }
                    >
                      {child.name}
                    </ListItemLink>
                  ))}
                </ListGroup>
              ) : (
                <ListItemLink
                  key={index}
                  to={
                    '/components/' +
                    component.name.toLowerCase().split(' ').join('-')
                  }
                >
                  {component.name}
                </ListItemLink>
              )
            )}
          </List>
        </Drawer>
      ) : null}
      <Main>{children}</Main>
      <Footer />
    </App>
  )
}

export default Layout
