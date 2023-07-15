import React, { forwardRef } from 'react'
import { setColor } from '@/packages/utils'
import '@material/web/checkbox/checkbox'

const Checkbox = forwardRef((props, ref) => {
  const { style, color, className, ...rest } = props
  let styles = { ...style }
  color && (styles['--md-sys-color-primary'] = setColor(color))

  return <md-checkbox ref={ref} {...rest} class={className} style={{ ...styles }} />
})

export default Checkbox
