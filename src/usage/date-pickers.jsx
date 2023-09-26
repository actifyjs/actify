import { useState } from 'react'
import { DatePicker } from 'actify'

export default () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null
  })

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  return (
    <DatePicker
      value={value}
      showFooter
      showShortcuts
      onChange={handleChange}
    />
  )
}
