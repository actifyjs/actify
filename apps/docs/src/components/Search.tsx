import { Button } from 'actify'
import { Search } from 'lucide-react'
import { createPortal } from 'react-dom'
import { useRef, useState, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react'

import '@docsearch/css'

type DocSearchProps = {
  appId: string
  apiKey: string
  indexName: string
}

const DocSearch = ({ appId, apiKey, indexName }: DocSearchProps) => {
  const navigate = useNavigate()
  const searchButtonRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [initialQuery, setInitialQuery] = useState('')

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const onInput = useCallback(
    (event: any) => {
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
        <Search />
        <span className="font-semibold hidden sm:inline">Search</span>
        <span className="hidden md:block text-xs border border-outline p-1.5 rounded-full">
          {
            // @ts-expect-error
            navigator?.userAgentData?.platform == 'Windows' ||
            navigator?.platform == 'Win32'
              ? 'Ctrl'
              : '⌘'
          }
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

export default DocSearch
