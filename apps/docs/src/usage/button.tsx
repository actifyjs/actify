import { Button } from 'actify'
import { Upload } from 'lucide-react'

export default () => {
  return (
    <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
      <Button variant="filled">Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="elevated">Elevated</Button>
      <Button variant="tonal">Tonal</Button>
      <Button variant="text">Text Button</Button>
      <Button variant="filled">
        <Upload />
        Filled
      </Button>
      <Button variant="outlined">
        <Upload />
        Outlined
      </Button>
      <Button variant="elevated">
        <Upload />
        Elevated
      </Button>
      <Button variant="tonal">
        <Upload />
        Tonal
      </Button>
      <Button variant="text">
        <Upload />
        Text
      </Button>
    </div>
  )
}
