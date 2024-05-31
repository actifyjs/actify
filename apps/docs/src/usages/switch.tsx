import { Label, Switch } from 'actify'

export default () => {
  return (
    <>
      <div className="flex gap-2 flex-wrap justify-between">
        <Switch color="primary" />
        <Switch color="secondary" />
        <Switch color="tertiary" />
        <Switch defaultSelected color="error" />
        <Switch disabled />
      </div>

      <div className="mt-4 flex gap-2">
        <Label className="flex items-center gap-2">
          <Switch color="primary" />
          <span>with label</span>
        </Label>
        <Label className="flex items-center gap-2">
          <Switch color="primary" defaultSelected icons />
          <span>with icons</span>
        </Label>
      </div>
    </>
  )
}
