import { Checkbox } from 'actify'
import React, { useState, useEffect } from 'react'

export default () => {
  const [checkedAll, setCheckedAll] = useState(false)
  const [checked, setChecked] = useState([false, false, false])
  const [indeterminate, setIndeterminate] = useState(false)

  const handleCheckedAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedAll(event.target.checked)
    if (indeterminate == true) {
      setIndeterminate(false)
    }
    if (event.target.checked) {
      setChecked([true, true, true])
    } else {
      setChecked([false, false, false])
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    checked[index] = e.target.checked
    setChecked([...checked])
  }

  useEffect(() => {
    if (checked.some((item) => item == true)) {
      setIndeterminate(true)
    } else {
      setIndeterminate(false)
    }
    if (checked.every((item) => item == true)) {
      setCheckedAll(true)
    } else {
      setCheckedAll(false)
    }
  }, [checked])

  return (
    <div className="flex flex-wrap gap-4">
      <Checkbox
        checked={checkedAll}
        indeterminate={indeterminate}
        onChange={handleCheckedAll}
      />
      <Checkbox
        checked={checked[0]}
        onChange={(e) => handleChange(e, 0)}
        color="secondary"
      />
      <Checkbox
        checked={checked[1]}
        onChange={(e) => handleChange(e, 1)}
        color="tertiary"
      />
      <Checkbox
        checked={checked[2]}
        onChange={(e) => handleChange(e, 2)}
        color="error"
      />
      <Checkbox disabled />
    </div>
  )
}
