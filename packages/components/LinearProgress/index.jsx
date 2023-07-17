import React, { forwardRef } from 'react'
import '@material/web/linearprogress/linear-progress'

const LinearProgress = forwardRef((props, ref) => {
  return <md-linear-progress {...props} ref={ref} />
})

LinearProgress.displayName = 'Actify.LinearProgress'

export default LinearProgress
