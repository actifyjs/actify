import { useState } from 'react'
import { Badge, Icon, Slider, Select, Button, IconButton } from 'actify'

export default () => {
  const [value, setValue] = useState(99)
  const [color, setColor] = useState({ lable: 'Error', value: 'error' })

  return (
    <>
      <div className="flex gap-8">
        <Badge value={value} color={color.value}>
          <IconButton>
            <Icon name="User" />
          </IconButton>
        </Badge>
        <Badge value={value} color={color.value}>
          <Button>with button</Button>
        </Badge>
      </div>
      <div className="mt-4 flex gap-4 flex-wrap">
        <Slider
          labeled
          max={999}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Select value={color} onChange={(select) => setColor(select)}>
          <Select.Option value="primary">Primary</Select.Option>
          <Select.Option value="secondary">Secondary</Select.Option>
          <Select.Option value="tertiary">Tertiary</Select.Option>
          <Select.Option value="error">Error</Select.Option>
        </Select>
      </div>
    </>
  )
}
