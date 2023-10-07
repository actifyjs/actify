import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: "absolute rounded-full p-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-1/2 -translate-y-1/2 text-white min-w-[24px] min-h-[24px]",
  variants: {
    color: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      tertiary: 'bg-tertiary',
      error: 'bg-error'
    }
  },
  defaultVariants: {
    color: 'error'
  }
})

const Badge = forwardRef((props, ref) => {
  const { style, color, value, className, children, ...rest } = props
  const number = isNaN(parseInt(value)) ? '' : parseInt(value)

  return (
    <div className="inline-flex relative" ref={ref} {...rest}>
      {children}
      <span className={variants({ color, className })} style={style}>
        {number > 999 ? '999+' : number}
      </span>
    </div>
  )
})

Badge.propTypes = {
  color: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Badge.displayName = 'Actify.Badge'

export { Badge }
