'use client'
import React from 'react'
import { tv } from 'tailwind-variants'
import ReactDatepicker, { DatepickerType } from 'react-tailwindcss-datepicker'

const inputVariants = tv({
  base: 'relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border border-outline/50 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-surface disabled:opacity-40 disabled:cursor-not-allowed'
})

const DatePicker: React.FC<DatepickerType> = (props) => {
  const { inputClassName, ...rest } = props

  return (
    <ReactDatepicker
      {...rest}
      // @ts-ignore
      inputClassName={inputVariants({ className: inputClassName })}
    />
  )
}

DatePicker.defaultProps = {
  useRange: true,
  separator: '~',
  displayFormat: 'DD/MM/YYYY'
}

DatePicker.displayName = 'Actify.DatePicker'

export default DatePicker
