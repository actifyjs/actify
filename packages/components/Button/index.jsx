import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import '@material/web/button/elevated-button'
import '@material/web/button/filled-button'
import '@material/web/button/tonal-button'
import '@material/web/button/outlined-button'
import '@material/web/button/text-button'

import { setColor } from '@/packages/utils'

const Button = forwardRef((props, ref) => {
  const { style, color, variant, className, children, ...rest } = props
  let styles = { ...style }
  if (color) {
    if (variant == 'tonal') {
      styles['--md-sys-color-secondary-container'] = setColor(color)
    } else {
      styles['--md-sys-color-primary'] = setColor(color)
    }
  }

  return (
    <>
      {variant === 'elevated' && (
        <md-elevated-button ref={ref} {...rest} class={className} style={{ ...styles }}>
          {children}
        </md-elevated-button>
      )}
      {variant === 'filled' && (
        <md-filled-button ref={ref} {...rest} class={className} style={{ ...styles }}>
          {children}
        </md-filled-button>
      )}
      {variant === 'tonal' && (
        <md-tonal-button ref={ref} {...rest} class={className} style={{ ...styles }}>
          {children}
        </md-tonal-button>
      )}
      {variant === 'outlined' && (
        <md-outlined-button ref={ref} class={className} {...rest} style={{ ...styles }}>
          {children}
        </md-outlined-button>
      )}
      {variant === 'text' && (
        <md-text-button ref={ref} class={className} {...rest} style={{ ...styles }}>
          {children}
        </md-text-button>
      )}
    </>
  )
})

Button.propTypes = {
  variant: PropTypes.oneOf(['elevated', 'filled', 'tonal', 'outlined', 'text'])
}

Button.defaultProps = {
  color: 'primary',
  variant: 'filled'
}

Button.displayName = 'Actify.Button'

export default Button
