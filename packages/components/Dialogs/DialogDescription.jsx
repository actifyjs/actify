import React from 'react'
import { tv } from 'tailwind-variants'
import { useDialogContext } from './DialogContext'

const variants = tv({
  base: 'relative p-2 -mx-2 mb-2 text-base leading-relaxed border-t border-t-black/10 dark:border-t-white/10 border-b border-b-black/10 dark:border-b-white/10 max-h-[calc(50vh)] overflow-y-auto'
})

const DialogDescription = React.forwardRef((props, ref) => {
  const { children, className, ...rest } = props
  const id = React.useId()
  const { setDescriptionId } = useDialogContext()

  React.useLayoutEffect(() => {
    setDescriptionId(id)
    return () => setDescriptionId(undefined)
  }, [id, setDescriptionId])

  return (
    <div id={id} ref={ref} {...rest} className={variants({ className })}>
      {children}
    </div>
  )
})

export default DialogDescription
