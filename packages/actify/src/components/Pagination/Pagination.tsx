'use client'

import { Icon } from './../Icon'
import { IconButton } from './../Button'
import { PaginationNumber } from './PaginationNumber'
import React from 'react'
import { generatePagination } from './generatePagination'

interface PaginationProps extends React.ComponentProps<'nav'> {
  currentPage?: number
  totalPages?: number
  onPageChange?: (page: number) => void
}

const Pagination = (props: PaginationProps) => {
  const {
    currentPage = 1,
    totalPages = 1,
    onPageChange,
    className,
    ...rest
  } = props

  const allPages = generatePagination(currentPage, totalPages)

  return (
    <nav {...rest} className="bg-surface rounded-lg p-4 flex justify-center">
      <ul className="flex gap-4">
        <li>
          <IconButton
            disabled={currentPage <= 1}
            onClick={() => onPageChange?.(currentPage - 1)}
          >
            <Icon>chevron_left</Icon>
          </IconButton>
        </li>
        {allPages.map((page, index) => {
          let position: 'first' | 'last' | 'single' | 'middle' | undefined
          if (index == 0) position = 'first'
          if (index == allPages.length - 1) position = 'last'
          if (allPages.length == 1) position = 'single'
          if (page == '...') position = 'middle'

          return (
            <li key={index}>
              <PaginationNumber
                page={page}
                position={position}
                isActive={currentPage === page}
                onPageChange={onPageChange}
              />
            </li>
          )
        })}
        <li>
          <IconButton
            disabled={currentPage >= totalPages}
            onClick={() => onPageChange?.(currentPage + 1)}
          >
            <Icon>chevron_right</Icon>
          </IconButton>
        </li>
      </ul>
    </nav>
  )
}

export { Pagination }
