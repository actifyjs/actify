import React from 'react'
import { useDialogContext } from './DialogContext'

const DialogHeading = React.forwardRef(({ children, ...rest }, ref) => {
  const { setLabelId } = useDialogContext()
  const id = React.useId()

  // Only sets `aria-labelledby` on the Dialog root element
  // if this component is mounted inside it.
  React.useLayoutEffect(() => {
    setLabelId(id)
    return () => setLabelId(undefined)
  }, [id, setLabelId])

  return (
    <div
      {...rest}
      ref={ref}
      id={id}
      className="w-full p-4 flex items-center justify-between text-2xl font-semibold leading-snug"
    >
      {children}
    </div>
  )
})

export default DialogHeading
