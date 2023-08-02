import { Home } from 'lucide-react'
import { Button } from '@/packages/components'

export default () => {
  return (
    <div className="flex justify-between">
      <Button>Default Button</Button>
      <Button variant="elevated">Elevated Button</Button>
      <Button variant="tonal">Tonal Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="text">Text Button</Button>
      <Button leading-icon>
        <div slot="icon" className="flex items-center">
          <Home />
        </div>
        Button with leading icon
      </Button>
      <Button trailing-icon>
        Button with trailing icon
        <div slot="icon" className="flex items-center">
          <Home />
        </div>
      </Button>
    </div>
  )
}
