import { Badge, Button, Icon, IconButton, Slider } from 'actify'

import { useState } from 'react'

type Color = 'primary' | 'secondary' | 'tertiary' | 'error'

export default () => {
  const [value, setValue] = useState(99)
  const [color, setColor] = useState<Color>('error')

  return (
    <>
      <div className="flex gap-8">
        <Badge value={value} color={color}>
          <IconButton>
            <Icon>person</Icon>
          </IconButton>
        </Badge>
        <Badge value={value} color={color}>
          <Button>with button</Button>
        </Badge>
      </div>
      <div className="mt-4 flex gap-4 flex-wrap">
        <Slider
          labeled
          max={999}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(parseInt(e.target.value))
          }
        />
      </div>
    </>
  )
}
