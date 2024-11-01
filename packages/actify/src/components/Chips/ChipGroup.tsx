import type { AriaTagGroupProps } from 'react-aria'
import { Chip } from './Chip'
import { Label } from '../Label'
import React from 'react'
import styles from './chip-group.module.css'
import { useListState } from 'react-stately'
import { useTagGroup } from 'react-aria'

const ChipGroup = <T extends object>(props: AriaTagGroupProps<T>) => {
  const { label, description, errorMessage } = props
  const ref = React.useRef(null)

  const state = useListState(props)
  const { gridProps, labelProps, descriptionProps, errorMessageProps } =
    useTagGroup(props, state, ref)

  return (
    <div className={styles['chip-group']}>
      <Label {...labelProps}>{label}</Label>
      <div {...gridProps} ref={ref}>
        {[...state.collection].map((item) => (
          <Chip key={item.key} item={item} state={state} />
        ))}
      </div>
      {description && (
        <div {...descriptionProps} className="description">
          {description}
        </div>
      )}
      {errorMessage && (
        <div {...errorMessageProps} className="error-message">
          {errorMessage}
        </div>
      )}
    </div>
  )
}

export { ChipGroup }
