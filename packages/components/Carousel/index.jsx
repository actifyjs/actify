import React from 'react'
import { twMerge } from 'tailwind-merge'
import CarouselControl from './CarouselControl'
import CarouselIndicator from './CarouselIndicator'
import { CarouselProvider } from './CarouselContext'

const Carousel = React.forwardRef((props, ref) => {
  const { style, control, indicator, children, className, ...rest } = props

  return (
    <CarouselProvider {...rest}>
      <div
        ref={ref}
        {...rest}
        style={{ opacity: 0, ...style }}
        className={twMerge('relative overflow-hidden rounded-lg', className)}
      >
        {children}
        {control && <CarouselControl />}
        {indicator && <CarouselIndicator />}
      </div>
    </CarouselProvider>
  )
})

Carousel.displayName = 'Actify.Carousel'

export default Carousel
