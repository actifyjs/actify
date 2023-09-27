import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Icon, IconButton } from 'actify'
import { motion, AnimatePresence } from 'framer-motion'

let id = 0

/**
 *
 * @param {number} timeout - default 3000
 * @param {string | JSX.Element | JSX.Element[] | () => JSX.Element} children
 * @returns {JSX.Element} JSX Element
 */
const SnackbarRoot = ({ timeout = 3000, children }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    children((msg) => {
      setItems((state) => [
        ...state,
        { key: id++, msg, duration: timeout / 1000 }
      ])
    })
  }, [])

  const remove = (e, key) => {
    e?.stopPropagation()
    setItems((state) =>
      state.filter((i) => {
        return i.key !== key
      })
    )
  }

  return (
    <ul className="fixed z-50 bottom-8 mx-auto left-8 right-8 flex flex-col gap-2 pointer-events-none items-center md:items-end">
      <AnimatePresence initial={false}>
        {items.map((item) => (
          <motion.li
            key={item.key}
            positionTransition
            animate={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            className="relative overflow-hidden w-full md:w-80"
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          >
            <div className="z-40 bg-inverse-surface rounded flex items-center justify-between">
              <motion.div
                animate={{ width: '100%' }}
                transition={{
                  duration: item.duration
                }}
                onAnimationComplete={() => remove(null, item.key)}
                className="h-1 rounded-b absolute bottom-0 left-0 bg-[linear-gradient(130deg,#00b4e6,#00f0e0)]"
              />
              <p className="pl-4">{item.msg}</p>
              <IconButton
                tag="span"
                onClick={(e) => remove(e, item.key)}
                className="h-12 cursor-pointer pointer-events-auto flex justify-center"
              >
                <Icon name="x" size={24} className="text-on-inverse-surface" />
              </IconButton>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}

SnackbarRoot.propTypes = {
  timeout: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
}

export const Snackbar = Object.assign(SnackbarRoot, {
  Activator: () => <></>
})
