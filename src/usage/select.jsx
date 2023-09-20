import { Select } from 'actify'

export default () => {
  return (
    <div className="flex gap-2">
      <Select className="w-full">
        <Select.Option>HTML</Select.Option>
        <Select.Option>Vue</Select.Option>
        <Select.Option>React</Select.Option>
        <Select.Option>Actify</Select.Option>
        <Select.Option>Tailwind CSS</Select.Option>
      </Select>
    </div>
  )
}
