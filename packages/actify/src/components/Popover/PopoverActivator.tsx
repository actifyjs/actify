'use client'
import React, { forwardRef, isValidElement, cloneElement } from 'react'
import { useMergeRefs } from '@floating-ui/react'
import { usePopoverContext } from './PopoverContext'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'inline-flex cursor-pointer'
})

export interface PopoverActivatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const PopoverActivator: React.FC<PopoverActivatorProps> = forwardRef(
  (
    { style, className, children, asChild = false, ...props },
    propRef?: React.Ref<HTMLDivElement>
  ) => {
    const context = usePopoverContext()
    // @ts-expect-error
    const childrenRef = children.ref
    // @ts-expect-error
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && isValidElement(children)) {
      return cloneElement(
        children,
        //@ts-expect-error
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
        {...props}
        role="button"
        className={variants({ className })}
        data-state={context.open ? 'open' : 'closed'}
        // @ts-expect-error
        {...context.getReferenceProps(props)}
      >
        {children}
      </div>
    )
  }
)

export { PopoverActivator }
