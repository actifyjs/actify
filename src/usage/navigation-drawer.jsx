import { Icon, IconButton, Drawer } from 'actify'

export default () => {
  return (
    <div className="flex gap-2 items-center">
      <Drawer placement="left">
        <Drawer.Activator>
          <IconButton>
            <Icon name="panel-left-close" />
          </IconButton>
        </Drawer.Activator>
        <Drawer.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          dolore aliquid, voluptatibus sequi earum corporis cumque ab odio
          reiciendis eos possimus iure quidem molestias rem tempora itaque nihil
          maxime temporibus?
        </Drawer.Content>
      </Drawer>

      <Drawer placement="top">
        <Drawer.Activator>
          <IconButton>
            <Icon name="panel-top-close" />
          </IconButton>
        </Drawer.Activator>
        <Drawer.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          dolore aliquid, voluptatibus sequi earum corporis cumque ab odio
          reiciendis eos possimus iure quidem molestias rem tempora itaque nihil
          maxime temporibus?
        </Drawer.Content>
      </Drawer>

      <Drawer placement="right">
        <Drawer.Activator>
          <IconButton>
            <Icon name="panel-left-open" />
          </IconButton>
        </Drawer.Activator>
        <Drawer.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          dolore aliquid, voluptatibus sequi earum corporis cumque ab odio
          reiciendis eos possimus iure quidem molestias rem tempora itaque nihil
          maxime temporibus?
        </Drawer.Content>
      </Drawer>

      <Drawer placement="bottom">
        <Drawer.Activator>
          <IconButton>
            <Icon name="panel-bottom-close" />
          </IconButton>
        </Drawer.Activator>
        <Drawer.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          dolore aliquid, voluptatibus sequi earum corporis cumque ab odio
          reiciendis eos possimus iure quidem molestias rem tempora itaque nihil
          maxime temporibus?
        </Drawer.Content>
      </Drawer>
    </div>
  )
}
