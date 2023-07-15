import { Home } from 'lucide-react'
import Code from '@/packages/components/Code'
import Fab from '@/packages/components/Button/Fab'

const codeBlock = `
import { Fab } from 'actify'
import { Home } from 'lucide-react'

export default () => {
  return(
    <>
      <Fab color="error" icon={<Home />} />
      <Fab color="primary" label="ctify">
        <svg
          width="33.455"
          height="36.987"
          fill="#fff"
          viewBox="0 0 33.455 36.987"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeWidth="2.5"
            stroke="currentColor"
            transform="translate(-28.272 365)"
            d="M55.047-328.513l-5.238-13.822-14.323,5.317-3.243,8.5H29L42.821-364.5h4.359L61-328.513Zm-6.067-15.969.829,2.147-.829-2.147-5.308-13.745-7.123,18.445"
          />
        </svg>
      </Fab>
    </>   
  )
}

`

export default () => {
  return (
    <>
      <strong className="text-6xl font-bold">FAB</strong>
      <h2 className="my-2 text-xl">Floating action buttons (FABs) help people take primary actions</h2>

      <div className="flex flex-wrap gap-2">
        <Fab color="error" icon={<Home />} />
        <Fab color="primary" label="ctify">
          <svg
            width="33.455"
            height="36.987"
            fill="#fff"
            viewBox="0 0 33.455 36.987"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="2.5"
              stroke="currentColor"
              transform="translate(-28.272 365)"
              d="M55.047-328.513l-5.238-13.822-14.323,5.317-3.243,8.5H29L42.821-364.5h4.359L61-328.513Zm-6.067-15.969.829,2.147-.829-2.147-5.308-13.745-7.123,18.445"
            />
          </svg>
        </Fab>
      </div>

      <div className="mt-4">
        <Code code={codeBlock} language="jsx" />
      </div>
    </>
  )
}
