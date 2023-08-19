import React from 'react'
import '@material/web/list/list-item'

const ListItem = React.forwardRef((props, ref) => {
  const { className, children, ...rest } = props

  return <md-list-item ref={ref} class={className} {...rest}></md-list-item>
})

ListItem.displayName = 'Actify.ListItem'

export default ListItem
