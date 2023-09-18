import React from 'react'
import {
  flip,
  useRole,
  useClick,
  autoUpdate,
  useDismiss,
  useFloating,
  FloatingList,
  useTypeahead,
  useInteractions,
  useListNavigation,
  FloatingFocusManager
} from '@floating-ui/react'

import { TextField } from 'actify'

const SelectContext = React.createContext()

const useSelect = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(null)
  const [selectedIndex, setSelectedIndex] = React.useState(null)
  const [selectedLabel, setSelectedLabel] = React.useState(null)
  const [selectedElement, setSelectedElement] = React.useState(null)

  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom-start',
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [flip()]
  })

  const labelsRef = React.useRef([])
  const elementsRef = React.useRef([])

  const handleSelect = React.useCallback((index) => {
    setSelectedIndex(index)
    setIsOpen(false)
    if (index !== null) {
      setSelectedElement(elementsRef.current[index])
      setSelectedLabel(labelsRef.current[index])
    }
  }, [])

  function handleTypeaheadMatch(index) {
    if (isOpen) {
      setActiveIndex(index)
    } else {
      handleSelect(index)
    }
  }

  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex
  })
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    onMatch: handleTypeaheadMatch
  })
  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'listbox' })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [listNav, typeahead, click, dismiss, role]
  )

  const selectContext = React.useMemo(
    () => ({
      activeIndex,
      selectedIndex,
      getItemProps,
      handleSelect
    }),
    [activeIndex, selectedIndex, getItemProps, handleSelect]
  )
  return {
    refs,
    isOpen,
    context,
    elementsRef,
    selectContext,
    selectedLabel,
    selectedElement,
    floatingStyles,
    getFloatingProps,
    getReferenceProps
  }
}

export const useSelectContext = () => {
  const context = React.useContext(SelectContext)
  if (context == null) {
    throw new Error('Select components must be wrapped in <Select />')
  }
  return context
}

export const SelectProvider = ({ children, ...options }) => {
  const {
    refs,
    isOpen,
    context,
    labelsRef,
    elementsRef,
    selectContext,
    selectedLabel,
    floatingStyles,
    selectedElement,
    getFloatingProps,
    getReferenceProps
  } = useSelect(options)

  return (
    <>
      <TextField
        tabIndex={0}
        ref={refs.setReference}
        {...getReferenceProps()}
        label={options.label}
        value={selectedElement ? selectedElement.innerText : ''}
      />
      <SelectContext.Provider value={selectContext}>
        {isOpen && (
          <FloatingFocusManager context={context} modal={false}>
            <ul
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
              className="flex flex-col mt-1 p-2 rounded shadow z-50 bg-surface"
            >
              <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                {children}
              </FloatingList>
            </ul>
          </FloatingFocusManager>
        )}
      </SelectContext.Provider>
    </>
  )
}
