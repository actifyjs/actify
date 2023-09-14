import { Icon, Button } from 'actify'

export default () => {
  return (
    <div className="grid gap-2 grid-cols-5">
      <Button variant="filled">Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="elevated">Elevated</Button>
      <Button variant="tonal">Tonal</Button>
      <Button variant="text">Text Button</Button>
      <Button variant="filled">
        <Icon name="Upload" />
        Filled
      </Button>
      <Button variant="outlined">
        <Icon name="Upload" />
        Outlined
      </Button>
      <Button variant="elevated">
        <Icon name="Upload" />
        Elevated
      </Button>
      <Button variant="tonal">
        <Icon name="Upload" />
        Tonal
      </Button>
      <Button variant="text">
        <Icon name="Upload" />
        Text
      </Button>
    </div>
  )
}
