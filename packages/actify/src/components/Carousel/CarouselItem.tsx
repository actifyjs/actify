import React from 'react'

const CarouselItem = (props: React.ComponentProps<'div'>) => {
  const { className, children, ...rest } = props

  return (
    <div {...rest} className={className}>
      {children}
    </div>
  )
}

export { CarouselItem }
