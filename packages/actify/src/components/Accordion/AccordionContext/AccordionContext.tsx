'use client'
import { createContext } from 'react'

const AccordionContext = createContext({
  open: [false],
  multiple: false,
  setOpen: (T: boolean[]) => undefined
})

export { AccordionContext }
