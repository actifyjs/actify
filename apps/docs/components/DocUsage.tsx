'use client'

import { Mdx } from '@/components/Mdx'
import { Eye, Code2 } from 'lucide-react'
import { Tabs, Spacer, TooltipGroup } from 'actify'
import { allUsages, Usage } from 'contentlayer/generated'

import ViewSource from '@/components/ViewSource'
import OpenInCodeSandbox from '@/components/OpenInCodeSandbox'
import OpenInStackblitz from '@/components/OpenInStackblitz'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'
import { notFound } from 'next/navigation'

const DocUsage = ({ component }: { component: string }) => {
  const usage: Usage | undefined = allUsages.find(
    (usage) => usage._id == `usages/${component}.mdx`
  )

  const name = usage?._raw.sourceFileName.slice(0, -4) ?? ''
  const rawString = usage?.body.raw ?? ''

  if (!usage) {
    notFound()
  }

  return (
    <Tabs activeTabIndex={0} className="not-prose rounded-lg bg-secondary/10">
      <div className="flex border-b border-[#ccc] dark:border-[#222] w-full">
        <Tabs.Header className="bg-transparent w-full">
          <Tabs.Tab value="preview">
            <Eye size={18} />
            Preview
          </Tabs.Tab>
          <Tabs.Tab value="code">
            <Code2 size={18} />
            Code
          </Tabs.Tab>
          <Spacer />
          <TooltipGroup>
            <ViewSource name={name} />
            <OpenInCodeSandbox title={name} code={rawString} />
            <OpenInStackblitz title={name} code={rawString} />
          </TooltipGroup>
        </Tabs.Header>
      </div>
      <Tabs.Body className="p-2">
        <Tabs.Panel>
          <Mdx code={usage?.body.code} />
        </Tabs.Panel>
        <Tabs.Panel>
          <SyntaxHighlighter className="language-tsx">
            {usage?.body.raw}
          </SyntaxHighlighter>
        </Tabs.Panel>
      </Tabs.Body>
    </Tabs>
  )
}
export default DocUsage
