import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'actify'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'bg-surface rounded-lg p-4 flex justify-center'
})

const buttonVariants = tv({
  base: 'p-2 w-10 rounded-lg'
})

const Pagination = forwardRef((props, ref) => {
  const { currentPage, totalPages, onPageChange, style, className, ...rest } =
    props

  const pagination = () => {
    let delta = 2,
      left = currentPage - delta,
      right = currentPage + delta + 1,
      range = [],
      rangeWithDots = [],
      l

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
            <Icon name="chevron-left" />
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
            <Icon name="chevron-right" />
          </Button>
        </li>
      </ul>
    </nav>
  )
})

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
}

export { Pagination }
