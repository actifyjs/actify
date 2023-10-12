import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { useSwiper } from './SwiperContext'

const variants = tv({
  base: 'absolute inset-0 transform transition-transform duration-700 ease-in-out',
  variants: {
    active: {
      true: 'translate-x-0'
    },
    prev: {
      true: 'translate-x-full'
    },
    next: {
      true: '-translate-x-full'
    }
  }
})

const SwiperItem = forwardRef((props, ref) => {
  const { value, style, className, children, ...rest } = props
  const { current } = useSwiper()

  return (
    <li
      ref={ref}
      {...rest}
      style={style}
      className={variants({
        prev: value > current,
        next: value < current,
        active: value == current,
        className
      })}
    >
      {children}
    </li>
  )
})

export { SwiperItem }
