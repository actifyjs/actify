import React, { forwardRef } from 'react'
import '@material/web/focus/md-focus-ring'

const FocusRing = forwardRef((props, ref) => {
  const { ...rest } = props
  return <md-focus-ring ref={ref} {...rest} />
})

FocusRing.displayName = 'Actify.FocusRing'

export default FocusRing
