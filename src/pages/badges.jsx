import { useState } from 'react'
import { Home, User } from 'lucide-react'
import Code from '@/packages/components/Code'
import Badge from '@/packages/components/Badges'
import Button from '@/packages/components/Button'
import Switch from '@/packages/components/Switch'
import TextField from '@/packages/components/TextFields'
import IconButton from '@/packages/components/Button/IconButton'

const codeBlock = `
import { useState } from 'react'
import { Badge, Button, IconButton } from 'actify'

export default () => {
  const [dot, setDot] = useState(false)
  const [content, setContent] = useState('')

  return(
    <>
      <Badge content={content} dot={dot}>
        <Button>
          <div slot="icon" className="flex items-center">
            <Home />
          </div>
          Home
        </Button>
      </Badge>
      <Badge content={content} dot={dot}>
        <IconButton>
          <User />
        </IconButton>
      </Badge>
    </>
  )
}

`

export default () => {
  const [dot, setDot] = useState(false)
  const [content, setContent] = useState('')

  return (
    <>
      <strong className="text-6xl font-bold">Badges</strong>
      <h2 className="my-2 text-xl">
        Badges show notifications, counts, or status information on navigation items and icons
      </h2>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex gap-2">
          <Badge content={content} dot={dot}>
            <Button>
              <div slot="icon" className="flex items-center">
                <Home />
              </div>
              Home
            </Button>
          </Badge>
          <Badge content={content} dot={dot}>
            <IconButton>
              <User />
            </IconButton>
          </Badge>
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <Switch icons onInput={(e) => setDot(e.target.selected)} />
            <span>dot</span>
          </label>
          <TextField variant="outlined" label="content" value={content} onInput={(e) => setContent(e.target.value)} />
        </div>
      </div>
      <div className="mt-4">
        <Code code={codeBlock} language="jsx" />
      </div>
    </>
  )
}
