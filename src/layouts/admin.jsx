import Logo from '@/src/components/Logo'
import {
  Icon,
  List,
  Button,
  Spacer,
  Divider,
  Popover,
  ListItem,
  ListGroup,
  SideSheets,
  IconButton
} from 'actify'

export default ({ children }) => {
  const list = [
    {
      icon: 'layout-dashboard',
      title: 'Dashboard'
    },
    {
      divider: true
    },
    {
      icon: 'layers',
      title: 'List',
      children: [{ title: 'Table' }, { title: 'Grid' }]
    },
    {
      divider: true
    },
    {
      title: 'Settings',
      icon: 'settings',
      children: [{ title: 'System Settings' }, { title: 'User Settings' }]
    }
  ]
  return (
    <div className="h-screen grid grid-rows-[64px_1fr_56px] grid-cols-[240px_1fr]">
      <header className="bg-inverse-surface col-start-1 col-end-3 px-4 flex gap-2 items-center justify-between">
        <Logo height={48} />
        <p>Actify Admin</p>
        <Spacer />
        <Popover>
          <Popover.Activator>
            <Icon name="user" />
          </Popover.Activator>
          <Popover.Content>
            <List>
              {['logout'].map((item) => (
                <ListItem key={item}>{item}</ListItem>
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
          <SideSheets.Content divider action={<Button>action</Button>}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            deserunt autem maiores reprehenderit mollitia asperiores eius
            voluptate voluptatem amet tenetur sapiente sint quasi expedita
            repellendus ut eligendi. Tempora, magnam hic.
          </SideSheets.Content>
        </SideSheets>
      </header>
      <aside className="row-start-2 row-end-4 col-start-1 col-end-2 shadow">
        <List>
          {list.map(({ title, icon, divider, children }, index) =>
            divider ? (
              <Divider key={index} />
            ) : children?.length > 0 ? (
              <ListGroup
                key={index}
                label={title}
                icon={icon}
                className="justify-start"
              >
                {children.map(({ title }, index) => (
                  <ListItem key={index}>{title}</ListItem>
                ))}
              </ListGroup>
            ) : (
              <ListItem key={index} className="gap-4 justify-between">
                <Icon name={icon} />
                {title}
                <div className="w-6"></div>
              </ListItem>
            )
          )}
        </List>
      </aside>
      <main>{children}</main>
      <footer className="bg-inverse-surface flex items-center px-4 justify-end">
        <p>copyright &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
