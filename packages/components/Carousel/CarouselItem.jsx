import { twMerge } from 'tailwind-merge'
import { useCarousel } from './CarouselContext'
import debounce from '@/packages/utils/debounce'
import { useRef, useState, forwardRef, useEffect } from 'react'

const CarouselItem = forwardRef((props, ref) => {
  const { images, className, ...rest } = props
  const { carousel, setCarousel } = useCarousel()

  const _ref = useRef(null) || ref
  const carouselRef = useRef(null)
  const [maxSlideHeight, setMaxSlideHeight] = useState(0)

  const calculateMaxSlideHeight = () => {
    if (!carouselRef.current) return
    const imageElement = carouselRef.current

    const maxHeight = imageElement.offsetHeight
    setMaxSlideHeight(maxHeight)
    if (maxHeight) {
      // get parent element
      const parentElement = _ref.current.parentElement
      parentElement.style.opacity = 1
    }
  }

  useEffect(() => {
    if (!images.length) return

    if (carousel.current >= images.length) {
      setCarousel({
        ...carousel,
        current: 0,
        total: images.length
      })
    } else {
      setCarousel({
        ...carousel,
        total: images.length
      })
    }
    window.addEventListener('resize', debounce(calculateMaxSlideHeight, 100))
  }, [images]) // Add images as a dependency

  return (
    <ul
      ref={_ref}
      {...rest}
      className={twMerge('relative overflow-hidden', className)}
      style={{ height: maxSlideHeight }} // Set the carousel container height dynamically
    >
      {images.map((image, index) => (
        <li
          key={index}
          className={`${index > carousel.current ? 'translate-x-full' : '-translate-x-full'} ${
            index === carousel.current ? 'translate-x-0' : ''
          } absolute inset-0 transform transition-transform duration-700 ease-in-out`}
        >
          <img
            src={image}
            alt="carousel"
            ref={carouselRef}
            onLoad={calculateMaxSlideHeight}
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
          />
        </li>
      ))}
    </ul>
  )
})

export default CarouselItem
