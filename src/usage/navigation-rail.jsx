import { NavigationRail, List, ListItem, Icon } from 'actify'

export default () => {
  const list = [
    {
      label: 'Home',
      icon: 'home'
    },
    {
      label: 'Camera',
      icon: 'camera'
    },
    {
      label: 'User',
      icon: 'user-2'
    },
    {
      label: 'Settings',
      icon: 'settings'
    }
  ]

  return (
    <NavigationRail>
      <List className="py-3 w-full">
        {list.map((item, index) => (
          <ListItem key={index} className="pl-0 py-2 flex flex-col">
            <Icon name={item.icon} />
            <span className="text-sm mt-1">{item.label}</span>
          </ListItem>
        ))}
      </List>
    </NavigationRail>
  )
}
