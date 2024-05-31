import { Icon, List, ListItem, NavigationRail } from 'actify'

export default () => {
  const list = [
    {
      label: 'Home',
      icon: <Icon>home</Icon>
    },
    {
      label: 'Camera',
      icon: <Icon>photo_camera</Icon>
    },
    {
      label: 'User',
      icon: <Icon>person</Icon>
    },
    {
      label: 'Settings',
      icon: <Icon>settings</Icon>
    }
  ]

  return (
    <NavigationRail>
      <List className="py-3 w-full">
        {list.map((item, index) => (
          <ListItem key={index} className="pl-0 py-2 flex flex-col">
            {item.icon}
            <span className="text-xs font-semibold mt-1">{item.label}</span>
          </ListItem>
        ))}
      </List>
    </NavigationRail>
  )
}
