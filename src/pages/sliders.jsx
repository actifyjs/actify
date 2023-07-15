import { useState } from 'react'
import Code from '@/packages/components/Code'
import Switch from '@/packages/components/Switch'
import Slider from '@/packages/components/Sliders'

const codeBlock = `
import { Slider } from 'actify'

export default () => {
  return (
    <Slider labeled />
  )
}
`

export default () => {
  const [labeled, setLabeled] = useState(true)

  return (
    <div className="mt-4 flex flex-col">
      <label className="flex items-center gap-2">
        <Switch icons selected onInput={(e) => setLabeled(e.target.selected)} />
        <span>show label</span>
      </label>
      <Slider labeled={labeled} />
      <Code className="mt-4" code={codeBlock} language="jsx" />
    </div>
  )
}
