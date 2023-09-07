import React from 'react'
import { Elevation } from 'actify'

const BottomAppBar = (props) => {
  const { children } = props
  const icons = children.find((child) => child.key === 'icons')
  const fab = children.find((child) => child.key === 'fab')

  return (
    <div className="relative flex h-20 items-center justify-between bg-primary px-4">
      <div className="[&>i]:cursor-pointer [&>i]:p-3 grow place-items-center grid grid-cols-[repeat(auto-fill,minmax(48px,1fr))]">
        {icons}
      </div>
      {fab}
      <Elevation level={2} />
    </div>
  )
}

BottomAppBar.displayName = 'Actify.BottomAppBar'

export default BottomAppBar
