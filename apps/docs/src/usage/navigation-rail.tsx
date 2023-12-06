import { NavigationRail, List, ListItem } from 'actify'
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
