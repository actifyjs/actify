import React from 'react'
import PropTypes from 'prop-types'
import '@material/web/field/filled-field'
import '@material/web/field/outlined-field'

import { setColor } from '@/packages/utils'

const Field = React.forwardRef((props, ref) => {
  const { style, icon, size, variant, color, className, children, ...rest } = props
  let styles = {}
  if (color) {
    styles['--md-sys-color-primary'] = setColor(color)
  }

  return (
    <>
      {variant === 'filled' && (
        <md-filled-field ref={ref} {...rest} class={className} style={{ ...styles }}>
          {children}
        </md-filled-field>
      )}
      {variant === 'outlined' && (
        <md-outlined-field ref={ref} {...rest} class={className} style={{ ...styles }}>
          {children}
        </md-outlined-field>
      )}
    </>
  )
})

Field.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined'])
}

Field.defaultProps = {
  color: 'primary',
  variant: 'filled'
}

Field.displayName = 'Actify.Field'

export default Field
