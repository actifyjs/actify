'use client'

import * as Actify from 'actify'

import { LivePreview, LiveProvider } from 'react-live'

import SyntaxHighlighter from '@/components/SyntaxHighlighter'

type CodePreviewProps = {
  code?: string
}

const DocPreview = ({ code = '' }: CodePreviewProps) => {
  return (
    <LiveProvider code={code} scope={Actify}>
      <Actify.Tabs
        activeTabIndex={0}
        className="not-prose rounded-lg bg-surface-variant shadow-lg"
      >
        <div className="flex">
          <Actify.Tabs.Header className="bg-transparent">
            <Actify.Tabs.Tab key="preview" className="min-w-[120px]">
              <Actify.Icon>visibility</Actify.Icon>
              Preview
            </Actify.Tabs.Tab>
            <Actify.Tabs.Tab key="code" className="min-w-[120px]">
              <Actify.Icon>code</Actify.Icon>
              Code
            </Actify.Tabs.Tab>
          </Actify.Tabs.Header>
        </div>
        <Actify.Tabs.Body className="p-2 sm:p-4 bg-surface-container">
          <Actify.Tabs.Panel key="preview">
            <LivePreview className="flex gap-2" />
          </Actify.Tabs.Panel>
          <Actify.Tabs.Panel key="code">
            <SyntaxHighlighter lang="jsx">{code}</SyntaxHighlighter>
          </Actify.Tabs.Panel>
        </Actify.Tabs.Body>
      </Actify.Tabs>
    </LiveProvider>
  )
}

export default DocPreview
