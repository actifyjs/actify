import { NavigationBar, ListItem, Icon } from 'actify'

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
    <NavigationBar>
      {list.map((item, index) => (
        <ListItem
          key={index}
          className="h-[52px] p-0 flex flex-col justify-between"
        >
          <Icon name={item.icon} />
          <span className="text-xs font-semibold mt-1">{item.label}</span>
        </ListItem>
      ))}
    </NavigationBar>
  )
}
