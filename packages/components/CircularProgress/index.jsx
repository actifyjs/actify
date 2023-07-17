import React, { forwardRef } from 'react'
import '@material/web/circularprogress/circular-progress'

const CircularProgress = forwardRef((props, ref) => {
  return <md-circular-progress {...props} ref={ref} />
})

CircularProgress.displayName = 'Actify.CircularProgress'

export default CircularProgress
