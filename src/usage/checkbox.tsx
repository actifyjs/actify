import { Checkbox } from 'actify'

export default () => {
  return (
    <div className="flex flex-wrap gap-4">
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
        <Checkbox disabled color="error" />
        <span>disabled</span>
      </label>
    </div>
  )
}
