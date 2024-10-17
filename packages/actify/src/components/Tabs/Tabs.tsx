'use client'

import React, { useEffect, useState } from 'react'
import { mergeProps, useFocusRing, useTabList, useTabPanel } from 'react-aria'

import { Tab } from './Tab'
import clsx from 'clsx'
import styles from './tabs.module.css'
import { useTabListState } from 'react-stately'

export function Tabs(props: any) {
  const state = useTabListState(props)
  const ref = React.useRef<HTMLDivElement>(null)
  const { tabListProps } = useTabList(props, state, ref)

  const [activeTabStyle, setActiveTabStyle] = useState({
    width: 0,
    transform: 'translateX(0)'
  })

  useEffect(() => {
    const activeTab = ref?.current?.querySelector(
      '[role="tab"][aria-selected="true"]'
    ) as HTMLDivElement
    setActiveTabStyle({
      width: activeTab?.offsetWidth,
      transform: `translateX(${activeTab?.offsetLeft}px)`
    })
  }, [state.selectedKey])

  const { focusProps, isFocusVisible } = useFocusRing({
    within: true
  })

  return (
    <nav style={props.style} className={clsx(styles['tabs'], props.className)}>
      <div className={styles['tab']}>
        <div
          style={{ ...activeTabStyle }}
          className={clsx(styles['tab-selection'], isFocusVisible && 'focused')}
        />
        <div
          ref={ref}
          className={styles['tab-list']}
          {...mergeProps(tabListProps, focusProps)}
        >
          {[...state.collection].map((item) => (
            <Tab key={item.key} item={item} state={state} />
          ))}
        </div>
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </nav>
  )
}

function TabPanel({ state, ...props }: any) {
  const ref = React.useRef(null)
  const { tabPanelProps } = useTabPanel(props, state, ref)

  return (
    <div role="tabpanel" {...tabPanelProps} ref={ref}>
      {state.selectedItem?.props.children}
    </div>
  )
}
