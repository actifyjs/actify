import { createContext } from 'react'

const AccordionContext = createContext({
  multiple: false,
  open: [],
  setOpen: () => {}
})

export { AccordionContext }
