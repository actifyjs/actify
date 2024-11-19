import { AriaListBoxOptions, useListBox } from 'react-aria'

import { ListBoxOption } from './ListBoxOption'
import { ListState } from 'react-stately'
import React from 'react'
import styles from './listbox.module.css'

interface ListBoxProps<T> extends AriaListBoxOptions<T> {
  state: ListState<T>
  listBoxProps?: AriaListBoxOptions<T>
  listBoxRef?: React.RefObject<HTMLElement | null>
}

const ListBox = <T extends object>(props: ListBoxProps<T>) => {
  const ref = React.useRef(null)
  const { listBoxRef = ref, state } = props
  const { listBoxProps } = useListBox(props, state, listBoxRef)

  return (
    <ul
      {...listBoxProps}
      className={styles['items']}
      ref={listBoxRef as React.RefObject<HTMLUListElement>}
    >
      {[...state.collection].map((item) => (
        <ListBoxOption key={item.key} item={item} state={state} />
      ))}
    </ul>
  )
}

export { ListBox }
