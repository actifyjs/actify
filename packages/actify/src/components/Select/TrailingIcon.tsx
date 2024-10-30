import clsx from 'clsx'
import styles from './trailingIcon.module.css'

export const TrailingIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <span className={styles['trailing-icon']}>
      <svg height="5" viewBox="7 10 10 5" focusable="false">
        <polygon
          className={clsx(styles['down'], isOpen && styles['open'])}
          stroke="none"
          fillRule="evenodd"
          points="7 10 12 15 17 10"
        />
        <polygon
          className={clsx(styles['up'], isOpen && styles['open'])}
          stroke="none"
          fillRule="evenodd"
          points="7 15 12 10 17 15"
        />
      </svg>
    </span>
  )
}
