import { useState } from 'react'
import { LinearProgress, Switch, Slider } from 'actify'

export default () => {
  const [value, setValue] = useState('50')
  const [indeterminate, setIndeterminate] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      <LinearProgress indeterminate={indeterminate} value={value} />

      <label className="flex items-center gap-2">
        <span>indeterminate</span>
        <Switch
          icons
          color="primary"
          selected={indeterminate}
          onChange={(e) => setIndeterminate(e.target.checked)}
        />
      </label>
      <label className="flex flex-1 items-center gap-2">
        <span>value</span>
        <Slider
          labeled
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    </div>
  )
}
