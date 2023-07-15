import {
  Badge,
  Card,
  NavigationBar,
  Button,
  Fab,
  IconButton,
  Checkbox,
  Chip,
  Dialog,
  Divider,
  Elevation,
  FocusRing,
  Field,
  Icon,
  List,
  ListItem,
  ListItemLink,
  Menu,
  MenuItem,
  LinearProgress,
  CircularProgress,
  RadioButton,
  Ripple,
  Select,
  Slider,
  Switch,
  Tabs,
  TextField
} from '@/packages/components'
import { useEffect, useRef, useState } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const scope = {
  Badge,
  Card,
  NavigationBar,
  Button,
  Fab,
  IconButton,
  Checkbox,
  Chip,
  Dialog,
  Divider,
  Elevation,
  FocusRing,
  Field,
  Icon,
  List,
  ListItem,
  ListItemLink,
  Menu,
  MenuItem,
  LinearProgress,
  CircularProgress,
  RadioButton,
  Ripple,
  Select,
  Slider,
  Switch,
  Tabs,
  TextField
}

const code = `<>
  <Button>actify</Button>
</>`
const MIN_WIDTH = 100

export default () => {
  const [isDragging, setIsDragging] = useState(false)
  const [xPosition, setXPosition] = useState()
  const [leftWidth, setLeftWidth] = useState()
  const splitPaneRef = useRef(null)

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
  const onMouseDown = (e) => {
    setXPosition(e.clientX)
    setIsDragging(true)
  }

  const onMouseMove = (e) => {
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
    <LiveProvider code={code} scope={scope}>
      <div ref={splitPaneRef} className="relative flex h-[calc(100vh-152px)] overflow-hidden">
        <LiveEditor
          style={{ width: leftWidth + 'px' }}
          className={`${
            isDragging ? 'pointer-events-none select-none' : ''
          } overflow-auto [&>.prism-code]:h-full [&>.prism-code]:rounded-none`}
        />
        <div
          onMouseDown={onMouseDown}
          className={`${isDragging ? 'cursor-col-resize' : 'cursor-ew-resize'} w-1 bg-secondary`}
        ></div>
        <LiveError className="text-error" />
        <LivePreview className={`${isDragging ? 'pointer-events-none select-none' : ''} flex-1 overflow-auto border`} />
      </div>
    </LiveProvider>
  )
}
