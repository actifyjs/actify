import { IconButton, Drawer, Tooltip, TooltipGroup } from 'actify'
import {
  PanelTopClose,
  PanelLeftClose,
  PanelRightClose,
  PanelBottomClose
} from 'lucide-react'

export default () => {
  return (
    <div className="flex gap-2 items-center">
      <TooltipGroup>
        <Drawer placement="left">
          <Drawer.Activator>
            <Tooltip content="open from left">
              <IconButton>
                <PanelLeftClose />
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
                <PanelTopClose />
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
                <PanelRightClose />
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
                <PanelBottomClose />
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
