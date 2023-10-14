import React, { forwardRef, useState } from 'react'
import { IconButton, Icon } from 'actify'
import { SwiperItem } from './SwiperItem'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'grid w-full place-items-center overflow-hidden'
})

const SwiperRoot = forwardRef((props, ref) => {
  const { current: index, style, className, children, ...rest } = props
  const count = React.Children.count(children)
  const [current, setCurrent] = useState(index ?? 0)
  const [transition, setTransition] = useState('transform .5s ease-in-out')
  const [transform, setTransform] = useState('')

  const prev = () => {
    if (current === 0) {
      setTransition('none')
      setTransform(`-${count + 1}00%`)
      requestAnimationFrame(() => {
        setTransform('')
        setTransition('transform .5s ease-in-out')
      })
      setCurrent(count - 1)
    } else {
      setCurrent((_) => _ - 1)
    }
  }
  const next = () => {
    if (current === count - 1) {
      setTransition('none')
      setTransform('0')
      requestAnimationFrame(() => {
        setTransform('')
        setTransition('transform .5s ease-in-out')
      })
      setCurrent(0)
    } else {
      setCurrent((_) => _ + 1)
    }
  }

  return (
    <div ref={ref} {...rest} style={style} className={variants({ className })}>
      <div
        style={{
          '--transition': transition,
          '--transform': transform || `-${current + 1}00%`
        }}
        className="relative h-full overflow-hidden rounded-lg flex"
      >
        {children[count - 1]}
        {children}
        {children[0]}

        {/* indicators */}
        <ul className="absolute bottom-4 flex w-full justify-center gap-2">
          {[...Array(count)].map((_, i) => (
            <li
              key={i}
              className={`w-5 h-5 rounded-full cursor-pointer ${
                i == current ? 'bg-white' : 'bg-gray-500'
              }`}
              onClick={() => setCurrent(i)}
            ></li>
          ))}
        </ul>

        {/* controls */}
        <IconButton
          onClick={prev}
          className="absolute top-1/2 -translate-y-1/2 bg-surface left-5"
        >
          <Icon name="arrow-left" color="primary" />
        </IconButton>
        <IconButton
          onClick={next}
          className="absolute top-1/2 -translate-y-1/2 bg-surface right-5"
        >
          <Icon name="arrow-right" color="primary" />
        </IconButton>
      </div>
    </div>
  )
})

SwiperRoot.Item = SwiperItem

SwiperRoot.displayName = 'Actify.Swiper'

export const Swiper = Object.assign(SwiperRoot, {
  Item: SwiperItem
})
