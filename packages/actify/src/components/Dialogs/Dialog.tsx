'use client'
import React, { forwardRef } from 'react'
import { DialogClose } from './DialogClose'
import { DialogHeading } from './DialogHeading'
import { DialogContent } from './DialogContent'
import { DialogActivator } from './DialogActivator'
import { DialogDescription } from './DialogDescription'
import { DialogProvider } from './DialogContext'

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const Dialog = forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    <DialogProvider ref={ref} {...rest}>
      {children}
    </DialogProvider>
  )
})

export default Object.assign(Dialog, {
  Close: DialogClose,
  Heading: DialogHeading,
  Content: DialogContent,
  Activator: DialogActivator,
  Description: DialogDescription
})
