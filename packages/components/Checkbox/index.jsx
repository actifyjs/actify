import { Ripple } from 'actify'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import React, { forwardRef, useId } from 'react'

const variants = tv({
  base: "peer relative appearance-none w-[18px] h-[18px] rounded-sm border-2 border-outline cursor-pointer transition-all before:content[''] before:block before:w-12 before:h-12 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:opacity-0 hover:before:opacity-10 before:transition-opacity",
  variants: {
    color: {
      primary:
        'before:bg-primary checked:bg-primary checked:border-primary checked:before:bg-primary',
      secondary:
        'before:bg-secondary checked:bg-secondary checked:border-secondary checked:before:bg-secondary',
      tertiary:
        'before:bg-tertiary checked:bg-tertiary checked:border-tertiary checked:before:bg-tertiary',
      error:
        'before:bg-error checked:bg-error checked:border-error checked:before:bg-error'
    },
    disabled: {
      true: 'opacity-[.12] pointer-events-none'
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})

/**
 * @type React.ForwardRefRenderFunction<HTMLInputElement, CheckPropTypes>
 */
const Checkbox = forwardRef((props, ref) => {
  const checkboxId = useId()

  const { style, color, disabled, className, ...rest } = props

  return (
    <label
      htmlFor={checkboxId}
      className="relative overflow-hidden flex items-center cursor-pointer p-3 rounded-full"
    >
      <input
        {...rest}
        ref={ref}
        style={style}
        type="checkbox"
        id={checkboxId}
        disabled={disabled}
        className={variants({ color, disabled, className })}
      />
      <span className="text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
        <svg
          strokeWidth="1"
          className="h-3.5 w-3.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          />
        </svg>
      </span>
      <Ripple />
    </label>
  )
})

const CheckPropTypes = {
  color: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func
}

Checkbox.propTypes = CheckPropTypes

Checkbox.displayName = 'Actify.Checkbox'

export { Checkbox }
