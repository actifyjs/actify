import { MdRadio } from '@material/web/all'
import React from 'react'
import { createComponent } from '@lit/react'

const RadioWebComponent = createComponent({
  react: React,
  tagName: 'md-radio',
  elementClass: MdRadio
})

const Radio = ({ ...rest }: React.ComponentProps<typeof RadioWebComponent>) => {
  return <RadioWebComponent {...rest} />
}

export { Radio }
