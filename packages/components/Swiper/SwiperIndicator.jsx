import { useSwiper } from './SwiperContext'

const SwiperIndicator = () => {
  const { swiper, setSwiper } = useSwiper()

  const selectItem = (index) => {
    setSwiper({
      ...swiper,
      current: index
    })
  }

  return (
    <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
      {swiper.total &&
        [...Array(swiper.total)].map((item, index) => (
          <button
            key={index}
            onClick={() => selectItem(index)}
            className={`${
              index == swiper.current
                ? 'bg-primary/50 dark:bg-primary'
                : 'bg-primary hover:bg-primary/80 dark:bg-primary/50 dark:hover:bg-primary/80'
            } h-3 w-3 rounded-full`}
          ></button>
        ))}
    </div>
  )
}

export default SwiperIndicator
