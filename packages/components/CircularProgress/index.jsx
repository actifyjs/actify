import React, { forwardRef } from 'react'
import '@material/web/circularprogress/circular-progress'
import { removeFalseValue } from '@/packages/utils'

const CircularProgress = forwardRef((props, ref) => {
  const attributes = removeFalseValue(props)
  return <md-circular-progress {...attributes} ref={ref} />
})

CircularProgress.displayName = 'Actify.CircularProgress'

export default CircularProgress
