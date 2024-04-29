import { useCallback } from 'react'

type PossibleRef<T> = React.Ref<T> | null | undefined

function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref !== null && ref !== undefined) {
    ;(ref as React.MutableRefObject<T>).current = value
  }
}

function mergeRefs<T>(...refs: PossibleRef<T>[]) {
  return (node: T | null) => {
    refs.forEach((ref) => {
      setRef(ref, node)
    })
  }
}

function useMergedRefs<T>(...refs: PossibleRef<T>[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(mergeRefs(...refs), [refs])
}

export { mergeRefs, useMergedRefs }
