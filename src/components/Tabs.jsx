import { Icon, Tabs } from 'actify'

import SyntaxHighlighter from '@/src/components/SyntaxHighlighter'

const ActifyTabs = (props) => {
  const { value, language, tabs } = props

  const _tabs = JSON.parse(tabs)

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
              <Icon name={tab.icon} size={18} />
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
