import React from 'react'
import PropTypes from 'prop-types'
import '@material/web/select/filled-select'
import '@material/web/select/outlined-select'

import { setColor } from '@/packages/utils'

const Select = React.forwardRef((props, ref) => {
  const { style, color, variant, className, children, ...rest } = props
  let styles = { ...style }
  if (color) {
    styles['--md-sys-color-primary'] = setColor(color)
  }

  return (
    <>
      {variant == 'filled' && (
        <md-filled-select ref={ref} {...rest} style={{ ...styles }} className={className}>
          {children}
        </md-filled-select>
      )}
      {variant == 'outlined' && (
        <md-outlined-select ref={ref} {...rest} style={{ ...styles }} className={className}>
          {children}
        </md-outlined-select>
      )}
    </>
  )
})

Select.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined'])
}

Select.defaultProps = {
  variant: 'filled'
}

Select.displayName = 'Actify.Select'

export default Select
