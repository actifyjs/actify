import React from 'react'
import { useDialogContext } from './DialogContext'

const DialogClose = React.forwardRef((props, ref) => {
  const { setOpen } = useDialogContext()
  return <div {...props} ref={ref} onClick={() => setOpen(false)} />
})

export default DialogClose
