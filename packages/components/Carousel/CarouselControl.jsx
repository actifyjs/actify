import { Icon } from 'actify'
import { useInterval } from 'usehooks-ts'
import { useCarousel } from './CarouselContext'

const CarouselControl = () => {
  const { total, current, setCurrent, autoPlay, interval, infinite } = useCarousel()

  const prev = () => {
    if (current == 0) {
      setCurrent(total - 1)
    } else {
      setCurrent(current - 1)
    }
  }
  const next = () => {
    if (current < total - 1) {
      setCurrent(current + 1)
    } else {
      if (infinite) {
        setCurrent(0)
      }
    }
  }

  autoPlay && useInterval(next, interval)

  return (
    <>
      <button
        onClick={prev}
        className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
          <Icon name="ChevronLeft" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        onClick={next}
        className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
          <Icon name="ChevronRight" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </>
  )
}

export default CarouselControl
