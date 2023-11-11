import React, { forwardRef } from 'react'
import { Ripple } from 'actify'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'

import { setColor } from '@/packages/utils'

const variants = tv({
  base: 'relative inline-flex h-10 w-10 rounded-full items-center justify-center hover:bg-inverse-surface/25 transition-all duration-300 ease-in-out',
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
  const {
    tag,
    ripple,
    style,
    size,
    variant,
    color,
    className,
    type = 'button',
    children,
    ...rest
  } = props
  const colorVariant = setColor(color)

  let Tag = ''
  if (rest.href) {
    Tag = 'a'
  } else if (tag) {
    Tag = tag
  } else {
    Tag = 'button'
  }

  return (
    <Tag
      ref={ref}
      {...rest}
      type={type}
      style={{ color: colorVariant, ...style }}
      className={variants({ className })}
    >
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
  color: 'current',
  variant: 'standard'
}

IconButton.displayName = 'Actify.IconButton'

export { IconButton }
