'use client'
import React, { forwardRef, useId, useLayoutEffect } from 'react'
import { tv } from 'tailwind-variants'
import { useDialogContext } from './DialogContext'

const variants = tv({
  base: 'relative p-2 -mx-2 mb-2 text-base leading-relaxed border-t border-t-black/10 dark:border-t-white/10 border-b border-b-black/10 dark:border-b-white/10 max-h-[calc(50vh)] overflow-y-auto'
})

interface DialogDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

const DialogDescription = forwardRef<HTMLDivElement, DialogDescriptionProps>(
  (props, ref) => {
    const { children, className, ...rest } = props
    const id = useId()
    // @ts-ignore
    const { setDescriptionId } = useDialogContext()

    useLayoutEffect(() => {
      setDescriptionId(id)
      return () => setDescriptionId(undefined)
    }, [id, setDescriptionId])

    return (
      <div id={id} ref={ref} {...rest} className={variants({ className })}>
        {children}
      </div>
    )
  }
)

export { DialogDescription }
