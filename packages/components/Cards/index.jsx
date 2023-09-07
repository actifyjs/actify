import React from 'react'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import { Ripple, Elevation } from 'actify'

const variants = tv({
  base: 'relative inline-flex flex-col rounded-xl',
  variants: {
    type: {
      filled: 'bg-inverse-surface',
      outlined: 'border border-outline'
    }
  },
  defaultVariants: {
    type: 'elevated'
  }
})

const Card = React.forwardRef((props, ref) => {
  const { ripple, type, elevation, children, className, ...rest } = props

  return (
    <div ref={ref} {...rest} className={variants({ type, className })}>
      <div className="relative overflow-hidden rounded-t-xl">{children}</div>
      {ripple && <Ripple />}
      {type === 'elevated' && <Elevation level={elevation} />}
    </div>
  )
})

Card.propTypes = {
  ripple: PropTypes.bool,
  type: PropTypes.oneOf(['elevated', 'filled', 'outlined']),
  elevation: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Card.defaultProps = {
  type: 'elevated',
  ripple: false,
  elevation: 1
}

Card.displayName = 'Actify.Card'

export default Card
