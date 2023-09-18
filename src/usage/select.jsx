import { Select, SelectOption } from 'actify'

export default () => {
  return (
    <div className="flex gap-2">
      <Select label="Select...">
        <SelectOption>AntDesign</SelectOption>
        <SelectOption>shadcn</SelectOption>
        <SelectOption>Actify</SelectOption>
        <SelectOption>Tailwind CSS</SelectOption>
      </Select>
    </div>
  )
}
