import React from 'react'
import { PopoverProvider } from './PopoverContext'
import { PopoverContent } from './PopoverContent'
import { PopoverActivator } from './PopoverActivator'

const PopoverRoot = (props) => {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const { children, ...rest } = props
  return <PopoverProvider {...rest}>{children}</PopoverProvider>
}

export const Popover = Object.assign(PopoverRoot, {
  Content: PopoverContent,
  Activator: PopoverActivator
})
