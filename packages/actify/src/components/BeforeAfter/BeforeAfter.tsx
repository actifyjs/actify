'use client'

import { Icon } from './../Icon'
import React from 'react'
import styles from './before-after.module.css'

interface BeforeAfterProps extends React.ComponentProps<'div'> {
  before?: string
  after?: string
  bgImage?: string
}

const BeforeAfter = ({ before, after, bgImage, ...rest }: BeforeAfterProps) => {
  const image = React.useMemo(
    () =>
      `url('${
        bgImage ||
        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="%23dedede" d="M0 0h8v8H0zM8 8h8v8H8z"/></svg>'
      }')`,
    [bgImage]
  )

  return (
    <div {...rest} className={styles['root']}>
      <div
        style={
          {
            '--position': '50%'
          } as React.CSSProperties
        }
        className={styles['inner']}
      >
        <div
          style={
            {
              width: '100%',
              '--bg-url': image
            } as React.CSSProperties
          }
        >
          <img alt="before" src={before} className={styles['before']} />
          <img alt="after" src={after} className={styles['after']} />
        </div>
        <input
          min="0"
          max="100"
          type="range"
          className={styles['control']}
          onInput={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            target.parentElement?.style.setProperty(
              '--position',
              target.value + '%'
            )
          }
        />
        <div className={styles['divider']} />
        <div className={styles['icon']}>
          <Icon>arrow_range</Icon>
        </div>
      </div>
    </div>
  )
}

export { BeforeAfter }
