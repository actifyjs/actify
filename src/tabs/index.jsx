import {
  Tab,
  Icon,
  TabsBody,
  TabPanel,
  TabsHeader,
  Tabs as ActifyTabs
} from 'actify'

import SyntaxHighlighter from '@/packages/components/SyntaxHighlighter'

const Tabs = (props) => {
  const { value, language, tabs } = props

  const _tabs = JSON.parse(tabs)

  return (
    <ActifyTabs value={value} className="not-prose rounded-lg bg-secondary/10">
      <div className="flex border-b border-[#ccc] dark:border-[#222]">
        <TabsHeader className="bg-transparent">
          {_tabs.map((tab) => (
            <Tab key={tab.label} value={tab.label} className="min-w-[120px]">
              <Icon name={tab.icon} size={18} />
              {tab.label}
            </Tab>
          ))}
        </TabsHeader>
      </div>
      <TabsBody className="p-2">
        {_tabs.map((tab) => (
          <TabPanel key={tab.label} value={tab.label}>
            <SyntaxHighlighter language={language || 'jsx'}>
              {tab.content}
            </SyntaxHighlighter>
          </TabPanel>
        ))}
      </TabsBody>
    </ActifyTabs>
  )
}

export default Tabs
