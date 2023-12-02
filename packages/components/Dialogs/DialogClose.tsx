'use client'
import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { useDialogContext } from './DialogContext'

const variants = tv({
  base: ''
})

export interface DialogCloseProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const DialogClose = forwardRef<HTMLDivElement, DialogCloseProps>(
  (props, ref) => {
    // @ts-ignore
    const { setOpen } = useDialogContext()
    const { className, ...rest } = props
    return (
      <div
        ref={ref}
        {...rest}
        className={variants({ className })}
        onClick={() => setOpen(false)}
      />
    )
  }
)

export { DialogClose }
