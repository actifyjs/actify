import { Label, Switch } from 'actify'

export default () => {
  return (
    <>
      <div className="flex gap-2 flex-wrap justify-between">
        <Switch color="primary" aria-label="primary" />
        <Switch color="secondary" aria-label="secondary" />
        <Switch color="tertiary" aria-label="tertiary" />
        <Switch defaultSelected color="error" aria-label="error" />
        <Switch isDisabled aria-label="disabled" />
      </div>

      <div className="mt-4 flex gap-2">
        <Switch>label</Switch>
        <Label className="flex items-center gap-2">
          <Switch color="primary" aria-label="primary" />
          <span>with label</span>
        </Label>
        <Label className="flex items-center gap-2">
          <Switch color="primary" defaultSelected icons aria-label="primary" />
          <span>with icons</span>
        </Label>
      </div>
    </>
  )
}
