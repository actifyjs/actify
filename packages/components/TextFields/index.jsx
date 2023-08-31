import React from 'react'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'inline-flex rounded-md relative h-14 bg-surface',
  variants: {
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      error: 'text-error'
    },
    disabled: {
      true: 'opacity-50 pointer-events-none'
    },
    variant: {
      filled: '',
      outlined: ''
    }
  },
  defaultVariants: {
    color: 'primary',
    variant: 'outlined'
  }
})

const labelVariants = tv({
  base: 'absolute transition-all leading-none px-2 left-2 top-1/2 -translate-y-1/2 peer-valid:top-0 peer-focus:top-0 before:content-[attr(data-label)] before:z-50 before:absolute after:absolute after:inset-0 after:bg-surface after:top-1/2'
})

const TextField = React.forwardRef((props, ref) => {
  const {
    style,
    color,
    variant,
    label,
    disabled,
    className,
    children,
    ...rest
  } = props

  return (
    <label className={variants({ color, disabled, className })}>
      <input
        required
        ref={ref}
        {...rest}
        type={rest.type || 'text'}
        className="rounded-[inherit] w-full peer px-4 bg-transparent border-2 border-outline outline-none focus:text-[inherit] focus:border-current focus:text-on-surface transition-all placeholder:text-transparent focus:placeholder:text-on-surface"
      />
      <div className={labelVariants()} data-label={label}>
        {label}
      </div>
    </label>
  )
})

TextField.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined'])
}

TextField.defaultProps = {
  variant: 'filled'
}

TextField.displayName = 'Actify.TextField'

export default TextField
