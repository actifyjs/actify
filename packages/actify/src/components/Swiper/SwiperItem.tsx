import React from 'react'
import clsx from 'clsx'
import styles from './swiper.module.css'

const SwiperItem = (props: React.ComponentProps<'div'>) => {
  const { className, children, ...rest } = props
  return (
    <div {...rest} className={clsx(styles['item'], className)}>
      {children}
    </div>
  )
}

export { SwiperItem }
