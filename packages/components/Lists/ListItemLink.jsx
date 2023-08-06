import React, { forwardRef } from 'react'
import { NavLink } from 'react-router-dom'
import '@material/web/list/list-item'

const ListItemLink = forwardRef((props, ref) => {
  const { to, target, className, children, ...rest } = props

  return (
    <NavLink to={to} target={target} className={({ isActive }) => (isActive ? 'text-primary bg-black/10' : '')}>
      {/* <md-list-item ref={ref} class={className} {...rest} /> */}
      <div className="mb-1 pl-4 py-4 bg-[inherit] hover:bg-black/10 hover:dark:bg-white/10">{rest.headline}</div>
    </NavLink>
  )
})

ListItemLink.displayName = 'Actify.ListItemLink'

export default ListItemLink
