'use client'
import { Icon } from '@actify/Icon'
import { Ripple } from '@actify/Ripple'
import { tv } from 'tailwind-variants'
import { setColor } from './../../utils'
import React, { forwardRef, useState, useEffect } from 'react'

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

interface SwitchProps extends React.HTMLAttributes<HTMLInputElement> {
  color?: string
  icons?: boolean
  selected?: boolean
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  defaultSelected?: boolean
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
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

  const [inputValue, setInputValue] = useState(
    selected || defaultSelected || false
  )

  const handleChange = (e) => {
    if (disabled) {
      return
    }
    setInputValue(e.target.checked)
    onChange?.(e)
  }

  useEffect(() => {
    setInputValue(selected)
  }, [selected])

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

Switch.displayName = 'Actify.Switch'

export default Switch
