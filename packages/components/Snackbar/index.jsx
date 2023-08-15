import { Icon } from 'actify'
import { useTransition } from '@react-spring/web'
import React, { useState, useMemo, useEffect } from 'react'
import { Container, Message, Button, Content, Life } from './styles'

let id = 0

const Snackbar = (props) => {
  const [items, setItems] = useState([])
  const { config = { tension: 125, friction: 20, precision: 0.1 }, timeout = 3000, children } = props
  const refMap = useMemo(() => new WeakMap(), [])
  const cancelMap = useMemo(() => new WeakMap(), [])

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
    config: (item, index, phase) => (key) => (phase === 'enter' && key === 'life' ? { duration: timeout } : config)
  })

  useEffect(() => {
    children((msg) => {
      setItems((state) => [...state, { key: id++, msg }])
    })
  }, [])

  return (
    <Container>
      {transitions(({ life, ...style }, item) => (
        <Message style={style}>
          <Content ref={(ref) => ref && refMap.set(item, ref)}>
            <Life style={{ right: life }} />
            <p>{item.msg}</p>
            <Button
              onClick={(e) => {
                e.stopPropagation()
                if (cancelMap.has(item) && life.get() !== '0%') cancelMap.get(item)()
              }}
            >
              <Icon name="X" size={18} />
            </Button>
          </Content>
        </Message>
      ))}
    </Container>
  )
}

Snackbar.displayName = 'Actify.Snackbar'

export default Snackbar
