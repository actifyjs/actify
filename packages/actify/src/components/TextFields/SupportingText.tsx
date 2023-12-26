import React from 'react'

type SupportingTextProps = {
  supportingText?: string,
  color?: 'primary' | 'secondary' | 'tertiary' | 'error',
  disabled?: boolean,
} & React.HTMLAttributes<HTMLElement>

const SupportingText: React.FC<SupportingTextProps> = ({ supportingText, disabled, color }) => {
  const supportingTextClassName = disabled ? "text-on-surface" : color === "error" ? "text-error" : "text-on-surface-variant"

  return <p className={`text-xs mt-1 ms-3 ${supportingTextClassName}`}>{supportingText}</p>
}

export { SupportingText }
