'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './linear-progress.module.css'

interface LinearProgressProps extends React.ComponentProps<'div'> {
  value?: number | string
  indeterminate?: boolean
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const LinearProgress = (props: LinearProgressProps) => {
  const {
    value,
    className,
    color = 'primary',
    indeterminate = false,
    ...rest
  } = props

  return (
    <div
      {...rest}
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
        className={clsx(styles['bar'], indeterminate && styles['bar-primary'])}
        style={{
          blockSize: '100%',
          inlineSize: '100%',
          transition: 'none 0s ease 0s',
          transformOrigin: 'left center',
          insetInlineStart: indeterminate ? '-145.167%' : 0,
          transform: `scaleX(${indeterminate ? 1 : Number(value) / 100})`
        }}
      >
        <div
          className={clsx(
            styles['bar-inner'],
            indeterminate && styles['bar-inner-primary']
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
          indeterminate ? styles['bar-secondary'] : styles['bar-hidden']
        )}
      >
        <div
          className={clsx(
            styles['bar-inner'],
            indeterminate && styles['bar-inner-secondary']
          )}
        />
      </div>
    </div>
  )
}

LinearProgress.displayName = 'Actify.LinearProgress'

export { LinearProgress }
