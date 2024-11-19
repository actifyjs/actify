import { Select, SelectOption } from 'actify'

import React from 'react'

export default () => {
  return (
    <div className="max-sm:flex-wrap flex gap-4">
      <Select label="Select Project">
        <SelectOption>Actify</SelectOption>
        <SelectOption>Ngroker</SelectOption>
        <SelectOption>Taildoor</SelectOption>
        <SelectOption>Hugola</SelectOption>
      </Select>
      <Select variant="outlined" label="Select Project">
        <SelectOption>Actify</SelectOption>
        <SelectOption>Ngroker</SelectOption>
        <SelectOption>Taildoor</SelectOption>
        <SelectOption>Hugola</SelectOption>
      </Select>
    </div>
  )
}
