import React from 'react'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import { Ripple, Elevation, CircularProgress } from 'actify'

const variants = tv({
  base: 'relative inline-flex gap-2 items-center justify-center select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none h-10 text-sm px-6 rounded-full',
  variants: {
    color: {
      primary: 'bg-primary text-on-primary hover:bg-primary/90',
      secondary: 'bg-secondary text-on-secondary hover:bg-secondary/90',
      tertiary: 'bg-tertiary text-on-tertiary hover:bg-tertiary/90',
      error: 'bg-error text-on-error hover:bg-error/90'
    },
    variant: {
      outlined: 'border border-outline',
      tonal:
        'bg-secondary-container text-on-surface hover:bg-secondary-container/60'
    },
    loading: {
      true: 'animate-spin'
    }
  },
  compoundVariants: [
    {
      variant: ['outlined', 'text'],
      className: 'bg-transparent text-primary hover:bg-primary/10'
    },
    {
      color: 'secondary',
      variant: ['outlined', 'text'],
      className: 'bg-transparent text-secondary hover:bg-secondary/10'
    },
    {
      color: 'tertiary',
      variant: ['outlined', 'text'],
      className: 'bg-transparent text-tertiary hover:bg-tertiary/10'
    },
    {
      color: 'error',
      variant: ['outlined', 'text'],
      className: 'bg-transparent text-error hover:bg-error/10'
    }
  ],
  defaultVariants: {
    variant: 'filled',
    color: 'primary'
  }
})

const Button = React.forwardRef((props, ref) => {
  const {
    ripple,
    variant,
    loading,
    color,
    style,
    className,
    children,
    ...rest
  } = props

  const Tag = rest.href ? 'a' : 'button'

  return (
    <Tag
      {...rest}
      ref={ref}
      style={style}
      type={rest.type || 'button'}
      className={variants({
        color,
        variant,
        className
      })}
    >
      {loading ? (
        <CircularProgress className="w-8 h-8" color="white" indeterminate />
      ) : (
        children
      )}
      {ripple && <Ripple />}
      {variant === 'elevated' && <Elevation level={3} />}
    </Tag>
  )
})

Button.propTypes = {
  ripple: PropTypes.bool,
  color: PropTypes.string,
  variant: PropTypes.oneOf(['elevated', 'filled', 'tonal', 'outlined', 'text'])
}

Button.defaultProps = {
  ripple: true
}

Button.displayName = 'Actify.Button'

export default Button
