import { Button, Menu, MenuItem } from 'actify'

export default () => {
  return (
    <div className="relative">
      <Button
        id="usage-anchor"
        onClick={() => {
          const menuEl = document.body.querySelector('#usage-menu')
          // @ts-ignore
          menuEl.open = !menuEl.open
        }}
      >
        Open Menu with idref
      </Button>
      <Menu yOffset={25} id="usage-menu" anchor="usage-anchor">
        <MenuItem>
          <div slot="headline">React</div>
        </MenuItem>
        <MenuItem>
          <div slot="headline">Actify</div>
        </MenuItem>
      </Menu>
    </div>
  )
}
