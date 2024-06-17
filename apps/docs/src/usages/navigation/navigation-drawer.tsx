import {
  Icon,
  IconButton,
  NavigationDrawer,
  Tooltip,
  TooltipGroup
} from 'actify'

export default () => {
  return (
    <div className="flex gap-2 items-center">
      <TooltipGroup>
        <NavigationDrawer placement="left">
          <NavigationDrawer.Activator>
            <Tooltip content="open from left">
              <IconButton>
                <Icon>dock_to_right</Icon>
              </IconButton>
            </Tooltip>
          </NavigationDrawer.Activator>
          <NavigationDrawer.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolore aliquid, voluptatibus sequi earum corporis cumque ab odio
            reiciendis eos possimus iure quidem molestias rem tempora itaque
            nihil maxime temporibus?
          </NavigationDrawer.Content>
        </NavigationDrawer>

        <NavigationDrawer placement="top">
          <NavigationDrawer.Activator>
            <Tooltip content="open from top">
              <IconButton>
                <Icon>toolbar</Icon>
              </IconButton>
            </Tooltip>
          </NavigationDrawer.Activator>
          <NavigationDrawer.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolore aliquid, voluptatibus sequi earum corporis cumque ab odio
            reiciendis eos possimus iure quidem molestias rem tempora itaque
            nihil maxime temporibus?
          </NavigationDrawer.Content>
        </NavigationDrawer>

        <NavigationDrawer placement="right">
          <NavigationDrawer.Activator>
            <Tooltip content="open from right">
              <IconButton>
                <Icon>dock_to_left</Icon>
              </IconButton>
            </Tooltip>
          </NavigationDrawer.Activator>
          <NavigationDrawer.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolore aliquid, voluptatibus sequi earum corporis cumque ab odio
            reiciendis eos possimus iure quidem molestias rem tempora itaque
            nihil maxime temporibus?
          </NavigationDrawer.Content>
        </NavigationDrawer>

        <NavigationDrawer placement="bottom">
          <NavigationDrawer.Activator>
            <Tooltip content="open from bottom">
              <IconButton>
                <Icon>dock_to_bottom</Icon>
              </IconButton>
            </Tooltip>
          </NavigationDrawer.Activator>
          <NavigationDrawer.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolore aliquid, voluptatibus sequi earum corporis cumque ab odio
            reiciendis eos possimus iure quidem molestias rem tempora itaque
            nihil maxime temporibus?
          </NavigationDrawer.Content>
        </NavigationDrawer>
      </TooltipGroup>
    </div>
  )
}
