import {
  DrawerActivator,
  DrawerContent,
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
          <DrawerActivator asChild>
            <IconButton>
              <Icon>dock_to_right</Icon>
            </IconButton>
          </DrawerActivator>
          <DrawerContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolore aliquid, voluptatibus sequi earum corporis cumque ab odio
            reiciendis eos possimus iure quidem molestias rem tempora itaque
            nihil maxime temporibus?
          </DrawerContent>
        </NavigationDrawer>

        <NavigationDrawer placement="top">
          <DrawerActivator asChild>
            <IconButton>
              <Icon>toolbar</Icon>
            </IconButton>
          </DrawerActivator>
          <DrawerContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolore aliquid, voluptatibus sequi earum corporis cumque ab odio
            reiciendis eos possimus iure quidem molestias rem tempora itaque
            nihil maxime temporibus?
          </DrawerContent>
        </NavigationDrawer>

        <NavigationDrawer placement="right">
          <DrawerActivator asChild>
            <IconButton>
              <Icon>dock_to_left</Icon>
            </IconButton>
          </DrawerActivator>
          <DrawerContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolore aliquid, voluptatibus sequi earum corporis cumque ab odio
            reiciendis eos possimus iure quidem molestias rem tempora itaque
            nihil maxime temporibus?
          </DrawerContent>
        </NavigationDrawer>

        <NavigationDrawer placement="bottom">
          <DrawerActivator asChild>
            <IconButton>
              <Icon>dock_to_bottom</Icon>
            </IconButton>
          </DrawerActivator>
          <DrawerContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolore aliquid, voluptatibus sequi earum corporis cumque ab odio
            reiciendis eos possimus iure quidem molestias rem tempora itaque
            nihil maxime temporibus?
          </DrawerContent>
        </NavigationDrawer>
      </TooltipGroup>
    </div>
  )
}
