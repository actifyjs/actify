import React, { forwardRef, isValidElement, cloneElement } from 'react'
import { tv } from 'tailwind-variants'
import { useMergeRefs } from '@floating-ui/react'
import { useDialogContext } from './DialogContext'

const variants = tv({
  base: 'flex items-center'
})

const DialogActivator = forwardRef(
  ({ className, children, asChild = true, ...props }, propRef) => {
    const context = useDialogContext()
    const childrenRef = children.ref
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && isValidElement(children)) {
      return cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          role: 'button',
          'data-state': context.open ? 'open' : 'closed'
        })
      )
    }

    return (
      <div
        ref={ref}
        role="button"
        className={variants({ className })}
        {...context.getReferenceProps(props)}
        data-state={context.open ? 'open' : 'closed'}
      >
        {children}
      </div>
    )
  }
)

export { DialogActivator }
