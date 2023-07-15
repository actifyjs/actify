import { Speaker } from 'lucide-react'
import Code from '@/packages/components/Code'
import Icon from '@/packages/components/Icon'

const codeBlock = `
import { Speaker } from 'lucide-react'
import Icon from '@/packages/components/Icon'

export default () => {
  return (
    <div className="flex gap-2">
      <Icon color="error">
        <Speaker size={40} />
      </Icon>
      <Icon color="primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="33.455" height="36.987" viewBox="0 0 33.455 36.987">
          <path
            strokeWidth="2.5"
            stroke="currentColor"
            transform="translate(-28.272 365)"
            d="M55.047-328.513l-5.238-13.822-14.323,5.317-3.243,8.5H29L42.821-364.5h4.359L61-328.513Zm-6.067-15.969.829,2.147-.829-2.147-5.308-13.745-7.123,18.445"
          />
        </svg>
      </Icon>
    </div>
  )
}
`

export default () => {
  return (
    <>
      <div className="flex gap-2">
        <Icon color="error">
          <Speaker size={40} />
        </Icon>
        <Icon color="primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            width="33.455"
            height="36.987"
            viewBox="0 0 33.455 36.987"
          >
            <path
              strokeWidth="2.5"
              stroke="currentColor"
              transform="translate(-28.272 365)"
              d="M55.047-328.513l-5.238-13.822-14.323,5.317-3.243,8.5H29L42.821-364.5h4.359L61-328.513Zm-6.067-15.969.829,2.147-.829-2.147-5.308-13.745-7.123,18.445"
            />
          </svg>
        </Icon>
      </div>
      <div className="mt-4">
        <Code code={codeBlock} language="jsx" />
      </div>
    </>
  )
}
