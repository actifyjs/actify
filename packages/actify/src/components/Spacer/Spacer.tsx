import React from 'react'

const Spacer = ({ style, className, ...rest }: React.ComponentProps<'div'>) => {
  return (
    <div {...rest} style={{ ...style, flex: '1 1 0%' }} className={className} />
  )
}

Spacer.displayName = 'Actify.Spacer'

export { Spacer }
