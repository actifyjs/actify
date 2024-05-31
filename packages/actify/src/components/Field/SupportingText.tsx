import React from 'react'

export interface SupportingTextProps {
  max?: number
  count?: number
  error?: boolean
  errorText?: string
  supportingText?: string
  refreshErrorAlert?: boolean
}
const SupportingText = ({
  max = -1,
  count = -1,
  error,
  errorText,
  supportingText,
  refreshErrorAlert
}: SupportingTextProps) => {
  const shouldErrorAnnounce = error && errorText && !refreshErrorAlert
  const role = shouldErrorAnnounce ? 'alert' : ''

  const counterText = () => {
    if (count < 0 || max <= 0) {
      return ''
    }
    return `${count} / ${max}`
  }

  const supportingOrErrorText = () => {
    return error && errorText ? errorText : supportingText
  }

  return (
    <React.Fragment>
      <div role={role} className="a-supporting-text">
        <span>{supportingOrErrorText()}</span>
        <span className="a-counter">{counterText()}</span>
      </div>
      <div hidden id="description">
        {`${supportingOrErrorText()} ${counterText()}`}
      </div>
    </React.Fragment>
  )
}

export { SupportingText }
