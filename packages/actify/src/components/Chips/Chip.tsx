import { AriaTagProps, useFocusRing, useTag } from 'react-aria'

import { FocusRing } from '../FocusRing'
import { Icon } from '../Icon'
import { IconButton } from './../Buttons'
import { ListState } from 'react-stately'
import React from 'react'
import { Ripple } from '../Ripple'
import clsx from 'clsx'
import styles from './chip.module.css'

interface ChipProps<T> extends AriaTagProps<T> {
  state: ListState<T>
}

const Chip = <T extends object>(props: ChipProps<T>) => {
  let { item, state } = props
  let ref = React.useRef(null)
  let { focusProps, isFocusVisible } = useFocusRing({ within: true })
  let { rowProps, gridCellProps, removeButtonProps, allowsRemoving } = useTag(
    props,
    state,
    ref
  )

  return (
    <div
      ref={ref}
      {...rowProps}
      {...focusProps}
      className={styles['chip']}
      data-focus-visible={isFocusVisible}
    >
      <div
        {...gridCellProps}
        className={clsx(
          styles['cell'],
          allowsRemoving && styles['has-trailing']
        )}
      >
        {/* outline */}
        <span className={styles['outline']} />
        {/* focus ring */}
        {isFocusVisible && <FocusRing />}
        {/* ripple */}
        <Ripple />
        {/* leading icon */}
        <span className={styles['leading-icon']}>
          <Icon
            style={
              { '--md-icon-size': 'var(--_icon-size)' } as React.CSSProperties
            }
          >
            check
          </Icon>
        </span>
        <span className={styles['label']}>{item.rendered}</span>
        {allowsRemoving && (
          <IconButton {...removeButtonProps}>
            <Icon
              style={
                { '--md-icon-size': 'var(--_icon-size)' } as React.CSSProperties
              }
            >
              close
            </Icon>
          </IconButton>
        )}
      </div>
    </div>
  )
}

export { Chip }
