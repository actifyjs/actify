import { CircularProgress, Label, Slider, Switch } from 'actify'

import { useState } from 'react'

export default () => {
  const [value, setValue] = useState('50')
  const [indeterminate, setIndeterminate] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      <CircularProgress indeterminate={indeterminate} value={value} />
      <Label className="flex items-center gap-2">
        <span>indeterminate</span>
        <Switch
          icons
          color="primary"
          selected={indeterminate}
          onChange={(e) => setIndeterminate(e.target.checked)}
        />
      </Label>
      <Label className="flex flex-1 items-center gap-2">
        <span>value</span>
        <Slider
          labeled
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Label>
    </div>
  )
}
