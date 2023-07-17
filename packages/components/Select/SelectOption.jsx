import React, { forwardRef } from 'react'
import '@material/web/select/select-option'

const SelectOption = forwardRef((props, ref) => {
  return <md-select-option ref={ref} {...props} />
})

SelectOption.displayName = 'Actify.SelectOption'

export default SelectOption
