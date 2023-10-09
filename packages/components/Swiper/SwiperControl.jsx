import { useInterval } from 'usehooks-ts'
import { Icon } from 'actify'
import { useSwiper } from './SwiperContext'

const SwiperControl = () => {
  const { swiper, setSwiper } = useSwiper()
  const { autoPlay, interval, infinite } = swiper

  const prev = () => {
    if (swiper.current == 0) {
      setSwiper({
        ...swiper,
        current: swiper.total - 1
      })
    } else {
      setSwiper({
        ...swiper,
        current: swiper.current - 1
      })
    }
  }
  const next = () => {
    if (swiper.current < swiper.total - 1) {
      setSwiper({
        ...swiper,
        current: swiper.current + 1
      })
    } else {
      if (infinite) {
        setSwiper({
          ...swiper,
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
}

export default SwiperControl
