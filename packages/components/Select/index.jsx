import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import '@material/web/select/filled-select'
import '@material/web/select/outlined-select'

const Select = forwardRef((props, ref) => {
  const { color, variant, className, children, ...rest } = props

  return (
    <>
      {variant == 'filled' && (
        <md-filled-select
          ref={ref}
          {...rest}
          className={className}
          style={{ '--md-sys-color-primary': `rgb(var(--color-${color}))` }}
        >
          {children}
        </md-filled-select>
      )}
      {variant == 'outlined' && (
        <md-outlined-select
          ref={ref}
          {...rest}
          className={className}
          style={{ '--md-sys-color-primary': `rgb(var(--color-${color}))` }}
        >
          {children}
        </md-outlined-select>
      )}
    </>
  )
})

Select.propTypes = {
  variant: PropTypes.oneOf(['filled', 'outlined']),
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'error'])
}

Select.defaultProps = {
  color: 'primary',
  variant: 'filled'
}

Select.displayName = 'Actify.Select'

export default Select
