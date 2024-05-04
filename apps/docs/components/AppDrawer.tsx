'use client'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import Aside from '@/components/Aside'
import { Drawer, IconButton } from 'actify'

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
          <Menu />
        </IconButton>
      </Drawer.Activator>
      <Drawer.Content className="w-60">
        <Aside open={open} />
      </Drawer.Content>
    </Drawer>
  )
}
