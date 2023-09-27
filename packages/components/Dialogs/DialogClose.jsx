import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { useDialogContext } from './DialogContext'

const variants = tv({
  base: ''
})

const DialogClose = forwardRef((props, ref) => {
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
})

export { DialogClose }
