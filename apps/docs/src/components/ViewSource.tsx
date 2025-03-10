import { Icon, IconButton, Tooltip, TooltipTrigger } from 'actify'

const hyphenToPascalCase = (str: string) => {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

const ViewSource = ({ name }: { name: string }) => {
  const pascalCase = hyphenToPascalCase(name)

  const sourceUrl = `https://github.com/actifyjs/actify/tree/main/packages/actify/src/components/${pascalCase}`
  return (
    <TooltipTrigger delay={50} closeDelay={50}>
      <a tabIndex={-1} target="_blank" href={sourceUrl}>
        <IconButton>
          <Icon>
            <svg
              width="24"
              height="24"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Icon>
        </IconButton>
      </a>
      <Tooltip placement="top">View source on Github</Tooltip>
    </TooltipTrigger>
  )
}

export default ViewSource
