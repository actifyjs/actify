import React from 'react'
import { Tabs } from 'actify'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'

interface ActifyTabsProps extends React.HTMLAttributes<HTMLElement> {
  value: string
  language: string
  tabs: string
}

type TypeTab = [{ label: string; icon: string; content: string }]

const ActifyTabs: React.FC<ActifyTabsProps> = (props) => {
  const { value, language, tabs } = props

  const _tabs: TypeTab = JSON.parse(tabs)

  return (
    <Tabs value={value} className="not-prose rounded-lg bg-secondary/10">
      <div className="flex border-b border-[#ccc] dark:border-[#222]">
        <Tabs.Header className="bg-transparent">
          {_tabs.map((tab) => (
            <Tabs.Tab
              key={tab.label}
              value={tab.label}
              className="min-w-[120px]"
            >
              {tab.icon}
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.Header>
      </div>
      <Tabs.Body className="p-2">
        {_tabs.map((tab) => (
          <Tabs.Panel key={tab.label} value={tab.label}>
            <SyntaxHighlighter language={language || 'jsx'}>
              {tab.content}
            </SyntaxHighlighter>
          </Tabs.Panel>
        ))}
      </Tabs.Body>
    </Tabs>
  )
}

export default ActifyTabs
