'use client'

import { Icon, IconButton, NavigationDrawer } from 'actify'

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
      <NavigationDrawer.Activator className="md:hidden">
        <IconButton color="primary">
          <Icon>menu</Icon>
        </IconButton>
      </NavigationDrawer.Activator>
      <NavigationDrawer.Content className="w-60">
        <Aside open={open} />
      </NavigationDrawer.Content>
    </NavigationDrawer>
  )
}
