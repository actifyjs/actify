'use client'

import React, { Children, FunctionComponent, useState } from 'react'

import { Icon } from './../Icon'
import { IconButton } from './../Button/IconButton'
import clsx from 'clsx'
import styles from './swiper.module.css'
import { useInterval } from './../../hooks'

interface SwiperProps extends React.ComponentProps<'div'> {
  current?: number
  interval?: number
  autoPlay?: boolean
  indicator?: FunctionComponent
  children?: React.JSX.Element | React.JSX.Element[]
}

const Swiper = (props: SwiperProps) => {
  const {
    current: index,
    interval = 3000,
    autoPlay,
    className,
    indicator,
    children,
    ...rest
  } = props

  const items = Children.map(children, (child) =>
    child?.type?.name === 'SwiperItem' ? child : null
  )
  const count = items?.length

  const [current, setCurrent] = useState(index ?? 0)
  const [transition, setTransition] = useState('transform .5s ease-in-out')
  const [transform, setTransform] = useState('')

  const prev = () => {
    if (current === 0) {
      setTransition('none')
      setTransform(`-${count! + 1}00%`)
      requestAnimationFrame(() => {
        setTransform('')
        setTransition('transform .5s ease-in-out')
      })
      setCurrent(count! - 1)
    } else {
      setCurrent((_) => _ - 1)
    }
  }
  const next = () => {
    if (current === count! - 1) {
      setTransition('none')
      setTransform('0')
      requestAnimationFrame(() => {
        setTransform('')
        setTransition('transform .5s ease-in-out')
      })
      setCurrent(0)
    } else {
      setCurrent((_) => _ + 1)
    }
  }

  autoPlay && useInterval(next, interval)

  return (
    <div {...rest} className={clsx(styles['root'], className)}>
      <div
        style={
          {
            '--transition': transition,
            '--transform': transform || `-${current + 1}00%`
          } as React.CSSProperties
        }
        className={styles['root-inner']}
      >
        {items?.[count! - 1]}
        {items}
        {items?.[0]}

        {/* controls */}
        {/* prev button */}

        <IconButton
          onClick={prev}
          color="primary"
          className={clsx(styles['button'], styles['button-prev'])}
        >
          <Icon>chevron_left</Icon>
        </IconButton>

        {/* next button */}

        <IconButton
          onClick={next}
          color="primary"
          className={clsx(styles['button'], styles['button-next'])}
        >
          <Icon>chevron_right</Icon>
        </IconButton>

        {/* indicators */}
        {indicator ? (
          indicator({ setCurrent, current, count })
        ) : (
          <ul className={styles['indicator']}>
            {[...Array(count)].map((_, i) => (
              <li
                key={i}
                onClick={() => setCurrent(i)}
                className={clsx(
                  styles['indicator-item'],
                  i == current && styles['indicator-active']
                )}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

Swiper.displayName = 'Actify.Swiper'

export { Swiper }
