'use client'
import React from 'react'
import { DialogClose } from './DialogClose'
import { DialogHeading } from './DialogHeading'
import { DialogContent } from './DialogContent'
import { DialogActivator } from './DialogActivator'
import { DialogDescription } from './DialogDescription'
import { DialogProvider } from './DialogContext'

interface DialogProps extends React.ComponentProps<'div'> {}

const Dialog = (props: DialogProps) => {
  const { children, ...rest } = props
  return <DialogProvider {...rest}>{children}</DialogProvider>
}

export default Object.assign(Dialog, {
  Close: DialogClose,
  Heading: DialogHeading,
  Content: DialogContent,
  Activator: DialogActivator,
  Description: DialogDescription
})
