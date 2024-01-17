import * as Actify from 'actify'
import { Share2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import {
  withLive,
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const MIN_WIDTH = 100

const Live = ({ onEdit }: { onEdit: (_: string) => void }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [xPosition, setXPosition] = useState<number>()
  const [leftWidth, setLeftWidth] = useState<number>()
  const splitPaneRef = useRef<any>()

  useEffect(() => {
    if (splitPaneRef.current) {
      if (!leftWidth) {
        setLeftWidth(splitPaneRef.current.firstChild.clientWidth)
      }
    }
  }, [splitPaneRef])

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  })

  const onMouseUp = () => {
    setIsDragging(false)
  }
  const onMouseDown = (e: any) => {
    setXPosition(e.clientX)
    setIsDragging(true)
  }

  const onMouseMove = (e: any) => {
    if (isDragging && leftWidth && xPosition) {
      const newLeftWidth = leftWidth + e.clientX - xPosition
      setXPosition(e.clientX)
      if (newLeftWidth < MIN_WIDTH) {
        setLeftWidth(MIN_WIDTH)
        return
      }
      if (splitPaneRef.current) {
        const splitPaneWidth = splitPaneRef.current.clientWidth
        if (newLeftWidth > splitPaneWidth - MIN_WIDTH) {
          setLeftWidth(splitPaneWidth - MIN_WIDTH)
          return
        }
      }
      setLeftWidth(newLeftWidth)
    }
  }

  return (
    <>
      <div
        ref={splitPaneRef}
        className="hidden md:flex relative grow overflow-hidden p-2 bg-secondary/10"
      >
        <LiveEditor
          onChange={onEdit}
          style={{ width: leftWidth + 'px' }}
          className={`${
            isDragging ? 'pointer-events-none select-none' : ''
          } overflow-auto [&>.prism-code]:h-full [&>.prism-code]:rounded-none`}
        />
        <div
          onMouseDown={onMouseDown}
          className={`${
            isDragging ? 'cursor-col-resize' : 'cursor-ew-resize'
          } w-1 bg-secondary`}
        ></div>
        <LiveError className="text-error" />
        <LivePreview
          className={`${
            isDragging ? 'pointer-events-none select-none' : ''
          } flex-1 overflow-auto border border-outline p-2`}
        />
      </div>
      <div className="grid md:hidden">
        <LiveEditor
          onChange={onEdit}
          className="overflow-auto [&>.prism-code]:h-full [&>.prism-code]:rounded-none"
        />
        <LiveError className="text-error" />
        <LivePreview className="flex-1 overflow-auto border border-outline p-2" />
      </div>
    </>
  )
}

const LiveComponent = withLive(Live)

const Playground = () => {
  const toast = Actify.useToast()
  const [code, setCode] = useState(
    `() => {
    const [tips, setTips] = React.useState('Hello Actify');
    return (
      <Tooltip content={tips}>
        <Button>Show Tooltip</Button>
      </Tooltip>
    )
  }`
  )

  useEffect(() => {
    document.title = 'Playground' + ' | Actify'
    const hash = location.hash.slice(1)
    const decoded = atob(hash)
    if (decoded) {
      setCode(decoded)
    }
  }, [])

  const shareCode = () => {
    const encoded = btoa(code)
    // @ts-expect-error
    history.pushState(null, null, `#${encoded}`)

    navigator.clipboard.writeText(location.href).then(
      () => {
        toast('success', `Url Copied!`)
      },
      () => {
        toast('error', 'Copy Failed!')
      }
    )
  }

  return (
    <LiveProvider code={code} scope={Actify}>
      <div className="h-10 border-b border-outline px-2 bg-secondary/10 rounded-t flex items-center justify-between">
        <span className="flex-1"></span>
        <span className="text-2xl font-medium">Live Editor</span>
        <span className="flex-1"></span>
        <Actify.IconButton onClick={shareCode}>
          <Share2 />
        </Actify.IconButton>
      </div>
      <LiveComponent onEdit={setCode} />
    </LiveProvider>
  )
}

export default Playground
