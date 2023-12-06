import { NavigationBar, ListItem } from 'actify'
import { Home, Camera, UserRound, Settings } from 'lucide-react'

export default () => {
  const list = [
    {
      label: 'Home',
      icon: <Home />
    },
    {
      label: 'Camera',
      icon: <Camera />
    },
    {
      label: 'User',
      icon: <UserRound />
    },
    {
      label: 'Settings',
      icon: <Settings />
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
