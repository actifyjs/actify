import { Label, LinearProgress, Slider, Switch } from 'actify'

import { useState } from 'react'

export default () => {
  const [value, setValue] = useState(50)
  const [isIndeterminate, setIsIndeterminate] = useState(true)

  const handleChange = (value: number | number[]) => {
    setValue(value as number)
  }

  return (
    <div className="flex flex-col gap-4">
      <LinearProgress
        value={value}
        maxValue={1000}
        aria-label="linear progress"
        isIndeterminate={isIndeterminate}
      />

      <Label className="flex items-center gap-2">
        <span>indeterminate</span>
        <Switch
          icons
          color="primary"
          aria-label="indeterminate"
          isSelected={isIndeterminate}
          onChange={setIsIndeterminate}
        />
      </Label>
      <Label className="flex flex-1 items-center gap-2">
        <span>value</span>
        <Slider
          labeled
          value={value}
          aria-label="linear progress"
          onChange={handleChange}
        />
      </Label>
    </div>
  )
}
