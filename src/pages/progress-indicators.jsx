import { useState } from 'react'
import Code from '@/packages/components/Code'
import Switch from '@/packages/components/Switch'
import Slider from '@/packages/components/Sliders'
import LinearProgress from '@/packages/components/LinearProgress'
import CircularProgress from '@/packages/components/CircularProgress'

const codeBlock = `
import LinearProgress from 'actify'
import CircularProgress from 'actify'

export default () => {
  return(
    <>
      <LinearProgress indeterminate progress={0.5} />
      <CircularProgress indeterminate />
    </>
  )
}

`

export default () => {
  const [progress, setProgress] = useState(0.5)
  const [fourColor, setFourColor] = useState(false)
  const [indeterminate, setIndeterminate] = useState(true)

  return (
    <>
      <div className="flex items-center gap-4">
        <LinearProgress fourColor={fourColor} indeterminate={indeterminate} progress={progress} />
        <CircularProgress fourColor={fourColor} progress={progress} indeterminate={indeterminate} />
      </div>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-2">
          <Switch icons onInput={(e) => setFourColor(e.target.selected)} />
          <span>fourColor</span>
        </label>
        <label className="flex items-center gap-2">
          <Switch icons selected onInput={(e) => setIndeterminate(e.target.selected)} />
          <span>indeterminate</span>
        </label>
        <label className="flex items-center gap-2">
          <Slider labeled onInput={(e) => setProgress(e.target.value / 100)} />
          <span>progress</span>
        </label>
      </div>
      <div className="mt-4">
        <Code code={codeBlock} language="jsx" />
      </div>
    </>
  )
}
