import { useCarousel } from './CarouselContext'

const CarouselIndicator = () => {
  const { carousel, setCarousel } = useCarousel()

  const selectItem = (index) => {
    setCarousel({
      ...carousel,
      current: index
    })
  }

  return (
    <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
      {carousel.total &&
        [...Array(carousel.total)].map((item, index) => (
          <button
            key={index}
            onClick={() => selectItem(index)}
            className={`${
              index == carousel.current
                ? 'bg-primary/50 dark:bg-primary'
                : 'bg-primary hover:bg-primary/80 dark:bg-primary/50 dark:hover:bg-primary/80'
            } h-3 w-3 rounded-full`}
          ></button>
        ))}
    </div>
  )
}

export default CarouselIndicator
