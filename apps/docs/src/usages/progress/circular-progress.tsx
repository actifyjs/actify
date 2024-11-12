import { CircularProgress, Label, Slider, Switch } from 'actify'

import { useState } from 'react'

export default () => {
  const [value, setValue] = useState<number>(50)
  const [indeterminate, setIndeterminate] = useState(true)

  const handleChange = (value: number | number[]) => {
    setValue(value as number)
  }

  return (
    <div className="flex flex-col gap-4">
      <CircularProgress indeterminate={indeterminate} value={value} />
      <Label className="flex items-center gap-2">
        <span>indeterminate</span>
        <Switch
          icons
          color="primary"
          aria-label="indeterminate"
          isSelected={indeterminate}
          onChange={setIndeterminate}
        />
      </Label>
      <Label className="flex flex-1 items-center gap-2">
        <span>value</span>
        <Slider
          labeled
          value={value}
          aria-label="circular progress"
          onChange={handleChange}
        />
      </Label>
    </div>
  )
}
