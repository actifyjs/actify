import React from 'react'
import { useDialogContext } from './DialogContext'

const DialogDescription = React.forwardRef(({ children, ...rest }, ref) => {
  const id = React.useId()
  const { setDescriptionId } = useDialogContext()

  React.useLayoutEffect(() => {
    setDescriptionId(id)
    return () => setDescriptionId(undefined)
  }, [id, setDescriptionId])

  return (
    <div
      id={id}
      ref={ref}
      {...rest}
      className="relative p-4 text-base leading-relaxed border-t border-t-black/10 dark:border-t-white/10 border-b border-b-black/10 dark:border-b-white/10"
    >
      {children}
    </div>
  )
})

export default DialogDescription
