import { Label, LinearProgress, Slider, Switch } from 'actify'

import { useState } from 'react'

export default () => {
  const [value, setValue] = useState(50)
  const [indeterminate, setIndeterminate] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      <LinearProgress indeterminate={indeterminate} value={value} />

      <Label className="flex items-center gap-2">
        <span>indeterminate</span>
        <Switch
          icons
          color="primary"
          isSelected={indeterminate}
          onChange={setIndeterminate}
        />
      </Label>
      <Label className="flex flex-1 items-center gap-2">
        <span>value</span>
        <Slider
          labeled
          value={value}
          // @ts-ignore
          onChange={setValue}
        />
      </Label>
    </div>
  )
}
