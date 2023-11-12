import {
  Icon,
  List,
  Drawer,
  Button,
  Spacer,
  Divider,
  Popover,
  ListItem,
  ListGroup,
  SideSheets,
  IconButton
} from 'actify'
import { Link, NavLink } from 'react-router-dom'
import { tv } from 'tailwind-variants'

const asideVariants = tv({
  base: 'fixed top-0 h-screen overflow-y-auto row-start-2 row-end-4 col-start-1 col-end-2 shadow'
})

const Aside = ({ className }) => {
  const list = [
    {
      icon: 'layout-dashboard',
      title: 'Dashboard',
      to: '/admin'
    },
    {
      divider: true
    },
    {
      icon: 'layers',
      title: 'List',
      children: [
        { title: 'Table', to: '/admin/table' },
        { title: 'Grid', to: '/admin/grid' }
      ]
    },
    {
      divider: true
    },
    {
      title: 'Settings',
      icon: 'settings',
      children: [
        { title: 'System Settings', to: '/admin/system-setting' },
        { title: 'User Settings', to: '/admin/user-setting' }
      ]
    }
  ]

  return (
    <aside className={asideVariants({ className })}>
      <List>
        {list.map(({ title, icon, divider, to, children }, index) =>
          divider ? (
            <Divider key={index} />
          ) : children?.length > 0 ? (
            <ListGroup
              key={index}
              label={title}
              icon={icon}
              className="justify-start"
            >
              {children.map(({ title, to }, index) => (
                <NavLink
                  key={index}
                  to={to}
                  className={({ isActive }) =>
                    isActive ? 'block bg-black/10' : ''
                  }
                >
                  <ListItem>{title}</ListItem>
                </NavLink>
              ))}
            </ListGroup>
          ) : (
            <NavLink
              key={index}
              to={to}
              className={({ isActive }) =>
                isActive ? 'block bg-black/10' : ''
              }
            >
              <ListItem className="gap-4 justify-between">
                <Icon name={icon} />
                {title}
                <div className="w-6"></div>
              </ListItem>
            </NavLink>
          )
        )}
      </List>
    </aside>
  )
}

export default ({ children }) => {
  return (
    <div className="min-h-screen grid grid-rows-[64px_1fr_56px] grid-cols-[0_1fr] lg:grid-cols-[240px_1fr] transition-all">
      <header className="sticky top-0 z-50 bg-inverse-surface col-start-1 col-end-3 px-4 flex gap-2 items-center justify-between">
        <Link to="/">
          <Button variant="text" className="text-white">
            Actify Admin
          </Button>
        </Link>
        <Drawer placement="left" className="overflow-hidden">
          <Drawer.Activator className="lg:hidden">
            <IconButton>
              <Icon name="menu" />
            </IconButton>
          </Drawer.Activator>
          <Drawer.Content className="w-[240px]">
            <Aside className="w-full" />
          </Drawer.Content>
        </Drawer>
        <Spacer />
        <Popover>
          <Popover.Activator>
            <Icon name="user" />
          </Popover.Activator>
          <Popover.Content>
            <List className="py-0 focus-visible:outline-none">
              {['logout'].map((item) => (
                <ListItem
                  key={item}
                  className="pl-0 h-auto focus-visible:outline-none"
                >
                  {item}
                </ListItem>
              ))}
            </List>
          </Popover.Content>
        </Popover>
        <SideSheets>
          <SideSheets.Activator>
            <IconButton>
              <Icon name="settings" />
            </IconButton>
          </SideSheets.Activator>
          <SideSheets.Content divider>
            <SideSheets.Header>Settings</SideSheets.Header>
            <SideSheets.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              deserunt autem maiores reprehenderit mollitia asperiores eius
              voluptate voluptatem amet tenetur sapiente sint quasi expedita
              repellendus ut eligendi. Tempora, magnam hic.
            </SideSheets.Body>
            <SideSheets.Action>
              <Button>action</Button>
            </SideSheets.Action>
          </SideSheets.Content>
        </SideSheets>
      </header>
      <Aside className="top-16 -translate-x-full lg:translate-x-0 w-[240px]" />
      <main className="bg-secondary/10 col-start-2 col-end-3">{children}</main>
      <footer className="col-start-2 col-en-3 bg-inverse-surface flex items-center px-4 justify-center lg:justify-between">
        <p>copyright &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
