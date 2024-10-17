import { mergeProps, useFocusRing, useTab } from 'react-aria'

import { FocusRing } from './../FocusRing'
import React from 'react'
import { Ripple } from './../Ripple'
import styles from './tabs.module.css'

export function Tab({ item, state }: any) {
  const ref = React.useRef(null)
  const { tabProps } = useTab(item, state, ref)
  const { focusProps, isFocusVisible } = useFocusRing()

  return (
    <div
      ref={ref}
      className={styles['tab-item']}
      {...mergeProps(tabProps, focusProps)}
    >
      {item.rendered}
      <Ripple />
      {isFocusVisible && <FocusRing />}
    </div>
  )
}
