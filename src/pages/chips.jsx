import { Circle } from 'lucide-react'
import Code from '@/packages/components/Code'
import Chip from '@/packages/components/Chips'

const codeBlock = `
import { Chip } from 'actify'
import { Circle } from 'lucide-react'

export default () => {
  return (
    <div className="flex gap-2">
      <Chip icon={Circle} label="Ramp access" />
      <Chip icon={Circle} type="filter" label="filter" />
      <Chip type="input" label="input" />
      <Chip type="suggestion" label="Suggestion" />
    </div>
  )
}
`

export default () => {
  return (
    <>
      <div className="flex gap-2">
        <Chip icon={Circle} label="Ramp access" />
        <Chip icon={Circle} type="filter" label="filter" />
        <Chip type="input" label="input" />
        <Chip type="suggestion" label="Suggestion" />
      </div>
      <div className="mt-4">
        <Code code={codeBlock} language="jsx" />
      </div>
    </>
  )
}
