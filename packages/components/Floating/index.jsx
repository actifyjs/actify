import React from 'react'
import { PopoverProvider } from './PopoverContext'

const Popover = (props) => {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const { children, ...rest } = props
  return <PopoverProvider {...rest}>{children}</PopoverProvider>
}

export default Popover
