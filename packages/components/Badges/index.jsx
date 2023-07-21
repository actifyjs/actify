import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import '@material/web/labs/badge/badge'

import { setColor } from '@/packages/utils'

const Badge = forwardRef((props, ref) => {
  const { style, color, value, className, ...rest } = props
  let styles = { ...style }
  if (color) {
    styles['--md-badge-color'] = setColor(color)
    styles['--md-badge-large-color'] = setColor(color)
  }
  const number = isNaN(parseInt(value)) ? '' : parseInt(value)

  return <md-badge ref={ref} value={number > 999 ? '999+' : number} {...rest} class={className} style={{ ...styles }} />
})

Badge.propTypes = {
  color: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Badge
