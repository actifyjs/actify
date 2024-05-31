import React from 'react'

interface SupportingTextProps extends React.ComponentProps<'p'> {
  disabled?: boolean
  supportingText?: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const SupportingText = ({
  color,
  disabled,
  supportingText
}: SupportingTextProps) => {
  const supportingTextClassName = disabled
    ? 'text-on-surface'
    : color === 'error'
      ? 'text-error'
      : 'text-on-surface-variant'

  return (
    <p className={`text-xs mt-1 ms-3 ${supportingTextClassName}`}>
      {supportingText}
    </p>
  )
}

export { SupportingText }
