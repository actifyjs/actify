'use client'
import React from 'react'
import { tv } from 'tailwind-variants'
import ReactDatepicker, { DatepickerType } from 'react-tailwindcss-datepicker'

const inputVariants = tv({
  base: 'relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border border-outline/50 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-surface disabled:opacity-40 disabled:cursor-not-allowed'
})

const DatePicker: React.FC<DatepickerType> = (props) => {
  const {
    inputClassName,
    useRange = true,
    separator = '~',
    displayFormat = 'DD/MM/YYYY',
    ...rest
  } = props

  return (
    <ReactDatepicker
      {...rest}
      inputClassName={inputVariants({ className: inputClassName as string })}
    />
  )
}

DatePicker.displayName = 'Actify.DatePicker'

export default DatePicker
