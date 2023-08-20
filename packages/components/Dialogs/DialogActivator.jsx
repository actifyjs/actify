import React from 'react'
import { useMergeRefs } from '@floating-ui/react'
import { useDialogContext } from './DialogContext'

const DialogActivator = React.forwardRef(({ children, asChild = false, ...props }, propRef) => {
  const context = useDialogContext()
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
    <div ref={ref} data-state={context.open ? 'open' : 'closed'} {...context.getReferenceProps(props)}>
      {children}
    </div>
  )
})

export default DialogActivator
