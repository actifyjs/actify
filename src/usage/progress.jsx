import { useState } from 'react'
import { LinearProgress, CircularProgress, Switch, Slider } from 'actify'

export default () => {
  const [indeterminate, setIndeterminate] = useState(true)
  const [value, setValue] = useState(50)
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="basis-1/2">
          <LinearProgress indeterminate={indeterminate} value={value} />
        </div>
        <CircularProgress indeterminate={indeterminate} value={value} />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <label className="flex items-center gap-2">
          <Switch
            color="primary"
            icons
            selected
            value={indeterminate}
            onChange={(e) => setIndeterminate(e.target.checked)}
          />
          <span>indeterminate</span>
        </label>
        <label className="flex flex-1 items-center gap-2">
          <Slider
            labeled
            value={value}
            onChange={(e) => setValue(e.target.value / 100)}
          />
          <span>value</span>
        </label>
      </div>
    </>
  )
}
