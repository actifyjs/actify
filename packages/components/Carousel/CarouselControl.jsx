import { useInterval } from 'usehooks-ts'
import { Icon } from 'actify'
import { useCarousel } from './CarouselContext'

const CarouselControl = () => {
  const { carousel, setCarousel } = useCarousel()
  const { autoPlay, interval, infinite } = carousel

  const prev = () => {
    if (carousel.current == 0) {
      setCarousel({
        ...carousel,
        current: carousel.total - 1
      })
    } else {
      setCarousel({
        ...carousel,
        current: carousel.current - 1
      })
    }
  }
  const next = () => {
    if (carousel.current < carousel.total - 1) {
      setCarousel({
        ...carousel,
        current: carousel.current + 1
      })
    } else {
      if (infinite) {
        setCarousel({
          ...carousel,
          current: 0
        })
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
