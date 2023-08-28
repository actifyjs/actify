import React from 'react'
import { NavLink } from 'react-router-dom'

const ItemLink = (props) => {
  const { to, target, className, children, ...rest } = props

  return (
    <NavLink
      to={to}
      {...rest}
      target={target}
      className={({ isActive }) => (isActive ? 'text-primary bg-black/10' : '')}
    >
      <div className="mb-1 pl-4 py-4 bg-[inherit] hover:bg-black/10 hover:dark:bg-white/10">
        {children}
      </div>
    </NavLink>
  )
}

export default ItemLink
