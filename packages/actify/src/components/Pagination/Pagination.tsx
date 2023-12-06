'use client'
import React, { forwardRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@actify/Button'
import { tv } from 'tailwind-variants'

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

  const pagination = () => {
    const delta = 2
    const left = currentPage - delta
    const right = currentPage + delta + 1
    const range = []
    const rangeWithDots = []
    let l = null

    for (let i = 1; i <= totalPages; i++) {
      if (i == 1 || i == totalPages || (i >= left && i < right)) {
        range.push(i)
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1)
        } else if (i - l !== 1) {
          rangeWithDots.push('...')
        }
      }
      rangeWithDots.push(i)
      l = i
    }

    return rangeWithDots
  }

  return (
    <nav ref={ref} {...rest} className={variants({ className })}>
      <ul className="flex gap-4">
        <li>
          <Button
            className={buttonVariants()}
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft />
          </Button>
        </li>
        {pagination().map((page) => (
          <li key={page}>
            {page == '...' ? (
              <Button disabled className={buttonVariants()}>
                {page}
              </Button>
            ) : (
              <Button
                className={buttonVariants()}
                onClick={() => onPageChange(page)}
                variant={currentPage === page ? 'filled' : 'tonal'}
              >
                {page}
              </Button>
            )}
          </li>
        ))}
        <li>
          <Button
            className={buttonVariants()}
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight />
          </Button>
        </li>
      </ul>
    </nav>
  )
})

export default Pagination
