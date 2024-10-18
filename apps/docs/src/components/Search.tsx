'use client'

import '@docsearch/css'

import { Button, Icon } from 'actify'
import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react'
import { useCallback, useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import { createPortal } from 'react-dom'

type DocSearchProps = {
  appId: string
  apiKey: string
  indexName: string
}

const DocSearch = ({ appId, apiKey, indexName }: DocSearchProps) => {
  const searchButtonRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [navigator, setNavigator] = useState<Navigator>()
  const [initialQuery, setInitialQuery] = useState('')

  useEffect(() => {
    setNavigator(window.navigator)
  }, [])

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
    // @ts-expect-error
    searchButtonRef
  })

  return (
    <>
      <style>
        {`
        :root{
          --docsearch-primary-color: rgb(var(--md-sys-color-primary));
        }
        .DocSearch-Modal{
          --docsearch-modal-background: rgb(var(--md-sys-color-surface));
          --docsearch-hit-active-color: rgb(var(--md-sys-color-on-primary));
          --docsearch-footer-background: rgb(var(--md-sys-color-surface-container));
        }
        `}
      </style>
      <Button
        variant="text"
        onPress={onOpen}
        ref={searchButtonRef}
        className="ml-0 md:ml-2 lg:ml-4"
      >
        <Icon>search</Icon>
        <span className="font-semibold hidden sm:inline">Search</span>
        <span className="hidden md:block text-xs border border-outline p-1.5 rounded-full">
          {navigator?.platform == 'Windows' || navigator?.platform == 'Win32'
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
              <Link href={hit.url}>
                <>{children}</>
              </Link>
            )}
          />,
          document.body
        )}
    </>
  )
}

export default DocSearch
