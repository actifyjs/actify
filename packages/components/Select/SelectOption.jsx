import React from 'react'
import { useListItem } from '@floating-ui/react'
import { useSelectContext } from './SelectContext'

const SelectOption = ({ children }) => {
  const { activeIndex, selectedIndex, getItemProps, handleSelect } =
    useSelectContext()

  const { ref, index } = useListItem()

  const isActive = activeIndex === index
  const isSelected = selectedIndex === index

  return (
    <button
      ref={ref}
      role="option"
      aria-selected={isActive && isSelected}
      tabIndex={isActive ? 0 : -1}
      className={`rounded ${isActive ? 'bg-secondary' : ''} ${
        isSelected ? 'bg-secondary/25' : ''
      }`}
      {...getItemProps({
        onClick: () => handleSelect(index)
      })}
    >
      {children}
    </button>
  )
}

SelectOption.displayName = 'Actify.SelectOption'

export default SelectOption
