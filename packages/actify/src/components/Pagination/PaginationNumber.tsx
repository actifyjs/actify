'use client'
import { tv } from 'tailwind-variants'
import { Button } from '@actify/Button'

const buttonVariants = tv({
  base: 'p-2 w-10 rounded-lg'
})

const PaginationNumber = ({
  page,
  isActive,
  position,
  onPageChange
}: {
  isActive: boolean
  page: number | string
  onPageChange?: (_: number) => void
  position?: 'first' | 'last' | 'middle' | 'single'
}) => {
  return isActive || position === 'middle' ? (
    <Button
      className={buttonVariants()}
      variant={isActive ? 'filled' : 'tonal'}
    >
      {page}
    </Button>
  ) : (
    <Button
      variant="tonal"
      onClick={() => onPageChange?.(page as number)}
      className={buttonVariants()}
    >
      {page}
    </Button>
  )
}

export default PaginationNumber
