import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import ReactDatepicker from 'react-tailwindcss-datepicker'

const variants = tv({
  base: ''
})

const inputVariants = tv({
  base: 'relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border border-outline/50 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-surface disabled:opacity-40 disabled:cursor-not-allowed'
})

/**
 * @type React.FC<DatePickerPropTypes>
 */

const DatePicker = forwardRef((props, ref) => {
  const { style, className, inputClassName, ...rest } = props

  return (
    <ReactDatepicker
      ref={ref}
      {...rest}
      style={style}
      classNames={variants({ className })}
      inputClassName={inputVariants({ className: inputClassName })}
    />
  )
})

const DatePickerPropTypes = {
  /** render as single date picker */
  asSingle: PropTypes.bool,
  /** show left shortcuts date */
  showShortcuts: PropTypes.bool,
  /** select range date - default value is true */
  useRange: PropTypes.bool,
  /** separator between range date - defalut value is ~ */
  separator: PropTypes.string,
  /** show footer actions */
  showFooter: PropTypes.bool,
  /** readonly mode */
  readOnly: PropTypes.bool,
  /** disabled mode */
  disabled: PropTypes.bool,
  /** display format of date - defalut value is DD/MM/YYYY */
  displayFormat: PropTypes.string,
  inputClassName: PropTypes.string,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  startFrom: PropTypes.instanceOf(Date)
}

DatePicker.propTypes = DatePickerPropTypes

DatePicker.defaultProps = {
  useRange: true,
  separator: '~',
  displayFormat: 'DD/MM/YYYY'
}

DatePicker.displayName = 'Actify.DatePicker'

export { DatePicker }
