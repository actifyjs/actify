import { AriaTabProps, mergeProps, useFocusRing, useTab } from 'react-aria'
import { Node, TabListState } from 'react-stately'

import { FocusRing } from './../FocusRing'
import React from 'react'
import { Ripple } from './../Ripple'
import styles from './tabs.module.css'

interface TabProps<T> extends AriaTabProps {
  item: Node<T>
  state: TabListState<T>
}

const Tab = <T extends object>({ item, state }: TabProps<T>) => {
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

export { Tab }
