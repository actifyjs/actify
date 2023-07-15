import { useRef } from 'react'
import Code from '@/packages/components/Code'
import Menu from '@/packages/components/Menus'
import Button from '@/packages/components/Button'
import MenuItem from '@/packages/components/Menus/MenuItem'

const codeBlock = `
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
`

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
      <div className="mt-4">
        <Code code={codeBlock} language="jsx" />
      </div>
    </>
  )
}
