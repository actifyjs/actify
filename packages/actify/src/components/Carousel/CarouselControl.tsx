'use client'

import { Icon } from './../Icon'
import { IconButton } from './../Buttons'
import React from 'react'
import clsx from 'clsx'
import styles from './carousel-control.module.css'
import { useCarousel } from './CarouselContext'
import { useInterval } from './../../hooks'
import { PressEvent } from 'react-aria-components'

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
  const [pressCount, setPressCount] = React.useState(0)

  const prev = (e?: PressEvent) => {
    if (!infinite && current == 0) {
      return
    }
    setPage?.([(page?.[0] ?? 0) - 1, -1])
    if (e) setPressCount((old) => old + 1)
  }
  const next = (e?: PressEvent) => {
    if (!infinite && current == (total ?? 0) - 1) {
      return
    }
    setPage?.([(page?.[0] ?? 0) + 1, 1])
    if (e) setPressCount((old) => old + 1)
  }

  if (autoPlay) {
    useInterval(next, interval ?? 0, [pressCount])
  }

  return (
    control && (
      <React.Fragment>
        <IconButton
          onPress={prev}
          className={clsx(styles['control'], styles['left'])}
        >
          <Icon className={styles['icon']}>chevron_backward</Icon>
          <span className="sr-only">Previous</span>
        </IconButton>
        <IconButton
          onPress={next}
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
