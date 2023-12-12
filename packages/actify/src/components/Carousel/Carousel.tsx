'use client'
import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { CrouselItem } from './CarouselItem'
import { CarouselContent } from './CarouselContent'
import { CarouselControl } from './CarouselControl'
import { CarouselIndicator } from './CarouselIndicator'
import { CarouselProvider } from './CarouselContext'

const variants = tv({
  base: 'relative overflow-hidden rounded-lg w-full min-h-[400px] flex items-center justify-center'
})

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  autoPlay?: boolean
  control?: boolean
  infinite?: boolean
  indicator?: boolean
  children?: React.ReactNode[]
}

const Carousel = forwardRef<HTMLDivElement, CarouselProps>((props, ref) => {
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
    <CarouselProvider {...{ total: children?.length, ...rest }}>
      <div
        ref={ref}
        {...rest}
        style={style}
        className={variants({ className })}
      >
        <CarouselContent>{children}</CarouselContent>
        <CarouselControl {...{ control, autoPlay, infinite }} />
        {indicator && <CarouselIndicator />}
      </div>
    </CarouselProvider>
  )
})

Carousel.displayName = 'Actify.Carousel'

export default Object.assign(Carousel, {
  Item: CrouselItem
})
