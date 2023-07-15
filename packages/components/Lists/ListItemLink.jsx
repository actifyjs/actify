import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import '@material/web/list/list-item'

const ListItemLink = forwardRef((props, ref) => {
  const { to, target, className, children, ...rest } = props

  return (
    <Link to={to} target={target}>
      <md-list-item ref={ref} class={className} {...rest} />
    </Link>
  )
})

ListItemLink.displayName = 'Actify.ListItemLink'

export default ListItemLink
