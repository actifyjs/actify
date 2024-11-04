import { CSSProperties } from 'react'
import clsx from 'clsx'
import styles from './focusring.module.css'

type FocusRingProps = {
  style?: CSSProperties
  className?: string
  as?: keyof HTMLElementTagNameMap | React.ElementType
}

const FocusRing = ({ as: As = 'span', style, className }: FocusRingProps) => {
  return <As style={style} className={clsx(styles['focus-ring'], className)} />
}

FocusRing.displayName = 'Actify.FocusRing'

export { FocusRing }
