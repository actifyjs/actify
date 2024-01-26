'use client'
import { motion, cubicBezier } from 'framer-motion'
import React, {
  useId,
  useMemo,
  useRef,
  forwardRef,
  useState,
  Children
} from 'react'
import { SupportingText } from './SupportingText'
import { tv, VariantProps } from 'tailwind-variants'

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
const OutlinedTextField: React.FC<TextFieldProps> = forwardRef(
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
    const layoutId = useId()
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
        <div onClick={handleClick} className="relative flex h-full rounded">
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
                {!focused && !populated && (
                  <motion.span
                    layoutId={layoutId}
                    transition={{
                      duration: 0.15,
                      easings: [cubicBezier(0.2, 0, 0, 1)]
                    }}
                    className={`absolute overflow-hidden text-ellipsis whitespace-nowrap w-min max-w-full top-4 text-base ${supportingTextClassName}`}
                  >
                    {label}
                    {required && '*'}
                  </motion.span>
                )}
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
          {/* outline */}
          <div className="pointer-events-none absolute flex w-full h-full rounded-[inherit]">
            {/* outline-start */}
            <div
              className={`relative rounded-[inherit] ps-4 before:me-1 before:border-r-0 before:absolute before:inset-0 before:rounded-l-[inherit] before:border ${
                focused
                  ? 'before:border-current after:border-current after:opacity-100'
                  : 'before:border-outline after:border-outline after:opacity-0'
              } after:absolute after:inset-0 after:me-1 after:rounded-l-[inherit] after:border-r-0 after:border-[3px]`}
            ></div>
            {/* outline-notch */}
            <div
              className={`${
                label ? 'flex' : 'hidden'
              } relative items-start border-[inherit] px-1 -ms-1 me-1 max-w-[calc(100%-32px)]`}
            >
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
                {(focused || populated) && (
                  <motion.span
                    layoutId={layoutId}
                    transition={{
                      duration: 0.15,
                      easings: [cubicBezier(0.2, 0, 0, 1)]
                    }}
                    className={`text-xs ${
                      populated && !focused ? 'text-on-surface-variant' : ''
                    }`}
                  >
                    {label}
                    {required && '*'}
                  </motion.span>
                )}
              </div>
            </div>
            {/* outline-end */}
            <div
              className={`relative rounded-[inherit] flex-grow -ms-1 before:border-l-0 before:absolute before:inset-0 before:rounded-r-[inherit] before:border ${
                focused
                  ? 'before:border-current after:border-current after:opacity-100'
                  : 'before:border-outline after:border-outline after:opacity-0'
              } after:absolute after:inset-0 after:rounded-r-[inherit] after:border-l-0 after:border-[3px]`}
            ></div>
          </div>
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

export { OutlinedTextField }
