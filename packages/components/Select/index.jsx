import React from 'react'
import { SelectProvider } from './SelectContext'

const Select = React.forwardRef((props, ref) => {
  const { children, ...rest } = props
  return (
    <SelectProvider ref={ref} {...rest}>
      {children}
    </SelectProvider>
  )
})

Select.displayName = 'Actify.Select'

export default Select
