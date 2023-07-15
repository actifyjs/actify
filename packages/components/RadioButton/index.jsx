import React, { forwardRef } from 'react'
import '@material/web/radio/radio'
import { setColor } from '@/packages/utils'

const RadioButton = forwardRef((props, ref) => {
  const { style, className, color, children, ...rest } = props
  let styles = { ...style }
  color && (styles['--md-sys-color-primary'] = setColor(color))

  return <md-radio ref={ref} {...rest} className={className} style={{ ...styles }} />
})

RadioButton.displayName = 'Actify.RadioButton'

export default RadioButton
