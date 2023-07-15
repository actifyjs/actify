import React, { forwardRef } from 'react'
import '@material/web/iconbutton/standard-icon-button'
import '@material/web/textfield/filled-text-field'
import '@material/web/radio/radio'
import '@material/web/icon/icon'
import '@material/web/button/tonal-button'
import '@material/web/button/filled-button'
import '@material/web/button/text-button'
import '@material/web/dialog/dialog'

const Dialog = forwardRef((props, ref) => {
  const { icon, headline, supportingText, className, children, ...rest } = props

  return (
    <md-dialog ref={ref} {...rest} class={className}>
      <md-icon slot="headline-prefix">{icon && icon()}</md-icon>
      <span slot="headline">{headline}</span>
      {children}
      <md-text-button slot="footer" dialog-action="cancel">
        Cancel
      </md-text-button>
      <md-text-button slot="footer" dialog-focus dialog-action="ok">
        OK
      </md-text-button>
    </md-dialog>
  )
})

Dialog.displayName = 'Actify.Dialog'

export default Dialog
