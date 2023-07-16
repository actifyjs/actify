import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Code from '@/packages/components/Code'

export default () => {
  const { name } = useParams()
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/docs/getting-started/${name}.md`)
      const text = await response.text()
      setMarkdown(text)
    }
    fetchData()
  }, [name])

  return (
    <ReactMarkdown
      className="prose dark:prose-invert prose-pre:m-0 prose-pre:p-0"
      children={markdown}
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <Code code={String(children).replace(/\n$/, '')} language={match[1]} />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }}
    />
  )
}
