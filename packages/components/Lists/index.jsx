import React, { forwardRef } from 'react'
import '@material/web/list/list'

const List = forwardRef((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <md-list ref={ref} {...rest} class={className}>
      {children}
    </md-list>
  )
})

List.displayName = 'Actify.List'

export default List
