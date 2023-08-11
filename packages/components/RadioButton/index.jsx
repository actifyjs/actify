import { Ripple } from 'actify'
import { tv } from 'tailwind-variants'
import React, { useId, forwardRef } from 'react'
import { setColor } from '@/packages/utils'

const labelVariants = tv({
  base: 'relative overflow-hidden flex items-center cursor-pointer p-2.5 rounded-full'
})

const variants = tv({
  base: "peer relative appearance-none w-5 h-5 border-2 rounded-full border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:opacity-0 hover:before:opacity-10 before:transition-opacity text-black/90 dark:text-white/10 checked:text-current after:absolute after:-inset-3 hover:after:bg-black/10 dark:hover:after:bg-white/10"
})

const dotVariants = tv({
  base: 'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity text-black/90 peer-checked:text-current'
})

const RadioButton = forwardRef((props, ref) => {
  const id = useId()
  const { style, className, color, children, ...rest } = props
  const colorVariants = setColor(color ?? 'primary')

  return (
    <label htmlFor={id} className={labelVariants()} style={{ color: colorVariants }}>
      <input type="radio" id={id} ref={ref} {...rest} style={style} className={variants({ className })} />
      <span className={dotVariants()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
      <Ripple />
    </label>
  )
})

RadioButton.displayName = 'Actify.RadioButton'

export default RadioButton
