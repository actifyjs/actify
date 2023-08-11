import { Ripple } from 'actify'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import React, { forwardRef } from 'react'

import { setColor } from '@/packages/utils'

const variants = tv({
  base: 'relative inline-flex h-10 w-10 rounded-full items-center justify-center hover:bg-black/5 hover:dark:bg-white/5',
  variants: {
    variant: {
      standard: '',
      outlined: '',
      filled: '',
      'filled-tonal': ''
    }
  }
})

const IconButton = forwardRef((props, ref) => {
  const { ripple, style, size, variant, color, className, children, ...rest } = props
  const colorVariant = setColor(color)
  const Tag = rest.href ? 'a' : 'button'

  return (
    <Tag ref={ref} {...rest} style={{ color: colorVariant, ...style }} className={variants({ className })}>
      {children}
      {ripple && <Ripple />}
    </Tag>
  )
})

IconButton.propTypes = {
  ripple: PropTypes.bool,
  color: PropTypes.string,
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled', 'filled-tonal'])
}

IconButton.defaultProps = {
  ripple: true,
  size: '40',
  color: 'primary',
  variant: 'standard'
}

IconButton.displayName = 'Actify.IconButton'

export default IconButton
