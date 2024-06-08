import React from 'react'
import clsx from 'clsx'
import styles from './actify.module.css'

interface IconProps extends React.ComponentProps<'span'> {}
const Icon = ({ className, children, ...rest }: IconProps) => {
  return (
    <React.Suspense
      fallback={
        <span className={clsx(styles['icon'], className)}>
          <span className="block size-[var(--md-icon-size,24px)]" />
        </span>
      }
    >
      <link
        rel="stylesheet"
        precedence="default"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap"
      />
      <span {...rest} className={clsx(styles['icon'], className)}>
        <i aria-hidden="true">{children}</i>
      </span>
    </React.Suspense>
  )
}

Icon.displayName = 'Actify.Icon'

export { Icon }
