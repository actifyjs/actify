import { Icon, Button } from 'actify'

export default () => {
  return (
    <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
      <Button loading>Loading Button</Button>
      <Button variant="elevated">Elevated Button</Button>
      <Button variant="tonal">Tonal Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button>
        <Icon name="Home" />
        with icon
      </Button>
      <Button variant="text">Text Button</Button>
    </div>
  )
}
