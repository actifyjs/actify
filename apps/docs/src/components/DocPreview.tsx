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
      <div className="not-prose rounded-lg bg-surface-variant shadow-lg">
        <Actify.Tabs>
          <Actify.TabItem
            key="preview"
            title={
              <>
                <Actify.Icon>visibility</Actify.Icon>
                Preview
              </>
            }
          >
            <div className="p-2 sm:p-4 bg-surface-container">
              <LivePreview className="flex gap-2" />
            </div>
          </Actify.TabItem>
          <Actify.TabItem
            key="code"
            title={
              <>
                <Actify.Icon>
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
                </Actify.Icon>
                Code
              </>
            }
          >
            <div className="p-2 sm:p-4 bg-surface-container">
              <SyntaxHighlighter lang="tsx">{code}</SyntaxHighlighter>
            </div>
          </Actify.TabItem>
        </Actify.Tabs>
      </div>
    </LiveProvider>
  )
}

export default DocPreview
