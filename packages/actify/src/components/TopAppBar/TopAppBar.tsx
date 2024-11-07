'use client'

import { Icon } from './../Icon'
import React from 'react'
import { Spacer } from './../Spacer'
import clsx from 'clsx'
import styles from './top-app-bar.module.css'

interface TopAppBarProps extends React.ComponentProps<'div'> {
  size?: 'default' | 'small' | 'medium' | 'large'
}

const TopAppBar = (props: TopAppBarProps) => {
  const { title, size = 'default', className, ...rest } = props
  return (
    <div {...rest} className={clsx(styles['root'], styles[`size-${size}`])}>
      <div className={styles['item']}>
        <div className={styles['item-inner']}>
          <div className={styles['wrapper']}>
            <div className={styles['icon']}>
              <Icon>menu</Icon>
            </div>
          </div>
        </div>
      </div>
      {size == 'medium' || size == 'large' ? (
        <Spacer />
      ) : (
        <div className={styles['title-small']}>{title}</div>
      )}
      <div className={styles['item']}>
        <div className={styles['item-inner']}>
          <div className={styles['wrapper']}>
            <div className={styles['icon']}>
              <Icon>person</Icon>
            </div>
          </div>
        </div>
      </div>

      {size == 'medium' || size == 'large' ? (
        <div className={styles['title-big']}>
          <div className={styles['title-big-inner']}>{title}</div>
        </div>
      ) : null}
    </div>
  )
}

TopAppBar.displayName = 'Actify.TopAppBar'

export { TopAppBar }
