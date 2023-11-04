import React, { forwardRef, useRef, useState, Children } from 'react'
import { tv } from 'tailwind-variants'
import useMergedState from 'rc-util/lib/hooks/useMergedState'

const variants = tv({
  base: 'cursor-text group',
  variants: {
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      error: 'text-error'
    },
    disabled: {
      true: 'text-outline opacity-[.38] cursor-default'
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})

const FilledTextField = forwardRef((props, ref) => {
  const inputRef = ref || useRef()
  const {
    label,
    color,
    disabled,
    required,
    prefixText,
    suffixText,
    value,
    onChange,
    defaultValue,
    className,
    children,
    ...rest
  } = props

  const [innerValue, setInnerValue] = useMergedState('', {
    value,
    onChange,
    defaultValue
  })

  const [focused, setFocused] = useState(false)

  const [populated, setPopulated] = useState(innerValue ? true : false)

  const leadingIcon = Children.map(children, (child) =>
    child.type.name === 'LeadingIcon' ? child : null
  )
  const trailingIcon = Children.map(children, (child) =>
    child.type.name === 'TrailingIcon' ? child : null
  )

  const hasLeadingIcon = leadingIcon?.length > 0
  const hasTrailingIcon = trailingIcon?.length > 0

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleInput = (e) => {
    rest.onInput?.(e)
    if (e.target?.value?.length > 0) {
      setPopulated(true)
    } else {
      setPopulated(false)
    }
  }

  const handleChange = (e) => {
    setInnerValue(e.target.value)
  }

  return (
    <div
      onClick={handleClick}
      className={variants({ color, disabled, className })}
    >
      <div className="[resize:inherit] [writing-mode:horizontal-tb] flex flex-1 flex-col max-w-full">
        {/* container-overflow */}
        <div className="relative flex h-full rounded-t">
          {/* background */}
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] bg-secondary/30 group-hover:bg-secondary/40"></div>
          {/* state-layer */}
          <div className="invisible absolute inset-0 pointer-events-none rounded-[inherit]"></div>
          {/* container */}
          <div className="relative flex flex-1 items-center rounded-[inherit] min-h-full max-h-full min-w-fit">
            {/* start */}
            {hasLeadingIcon && (
              <div className="[margin-inline-end:4px] min-w-[48px] flex h-full relative items-center justify-center">
                {leadingIcon}
              </div>
            )}
            {/* middle */}
            <div className="relative flex flex-1 h-full items-stretch self-baseline">
              {/* label-wrapper */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  marginInlineStart: hasLeadingIcon ? '' : '16px',
                  marginInlineEnd: hasTrailingIcon ? '' : '16px'
                }}
              >
                <span
                  className={`${
                    focused || populated
                      ? 'top-2 text-xs text-current'
                      : 'top-4 text-base text-on-surface'
                  } absolute z-[1] overflow-hidden text-ellipsis whitespace-nowrap w-min max-w-full origin-top-left transition-all`}
                >
                  {label}
                  {required && '*'}
                </span>
              </div>
              {/* input-wrapper */}
              <div
                className={`flex flex-1 w-full ${
                  focused || populated ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-[83ms] [transition-timing-function:cubic-bezier(0.2,0,0,1)]`}
              >
                <div
                  className={`flex w-full pt-6 pb-2${
                    hasLeadingIcon ? '' : ' pl-4'
                  }${hasTrailingIcon ? '' : ' pr-4'}`}
                >
                  {prefixText && (
                    <span className="text-base text-on-surface">
                      {prefixText}
                    </span>
                  )}
                  <input
                    {...rest}
                    ref={inputRef}
                    aria-label={label}
                    disabled={disabled}
                    aria-invalid={false}
                    onInput={handleInput}
                    value={innerValue}
                    onChange={handleChange}
                    type={rest.type || 'text'}
                    aria-describedby="description"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="inline-flex w-full outline-0 bg-transparent text-base text-on-surface focus:outline-none [-webkit-tap-highlight-color:rgba(0,0,0,0)]"
                  />
                  {suffixText && (
                    <span className="text-base text-on-surface">
                      {suffixText}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* end */}
            {hasTrailingIcon && (
              <div className="[margin-inline-start:4px] min-w-[48px] flex h-full relative items-center justify-center">
                {trailingIcon}
              </div>
            )}
          </div>
          {/* active-indicator */}
          <div
            className={`absolute inset-[auto_0px_0px] pointer-events-none w-full before:absolute before:w-full before:inset-[auto_0px_0px] before:border-b before:border-outline after:absolute after:w-full after:inset-[auto_0px_0px] after:border-current after:border-b-[3px] after:transition-opacity after:[transition-timing-function:cubic-bezier(0.2,0,0,1)] ${
              focused ? 'after:opacity-100' : 'after:opacity-0'
            }`}
          ></div>
        </div>
      </div>
    </div>
  )
})

export { FilledTextField }
