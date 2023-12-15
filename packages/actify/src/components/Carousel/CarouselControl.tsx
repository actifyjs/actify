'use client'
import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { IconButton } from '@actify/Button/IconButton'
import useInterval from '@hooks/useInterval'
import { useCarousel } from './CarouselContext'
import { useShallow } from 'zustand/react/shallow'

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
  const { total, page, setPage, current, interval } = useCarousel(
    useShallow((_) => ({
      total: _.total,
      page: _.page,
      setPage: _.setPage,
      current: _.current,
      interval: _.interval
    }))
  )

  const prev = () => {
    if (!infinite && current == 0) {
      return
    }
    setPage([(page ? Number(page) : 0) - 1, -1])
  }
  const next = () => {
    if (!infinite && current == (total ?? 0) - 1) {
      return
    }
    setPage([(page ? Number(page) : 0) + 1, 1])
  }

  autoPlay && useInterval(next, interval ?? 0)

  return (
    control && (
      <>
        <IconButton
          onClick={prev}
          className="bg-inverse-surface absolute z-30 left-4 top-1/2 -translate-y-1/2"
        >
          <ChevronLeft />
          <span className="sr-only">Previous</span>
        </IconButton>
        <IconButton
          onClick={next}
          className="bg-inverse-surface absolute z-30 right-4 top-1/2 -translate-y-1/2"
        >
          <ChevronRight />
          <span className="sr-only">Next</span>
        </IconButton>
      </>
    )
  )
}

export { CarouselControl }
