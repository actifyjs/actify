import React from 'react'
import '@material/web/focus/md-focus-ring'

const FocusRing = React.forwardRef((props, ref) => {
  const { ...rest } = props
  return <md-focus-ring ref={ref} {...rest} />
})

FocusRing.displayName = 'Actify.FocusRing'

export default FocusRing
