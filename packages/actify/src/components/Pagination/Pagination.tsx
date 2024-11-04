'use client'

import { Button, IconButton } from './../Button'
import { Menu, MenuItem } from './../Menus'

import { Icon } from './../Icon'
import { PaginationNumber } from './PaginationNumber'
import React from 'react'
import { generatePagination } from './generatePagination'
import styles from './pagination.module.css'

export interface PaginationProps extends React.ComponentProps<'nav'> {
  currentPage?: number
  totalPages?: number
  pageSizes?: number[]
  onPageChange?: (page: number) => void
  selectedPageSize?: number
  setSelectedPageSize?: React.Dispatch<React.SetStateAction<number>>
}

const Pagination = (props: PaginationProps) => {
  const {
    pageSizes = [5, 10, 20],
    currentPage = 1,
    totalPages = 1,
    selectedPageSize,
    setSelectedPageSize,
    onPageChange,
    className,
    ...rest
  } = props

  const allPages = generatePagination(currentPage, totalPages)
  const handleAction = (key: string | number) => {
    setSelectedPageSize?.(key as number)
  }

  return (
    <nav {...rest} className={styles['pagination']}>
      <ul className={styles['ul']}>
        <li>
          <IconButton
            isDisabled={currentPage <= 1}
            onPress={() => onPageChange?.(currentPage - 1)}
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
            isDisabled={currentPage >= totalPages}
            onPress={() => onPageChange?.(currentPage + 1)}
          >
            <Icon>chevron_right</Icon>
          </IconButton>
        </li>
      </ul>
      {pageSizes ? (
        <div className={styles['page-size']}>
          <div className={styles['page-size-wrapper']}>
            <p className={styles['item-per-page']}>Items per page:</p>
            <Menu
              activator={(ref, menuTriggerProps) => (
                <Button
                  ref={ref}
                  style={{ margin: '0 .625rem' }}
                  {...menuTriggerProps}
                >
                  <div className="flex flex-row items-center">
                    <p className="text-md mr-2">{selectedPageSize}</p>
                    <Icon>arrow_drop_down</Icon>
                  </div>
                </Button>
              )}
              onAction={handleAction}
            >
              {pageSizes.map((page) => (
                <MenuItem key={page}>{page.toString()}</MenuItem>
              ))}
            </Menu>
            <span>
              {1 + (currentPage - 1) * selectedPageSize!} of{' '}
              {currentPage * selectedPageSize!}
            </span>
            <IconButton
              isDisabled={currentPage <= 1}
              onPress={() => onPageChange?.(currentPage - 1)}
            >
              <Icon>chevron_left</Icon>
            </IconButton>
            <IconButton
              isDisabled={currentPage >= totalPages}
              onPress={() => onPageChange?.(currentPage + 1)}
            >
              <Icon>chevron_right</Icon>
            </IconButton>
          </div>
        </div>
      ) : null}
    </nav>
  )
}

export { Pagination }
