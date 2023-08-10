import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { Ripple, Elevation } from 'actify'

const variants = tv({
  base: 'relative overflow-hidden inline-flex gap-2 items-center justify-center select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none h-10 text-sm px-6 rounded-full',
  variants: {
    color: {
      primary: 'bg-primary text-on-primary hover:bg-primary/90',
      secondary: 'bg-secondary text-on-secondary hover:bg-secondary/90',
      tertiary: 'bg-tertiary text-on-tertiary hover:bg-tertiary/90',
      error: 'bg-error text-on-error hover:bg-error/90'
    },
    variant: {
      outlined: 'border',
      tonal: 'bg-primary/50 hover:bg-primary/70'
    }
  },
  compoundVariants: [
    {
      variant: ['outlined', 'text'],
      className: 'bg-transparent text-primary hover:bg-primary/10 px-3'
    },
    {
      color: 'secondary',
      variant: ['outlined', 'text'],
      className: 'bg-transparent text-secondary hover:bg-secondary/10 px-3'
    },
    {
      color: 'tertiary',
      variant: ['outlined', 'text'],
      className: 'bg-transparent text-tertiary hover:bg-tertiary/10 px-3'
    },
    {
      color: 'error',
      variant: ['outlined', 'text'],
      className: 'bg-transparent text-error hover:bg-error/10 px-3'
    }
  ],
  defaultVariants: {
    variant: 'filled',
    color: 'primary'
  }
})

const Button = forwardRef((props, ref) => {
  const { ripple, variant, color, style, className, children, ...rest } = props
  const isLink = rest.href ? true : false

  return isLink ? (
    <a
      {...rest}
      ref={ref}
      style={style}
      type={rest.type || 'button'}
      className={variants({
        variant,
        color,
        className
      })}
    >
      {children}
      {ripple && <Ripple />}
      {variant === 'elevated' && <Elevation level={3} />}
    </a>
  ) : (
    <button
      {...rest}
      ref={ref}
      style={style}
      type={rest.type || 'button'}
      className={variants({
        variant,
        color,
        className
      })}
    >
      {children}
      {ripple && <Ripple />}
      {variant === 'elevated' && <Elevation level={3} />}
    </button>
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
