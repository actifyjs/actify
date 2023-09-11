import React from 'react'
import PropTypes from 'prop-types'
import FilledTextField from './FilledTextField'
import OutlinedTextField from './OutlinedTextField'

const TextField = React.forwardRef((props, ref) => {
  const { variant, ...rest } = props
  return (
    <>
      {variant === 'filled' && <FilledTextField ref={ref} {...rest} />}
      {variant === 'outlined' && <OutlinedTextField ref={ref} {...rest} />}
    </>
  )
})

TextField.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined'])
}

TextField.defaultProps = {
  variant: 'filled'
}

TextField.Slot = () => <></>

TextField.displayName = 'Actify.TextField'

export default TextField
