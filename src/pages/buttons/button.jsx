import { Home } from 'lucide-react'
import Code from '@/packages/components/Code'
import Button from '@/packages/components/Button'

const codeBlock = `
import { Home } from 'lucide-react'
import { Button } from 'actify'

export default () => {
  return(
    <>
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
    </>
  )
}

`

export default () => {
  return (
    <>
      <strong className="text-6xl font-bold">Button</strong>
      <h2 className="my-2 text-xl">
        The Button component replaces the standard html button with a material design 3 and a multitude of options. Any
        color helper class can be used to alter the background or text color.
      </h2>

      <div className="flex flex-wrap gap-2">
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
        <Button color="primary" variant="tonal">
          Primary Button
        </Button>
        <Button color="secondary" variant="tonal">
          Secondary Button
        </Button>
        <Button color="tertiary" variant="tonal">
          Tertiary Button
        </Button>
        <Button color="error" variant="tonal">
          Error Button
        </Button>
      </div>

      <div className="mt-4">
        <Code code={codeBlock} language="jsx" />
      </div>
    </>
  )
}
