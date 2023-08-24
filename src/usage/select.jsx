import { Select, SelectOption } from 'actify'

export default () => {
  return (
    <div className="flex gap-2">
      <Select label="Select">
        <SelectOption>HTML</SelectOption>
        <SelectOption>Tailwind CSS</SelectOption>
        <SelectOption>Vue</SelectOption>
        <SelectOption>React</SelectOption>
        <SelectOption>Actify</SelectOption>
      </Select>
    </div>
  )
}
