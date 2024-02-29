import { Checkbox } from 'actify'
import React, { useState } from 'react'

export default () => {
  const [selected, setSelected] = useState(false)
  const [indeterminate, setIndeterminate] = useState(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.checked)
    if (indeterminate == true) {
      setIndeterminate(false)
    }
  }

  return (
    <div className="flex flex-wrap gap-4">
      <Checkbox
        checked={selected}
        indeterminate={indeterminate}
        onChange={handleChange}
      />
      <Checkbox color="secondary" />
      <Checkbox color="tertiary" />
      <Checkbox color="error" />
      <Checkbox disabled color="error" />
    </div>
  )
}
