import React from 'react'
import { tv } from 'tailwind-variants'
import { useTooltipContext } from './TooltipContext'
import { useMergeRefs, FloatingPortal } from '@floating-ui/react'

const variants = tv({
  base: 'z-50 text-on-secondary bg-secondary/90 py-3 px-4 rounded grid grid-cols-[1fr_auto] items-center gap-2 overflow-hidden mt-2.5'
})

const TooltipContent = React.forwardRef(
  ({ style, className, ...props }, propRef) => {
    const context = useTooltipContext()
    const ref = useMergeRefs([context.refs.setFloating, propRef])

    if (!context.open) return null

    return (
      <FloatingPortal>
        <div
          ref={ref}
          className={variants({ className })}
          style={{
            ...context.floatingStyles,
            ...style
          }}
          {...context.getFloatingProps(props)}
        />
      </FloatingPortal>
    )
  }
)

export default TooltipContent
