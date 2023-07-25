import React, { forwardRef } from 'react'
import '@material/web/progress/circular-progress'
import { setColor, removeFalseValue } from '@/packages/utils'

const CircularProgress = forwardRef((props, ref) => {
  const { style, color, className, ...rest } = props
  const attributes = removeFalseValue(rest)
  let styles = { ...style }
  color && (styles['--md-circular-progress-active-indicator-color'] = setColor(color))
  return <md-circular-progress {...attributes} ref={ref} style={{ ...styles }} />
})

CircularProgress.displayName = 'Actify.CircularProgress'

export default CircularProgress
