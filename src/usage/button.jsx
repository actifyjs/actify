import { Icon, Button } from 'actify'

export default () => {
  return (
    <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
      <Button variant="filled">Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="elevated">Elevated</Button>
      <Button variant="tonal">Tonal</Button>
      <Button variant="text">Text Button</Button>
      <Button variant="filled">
        <Icon name="upload" />
        Filled
      </Button>
      <Button variant="outlined">
        <Icon name="upload" />
        Outlined
      </Button>
      <Button variant="elevated">
        <Icon name="upload" />
        Elevated
      </Button>
      <Button variant="tonal">
        <Icon name="upload" />
        Tonal
      </Button>
      <Button variant="text">
        <Icon name="upload" />
        Text
      </Button>
    </div>
  )
}
