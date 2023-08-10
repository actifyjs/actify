import { Icon, Button } from 'actify'

export default () => {
  return (
    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      <Button>Default Button</Button>
      <Button variant="elevated">Elevated Button</Button>
      <Button variant="tonal">Tonal Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="text">Text Button</Button>
      <Button>
        <Icon name="Home" />
        Button with leading icon
      </Button>
      <Button>
        Button with trailing icon
        <Icon name="Home" />
      </Button>
    </div>
  )
}
