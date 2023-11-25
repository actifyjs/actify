import PropTypes from 'prop-types'
import { Icon, Ripple } from 'actify'
import { tv } from 'tailwind-variants'
import { setColor } from '@/packages/utils'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, { forwardRef } from 'react'

const variants = tv({
  base: 'h-8 w-14 rounded-full border-[2px] border-current shadow-inner peer-checked:bg-current',
  variants: {
    disabled: {
      true: 'opacity-[.12] pointer-events-none'
    }
  }
})

const dotVariants = tv({
  base: 'absolute grid place-content-center left-3 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-inverse-surface/50 shadow-inner transition-all peer-checked:left-[calc(100%-32px)] peer-checked:h-6 peer-checked:w-6 peer-checked:bg-surface [&>span]:opacity-0 [&>span]:peer-checked:opacity-100',
  variants: {
    icons: {
      true: 'h-6 w-6 left-1 peer-checked:left-[calc(100%-28px)]'
    }
  }
})

/**
 * @type React.ForwardRefRenderFunction<HTMLInputElement, SwitchPropTypes>
 */
const Switch = forwardRef((props, ref) => {
  const {
    title,
    color,
    icons,
    style,
    selected,
    disabled,
    onChange,
    className,
    defaultSelected = false,
    ...rest
  } = props

  const [inputValue, setInputValue] = useMergedState(false, {
    onChange,
    value: selected,
    defaultValue: defaultSelected
  })

  const handleChange = (e) => {
    if (disabled) {
      return
    }
    setInputValue(e.target.checked)
  }

  const colorVariant = color ?? 'primary'

  return (
    <label
      title={title}
      style={{ color: setColor(colorVariant) }}
      className="relative cursor-pointer inline-block w-fit h-fit"
    >
      <input
        hidden
        {...rest}
        ref={ref}
        style={style}
        type="checkbox"
        className="peer"
        disabled={disabled}
        checked={inputValue}
        onChange={handleChange}
      />
      <div className={variants({ disabled, className })}></div>
      <i className={dotVariants({ icons })}>
        {icons && (
          <Icon
            size={16}
            name={`${inputValue ? 'check' : 'x'}`}
            className={`${
              inputValue ? 'text-inverse-surface' : 'text-surface'
            }`}
          />
        )}
      </i>
      <Ripple className="rounded-full" />
    </label>
  )
})

const SwitchPropTypes = {
  icons: PropTypes.bool,
  color: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
}

Switch.propTypes = SwitchPropTypes

Switch.displayName = 'Actify.Switch'

export { Switch }
