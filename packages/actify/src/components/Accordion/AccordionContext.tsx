'use client'
import React, { createContext, useContext } from 'react'

export type AccordionProps = {
  multiple?: boolean
  open?: Array<boolean | undefined>
  setOpen?: (value: boolean[] | undefined) => void
}

const AccordionContext = createContext<AccordionProps>({})

interface AccordionProviderProps
  extends React.PropsWithChildren<AccordionProps> {}

export const AccordionProvider = ({
  children,
  ...props
}: AccordionProviderProps) => {
  return (
    <AccordionContext.Provider value={{ ...props }}>
      {children}
    </AccordionContext.Provider>
  )
}

export const useAccordion = () => {
  const context = useContext(AccordionContext)
  if (context == null) {
    throw new Error('Accordion components must be wrapped in <Accordion />')
  }
  return context
}
