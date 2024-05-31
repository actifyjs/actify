'use client'

import { useCarousel } from './CarouselContext'

const CarouselIndicator = () => {
  const { total, current, setCurrent } = useCarousel()

  return (
    <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
      {[...Array(total)].map((item, index) => (
        <button
          key={index}
          onClick={() => setCurrent?.(index)}
          className={`${
            index == current
              ? 'bg-primary hover:bg-on-primary'
              : 'bg-primary-container hover:bg-on-primary-container'
          } size-3 rounded-full`}
        ></button>
      ))}
    </div>
  )
}

export { CarouselIndicator }
