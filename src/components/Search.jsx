import { useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Button, Icon } from 'actify'
import { Link, useNavigate } from 'react-router-dom'
import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react'

import '@docsearch/css'

const Search = ({ appId, apiKey, indexName }) => {
  const navigate = useNavigate()
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
        className="ml-0 md:ml-2 lg:ml-4"
        variant="text"
        onClick={onOpen}
        ref={searchButtonRef}
      >
        <Icon name="search" />
        <span className="font-semibold">Search</span>
        <span className="hidden md:block text-xs border border-outline p-1.5 rounded-full">
          {navigator?.userAgentData?.platform == 'Windows' ||
          navigator?.platform == 'Win32'
            ? 'Ctrl'
            : '⌘'}
          +K
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
            hitComponent={({ hit, children }) => (
              <Link to={hit.url}>{children}</Link>
            )}
            navigator={{
              navigate({ itemUrl }) {
                navigate(itemUrl)
              }
            }}
          />,
          document.body
        )}
    </>
  )
}

export default Search
