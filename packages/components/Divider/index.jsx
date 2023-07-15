import React from 'react'
import '@material/web/divider/divider'
import { setColor } from '@/packages/utils'

const Divider = (props) => {
  const { style, color, thickness, className, ...rest } = props
  const styles = { ...style }
  color && (styles['--md-divider-color'] = setColor(color))
  thickness && (styles['--md-divider-thickness'] = thickness + 'px')

  return <md-divider {...rest} class={className} style={styles} />
}

Divider.displayName = 'Actify.Divider'

export default Divider
