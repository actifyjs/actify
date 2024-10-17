'use client'

import { TabItem, Tabs } from 'actify'

import React from 'react'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'

interface ActifyTabsProps extends React.ComponentProps<'html'> {
  items?: string
  language?: string
  activeTabIndex?: number
}

type TypeTab = { label: string; icon: string; content: string }

type IconProps = {
  name: 'pnpm' | 'yarn' | 'npm'
}

const IconMap = {
  pnpm: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  ),
  yarn: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7 11 2-2-2-2" />
      <path d="M11 13h4" />
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    </svg>
  ),
  npm: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m10 8 4 4-4 4" />
    </svg>
  )
}

const DocTabs = (props: ActifyTabsProps) => {
  const { language, items = '' } = props

  const tabs: TypeTab[] = JSON.parse(items)

  return (
    <div className="not-prose rounded-lg bg-surface-variant shadow-lg">
      <Tabs>
        {tabs.map((tab) => (
          <TabItem
            key={tab.label}
            title={
              <>
                {IconMap[tab.icon as IconProps['name']]}
                {tab.label}
              </>
            }
          >
            <SyntaxHighlighter
              lang={`${language}` || 'jsx'}
              className="rounded-t-none"
            >
              {tab.content}
            </SyntaxHighlighter>
          </TabItem>
        ))}
      </Tabs>
    </div>
  )
}

export default DocTabs
