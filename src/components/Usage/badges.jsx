import { User } from 'lucide-react'
import { useState } from 'react'
import { Badge, IconButton, TextField } from '@/packages/components'

export default () => {
  const [value, setValue] = useState('99')
  const [color, setColor] = useState('primary')

  return (
    <>
      <IconButton>
        <User />
        <Badge value={value} color={color} />
      </IconButton>

      <div className="flex gap-4">
        <TextField value={value} label="set badge" onInput={(e) => setValue(e.target.value)} />
        <TextField value={color} label="set color" onInput={(e) => setColor(e.target.value)} />
      </div>
    </>
  )
}
