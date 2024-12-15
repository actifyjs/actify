'use client'

import { Transition } from 'motion/react'
import { createContext } from 'react'

const ListContext = createContext({
  layoutId: '',
  transition: undefined as undefined | Transition
})

export { ListContext }
