'use client'

import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps
} from 'react-aria-components'

import styles from './filled-field.module.css'

interface ButtonProps extends AriaButtonProps {
  ref?: React.RefObject<HTMLButtonElement | null>
}
const FilledField = (props: ButtonProps) => {
  const { ref, children } = props

  return (
    <div className={styles['filled-field']}>
      {/* field */}
      <div className={styles['field']}>
        {/* container-overflow */}
        <div className={styles['container-overflow']}>
          <AriaButton ref={ref} {...props} className={styles['trigger-button']}>
            <>{children}</>
          </AriaButton>

          {/* background */}
          <span className={styles['background']} />
          {/* state-layer */}
          <span className={styles['state-layer']} />
          {/* active-indicator */}
          <span className={styles['active-indicator']} />
        </div>
      </div>
    </div>
  )
}

export { FilledField }
