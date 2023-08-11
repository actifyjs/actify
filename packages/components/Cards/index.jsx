import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import React, { forwardRef } from 'react'
import { Ripple, Elevation } from 'actify'

const variants = tv({
  base: 'relative inline-flex flex-col rounded-lg'
})

const Card = forwardRef((props, ref) => {
  const { ripple, elevation, children, className, ...rest } = props

  return (
    <div ref={ref} {...rest} className={variants({ className })}>
      {children}
      {ripple && <Ripple />}
      <Elevation level={elevation} />
    </div>
  )
})

Card.propTypes = {
  ripple: PropTypes.bool,
  elevation: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Card.defaultProps = {
  ripple: false,
  elevation: 1
}

Card.displayName = 'Actify.Card'

export default Card
