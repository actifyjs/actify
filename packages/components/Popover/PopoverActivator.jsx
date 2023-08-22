import React from 'react'
import { useMergeRefs } from '@floating-ui/react'
import { usePopoverContext } from './PopoverContext'

const PopoverActivator = React.forwardRef(({ children, asChild = false, ...props }, propRef) => {
  const context = usePopoverContext()
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
    <button
      ref={ref}
      type="button"
      // The user can style the trigger based on the state
      data-state={context.open ? 'open' : 'closed'}
      {...context.getReferenceProps(props)}
    >
      {children}
    </button>
  )
})

export default PopoverActivator
