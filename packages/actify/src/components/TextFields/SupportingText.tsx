import React from 'react'

type SupportingTextProps = {
  supportingText?: string
} & React.HTMLAttributes<HTMLElement>

const SupportingText: React.FC<SupportingTextProps> = ({ supportingText }) => {
  return <p className="text-xs mt-1 ms-3">{supportingText}</p>
}

export { SupportingText }
