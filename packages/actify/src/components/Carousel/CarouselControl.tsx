'use client'

import { Icon } from './../Icon'
import { IconButton } from './../Buttons'
import React from 'react'
import clsx from 'clsx'
import styles from './carousel-control.module.css'
import { useCarousel } from './CarouselContext'
import { useInterval } from './../../hooks'

type CarouselControlProps = {
  control?: boolean
  autoPlay?: boolean
  infinite?: boolean
}

const CarouselControl = ({
  control,
  autoPlay,
  infinite
}: CarouselControlProps) => {
  const { total, page, setPage, current, interval } = useCarousel()

  const prev = () => {
    if (!infinite && current == 0) {
      return
    }
    setPage?.([(page ? Number(page[0]) : 0) - 1, -1])
  }
  const next = () => {
    if (!infinite && current == (total ?? 0) - 1) {
      return
    }
    setPage?.([(page ? Number(page[0]) : 0) + 1, 1])
  }

  autoPlay && useInterval(next, interval ?? 0)

  return (
    control && (
      <React.Fragment>
        <IconButton
          onClick={prev}
          className={clsx(styles['control'], styles['left'])}
        >
          <Icon className={styles['icon']}>chevron_backward</Icon>
          <span className="sr-only">Previous</span>
        </IconButton>
        <IconButton
          onClick={next}
          className={clsx(styles['control'], styles['right'])}
        >
          <Icon className={styles['icon']}>chevron_forward</Icon>
          <span className="sr-only">Next</span>
        </IconButton>
      </React.Fragment>
    )
  )
}

export { CarouselControl }
