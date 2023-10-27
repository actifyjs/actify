import { useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Button, Icon } from 'actify'
import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react'

import '@docsearch/css'

const Search = ({ appId, apiKey, indexName }) => {
  const searchButtonRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [initialQuery, setInitialQuery] = useState(null)

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const onInput = useCallback(
    (event) => {
      setIsOpen(true)
      setInitialQuery(event.key)
    },
    [setIsOpen, setInitialQuery]
  )

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef
  })

  return (
    <>
      <style>
        {`:root{--docsearch-primary-color: rgb(var(--color-primary));}`}
      </style>
      <Button
        className="px-1"
        variant="text"
        onClick={onOpen}
        ref={searchButtonRef}
      >
        <Icon name="search" />
        <span className="font-semibold">Search</span>
        <span className="hidden md:block text-xs border border-outline p-1.5 rounded-full">
          Ctrl+K
        </span>
      </Button>
      {isOpen &&
        createPortal(
          <DocSearchModal
            appId={appId}
            apiKey={apiKey}
            indexName={indexName}
            onClose={onClose}
            initialQuery={initialQuery}
            initialScrollY={window.scrollY}
            placeholder="Search Actify"
          />,
          document.body
        )}
    </>
  )
}

export default Search
