import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import '@material/web/icon/icon'
import '@material/web/iconbutton/standard-icon-button'
import '@material/web/iconbutton/outlined-icon-button'
import '@material/web/iconbutton/filled-icon-button'
import '@material/web/iconbutton/filled-tonal-icon-button'

import { setColor } from '@/packages/utils'

const IconButton = forwardRef((props, ref) => {
  const { style, icon, size, variant, color, className, children, ...rest } = props
  let styles = {}
  if (color) {
    if (variant == 'filled-tonal') {
      styles['--md-sys-color-secondary-container'] = setColor(color)
    } else {
      styles['--md-sys-color-primary'] = setColor(color)
    }
  }

  return (
    <>
      {variant === 'standard' && (
        <md-standard-icon-button ref={ref} {...rest} class={className} style={{ ...styles }}>
          {children}
        </md-standard-icon-button>
      )}
      {variant === 'outlined' && (
        <md-outlined-icon-button ref={ref} {...rest} class={className} style={{ ...styles }}>
          {children}
        </md-outlined-icon-button>
      )}
      {variant === 'filled' && (
        <md-filled-icon-button ref={ref} {...rest} class={className} style={{ ...styles }}>
          {children}
        </md-filled-icon-button>
      )}
      {variant === 'filled-tonal' && (
        <md-filled-tonal-icon-button ref={ref} {...rest} class={className} style={{ ...styles }}>
          {children}
        </md-filled-tonal-icon-button>
      )}
    </>
  )
})

IconButton.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled', 'filled-tonal'])
}

IconButton.defaultProps = {
  size: 'medium',
  color: 'primary',
  variant: 'standard'
}

IconButton.displayName = 'Actify.IconButton'

export default IconButton
