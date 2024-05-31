'use client'

import { CarouselContent } from './CarouselContent'
import { CarouselControl } from './CarouselControl'
import { CarouselIndicator } from './CarouselIndicator'
import { CarouselProvider } from './CarouselContext'
import { CrouselItem } from './CarouselItem'
import React from 'react'
import { tv } from 'tailwind-variants'

const root = tv({
  base: [
    'flex',
    'w-full',
    'relative',
    'rounded-lg',
    'items-center',
    'min-h-[400px]',
    'justify-center',
    'overflow-hidden'
  ]
})

interface CarouselProps extends React.ComponentProps<'div'> {
  autoPlay?: boolean
  control?: boolean
  infinite?: boolean
  indicator?: boolean
  children?: React.ReactNode[]
}

const Carousel = (props: CarouselProps) => {
  const {
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
      <div {...rest} className={root({ className })}>
        <CarouselContent>{children}</CarouselContent>
        <CarouselControl {...{ control, autoPlay, infinite }} />
        {indicator && <CarouselIndicator />}
      </div>
    </CarouselProvider>
  )
}

Carousel.displayName = 'Actify.Carousel'

export default Object.assign(Carousel, {
  Item: CrouselItem
})
