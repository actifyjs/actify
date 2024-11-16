import { Checkbox, CheckboxGroup } from 'actify'
import React, { useEffect, useState } from 'react'

export default () => {
  const [selected, setSelected] = useState(['actify'])

  const [isIndeterminate, setIsIndeterminate] = useState(false)
  const [allSelected, setAllSelected] = useState(false)

  useEffect(() => {
    if (selected.length >= 1) {
      if (selected.length == 4) {
        setIsIndeterminate(false)
        setAllSelected(true)
      } else {
        setAllSelected(false)
        setIsIndeterminate(true)
      }
    } else {
      setIsIndeterminate(false)
      setAllSelected(false)
    }
  }, [selected])

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Checkbox color="primary" defaultSelected>
          Primary
        </Checkbox>
        <Checkbox color="secondary" aria-label="secondary" />
        <Checkbox color="tertiary" aria-label="tertiary" />
        <Checkbox color="error" aria-label="error" />
      </div>
      <Checkbox
        isIndeterminate={isIndeterminate}
        isSelected={allSelected}
        onChange={() => {
          setSelected(
            selected.length == 4
              ? []
              : ['actify', 'ngroker', 'taildoor', 'hugola']
          )
        }}
      >
        Check all
      </Checkbox>
      <CheckboxGroup label="Project" value={selected} onChange={setSelected}>
        <Checkbox value="actify">Actify</Checkbox>
        <Checkbox value="ngroker">Ngroker</Checkbox>
        <Checkbox value="taildoor">Taildoor</Checkbox>
        <Checkbox value="hugola">Hugola</Checkbox>
      </CheckboxGroup>
    </>
  )
}
