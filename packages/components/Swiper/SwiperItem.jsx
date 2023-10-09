import React from 'react'
import { twMerge } from 'tailwind-merge'
import { useSwiper } from './SwiperContext'
import { debounce } from '@/packages/utils'

const SwiperItem = React.forwardRef((props, ref) => {
  const { images, className, ...rest } = props
  const { swiper, setSwiper } = useSwiper()

  const _ref = React.useRef(null) || ref
  const swiperRef = React.useRef(null)
  const [maxSlideHeight, setMaxSlideHeight] = React.useState(0)

  const calculateMaxSlideHeight = () => {
    if (!swiperRef.current) return
    const imageElement = swiperRef.current
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

    if (swiper.current >= images.length) {
      setSwiper({
        ...swiper,
        current: 0,
        total: images.length
      })
    } else {
      setSwiper({
        ...swiper,
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
      style={{ height: maxSlideHeight }} // Set the swiper container height dynamically
    >
      {images.map((image, index) => (
        <li
          key={index}
          className={`${
            index > swiper.current ? 'translate-x-full' : '-translate-x-full'
          }${
            index === swiper.current ? 'translate-x-0' : ''
          } absolute inset-0 transform transition-transform duration-700 ease-in-out`}
        >
          <img
            src={image}
            alt="swiper"
            ref={swiperRef}
            onLoad={calculateMaxSlideHeight}
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
          />
        </li>
      ))}
    </ul>
  )
})

export default SwiperItem
