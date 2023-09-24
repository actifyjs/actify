import React from 'react'
import { motion } from 'framer-motion'

const Path = (props) => (
  <motion.path
    {...props}
    strokeWidth="3"
    fill="transparent"
    strokeLinecap="round"
    stroke="hsl(0, 0%, 18%)"
  />
)

const CloseButton = ({ close }) => (
  <button onClick={close} className="close">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path d="M 3 16.5 L 17 2.5" />
      <Path d="M 3 2.5 L 17 16.346" />
    </svg>
  </button>
)

export default CloseButton
