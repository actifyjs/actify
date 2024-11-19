'use client'

import { Text as AriaText, TextProps } from 'react-aria-components'

const Text = (props: TextProps) => {
  return <AriaText {...props} />
}

Text.displayName = 'Actify.Text'

export { Text }
