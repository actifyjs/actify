import { useState } from 'react'
import { Icon, Badge, Button, IconButton, TextField } from '@/packages/components'

export default () => {
  const [value, setValue] = useState('999')
  const [color, setColor] = useState('primary')

  return (
    <>
      <div className="flex gap-8">
        <Badge value={value} color={color}>
          <IconButton>
            <Icon name="User" />
          </IconButton>
        </Badge>
        <Badge value={value}>
          <Button>with button</Button>
        </Badge>
      </div>
      <div className="flex gap-4">
        <TextField value={value} label="set badge" onInput={(e) => setValue(e.target.value)} />
        <TextField value={color} label="set color" onInput={(e) => setColor(e.target.value)} />
      </div>
    </>
  )
}
