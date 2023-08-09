import { useRef } from 'react'
import { Button, Menu, MenuItem } from 'actify'

export default () => {
  const menuRef = useRef()
  const anchorRef = useRef()
  const handleClick = () => {
    menuRef.current.anchor = anchorRef.current
    menuRef.current.show()
  }

  return (
    <>
      <Button ref={anchorRef} onClick={handleClick}>
        Open
      </Button>
      <Menu ref={menuRef} fixed>
        <MenuItem headline="menu1" />
        <MenuItem headline="menu2" />
        <MenuItem headline="menu3" />
      </Menu>
    </>
  )
}
