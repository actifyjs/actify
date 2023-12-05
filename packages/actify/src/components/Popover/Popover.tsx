'use client'
import React from 'react'
import { PopoverProvider } from './PopoverContext'
import { PopoverContent } from './PopoverContent'
import { PopoverActivator } from './PopoverActivator'

interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {}

const Popover: React.FC<PopoverProps> = (props) => {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const { children, ...rest } = props
  return <PopoverProvider {...rest}>{children}</PopoverProvider>
}

export default Object.assign(Popover, {
  Content: PopoverContent,
  Activator: PopoverActivator
})
