import React from 'react'
import { Icon } from 'actify'
import { useInterval } from 'usehooks-ts'
import { useCarousel } from './CarouselContext'

const CarouselControl = ({ control, autoPlay, infinite }) => {
  const { total, page, setPage, current, interval } = useCarousel()
  const prev = () => {
    if (!infinite && current == 0) {
      return
    }
    setPage([parseInt(page) - 1, -1])
  }
  const next = () => {
    if (!infinite && current == total - 1) {
      return
    }
    setPage([parseInt(page) + 1, 1])
  }

  autoPlay && useInterval(next, interval)

  return (
    control && (
      <>
        <button
          onClick={prev}
          className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
            <Icon name="chevron-left" />
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          onClick={next}
          className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
            <Icon name="chevron-right" />
            <span className="sr-only">Next</span>
          </span>
        </button>
      </>
    )
  )
}

export { CarouselControl }
