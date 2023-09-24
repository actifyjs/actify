import React, { useState } from 'react'
import CloseButton from './CloseButton'
import { add, remove } from './array-utils'
import { motion, AnimatePresence } from 'framer-motion'

const SnackbarRoot = ({ message, children }) => {
  const [notifications, setNotifications] = useState([0])

  return (
    <div className="container">
      <ul className="fixed z-50 flex flex-col gap-2 w-full max-w-xs right-4 bottom-4">
        <AnimatePresence initial={false}>
          {notifications.map((id) => (
            <motion.li
              key={id}
              positionTransition
              animate={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              className="p-2 flex gap-2 bg-secondary rounded"
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            >
              <CloseButton
                close={() => setNotifications(remove(notifications, id))}
              />
              <p>{message}</p>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <div onClick={() => setNotifications(add(notifications))}>{children}</div>
    </div>
  )
}

export const Snackbar = Object.assign(SnackbarRoot, {
  Activator: () => <></>
})
