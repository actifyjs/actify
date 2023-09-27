import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { FilledTextField } from './FilledTextField'
import { OutlinedTextField } from './OutlinedTextField'

const TextField = forwardRef((props, ref) => {
  const { variant, prefixText, suffixText, ...rest } = props
  return (
    <>
      {variant === 'filled' && (
        <FilledTextField
          ref={ref}
          {...rest}
          prefixText={prefixText}
          suffixText={suffixText}
        />
      )}
      {variant === 'outlined' && (
        <OutlinedTextField
          ref={ref}
          {...rest}
          prefixText={prefixText}
          suffixText={suffixText}
        />
      )}
    </>
  )
})

TextField.propTypes = {
  color: PropTypes.string,
  prefixText: PropTypes.string,
  suffixText: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined'])
}

TextField.defaultProps = {
  variant: 'filled'
}

TextField.Slot = () => <></>

TextField.displayName = 'Actify.TextField'

export { TextField }
