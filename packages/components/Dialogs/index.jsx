import React from 'react'
import { DialogProvider } from './DialogContext'

const Dialog = React.forwardRef((props, ref) => {
  const { children, ...rest } = props
  return (
    <DialogProvider ref={ref} {...rest}>
      {children}
    </DialogProvider>
  )
})
export default Dialog
