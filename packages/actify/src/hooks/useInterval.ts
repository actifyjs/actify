'use client'

import { useEffect, useRef } from 'react'

const useInterval = (
  callback: () => void,
  delay: number | null,
  dependencies: unknown[] = []
) => {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }
    const id = setInterval(() => savedCallback.current(), delay)
    return () => clearInterval(id)
  }, [delay, ...dependencies])
}
export { useInterval }
