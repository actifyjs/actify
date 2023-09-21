import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import React, { forwardRef } from 'react'
import ReactDatepicker from 'react-tailwindcss-datepicker'

const variants = tv({
  base: ''
})

const inputVariants = tv({
  base: ''
})

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

DatePicker.propTypes = {
  asSingle: PropTypes.bool,
  showShortcuts: PropTypes.bool,
  useRange: PropTypes.bool,
  separator: PropTypes.string,
  showFooter: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  displayFormat: PropTypes.string,
  inputClassName: PropTypes.string,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  startFrom: PropTypes.instanceOf(Date)
}

DatePicker.defaultProps = {
  useRange: true,
  separator: '~',
  displayFormat: 'DD/MM/YYYY'
}

DatePicker.displayName = 'Actify.DatePicker'

export default DatePicker
