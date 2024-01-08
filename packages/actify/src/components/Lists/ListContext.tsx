'use client'
import { createContext } from 'react'
import { type Transition } from 'framer-motion'

const ListContext = createContext({
  layoutId: '',
  transition: undefined as undefined | Transition
})

export { ListContext }
