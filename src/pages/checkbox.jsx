import Code from '@/packages/components/Code'
import Checkbox from '@/packages/components/Checkbox'

const codeBlock = `
import { Checkbox } from 'actify'

export default () => {
  return(
    <>
      <label className="flex items-center">
        <Checkbox />
        <span>primary</span>
      </label>
      <label className="flex items-center">
        <Checkbox color="secondary" />
        <span>secondary</span>
      </label>
      <label className="flex items-center">
        <Checkbox color="tertiary" />
        <span>tertiary</span>
      </label>
      <label className="flex items-center">
        <Checkbox color="error" />
        <span>error</span>
      </label>
      <label className="flex items-center">
        <Checkbox disabled color="warning" />
        <span>disabled</span>
      </label>  
    </>
  )
}

`

export default () => {
  return (
    <>
      <div className="flex gap-2">
        <label className="flex items-center">
          <Checkbox />
          <span>primary</span>
        </label>
        <label className="flex items-center">
          <Checkbox color="secondary" />
          <span>secondary</span>
        </label>
        <label className="flex items-center">
          <Checkbox color="tertiary" />
          <span>tertiary</span>
        </label>
        <label className="flex items-center">
          <Checkbox color="error" />
          <span>error</span>
        </label>
        <label className="flex items-center">
          <Checkbox disabled color="warning" />
          <span>disabled</span>
        </label>
      </div>
      <div className="mt-4">
        <Code code={codeBlock} language="jsx" />
      </div>
    </>
  )
}
