import React, { forwardRef } from 'react'
import '@material/web/icon/icon'
import { setColor } from '@/packages/utils'

const Icon = forwardRef((props, ref) => {
  const { size, color, style, className, children, ...rest } = props
  let styles = { ...style }
  size && (styles['--md-icon-size'] = size)
  color && (styles['--md-icon-color'] = setColor(color))

  return (
    <md-icon ref={ref} {...rest} class={className} style={{ ...styles }}>
      <span>{children}</span>
    </md-icon>
  )
})

Icon.displayName = 'Actify.Icon'

export default Icon
