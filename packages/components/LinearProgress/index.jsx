import React, { forwardRef } from 'react'
import '@material/web/linearprogress/linear-progress'
import { setColor, removeFalseValue } from '@/packages/utils'

const LinearProgress = forwardRef((props, ref) => {
  const { style, color, className, ...rest } = props
  const attributes = removeFalseValue(rest)
  let styles = { ...style }
  color && (styles['--md-linear-progress-active-indicator-color'] = setColor(color))
  return <md-linear-progress {...attributes} ref={ref} style={{ ...styles }} />
})

LinearProgress.displayName = 'Actify.LinearProgress'

export default LinearProgress
