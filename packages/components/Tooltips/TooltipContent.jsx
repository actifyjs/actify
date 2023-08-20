import React from 'react'
import { Content } from 'actify'
import { useTooltipContext } from './TooltipContext'

import { useMergeRefs, FloatingPortal } from '@floating-ui/react'

const TooltipContent = React.forwardRef(({ style, ...props }, propRef) => {
  const context = useTooltipContext()
  const ref = useMergeRefs([context.refs.setFloating, propRef])

  if (!context.open) return null

  return (
    <FloatingPortal>
      <Content
        ref={ref}
        style={{
          ...context.floatingStyles,
          ...style
        }}
        {...context.getFloatingProps(props)}
      />
    </FloatingPortal>
  )
})

export default TooltipContent
