'use client'

import { Drawer, Icon, IconButton } from 'actify'

import Aside from '@/components/Aside'
import { useState } from 'react'

export default function AppDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer
      open={open}
      setOpen={setOpen}
      placement="left"
      className="overflow-hidden"
    >
      <Drawer.Activator className="md:hidden">
        <IconButton color="primary">
          <Icon>menu</Icon>
        </IconButton>
      </Drawer.Activator>
      <Drawer.Content className="w-60">
        <Aside open={open} />
      </Drawer.Content>
    </Drawer>
  )
}
