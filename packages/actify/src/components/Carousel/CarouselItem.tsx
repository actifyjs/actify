import React from 'react'

const CrouselItem = (props: React.ComponentProps<'div'>) => {
  const { className, children, ...rest } = props

  return (
    <div {...rest} className={className}>
      {children}
    </div>
  )
}

export { CrouselItem }
