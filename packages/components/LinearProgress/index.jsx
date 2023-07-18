import React, { forwardRef } from 'react'
import '@material/web/linearprogress/linear-progress'
import { removeFalseValue } from '@/packages/utils'

const LinearProgress = forwardRef((props, ref) => {
  const attributes = removeFalseValue(props)
  return <md-linear-progress {...attributes} ref={ref} />
})

LinearProgress.displayName = 'Actify.LinearProgress'

export default LinearProgress
