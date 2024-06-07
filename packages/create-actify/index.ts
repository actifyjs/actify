import { blue, yellow } from 'kolorist'

import minimist from 'minimist'
import path from 'node:path'
import prompts from 'prompts'

const argv = minimist<{
  t?: string
  template?: string
}>(process.argv.slice(2), { string: ['_'] })
const cwd = process.cwd()

async function init() {
  const response = await prompts([
    {
      type: 'text',
      name: 'projectName',
      message: 'Project name:',
      initial: 'actify-project'
    },
    {
      type: 'select',
      name: 'framework',
      message: 'Select framework',
      choices: [
        {
          title: 'Vite',
          value: 'vite'
        },
        {
          title: 'Next.js',
          value: 'next'
        }
      ],
      initial: 0
    },
    {
      type: 'select',
      name: 'language',
      message: 'Select language',
      choices: [
        {
          title: blue('TypeScript'),
          value: 'typescript'
        },
        { title: yellow('JavaScript'), value: 'javascript' }
      ],
      initial: 0
    }
  ])

  console.log(response)
}

function formatTargetDir(targetDir: string | undefined) {
  return targetDir?.trim().replace(/\/+$/g, '')
}

init()
