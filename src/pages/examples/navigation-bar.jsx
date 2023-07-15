import NavigationBar from '@/packages/components/NavigationBar'
import { Home, Contact, Flag } from 'lucide-react'

export default () => {
  const items = [
    {
      label: 'Home',
      icon: <Home />
    },
    {
      label: 'Contact',
      icon: <Contact />
    },
    {
      label: 'About',
      icon: <Flag />
    }
  ]

  return (
    <div className="mt-4">
      <NavigationBar>
        {items.map((item, index) => (
          <div key={index} className="group flex flex-grow flex-col items-center">
            <div className="grid h-8 w-16 place-content-center rounded-full group-hover:bg-black/10 dark:group-hover:bg-white/10">
              {item.icon}
            </div>
            <label>{item.label}</label>
          </div>
        ))}
      </NavigationBar>
    </div>
  )
}
