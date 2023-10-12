import React from 'react'
import { useSwiper } from './SwiperContext'

const SwiperIndicator = () => {
  const { count, current, setCurrent } = useSwiper()

  const selectItem = (index) => {
    setCurrent(index)
  }

  return (
    <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
      {count &&
        [...Array(count)].map((item, index) => (
          <button
            key={index}
            onClick={() => selectItem(index)}
            className={`${
              index == current
                ? 'bg-primary/50 dark:bg-primary'
                : 'bg-primary hover:bg-primary/80 dark:bg-primary/50 dark:hover:bg-primary/80'
            } h-3 w-3 rounded-full`}
          ></button>
        ))}
    </div>
  )
}

export { SwiperIndicator }
