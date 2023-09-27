import React, { forwardRef } from 'react'
import { DialogClose } from './DialogClose'
import { DialogHeading } from './DialogHeading'
import { DialogContent } from './DialogContent'
import { DialogActivator } from './DialogActivator'
import { DialogDescription } from './DialogDescription'
import { DialogProvider } from './DialogContext'

const DialogRoot = forwardRef((props, ref) => {
  const { children, ...rest } = props
  return (
    <DialogProvider ref={ref} {...rest}>
      {children}
    </DialogProvider>
  )
})

export const Dialog = Object.assign(DialogRoot, {
  Close: DialogClose,
  Heading: DialogHeading,
  Content: DialogContent,
  Activator: DialogActivator,
  Description: DialogDescription
})
