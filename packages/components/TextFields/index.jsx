import React from 'react'
import PropTypes from 'prop-types'
import '@material/web/textfield/filled-text-field'
import '@material/web/textfield/outlined-text-field'

import { setColor } from '@/packages/utils'

const TextField = React.forwardRef((props, ref) => {
  const { style, color, variant, className, children, ...rest } = props
  let styles = { ...style }
  if (color) {
    styles['--md-sys-color-primary'] = setColor(color)
  }
  return (
    <>
      {variant == 'filled' && <md-filled-text-field ref={ref} {...rest} class={className} style={{ ...styles }} />}
      {variant == 'outlined' && <md-outlined-text-field ref={ref} {...rest} class={className} style={{ ...styles }} />}
    </>
  )
})

TextField.propTypes = {
  variant: PropTypes.oneOf(['filled', 'outlined'])
}

TextField.defaultProps = {
  variant: 'filled'
}

TextField.displayName = 'Actify.TextField'

export default TextField
