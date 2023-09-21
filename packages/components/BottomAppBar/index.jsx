import React from 'react'
import { Elevation } from 'actify'

const BottomAppBar = ({ children }) => {
  const childrenArray = React.Children.toArray(children)

  const icons = childrenArray.find((child) => child?.props?.name == 'icons')
  const fab = childrenArray.find((child) => child?.props?.name == 'fab')

  return (
    <div className="relative flex h-20 items-center justify-between bg-primary px-4">
      <div className="[&>i]:cursor-pointer [&>i]:p-3 grow place-items-center grid grid-cols-[repeat(auto-fill,minmax(48px,1fr))]">
        {icons.props.children}
      </div>
      {fab.props.children}
      <Elevation level={2} />
    </div>
  )
}

BottomAppBar.Slot = () => <></>

BottomAppBar.displayName = 'Actify.BottomAppBar'

export default BottomAppBar
