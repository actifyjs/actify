import { Chip } from 'actify'

export default () => {
  return (
    <div className="flex gap-2">
      <Chip label="React" href="https://react.dev" target="_blank" />
      <Chip type="filter" label="filter" />
      <Chip type="input" label="input" />
      <Chip type="suggestion" label="Actify" href="https://actifyjs.com" target="_blank" />
    </div>
  )
}
