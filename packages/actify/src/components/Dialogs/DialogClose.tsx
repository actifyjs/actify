'use client'
import { Slot } from './../Slot'
import { tv } from 'tailwind-variants'
import React, { forwardRef } from 'react'
import { useDialogContext } from './DialogContext'

const variants = tv({
  base: ''
})

export interface DialogCloseProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const DialogClose = forwardRef<HTMLElement, DialogCloseProps>(
  (props, forwardedRef) => {
    const { onOpenChange } = useDialogContext()
    const { className, children, asChild, ...rest } = props
    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        {...rest}
        // @ts-ignore
        ref={forwardedRef}
        onClick={() => onOpenChange?.(false)}
        className={variants({ className })}
      >
        {children}
      </Comp>
    )
  }
)

export { DialogClose }
