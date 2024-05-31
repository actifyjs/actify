'use client'

import { Transition } from 'framer-motion'
import { createContext } from 'react'

const ListContext = createContext({
  layoutId: '',
  transition: undefined as undefined | Transition
})

export { ListContext }
