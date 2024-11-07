'use client'

import { CarouselContent } from './CarouselContent'
import { CarouselControl } from './CarouselControl'
import { CarouselIndicator } from './CarouselIndicator'
import { CarouselProvider } from './CarouselContext'
import React from 'react'
import clsx from 'clsx'
import styles from './carousel.module.css'

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
      <div {...rest} className={clsx(styles['carousel'], className)}>
        <CarouselContent>{children}</CarouselContent>
        <CarouselControl {...{ control, autoPlay, infinite }} />
        {indicator && <CarouselIndicator />}
      </div>
    </CarouselProvider>
  )
}

Carousel.displayName = 'Actify.Carousel'

export { Carousel }
