'use client'
import React from 'react'
import { IconButton, Icon } from 'actify'
import { useInterval } from 'usehooks-ts'
import { useCarousel } from './CarouselContext'

type CarouselControlProps = {
  control?: boolean
  autoPlay?: boolean
  infinite?: boolean
}

const CarouselControl: React.FC<CarouselControlProps> = ({
  control,
  autoPlay,
  infinite
}) => {
  // @ts-ignore
  const { total, page, setPage, current, interval } = useCarousel()
  const prev = () => {
    if (!infinite && current == 0) {
      return
    }
    setPage([parseInt(page) - 1, -1])
  }
  const next = () => {
    if (!infinite && current == total - 1) {
      return
    }
    setPage([parseInt(page) + 1, 1])
  }

  autoPlay && useInterval(next, interval)

  return (
    control && (
      <>
        <IconButton
          onClick={prev}
          className="bg-inverse-surface absolute z-30 left-4 top-1/2 -translate-y-1/2"
        >
          <Icon name="chevron-left" />
          <span className="sr-only">Previous</span>
        </IconButton>
        <IconButton
          onClick={next}
          className="bg-inverse-surface absolute z-30 right-4 top-1/2 -translate-y-1/2"
        >
          <Icon name="chevron-right" />
          <span className="sr-only">Next</span>
        </IconButton>
      </>
    )
  )
}

export { CarouselControl }
