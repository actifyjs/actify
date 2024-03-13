'use client'
import React from 'react'

const Action: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children
}) => {
  return <div className="pt-6 pl-6">{children}</div>
}

export { Action }
