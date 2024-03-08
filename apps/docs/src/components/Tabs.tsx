import React from 'react'
import { Tabs } from 'actify'
import { Terminal, TerminalSquare, ChevronRightSquare } from 'lucide-react'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'

interface ActifyTabsProps extends React.ComponentProps<'html'> {
  tabs: string
  language: string
  activeTabIndex: number
}

type TypeTab = [{ label: string; icon: string; content: string }]

type IconProps = {
  name: 'pnpm' | 'yarn' | 'npm'
}

const IconMap = {
  pnpm: <Terminal />,
  yarn: <TerminalSquare />,
  npm: <ChevronRightSquare />
}

const ActifyTabs: React.FC<ActifyTabsProps> = (props) => {
  const { activeTabIndex, language, tabs } = props

  const _tabs: TypeTab = JSON.parse(tabs)

  return (
    <Tabs
      activeTabIndex={activeTabIndex}
      className="not-prose rounded-lg bg-secondary/10"
    >
      <div className="flex border-b border-[#ccc] dark:border-[#222]">
        <Tabs.Header className="bg-transparent">
          {_tabs.map((tab) => (
            <Tabs.Tab key={tab.label} value={tab.label} className="">
              {IconMap[tab.icon as IconProps['name']]}
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.Header>
      </div>
      <Tabs.Body className="p-2">
        {_tabs.map((tab) => (
          <Tabs.Panel key={tab.label}>
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
