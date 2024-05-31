import { Icon, ListItem, NavigationBar } from 'actify'

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
    <NavigationBar>
      {list.map((item, index) => (
        <ListItem
          key={index}
          className="h-[52px] p-0 flex flex-col justify-between"
        >
          {item.icon}
          <span className="text-xs font-semibold mt-1">{item.label}</span>
        </ListItem>
      ))}
    </NavigationBar>
  )
}
