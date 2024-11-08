import { Icon } from '../Icon'
import clsx from 'clsx'
import styles from './trailingIcon.module.css'

export const TrailingIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Icon className={clsx(styles['trailing-icon'], isOpen && styles['open'])}>
      Arrow_Drop_Down
    </Icon>
  )
}
