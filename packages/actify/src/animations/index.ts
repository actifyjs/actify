const STANDARD = [0.2, 0, 0, 1] as const
const STANDARD_ACCELERATE = [0.3, 0, 1, 1] as const
const STANDARD_DECELERATE = [0, 0, 0, 1] as const
const EMPHASIZED = [0.3, 0, 0, 1] as const
const EMPHASIZED_ACCELERATE = [0.3, 0, 0.8, 0.15] as const
const EMPHASIZED_DECELERATE = [0.05, 0.7, 0.1, 1] as const

export const EASING = {
  STANDARD: `cubic-bezier(${STANDARD.toString()})`,
  STANDARD_ACCELERATE: `cubic-bezier(${STANDARD_ACCELERATE.toString()})`,
  STANDARD_DECELERATE: `cubic-bezier(${STANDARD_DECELERATE.toString()})`,
  EMPHASIZED: `cubic-bezier(${EMPHASIZED.toString()})`,
  EMPHASIZED_ACCELERATE: `cubic-bezier(${EMPHASIZED_ACCELERATE.toString()})`,
  EMPHASIZED_DECELERATE: `cubic-bezier(${EMPHASIZED_DECELERATE.toString()})`
} as const
