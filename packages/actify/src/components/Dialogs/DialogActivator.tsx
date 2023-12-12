'use client'
import { tv } from 'tailwind-variants'
import { useMergeRefs } from '@floating-ui/react'
import { useDialogContext } from './DialogContext'
import React, { forwardRef, isValidElement, cloneElement } from 'react'

const variants = tv({
  base: 'flex items-center'
})

export interface DialogActivatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const DialogActivator: React.FC<DialogActivatorProps> = forwardRef(
  (
    { className, children, asChild, ...props },
    propRef?: React.Ref<HTMLDivElement>
  ) => {
    const context = useDialogContext()
    // @ts-ignore
    const childrenRef = children.ref
    // @ts-ignore
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && isValidElement(children)) {
      return cloneElement(
        children,
        // @ts-ignore
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
        // @ts-ignore
        {...context.getReferenceProps(props)}
        data-state={context.open ? 'open' : 'closed'}
      >
        {children}
      </div>
    )
  }
)

export { DialogActivator }
