'use client'

import { AriaProgressBarProps, useProgressBar } from 'react-aria'

import React from 'react'
import { StyleProps } from '../../utils'
import clsx from 'clsx'
import styles from './linear-progress.module.css'

interface LinearProgressProps extends AriaProgressBarProps, StyleProps {
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const LinearProgress = (props: LinearProgressProps) => {
  const {
    value = 0,
    className,
    minValue = 0,
    maxValue = 100,
    color = 'primary',
    isIndeterminate = false
  } = props

  const { progressBarProps } = useProgressBar(props)

  return (
    <div
      {...progressBarProps}
      className={clsx(
        styles['progress'],
        styles[`progress-${color}`],
        className
      )}
    >
      <div
        style={
          {
            position: 'absolute',
            inset: 0,
            '--tw-bg-opacity': 1,
            backgroundColor:
              'rgb(var(--md-sys-color-surface) / var(--tw-bg-opacity))',
            transform: 'scaleX(1)',
            transformOrigin: 'left center',
            transition: 'transform 250ms cubic-bezier(0.4, 0, 0.6, 1) 0s'
          } as React.CSSProperties
        }
      />
      <div
        className={clsx(
          styles['bar'],
          isIndeterminate && styles['bar-primary']
        )}
        style={{
          blockSize: '100%',
          inlineSize: '100%',
          transition: 'none 0s ease 0s',
          transformOrigin: 'left center',
          insetInlineStart: isIndeterminate ? '-145.167%' : 0,
          transform: `scaleX(${isIndeterminate ? 1 : value / (maxValue - minValue)})`
        }}
      >
        <div
          className={clsx(
            styles['bar-inner'],
            isIndeterminate && styles['bar-inner-primary']
          )}
        />
      </div>
      <div
        style={{
          blockSize: '100%',
          inlineSize: '100%',
          transition: 'none 0s ease 0s',
          transformOrigin: 'left center',
          insetInlineStart: '-54.8889%'
        }}
        className={clsx(
          styles['bar'],
          isIndeterminate ? styles['bar-secondary'] : styles['bar-hidden']
        )}
      >
        <div
          className={clsx(
            styles['bar-inner'],
            isIndeterminate && styles['bar-inner-secondary']
          )}
        />
      </div>
    </div>
  )
}

LinearProgress.displayName = 'Actify.LinearProgress'

export { LinearProgress }
