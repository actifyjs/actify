'use client'
import { createContext } from 'react'

type AccordionContextProps = {
  multiple?: boolean
  open?: Array<boolean | undefined>
  setOpen?: (value: boolean[] | undefined) => void
}

const AccordionContext = createContext<AccordionContextProps>({})

export { AccordionContext, type AccordionContextProps }
