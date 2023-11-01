import { Ripple } from 'actify'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import React, { forwardRef } from 'react'
import { setColor } from '@/packages/utils'

const labelVariants = tv({
  base: 'relative overflow-hidden flex items-center cursor-pointer p-2.5 rounded-full',
  variants: {
    disabled: {
      true: 'opacity-[.12] pointer-events-none'
    }
  }
})

const variants = tv({
  base: "peer relative appearance-none w-5 h-5 border-2 rounded-full border-outline checked:border-current cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:opacity-0 hover:before:opacity-10 before:transition-opacity text-black/90 dark:text-white/10 checked:text-current after:absolute after:-inset-3 hover:after:bg-black/10 dark:hover:after:bg-white/10"
})

const dotVariants = tv({
  base: 'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity text-black/90 peer-checked:text-current'
})

/**
 * @type React.ForwardRefRenderFunction<HTMLInputElement, RadioPropTypes>
 */
const RadioButton = forwardRef((props, ref) => {
  const { title, style, className, color, disabled, children, ...rest } = props
  const colorVariants = setColor(color ?? 'primary')

  return (
    <label
      title={title}
      style={{ color: colorVariants }}
      className={labelVariants({ disabled })}
    >
      <input
        ref={ref}
        {...rest}
        type="radio"
        style={style}
        disabled={disabled}
        className={variants({ className })}
      />
      <span className={dotVariants()}>
        <svg
          fill="currentColor"
          viewBox="0 0 16 16"
          className="h-2.5 w-2.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
      <Ripple />
    </label>
  )
})

const RadioPropTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  className: PropTypes.string
}

RadioButton.propTypes = RadioPropTypes

RadioButton.displayName = 'Actify.RadioButton'

export { RadioButton }
