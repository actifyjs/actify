'use client'

import React, { useEffect, useState } from 'react'

const useAttachable = (ref: React.RefObject<HTMLElement | null>) => {
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

export { useAttachable }
