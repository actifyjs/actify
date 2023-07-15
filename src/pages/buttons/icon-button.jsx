import { Menu } from 'lucide-react'
import Code from '@/packages/components/Code'
import IconButton from '@/packages/components/Button/IconButton'

const codeBlock = `
import { IconButton } from 'actify'
import { Menu } from 'lucide-react'

export default () => {
  return(
    <>
      <IconButton>
        <Menu />
      </IconButton>
      <IconButton>
        <svg
          width="33.455"
          height="36.987"
          fill="currentColor"
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
      </IconButton>      
    </>
  )
}

`

export default () => {
  return (
    <>
      <strong className="text-6xl font-bold">Icon Button</strong>
      <h2 className="my-2 text-xl">Icon buttons help people take minor actions with one tap</h2>
      <div className="flex flex-wrap gap-8">
        <div className="flex items-center gap-2">
          <span className="text-2xl">filled icon</span>
          <IconButton variant="filled" color="purple">
            <Menu />
          </IconButton>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">filled tonal icon</span>
          <IconButton variant="filled-tonal" color="purple">
            <Menu />
          </IconButton>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">use svg</span>
          <IconButton variant="outlined">
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
          </IconButton>
        </div>
      </div>
      <div className="mt-4">
        <Code code={codeBlock} language="jsx" />
      </div>
    </>
  )
}
