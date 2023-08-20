import React from 'react'
import { twMerge } from 'tailwind-merge'
import { useCarousel } from './CarouselContext'
import debounce from '@/packages/utils/debounce'

const CarouselItem = React.forwardRef((props, ref) => {
  const { images, className, ...rest } = props
  const { total, current, setTotal, setCurrent } = useCarousel()

  const _ref = React.useRef(null) || ref
  const carouselRef = React.useRef(null)
  const [maxSlideHeight, setMaxSlideHeight] = React.useState(0)

  const calculateMaxSlideHeight = () => {
    if (!carouselRef.current) return
    const imageElement = carouselRef.current
    const { height } = imageElement.getBoundingClientRect()
    setMaxSlideHeight(height)
    if (height) {
      // get parent element
      const parentElement = _ref.current.parentElement
      parentElement.style.opacity = 1
    }
  }

  React.useLayoutEffect(() => {
    if (!images.length) return

    if (current >= images.length) {
      setTotal(images.length)
      setCurrent(0)
    } else {
      setTotal(images.length)
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
          className={`${index > current ? 'translate-x-full' : '-translate-x-full'} ${
            index === current ? 'translate-x-0' : ''
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
