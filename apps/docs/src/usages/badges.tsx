import { Badge, Button, Icon, IconButton, Slider } from 'actify'

import { useState } from 'react'

export default () => {
  const color = 'error'
  const [value, setValue] = useState(99)

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
          value={value}
          maxValue={999}
          // @ts-ignore
          onChange={setValue}
        />
      </div>
    </>
  )
}
