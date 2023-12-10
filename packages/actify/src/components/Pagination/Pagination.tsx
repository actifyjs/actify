'use client'
import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { Button } from '@actify/Button'
import { generatePagination } from '@utils/index'
import { PaginationNumber } from '@actify/Pagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const variants = tv({
  base: 'bg-surface rounded-lg p-4 flex justify-center'
})

const buttonVariants = tv({
  base: 'p-2 w-10 rounded-lg'
})

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = forwardRef<HTMLDivElement, PaginationProps>((props, ref) => {
  const { currentPage, totalPages, onPageChange, style, className, ...rest } =
    props

  const allPages = generatePagination(currentPage, totalPages)

  return (
    <nav ref={ref} {...rest} className={variants({ className })}>
      <ul className="flex gap-4">
        <li>
          <Button
            className={buttonVariants()}
            disabled={currentPage <= 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <ChevronLeft />
          </Button>
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
          <Button
            className={buttonVariants()}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
          >
            <ChevronRight />
          </Button>
        </li>
      </ul>
    </nav>
  )
})

export default Pagination
