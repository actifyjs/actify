import { AriaTabPanelProps, useTabPanel } from 'react-aria'

import React from 'react'
import { TabListState } from 'react-stately'
import styles from './tabs.module.css'

interface TabPanelProps<T> extends AriaTabPanelProps {
  state: TabListState<T>
}
const TabPanel = <T extends object>({ state, ...props }: TabPanelProps<T>) => {
  const ref = React.useRef(null)
  const { tabPanelProps } = useTabPanel(props, state, ref)

  return (
    <div
      ref={ref}
      role="tabpanel"
      {...tabPanelProps}
      className={styles['tabpanel']}
    >
      {state.selectedItem?.props.children}
    </div>
  )
}

export { TabPanel }
