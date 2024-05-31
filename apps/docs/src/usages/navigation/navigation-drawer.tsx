import { Drawer, Icon, IconButton, Tooltip, TooltipGroup } from 'actify'

export default () => {
  return (
    <div className="flex gap-2 items-center">
      <TooltipGroup>
        <Drawer placement="left">
          <Drawer.Activator>
            <Tooltip content="open from left">
              <IconButton>
                <Icon>dock_to_right</Icon>
              </IconButton>
            </Tooltip>
          </Drawer.Activator>
          <Drawer.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolore aliquid, voluptatibus sequi earum corporis cumque ab odio
            reiciendis eos possimus iure quidem molestias rem tempora itaque
            nihil maxime temporibus?
          </Drawer.Content>
        </Drawer>

        <Drawer placement="top">
          <Drawer.Activator>
            <Tooltip content="open from top">
              <IconButton>
                <Icon>toolbar</Icon>
              </IconButton>
            </Tooltip>
          </Drawer.Activator>
          <Drawer.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolore aliquid, voluptatibus sequi earum corporis cumque ab odio
            reiciendis eos possimus iure quidem molestias rem tempora itaque
            nihil maxime temporibus?
          </Drawer.Content>
        </Drawer>

        <Drawer placement="right">
          <Drawer.Activator>
            <Tooltip content="open from right">
              <IconButton>
                <Icon>dock_to_left</Icon>
              </IconButton>
            </Tooltip>
          </Drawer.Activator>
          <Drawer.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolore aliquid, voluptatibus sequi earum corporis cumque ab odio
            reiciendis eos possimus iure quidem molestias rem tempora itaque
            nihil maxime temporibus?
          </Drawer.Content>
        </Drawer>

        <Drawer placement="bottom">
          <Drawer.Activator>
            <Tooltip content="open from bottom">
              <IconButton>
                <Icon>dock_to_bottom</Icon>
              </IconButton>
            </Tooltip>
          </Drawer.Activator>
          <Drawer.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolore aliquid, voluptatibus sequi earum corporis cumque ab odio
            reiciendis eos possimus iure quidem molestias rem tempora itaque
            nihil maxime temporibus?
          </Drawer.Content>
        </Drawer>
      </TooltipGroup>
    </div>
  )
}
