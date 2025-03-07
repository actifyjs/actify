import { Select, SelectOption } from 'actify'

import React from 'react'

export default () => {
  const [selectedKey, setSelectedKey] = React.useState("");

  const options = [
    {id: "actify", value: "Actify"},
    {id: "ngroker", value: "Ngroker"},
    {id: "taildoor", value: "Taildoor"},
    {id: "hugola", value: "Hugola"}
  ];

  return (
    <div className="flex flex-col gap-5">
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
      <div>
        <h6 className='mb-3 font-semibold'>Controlled Example:</h6>
        <Select variant="outlined" label="Controlled Select" selectedKey={selectedKey}
        onSelectionChange={key => setSelectedKey(key.toString())}>
          <>
          {options.map((option) => (
            <SelectOption key={option.id}>
              {option.value}
            </SelectOption>
          ))}
          </>
        </Select>
        <p className='mt-1'>Selected key: {selectedKey}</p>
      </div>
    </div>
  )
}
