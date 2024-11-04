'use client'

import { Button } from './../Button'

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
    <Button variant={isActive ? 'filled' : 'tonal'}>{page}</Button>
  ) : (
    <Button variant="tonal" onPress={() => onPageChange?.(page as number)}>
      {page}
    </Button>
  )
}

export { PaginationNumber }
