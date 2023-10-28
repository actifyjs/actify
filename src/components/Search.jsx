import { useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Button, Icon } from 'actify'
import { Link, useNavigate } from 'react-router-dom'
import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react'

import '@docsearch/css'

const Hit = ({ hit }) => {
  const to = hit.url.replace('https://actifyjs.com', '')
  return (
    <Link to={to}>
      <div className="DocSearch-Hit-Container">
        <div className="DocSearch-Hit-icon">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <g
              fill="none"
              stroke="currentColor"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" />
              <path d="M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" />
            </g>
          </svg>
        </div>
        <div className="DocSearch-Hit-content-wrapper">
          <span className="DocSearch-Hit-title">{hit.hierarchy.lvl1}</span>
          <span className="DocSearch-Hit-path"></span>
        </div>
        <div className="DocSearch-Hit-action">
          <button
            type="submit"
            title="Save this search"
            className="DocSearch-Hit-action-button"
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinejoin="round"
                d="M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z"
              />
            </svg>
          </button>
        </div>
        <div className="DocSearch-Hit-action">
          <button
            type="submit"
            className="DocSearch-Hit-action-button"
            title="Remove this search from history"
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"
              />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  )
}

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
        className="px-1"
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
            hitComponent={({ hit }) => Hit({ hit })}
            navigator={{
              navigate({ itemUrl }) {
                navigate(itemUrl.replace('https://actifyjs.com', ''))
              }
            }}
          />,
          document.body
        )}
    </>
  )
}

export default Search
