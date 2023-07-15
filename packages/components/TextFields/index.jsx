import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import '@material/web/textfield/filled-text-field'
import '@material/web/textfield/outlined-text-field'

const TextField = forwardRef((props, ref) => {
  const { variant, className, children, ...rest } = props
  return (
    <>
      {variant == 'filled' && <md-filled-text-field ref={ref} {...rest} class={className} />}
      {variant == 'outlined' && <md-outlined-text-field ref={ref} {...rest} class={className} />}
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
