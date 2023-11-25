import { Ripple } from 'actify'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import React, { forwardRef } from 'react'
import useMergedState from 'rc-util/lib/hooks/useMergedState'

const variants = tv({
  base: "peer relative appearance-none border-outline cursor-pointer transition-all before:content[''] before:block before:w-12 before:h-12 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:opacity-0 hover:before:opacity-10 before:transition-opacity",
  variants: {
    size: {
      xs: 'w-5 h-5 border-2 rounded-sm',
      sm: 'w-7 h-7 border-[3px] rounded',
      md: 'w-9 h-9 border-4 rounded-md',
      lg: 'w-11 h-11 border-[5px] rounded-lg',
      xl: 'w-12 h-12 border-[6px] rounded-xl',
      '2xl': 'w-14 h-14 border-[7px] rounded-2xl'
    },
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
    size: 'sm',
    color: 'primary'
  }
})

const checkVariants = tv({
  base: 'text-surface absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity'
})

/**
 * @type React.ForwardRefRenderFunction<HTMLInputElement, CheckPropTypes>
 */
const Checkbox = forwardRef((props, ref) => {
  const {
    title,
    color,
    style,
    checked,
    disabled,
    onChange,
    className,
    defaultChecked,
    ...rest
  } = props

  const [inputValue, setInputValue] = useMergedState(false, {
    onChange,
    value: checked,
    defaultValue: defaultChecked
  })

  const handleChange = (e) => {
    if (disabled) {
      return
    }
    setInputValue(e.target.checked)
  }

  return (
    <label
      title={title}
      className="relative overflow-hidden flex items-center cursor-pointer p-2.5 rounded-full w-fit"
    >
      <input
        {...rest}
        ref={ref}
        style={style}
        type="checkbox"
        disabled={disabled}
        checked={inputValue}
        onChange={handleChange}
        className={variants({ color, disabled, className })}
      />
      <div className={checkVariants()}>
        <svg
          strokeWidth="1"
          className="h-2/3 w-2/3"
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
      </div>
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
