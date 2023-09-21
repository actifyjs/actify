import { useState } from 'react'
import { Select } from 'actify'

export default () => {
  const [selected, setSelected] = useState(null)

  return (
    <div className="flex gap-2">
      <Select
        multiple
        value={selected}
        className="w-full"
        onChange={(select) => setSelected(select)}
      >
        <Select.Option>HTML</Select.Option>
        <Select.Option>Vue</Select.Option>
        <Select.Option>React</Select.Option>
        <Select.Option>Actify</Select.Option>
        <Select.Option>Tailwind CSS</Select.Option>
      </Select>
    </div>
  )
}
