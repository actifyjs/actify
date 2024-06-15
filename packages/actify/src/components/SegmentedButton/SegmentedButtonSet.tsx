import React from 'react'

interface SegmentedButtonSetProps extends React.ComponentProps<'div'> {}
const SegmentedButtonSet = (props: SegmentedButtonSetProps) => {
  const { children, ...rest } = props

  return (
    <div {...rest} role="presentation">
      {children}
    </div>
  )
}

export { SegmentedButtonSet }
