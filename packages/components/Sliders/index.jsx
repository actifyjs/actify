import '@material/web/slider/slider'
import React, { forwardRef } from 'react'

const Slider = forwardRef((props, ref) => {
  const { className, ...rest } = props
  return <md-slider ref={ref} {...rest} className={className} />
})

Slider.displayName = 'Actify.Slider'

export default Slider
