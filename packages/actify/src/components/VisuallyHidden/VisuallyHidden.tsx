import './visually-hidden.css'

import React from 'react'

interface CompProps {
  as: keyof JSX.IntrinsicElements
}
const VisuallyHidden: React.FC<
  CompProps & React.HTMLAttributes<HTMLOrSVGElement>
> = ({ as: Tag = 'span', ...rest }) => {
  return <Tag className="a-visually-hidden" {...rest} />
}

export { VisuallyHidden }
