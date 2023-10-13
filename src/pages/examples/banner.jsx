import React, { useState } from 'react'
import { IconButton, Icon } from 'actify'

export default () => {
  const [loop, setLoop] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [transition, setTransition] = useState(
    'transition-transform duration-500 ease-in-out'
  )
  const [transform, setTransform] = useState('')

  const images = [
    'https://images.unsplash.com/photo-1691977504044-fa2e8c813431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=8',
    'https://images.unsplash.com/photo-1691763731792-c5ee77f9112a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1524&q=80',
    'https://images.unsplash.com/photo-1653916986137-996184bc4af0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    'https://images.unsplash.com/photo-1692812298405-db9c1ca093ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    'https://images.unsplash.com/photo-1692902295604-6c5109aa55a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    'https://images.unsplash.com/photo-1692589250460-1ea229c9942a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ]

  const prev = () => {
    if (currentIndex === 0) {
      if (loop) {
        setTransition('')
        setTransform(`translateX(-${images.length + 1}00%)`)
        requestAnimationFrame(() => {
          setTransform(
            () => '',
            setTransition('transition-transform duration-500 ease-in-out')
          )
        })
      }
      setCurrentIndex(images.length - 1)
    } else {
      setCurrentIndex((currentIndex) => currentIndex - 1)
    }
  }
  const next = () => {
    if (currentIndex === images.length - 1) {
      if (loop) {
        setTransition('')
        setTransform('translateX(0%)')
        requestAnimationFrame(() => {
          setTransform(
            () => '',
            setTransition('transition-transform duration-500 ease-in-out')
          )
        })
      }
      setCurrentIndex(0)
    } else {
      setCurrentIndex((currentIndex) => currentIndex + 1)
    }
  }

  return (
    <div className="grid w-full place-items-center overflow-x-hidden rounded-lg lg:overflow-visible">
      <div className="relative w-full h-full overflow-x-hidden flex rounded-xl">
        {/* clone last item */}
        <div
          style={{
            transform: transform || `translateX(-${currentIndex + 1}00%)`
          }}
          className={`w-full h-full inline-block flex-none ${transition}`}
        >
          <img
            alt=""
            src={images[images.length - 1]}
            className="w-full h-full object-cover"
          />
        </div>
        {images.map((image, i) => (
          <div
            style={{
              transform: transform || `translateX(-${currentIndex + 1}00%)`
            }}
            className={`w-full h-full inline-block flex-none ${transition}`}
          >
            <img alt="" src={image} className="w-full h-full object-cover" />
            {i == currentIndex && (
              <p className="absolute inset-0 grid place-content-center text-6xl text-white">
                {i}
              </p>
            )}
          </div>
        ))}
        {/* clone first item */}
        <div
          style={{
            transform: transform || `translateX(-${currentIndex + 1}00%)`
          }}
          className={`w-full h-full inline-block flex-none ${transition}`}
        >
          <img alt="" src={images[0]} className="w-full h-full object-cover" />
        </div>
        {/* indicators */}
        <ul className="absolute bottom-4 flex w-full justify-center gap-2">
          {images.map((_, i) => (
            <li
              key={i}
              className={`w-5 h-5 rounded-full cursor-pointer ${
                i == currentIndex ? 'bg-white' : 'bg-gray-500'
              }`}
              onClick={() => setCurrentIndex(i)}
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
