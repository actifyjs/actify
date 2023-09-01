import React from 'react'
import { tv } from 'tailwind-variants'
import CarouselContent from './CarouselContent'
import CarouselControl from './CarouselControl'
import CarouselIndicator from './CarouselIndicator'
import { defaultValue, CarouselProvider } from './CarouselContext'

const variants = tv({
  base: 'relative overflow-hidden rounded-lg w-full min-h-[400px] flex items-center justify-center'
})

const Carousel = React.forwardRef((props, ref) => {
  const {
    style,
    autoPlay,
    control,
    infinite,
    indicator,
    children,
    className,
    ...rest
  } = props
  return (
    <CarouselProvider {...{ total: children.length, ...rest }}>
      <div
        ref={ref}
        {...rest}
        style={style}
        className={variants({ className })}
      >
        <CarouselContent>{children}</CarouselContent>
        <CarouselControl
          control={control ?? defaultValue.control}
          autoPlay={autoPlay ?? defaultValue.autoPlay}
          infinite={infinite ?? defaultValue.infinite}
        />
        {indicator && <CarouselIndicator />}
      </div>
    </CarouselProvider>
  )
})

Carousel.displayName = 'Actify.Carousel'

export default Carousel
