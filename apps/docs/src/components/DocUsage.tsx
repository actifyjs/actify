'use client'

import { Icon, TabItem, Tabs, TooltipGroup } from 'actify'

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
    <div className="relative not-prose rounded-lg text-on-surface-variant bg-surface-variant shadow-lg">
      <Tabs>
        <TabItem
          key="preview"
          title={
            <>
              <Icon>visibility</Icon>
              Preview
            </>
          }
        >
          <div className="p-2 sm:p-4 bg-surface-container">
            <DynamicComponent />
          </div>
        </TabItem>
        <TabItem
          key="code"
          title={
            <>
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
            </>
          }
        >
          <div className="p-2 sm:p-4 bg-surface-container">
            <SyntaxHighlighter lang="tsx">{content}</SyntaxHighlighter>
          </div>
        </TabItem>
      </Tabs>
      <div className="absolute top-3 right-4 flex">
        <TooltipGroup>
          <ViewSource name={component} />
          <OpenInCodeSandbox title={component} code={content} />
          <OpenInStackblitz title={component} code={content} />
        </TooltipGroup>
      </div>
    </div>
  )
}
export default DocUsage
