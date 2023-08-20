import React from 'react'
import { TooltipProvider } from './TooltipContext'

const Tooltip = React.forwardRef((props, ref) => {
  const { children, ...rest } = props
  return (
    <TooltipProvider ref={ref} {...rest}>
      {children}
    </TooltipProvider>
  )
})

export default Tooltip
