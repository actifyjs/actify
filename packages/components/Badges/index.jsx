import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '@/packages/utils'
import { cva } from 'class-variance-authority'

const variants = {
  color: {
    primary: ' bg-primary',
    secondary: ' bg-secondary',
    accent: ' bg-accent',
    error: ' bg-error',
    info: ' bg-info',
    success: ' bg-success',
    warning: ' bg-warning'
  }
}
const defaultVariants = {
  color: 'error'
}

const dotVariants = cva('absolute right-1 top-1 z-50 h-[6px] w-[6px] rounded-full', {
  variants,
  defaultVariants
})

const contentVariants = cva(
  'absolute text-white -right-1 -top-1 z-50 max-h-4 w-fit overflow-hidden rounded-full bg-current px-1 text-[3px]',
  {
    variants,
    defaultVariants
  }
)

const Badge = (props) => {
  const { dot, color, content, children, className, ...rest } = props
  const number = isNaN(parseInt(content)) ? '' : parseInt(content)

  return (
    <div {...rest} className="relative w-fit">
      {children}
      {dot ? (
        <div className={cn(dotVariants({ color, className }))}></div>
      ) : (
        <div className={cn(contentVariants({ color, className }))}>{number > 999 ? '999+' : number}</div>
      )}
    </div>
  )
}

Badge.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOf(['primary', 'secondary', 'accent', 'error', 'info', 'success', 'warning'])
}

export default Badge
