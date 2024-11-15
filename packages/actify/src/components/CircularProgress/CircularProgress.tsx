'use client'

import { AriaProgressBarProps, useProgressBar } from 'react-aria'

import React from 'react'
import { StyleProps } from '../../utils'
import clsx from 'clsx'
import styles from './circular-progress.module.css'

const ActiveIndicatorWidth = 25 / 3

interface CircularProgressProp extends AriaProgressBarProps, StyleProps {
  size?: 'xs' | 'md' | 'lg' | 'xl' | '2xl'
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const CircularProgress = (props: CircularProgressProp) => {
  const {
    value = 0,
    minValue = 0,
    maxValue = 100,
    size = 'sm',
    color = 'primary',
    isIndeterminate,
    className
  } = props

  const { progressBarProps } = useProgressBar(props)

  return (
    <React.Fragment>
      <div
        {...progressBarProps}
        className={clsx(
          styles[`size-${size}`],
          styles[`color-${color}`],
          isIndeterminate && styles['animating'],
          className
        )}
      >
        {isIndeterminate ? (
          <div className={styles['indeterminate']}>
            <div className={styles['spinner-wrapper-left']}>
              <div
                className={clsx(
                  styles['spinner'],
                  styles[`spinner-${size}`],
                  styles['spinner-left']
                )}
              />
            </div>
            <div className={styles['spinner-wrapper-right']}>
              <div
                className={clsx(
                  styles['spinner'],
                  styles[`spinner-${size}`],
                  styles['spinner-right']
                )}
              />
            </div>
          </div>
        ) : (
          <svg viewBox="0 0 4800 4800" className={styles['svg']}>
            <circle
              pathLength="100"
              style={
                {
                  cx: '50%',
                  cy: '50%',
                  fill: 'transparent',
                  stroke: 'currentColor',
                  strokeDasharray: 100,
                  strokeWidth: `${ActiveIndicatorWidth}%`,
                  r: `${50 * (1 - ActiveIndicatorWidth * 0.01)}%`
                } as React.CSSProperties
              }
              strokeDashoffset={(1 - value / (maxValue - minValue)) * 100}
            />
          </svg>
        )}
      </div>
    </React.Fragment>
  )
}

CircularProgress.displayName = 'Actify.CircularProgress'

export { CircularProgress }
