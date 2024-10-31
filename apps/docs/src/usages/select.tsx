import { Select, SelectOption } from 'actify'

import React from 'react'

export default () => {
  const options = [
    { id: 1, name: 'Actify' },
    { id: 2, name: 'Ngroker' },
    { id: 3, name: 'Taildoor' },
    { id: 4, name: 'Hugola' }
  ]

  return (
    <div className="max-sm:flex-wrap flex gap-4">
      <Select label="Select Project" items={options}>
        {(item) => <SelectOption>{item.name}</SelectOption>}
      </Select>
      <Select label="Select Project" variant="outlined" items={options}>
        {(item) => <SelectOption>{item.name}</SelectOption>}
      </Select>
    </div>
  )
}
