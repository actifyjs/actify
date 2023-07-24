import { useState } from 'react'
import { LinearProgress, CircularProgress, Switch, Slider } from '@/packages/components'

export default () => {
  const [indeterminate, setIndeterminate] = useState(true)
  const [progress, setProgress] = useState(0.5)
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="basis-1/2">
          <LinearProgress indeterminate={indeterminate} progress={progress} />
        </div>
        <CircularProgress indeterminate={indeterminate} progress={progress} />
      </div>
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2">
          <Switch
            color="primary"
            icons
            selected
            value={indeterminate}
            onInput={(e) => setIndeterminate(e.target.selected)}
          />
          <span>indeterminate</span>
        </label>
        <label className="flex items-center gap-2">
          <Slider labeled onInput={(e) => setProgress(e.target.value / 100)} />
          <span>progress</span>
        </label>
      </div>
    </>
  )
}
