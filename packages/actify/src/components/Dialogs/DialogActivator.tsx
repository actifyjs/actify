'use client'
import { Slot } from '@actify/Slot'
import { tv } from 'tailwind-variants'
import React, { forwardRef } from 'react'
import { useMergedRefs } from '@hooks/mergeRefs'
import { useDialogContext } from './DialogContext'

const variants = tv({
  base: 'flex items-center'
})

export interface DialogActivatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const DialogActivator = forwardRef<HTMLElement, DialogActivatorProps>(
  (props, forwardedRef) => {
    const { className, children, asChild, ...rest } = props
    const context = useDialogContext()

    // @ts-ignore
    const mergedRefs = useMergedRefs([context.refs.setReference, forwardedRef])
    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        {...rest}
        role="button"
        ref={mergedRefs}
        className={variants({ className })}
        // @ts-ignore
        {...context.getReferenceProps(rest)}
        data-state={context.open ? 'open' : 'closed'}
      >
        {children}
      </Comp>
    )
  }
)

export { DialogActivator }
