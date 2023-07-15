import Code from '@/packages/components/Code'
import Switch from '@/packages/components/Switch'

const codeBlock = `
import Switch from 'actify'

export default () => {
  return (
    <>
      <div className="flex gap-2">
        <Switch color="primary" />
        <Switch color="secondary" />
        <Switch color="tertiary" />
        <Switch selected color="error" />
        <Switch color="purple" />
        <Switch color="#f26f21" />
        <Switch disabled />
      </div>
      
      <div className="mt-4 flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <Switch color="primary" />
          <span>with label</span>
        </label>
        <label className="flex items-center gap-2">
          <Switch color="primary" icons selected />
          <span>with icons</span>
        </label>
      </div>
    </>
  )
}
`

export default () => {
  return (
    <div>
      <div className="flex gap-2">
        <Switch color="primary" />
        <Switch color="secondary" />
        <Switch color="tertiary" />
        <Switch selected color="error" />
        <Switch color="purple" />
        <Switch color="#f26f21" />
        <Switch disabled />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <Switch color="primary" />
          <span>with label</span>
        </label>
        <label className="flex items-center gap-2">
          <Switch color="primary" icons selected />
          <span>with icons</span>
        </label>
      </div>
      <div className="mt-4">
        <Code code={codeBlock} language="jsx" />
      </div>
    </div>
  )
}
