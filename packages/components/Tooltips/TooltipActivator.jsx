import React from 'react'
import { useMergeRefs } from '@floating-ui/react'
import { useTooltipContext } from './TooltipContext'

const TooltipActivator = React.forwardRef(({ children, asChild = false, ...props }, propRef) => {
  const context = useTooltipContext()
  const childrenRef = children.ref
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        'data-state': context.open ? 'open' : 'closed'
      })
    )
  }

  return (
    <div
      ref={ref}
      className="inline-flex"
      data-state={context.open ? 'open' : 'closed'}
      {...context.getReferenceProps(props)}
    >
      {children}
    </div>
  )
})

export default TooltipActivator
