import { Icon, IconButton, Drawer, Tooltip } from 'actify'

export default () => {
  return (
    <div className="flex gap-2 items-center">
      <Drawer placement="left">
        <Drawer.Activator>
          <Tooltip>
            <Tooltip.Activator>
              <IconButton>
                <Icon name="panel-left-close" />
              </IconButton>
            </Tooltip.Activator>
            <Tooltip.Content>open from left</Tooltip.Content>
          </Tooltip>
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
          <Tooltip>
            <Tooltip.Activator>
              <IconButton>
                <Icon name="panel-top-close" />
              </IconButton>
            </Tooltip.Activator>
            <Tooltip.Content>open from top</Tooltip.Content>
          </Tooltip>
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
          <Tooltip>
            <Tooltip.Activator>
              <IconButton>
                <Icon name="panel-left-open" />
              </IconButton>
            </Tooltip.Activator>
            <Tooltip.Content>open from right</Tooltip.Content>
          </Tooltip>
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
          <Tooltip>
            <Tooltip.Activator>
              <IconButton>
                <Icon name="panel-bottom-close" />
              </IconButton>
            </Tooltip.Activator>
            <Tooltip.Content>open from bottom</Tooltip.Content>
          </Tooltip>
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
