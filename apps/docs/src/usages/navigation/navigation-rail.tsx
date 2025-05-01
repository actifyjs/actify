import { NavigationRail } from 'actify'

export default () => {
  const items = [
    {
      label: 'Home',
      icon: 'home',
      badge: 1234
    },
    {
      label: 'Camera',
      icon: 'photo_camera'
    },
    {
      label: 'User',
      icon: 'person'
    },
    {
      label: 'Settings',
      icon: 'settings'
    }
  ]

  return <NavigationRail items={items} />
}
