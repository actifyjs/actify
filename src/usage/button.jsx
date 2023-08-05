import { Icon, Button } from '@/packages/components'

export default () => {
  return (
    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      <Button>Default Button</Button>
      <Button variant="elevated">Elevated Button</Button>
      <Button variant="tonal">Tonal Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="text">Text Button</Button>
      <Button leading-icon>
        <div slot="icon" className="flex items-center">
          <Icon name="Home" />
        </div>
        Button with leading icon
      </Button>
      <Button trailing-icon>
        Button with trailing icon
        <div slot="icon" className="flex items-center">
          <Icon name="Home" />
        </div>
      </Button>
    </div>
  )
}
