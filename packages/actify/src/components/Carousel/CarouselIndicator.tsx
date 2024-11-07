'use client'

import clsx from 'clsx'
import styles from './carousel-indicator.module.css'
import { useCarousel } from './CarouselContext'

const CarouselIndicator = () => {
  const { total, current, setCurrent } = useCarousel()

  return (
    <div className={styles['carousel-indicator']}>
      {[...Array(total)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrent?.(index)}
          className={clsx(
            styles['button'],
            index == current ? styles['active'] : styles['indicator']
          )}
        ></button>
      ))}
    </div>
  )
}

export { CarouselIndicator }
