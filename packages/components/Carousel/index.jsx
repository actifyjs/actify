import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { CarouselProvider } from './CarouselContext'
import CarouselControl from './CarouselControl'
import CarouselIndicator from './CarouselIndicator'

const Carousel = forwardRef((props, ref) => {
  const { style, control, indicator, current, autoPlay, interval, infinite, children, className, ...rest } = props

  return (
    <CarouselProvider current={current} autoPlay={autoPlay} interval={interval} infinite={infinite}>
      <div ref={ref} {...rest} style={{ opacity: 0, ...style }} className={twMerge('relative w-full', className)}>
        {children}
        {control && <CarouselControl />}
        {indicator && <CarouselIndicator />}
      </div>
    </CarouselProvider>
  )
})

Carousel.displayName = 'Actify.Carousel'

export default Carousel
