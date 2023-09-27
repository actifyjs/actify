import React, { useRef, useState, useEffect } from 'react'

const BottomSheets = () => {
  const ref = useRef()
  const [top, setTop] = useState(false)
  const [height, setHeight] = useState(false)

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const handleResize = () => {
    if (window.innerHeight > ref.current.scrollHeight + 36 + 72) {
      setHeight(ref.current.scrollHeight + 36 + 'px')
      setTop(false)
    } else {
      setHeight('auto')
      setTop(true)
    }
  }

  return (
    <div>
      <div className="pointer-events-none fixed inset-0 z-50 bg-surface/80"></div>
      <div
        style={{
          height
        }}
        className={`bg-violet-50 fixed bottom-0 left-0 z-50 mx-10 flex w-[calc(100%-80px)] flex-col overflow-x-hidden rounded-t-[36px] sm:mx-24 sm:w-[calc(100%-192px)]
        ${top ? 'top-[72px]' : ''}`}
      >
        <div className="inline-flex h-9 w-full cursor-grab flex-col items-center justify-start gap-3 p-4">
          <div className="bg-zinc-500 h-1 w-8 rounded-[100px] opacity-40"></div>
        </div>
        <div ref={ref} className="overflow-y-auto">
          <p className="bg-secondary py-10 text-center"></p>
        </div>
      </div>
    </div>
  )
}

BottomSheets.displayName = 'Actify.BottomSheets'

export { BottomSheets }
