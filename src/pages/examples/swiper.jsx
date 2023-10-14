import React, { useState } from 'react'
import { IconButton, Icon } from 'actify'

const Swiper = ({ children }) => {
  const count = React.Children.count(children)
  const [current, setCurrent] = useState(0)
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
    <div className="grid w-full place-items-center overflow-hidden">
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
          className="absolute top-1/2 -translate-y-1/2 bg-white left-5"
        >
          <Icon name="arrow-left" />
        </IconButton>
        <IconButton
          onClick={next}
          className="absolute top-1/2 -translate-y-1/2 bg-white right-5"
        >
          <Icon name="arrow-right" />
        </IconButton>
      </div>
    </div>
  )
}

const Item = ({ children }) => (
  <div className="w-full h-full inline-block flex-none [transition:var(--transition)] [transform:translateX(var(--transform))]">
    {children}
  </div>
)
Swiper.Item = Item

const Indicators = () => (
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
)
Swiper.Indicators = Indicators

export default () => (
  <Swiper>
    <Swiper.Item>
      <img
        alt="Swiper 1"
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1691977504044-fa2e8c813431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=8"
      />
    </Swiper.Item>
    <Swiper.Item>
      <img
        alt="Swiper 2"
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1691763731792-c5ee77f9112a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1524&q=80"
      />
    </Swiper.Item>
    <Swiper.Item>
      <img
        alt="Swiper 3"
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1653916986137-996184bc4af0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
      />
    </Swiper.Item>
  </Swiper>
)
