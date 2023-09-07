import React from 'react'
import Content from './Content'
import { Icon, IconButton } from 'actify'
import { useTransition, animated } from '@react-spring/web'

let id = 0

const Snackbar = (props) => {
  const [items, setItems] = React.useState([])
  const {
    config = { tension: 125, friction: 20, precision: 0.1 },
    timeout = 3000,
    children
  } = props
  const refMap = React.useMemo(() => new WeakMap(), [])
  const cancelMap = React.useMemo(() => new WeakMap(), [])

  const transitions = useTransition(items, {
    from: { opacity: 0, height: 0, life: '100%' },
    keys: (item) => item.key,
    enter: (item) => async (next, cancel) => {
      cancelMap.set(item, cancel)
      await next({ opacity: 1, height: refMap.get(item).offsetHeight })
      await next({ life: '0%' })
    },
    leave: [{ opacity: 0 }, { height: 0 }],
    onRest: (result, ctrl, item) => {
      setItems((state) =>
        state.filter((i) => {
          return i.key !== item.key
        })
      )
    },
    config: (item, index, phase) => (key) =>
      phase === 'enter' && key === 'life' ? { duration: timeout } : config
  })

  React.useEffect(() => {
    children((msg) => {
      setItems((state) => [...state, { key: id++, msg }])
    })
  }, [])

  return (
    <div className="fixed z-[1000] bottom-8 mx-auto left-8 right-8 flex flex-col gap-2 pointer-events-none items-center md:items-end">
      {transitions(({ life, ...style }, item) => (
        <animated.div
          style={style}
          className="relative overflow-hidden w-full md:w-80"
        >
          <Content ref={(ref) => ref && refMap.set(item, ref)}>
            <animated.div
              style={{ right: life }}
              className="h-1 rounded-b absolute bottom-0 left-0 bg-[linear-gradient(130deg,#00b4e6,#00f0e0)]"
            />
            <p className="pl-4">{item.msg}</p>
            <IconButton
              className="h-12 cursor-pointer pointer-events-auto flex justify-center"
              onClick={(e) => {
                e.stopPropagation()
                if (cancelMap.has(item) && life.get() !== '0%')
                  cancelMap.get(item)()
              }}
            >
              <Icon name="X" size={24} className="text-on-inverse-surface" />
            </IconButton>
          </Content>
        </animated.div>
      ))}
    </div>
  )
}

Snackbar.displayName = 'Actify.Snackbar'

export default Snackbar
