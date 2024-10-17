import { AriaTabPanelProps, useTabPanel } from 'react-aria'

import React from 'react'
import { TabListState } from 'react-stately'

interface TabPanelProps<T> extends AriaTabPanelProps {
  state: TabListState<T>
}
const TabPanel = <T extends object>({ state, ...props }: TabPanelProps<T>) => {
  const ref = React.useRef(null)
  const { tabPanelProps } = useTabPanel(props, state, ref)

  return (
    <div role="tabpanel" {...tabPanelProps} ref={ref}>
      {state.selectedItem?.props.children}
    </div>
  )
}

export { TabPanel }
