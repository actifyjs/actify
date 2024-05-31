import { MdDialog } from '@material/web/all'
import React from 'react'
import { createComponent } from '@lit/react'

const DialogWebComponent = createComponent({
  react: React,
  tagName: 'md-dialog',
  elementClass: MdDialog
})

const Dialog = ({
  ...rest
}: React.ComponentProps<typeof DialogWebComponent>) => {
  return <DialogWebComponent {...rest} />
}

export { Dialog }
