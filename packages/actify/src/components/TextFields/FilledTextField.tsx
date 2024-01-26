'use client'
import React, { useMemo, useRef, forwardRef, useState, Children } from 'react'
import { SupportingText } from './SupportingText'
import { tv, VariantProps } from 'tailwind-variants'

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

type TextFieldTypes = HTMLInputElement | HTMLTextAreaElement
interface TextFieldProps extends React.InputHTMLAttributes<TextFieldTypes> {
  label?: string
  prefixText?: string
  suffixText?: string
  supportingText?: string
  maxLength?: number
  color?: VariantProps<typeof variants>['color']
  children?: React.JSX.Element | React.JSX.Element[]
}
const FilledTextField: React.FC<TextFieldProps> = forwardRef(
  (props, ref?: React.Ref<TextFieldTypes>) => {
    const {
      label,
      color,
      type = 'text',
      disabled,
      required,
      prefixText,
      suffixText,
      supportingText,
      maxLength = 524288,
      value,
      onChange,
      defaultValue,
      className,
      children,
      ...rest
    } = props

    const inputRef = ref || useRef()
    const isControlled = value !== undefined
    const TagName = type === 'textarea' ? 'textarea' : 'input'

    const [inputValue, setInputValue] = isControlled
      ? [value, onChange]
      : useState(defaultValue || '')

    const [focused, setFocused] = useState(false)

    const leadingIcon = Children.map(children, (child) =>
      child?.type?.displayName === 'LeadingIcon' ? child : null
    )
    const trailingIcon = Children.map(children, (child) =>
      child?.type?.displayName === 'TrailingIcon' ? child : null
    )

    const hasLeadingIcon = leadingIcon ? leadingIcon.length > 0 : false
    const hasTrailingIcon = trailingIcon ? trailingIcon.length > 0 : false

    const handleClick = () => {
      // @ts-expect-error
      if (inputRef?.current) {
        // @ts-expect-error
        inputRef?.current.focus()
      }
    }

    const populated = useMemo(() => {
      if (inputValue) {
        return inputValue.toString().length > 0
      }
      return false
    }, [inputValue])

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      onChange?.(e)
      setInputValue?.(e.target.value as any)
    }

    const supportingTextClassName = disabled
      ? 'text-on-surface'
      : color === 'error'
        ? 'text-error'
        : 'text-on-surface-variant'

    return (
      <div
        className={
          '[resize:inherit] [writing-mode:horizontal-tb] flex flex-col max-w-full ' +
          variants({ color, disabled, className })
        }
      >
        {/* container-overflow */}
        <div onClick={handleClick} className="relative flex h-full rounded-t">
          {/* background */}
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] bg-secondary/30 group-hover:bg-secondary/40"></div>
          {/* state-layer */}
          <div className="invisible absolute inset-0 pointer-events-none rounded-[inherit]"></div>
          {/* container */}
          <div className="relative flex flex-1 items-center rounded-[inherit] min-h-full max-h-full min-w-fit">
            {/* start */}
            {hasLeadingIcon && leadingIcon}
            {/* middle */}
            <div className="relative flex flex-1 h-full items-stretch self-baseline">
              {/* label-wrapper */}
              <div
                className={`${!hasLeadingIcon && 'ms-4'} ${
                  !hasTrailingIcon && ' me-4'
                } absolute inset-0 pointer-events-none`}
              >
                <span
                  className={`${
                    focused || populated
                      ? 'top-2 text-xs text-current'
                      : `top-4 text-base ${supportingTextClassName}`
                  } absolute overflow-hidden text-ellipsis whitespace-nowrap w-min max-w-full origin-top-left transition-all`}
                >
                  {label}
                  {required && '*'}
                </span>
              </div>
              {/* input-wrapper */}
              <div
                className={`flex flex-1 w-full ${
                  focused || populated ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-150 [transition-timing-function:cubic-bezier(0.2,0,0,1)]`}
              >
                <div
                  className={`flex w-full pt-6 pb-2 ${
                    !hasLeadingIcon && 'pl-4'
                  } ${!hasTrailingIcon && 'pr-4'}`}
                >
                  {prefixText && (
                    <span className={supportingTextClassName}>
                      {prefixText}
                    </span>
                  )}
                  <TagName
                    {...rest}
                    type={type}
                    ref={
                      inputRef as React.Ref<HTMLInputElement> &
                        React.Ref<HTMLTextAreaElement>
                    }
                    maxLength={maxLength}
                    aria-label={label}
                    disabled={disabled}
                    aria-invalid={false}
                    onChange={handleChange}
                    aria-describedby="description"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    value={isControlled ? inputValue : undefined}
                    defaultValue={!isControlled ? inputValue : undefined}
                    className="inline-flex w-full outline-0 bg-transparent text-base text-on-surface focus:outline-none [-webkit-tap-highlight-color:rgba(0,0,0,0)]"
                  />
                  {suffixText && (
                    <span className={supportingTextClassName}>
                      {suffixText}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* end */}
            {hasTrailingIcon && trailingIcon}
          </div>
          {/* active-indicator */}
          <div
            className={`absolute inset-[auto_0px_0px] pointer-events-none w-full before:absolute before:w-full before:inset-[auto_0px_0px] before:border-b before:border-outline after:absolute after:w-full after:inset-[auto_0px_0px] after:border-current after:border-b-[3px] after:transition-opacity after:[transition-timing-function:cubic-bezier(0.2,0,0,1)] ${
              focused ? 'after:opacity-100' : 'after:opacity-0'
            }`}
          ></div>
        </div>

        {supportingText !== undefined ? (
          <SupportingText supportingText={supportingText} {...props} />
        ) : props.maxLength !== undefined ? (
          <SupportingText
            supportingText={`${inputValue.toString().length}/${maxLength}`}
            {...props}
          />
        ) : null}
      </div>
    )
  }
)

export { FilledTextField }
