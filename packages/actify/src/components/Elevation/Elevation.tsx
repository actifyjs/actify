'use client'
import React from 'react'
import { tv } from 'tailwind-variants'

const root = tv({
  base: [
    'flex',
    'absolute',
    'inset-0',
    'rounded-[inherit]',
    'pointer-events-none',
    'duration-[280ms]'
  ]
})

const shadow = tv({
  base: [
    'absolute',
    'inset-0',
    'rounded-[inherit]',
    'before:absolute',
    'before:inset-0',
    'before:opacity-30',
    'before:text-black',
    'before:[transition-property:box-shadow,opacity]',
    'before:rounded-[inherit]',
    'after:absolute',
    'after:inset-0',
    'after:rounded-[inherit]',
    'after:[transition-property:box-shadow,opacity]',
    'after:opacity-[0.15]',
    'after:text-black'
  ],
  variants: {
    level: {
      '0': 'before:shadow-[0_0_0_0] after:shadow-[0_0_0_0]',
      '1': 'before:shadow-[0_1px_2px_0] after:shadow-[0_1px_3px_1px]',
      '2': 'before:shadow-[0_1px_2px_0] after:shadow-[0_2px_6px_2px]',
      '3': 'before:shadow-[0_1px_3px_0] after:shadow-[0_4px_8px_3px]',
      '4': 'before:shadow-[0_2px_3px_0] after:shadow-[0_6px_10px_4px]',
      '5': 'before:shadow-[0_4px_4px_0] after:shadow-[0_8px_12px_6px]'
    }
  }
})

type LevelNumber = 0 | 1 | 2 | 3 | 4 | 5
type Level = LevelNumber | `${LevelNumber}`

export interface ElevationProps extends React.HTMLAttributes<HTMLSpanElement> {
  level?: Level
}

const Elevation: React.FC<ElevationProps> = ({ level = 0 }) => {
  return (
    <div aria-hidden={true} className={root()}>
      <span
        className={shadow({
          level: level as `${LevelNumber}`
        })}
      ></span>
    </div>
  )
}

export default Elevation
