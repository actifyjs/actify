import React, { forwardRef } from 'react'
import { setColor } from '@/packages/utils'
import '@material/web/switch/switch'

const Switch = forwardRef((props, ref) => {
  const { style, color, className, ...rest } = props
  let styles = { ...style }
  color && (styles['--md-sys-color-primary'] = setColor(color))

  return <md-switch ref={ref} {...rest} class={className} style={{ ...styles }} />
})

export default Switch
