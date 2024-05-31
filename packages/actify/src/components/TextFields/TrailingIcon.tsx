import React from 'react'

const TrailingIcon = ({
  className,
  children,
  ...rest
}: React.ComponentProps<'div'>) => {
  return (
    <div
      {...rest}
      style={{
        display: 'flex',
        height: '100%',
        minWidth: '40px',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {children}
    </div>
  )
}

TrailingIcon.displayName = 'TrailingIcon'

export { TrailingIcon }
