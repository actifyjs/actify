import React, {
  Children,
  useEffect,
  forwardRef,
  cloneElement,
  isValidElement
} from 'react'
import { tv } from 'tailwind-variants'
import { useSwiper } from './SwiperContext'

const variants = tv({
  base: 'min-h-[360px]'
})

const SwiperWrap = forwardRef((props, ref) => {
  const { style, className, children, ...rest } = props
  const { setCount } = useSwiper()
  const list = Children.toArray(children)
  useEffect(() => {
    setCount(list.length)
  }, [])

  return (
    <ul ref={ref} style={style} {...rest} className={variants({ className })}>
      {list.map(
        (child, index) =>
          isValidElement(child) &&
          cloneElement(child, {
            value: index
          })
      )}
    </ul>
  )
})

export { SwiperWrap }
