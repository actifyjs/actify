import React from 'react'
import { tv } from 'tailwind-variants'
import CarouselContent from './CarouselContent'
import CarouselControl from './CarouselControl'
import CarouselIndicator from './CarouselIndicator'
import { CarouselProvider } from './CarouselContext'

const variants = tv({
  base: 'relative overflow-hidden rounded-lg w-full min-h-[400px] flex items-center justify-center'
})

const Carousel = React.forwardRef((props, ref) => {
  const { style, control, indicator, children, className, ...rest } = props
  return (
    <CarouselProvider {...{ total: children.length, ...rest }}>
      <div
        ref={ref}
        {...rest}
        style={style}
        className={variants({ className })}
      >
        <CarouselContent>{children}</CarouselContent>
        {control && <CarouselControl />}
        {indicator && <CarouselIndicator />}
      </div>
    </CarouselProvider>
  )
})

Carousel.displayName = 'Actify.Carousel'

export default Carousel
