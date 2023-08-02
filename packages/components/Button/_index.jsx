import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import { cn } from '@/packages/utils'
import { cva } from 'class-variance-authority'

const defaultClass = cva(
  'relative inline-flex items-center justify-center box-border border-none outline-none select-none appearance-none align-middle bg-transparent rounded-full px-6 text-sm',
  {
    variants: {
      color: {
        primary: 'bg-primary text-on-primary hover:bg-primary/90',
        secondary: 'bg-secondary text-on-secondary hover:bg-secondary/90',
        tertiary: 'bg-tertiary text-on-tertiary hover:bg-tertiary/90',
        error: 'bg-error text-on-error hover:bg-error/90'
      }
    },
    defaultVariants: {
      color: 'primary'
    }
  }
)

const Button = forwardRef((props, ref) => {
  const { prependIcon, color, style, className, children, ...rest } = props
  return (
    <button
      ref={ref}
      {...rest}
      style={style}
      className={cn(
        defaultClass({
          color,
          className
        })
      )}
    >
      {prependIcon && <span>{prependIcon}</span>}
      <span>{children}</span>
      {/* ripple */}
      <span></span>
      {/* focus-ring */}
      <span></span>
    </button>
  )
})

Button.propTypes = {
  color: PropTypes.string
}

Button.defaultProps = {
  color: 'primary'
}

Button.displayName = 'Actify.Button'

export default Button
