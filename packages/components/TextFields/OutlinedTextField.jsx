import React, { forwardRef, useRef, useState, Children } from 'react'
import { tv } from 'tailwind-variants'
import useMergedState from 'rc-util/lib/hooks/useMergedState'

const variants = tv({
  base: 'cursor-text group',
  variants: {
    color: {
      primary: 'text-primary [--color:rgb(var(--color-primary))]',
      secondary: 'text-secondary [--color:rgb(var(--color-secondary))]',
      tertiary: 'text-tertiary [--color:rgb(var(--color-tertiary))]',
      error: 'text-error [--color:rgb(var(--color-error))]'
    },
    disabled: {
      true: 'text-outline opacity-[.38] cursor-default'
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})

const OutlinedTextField = forwardRef((props, ref) => {
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
        <div className="relative flex h-full rounded">
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
                    focused || populated ? 'opacity-0' : 'opacity-100'
                  } absolute z-[1] overflow-hidden text-ellipsis whitespace-nowrap w-min max-w-full top-4 text-base text-on-surface`}
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
                  className={`flex w-full py-4${hasLeadingIcon ? '' : ' pl-4'}${
                    hasTrailingIcon ? '' : ' pr-4'
                  }`}
                >
                  {prefixText && <span>{prefixText}</span>}
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
                  {suffixText && <span>{suffixText}</span>}
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
          {/* outline */}
          <div className="pointer-events-none absolute flex w-full h-full rounded-[inherit]">
            {/* outline-start */}
            <div
              className={`relative rounded-[inherit] [padding-inline-start:16px] before:[margin-inline-end:4px] before:border-r-0 before:absolute before:inset-0 before:rounded-l-[inherit] before:border ${
                focused
                  ? 'before:border-current after:border-current after:opacity-100'
                  : 'before:border-outline after:border-outline after:opacity-0'
              } after:absolute after:inset-0 after:[margin-inline-end:4px] after:rounded-l-[inherit] after:border-r-0 after:border-[3px]`}
            ></div>
            {/* outline-notch */}
            <div className="relative flex items-start border-[inherit] px-1 [margin-inline-start:-4px] [margin-inline-end:4px] max-w-[calc(100%-32px)]">
              {/* outline-panel-inactive */}
              <div
                className={`${
                  focused || populated ? 'opacity-0' : 'opacity-100'
                } absolute inset-0 before:absolute before:inset-0 before:right-1/2 before:origin-top-left before:border-t before:border-t-outline after:absolute after:inset-0 after:origin-top-right after:left-1/2 after:border-t after:border-t-outline`}
              ></div>
              {/* outline-panel-active */}
              <div
                className={`${
                  focused
                    ? 'opacity-100 before:border-b-[3px] before:border-current after:border-b-[3px] after:border-current'
                    : 'before:border-b before:border-b-outline after:border-b after:border-b-outline'
                } absolute inset-0 before:absolute before:inset-0 before:right-1/2 before:origin-top-left after:absolute after:inset-0 after:origin-top-right after:left-1/2`}
              ></div>
              {/* outline-label */}
              <div className="flex max-w-full translate-y-[calc(-100%+8px)]">
                <span
                  className={`text-xs ${
                    focused || populated ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {label}
                  {required && '*'}
                </span>
              </div>
            </div>
            {/* outline-end */}
            <div
              className={`relative rounded-[inherit] flex-grow [margin-inline-start:-4px] before:border-l-0 before:absolute before:inset-0 before:rounded-r-[inherit] before:border ${
                focused
                  ? 'before:border-current after:border-current after:opacity-100'
                  : 'before:border-outline after:border-outline after:opacity-0'
              } after:absolute after:inset-0 after:rounded-r-[inherit] after:border-l-0 after:border-[3px]`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
})

export { OutlinedTextField }
