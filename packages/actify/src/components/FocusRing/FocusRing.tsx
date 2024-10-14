import { CSSProperties } from 'react'
import clsx from 'clsx'
import styles from './focusring.module.css'

type FocusRingProps = {
  style?: CSSProperties
  className?: string
}
const FocusRing = ({ style, className }: FocusRingProps) => {
  return (
    <span style={style} className={clsx(styles['focus-ring'], className)} />
  )
}

FocusRing.displayName = 'Actify.FocusRing'

export { FocusRing }
