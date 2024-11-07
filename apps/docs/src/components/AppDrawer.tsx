'use client'

import {
  DrawerActivator,
  DrawerContent,
  Icon,
  IconButton,
  NavigationDrawer
} from 'actify'

import Aside from '@/components/Aside'
import { useState } from 'react'

export default function AppDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <NavigationDrawer
      open={open}
      setOpen={setOpen}
      placement="left"
      className="overflow-hidden"
    >
      <DrawerActivator asChild className="md:hidden">
        <IconButton color="primary">
          <Icon>menu</Icon>
        </IconButton>
      </DrawerActivator>
      <DrawerContent style={{ width: '15rem' }}>
        <Aside open={open} />
      </DrawerContent>
    </NavigationDrawer>
  )
}
