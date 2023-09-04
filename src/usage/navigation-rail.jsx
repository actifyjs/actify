import { NavigationRail, List, ListItem, Icon } from 'actify'

export default () => {
  const list = [
    {
      label: 'Home',
      icon: 'Home'
    },
    {
      label: 'Camera',
      icon: 'Camera'
    },
    {
      label: 'User',
      icon: 'User2'
    },
    {
      label: 'Settings',
      icon: 'Settings'
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
