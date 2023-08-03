import React, { forwardRef } from 'react'
import '@material/web/slider/slider'

import { setColor } from '@/packages/utils'

const Slider = forwardRef((props, ref) => {
  const { style, color, className, ...rest } = props
  let styles = { ...style }
  if (color) {
    styles['--md-sys-color-primary'] = setColor(color)
  }

  return <md-slider ref={ref} style={styles} class={className} {...rest} />
})

export default Slider
