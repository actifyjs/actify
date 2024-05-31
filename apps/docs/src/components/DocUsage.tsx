'use client'

import { Icon, Spacer, Tabs, TooltipGroup } from 'actify'

import OpenInCodeSandbox from '@/components/OpenInCodeSandbox'
import OpenInStackblitz from '@/components/OpenInStackblitz'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'
import ViewSource from '@/components/ViewSource'
import dynamic from 'next/dynamic'

interface DocUsageProps {
  content?: string
  component: string
}

const DocUsage = (props: DocUsageProps) => {
  const { content = '', component } = props
  const DynamicComponent = dynamic(() => import(`@/usages/${component}`), {
    ssr: false
  })

  return (
    <Tabs
      activeTabIndex={0}
      className="not-prose rounded-lg text-on-surface-variant bg-surface-variant"
    >
      <div className="flex border-b border-outline w-full">
        <Tabs.Header className="bg-transparent w-full">
          <Tabs.Tab value="preview">
            <Icon>visibility</Icon>
            Preview
          </Tabs.Tab>
          <Tabs.Tab value="code">
            <Icon>
              <svg
                fill="none"
                width="24"
                height="24"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </svg>
            </Icon>
            Code
          </Tabs.Tab>
          <Spacer />
          <TooltipGroup>
            <ViewSource name={component} />
            <OpenInCodeSandbox title={component} code={content} />
            <OpenInStackblitz title={component} code={content} />
          </TooltipGroup>
        </Tabs.Header>
      </div>
      <Tabs.Body className="p-2">
        <Tabs.Panel>
          <DynamicComponent />
        </Tabs.Panel>
        <Tabs.Panel>
          <SyntaxHighlighter lang="tsx">{content}</SyntaxHighlighter>
        </Tabs.Panel>
      </Tabs.Body>
    </Tabs>
  )
}
export default DocUsage
