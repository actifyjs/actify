import React, { useState, useEffect } from 'react'

export default function useAttachable(
  ref: React.MutableRefObject<HTMLElement | null>
) {
  const [control, setControl] = useState<HTMLElement | null | undefined>(null)
  useEffect(() => {
    const htmlFor = ref.current?.getAttribute('for')
    if (htmlFor) {
      const currentControl = document.getElementById(htmlFor)
      const parentElement = ref.current?.parentElement
      setControl(currentControl || parentElement)
    }
  }, [ref])
  return control
}
