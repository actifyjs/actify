import React from 'react'

interface TextProps extends React.ComponentProps<'p'> {}

const Text = (props: TextProps) => {
  const { className, children, ...rest } = props
  return (
    <p {...rest} className={className}>
      {children}
    </p>
  )
}

Text.displayName = 'Actify.Text'

export { Text }
