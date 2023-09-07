import React from 'react'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import { setColor } from '@/packages/utils'
import { Icon, Ripple, Elevation } from 'actify'

const variants = tv({
  base: 'relative inline-flex items-center justify-center w-fit',
  variants: {
    size: {
      small: 'h-10 px-2 rounded-xl',
      medium: 'h-14 px-4 rounded-2xl',
      large: 'h-24 px-8 rounded-[28px]'
    }
  }
})

const iconSizeMap = {
  small: 24,
  medium: 24,
  large: 36
}

const Fab = React.forwardRef((props, ref) => {
  const {
    label,
    style,
    icon,
    size,
    variant,
    color,
    className,
    children,
    ...rest
  } = props

  let styles = { ...style }
  styles['color'] = setColor(color)

  return (
    <button
      type={rest.type || 'button'}
      ref={ref}
      {...rest}
      style={styles}
      className={variants({ size, className })}
    >
      {icon && <Icon name={icon} size={iconSizeMap[size]} />}
      {children}
      {label}
      <Ripple />
      <Elevation level={3} />
    </button>
  )
})

Fab.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['surface', 'primary', 'secondary', 'tertiary'])
}

Fab.defaultProps = {
  size: 'medium',
  color: 'primary',
  variant: 'primary'
}

Fab.displayName = 'Actify.Fab'

export default Fab
