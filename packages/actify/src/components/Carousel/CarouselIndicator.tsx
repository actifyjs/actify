'use client'
import React from 'react'
import { useCarousel } from './CarouselContext'
import { useShallow } from 'zustand/react/shallow'

const CarouselIndicator: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = () => {
  const { total, current, setCurrent } = useCarousel(
    useShallow((_) => ({
      total: _.total,
      current: _.current,
      setCurrent: _.setCurrent
    }))
  )

  return (
    <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
      {[...Array(total)].map((item, index) => (
        <button
          key={index}
          onClick={() => setCurrent(index)}
          className={`${
            index == current
              ? 'bg-primary dark:bg-primary'
              : 'bg-primary/50 hover:bg-primary/80 dark:bg-primary/50 dark:hover:bg-primary/80'
          } h-3 w-3 rounded-full`}
        ></button>
      ))}
    </div>
  )
}

export { CarouselIndicator }
