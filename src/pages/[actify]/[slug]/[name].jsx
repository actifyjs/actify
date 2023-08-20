import Usage from '@/src/usage'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Icon, Button } from 'actify'
import ReactMarkdown from 'react-markdown'
import { useState, useEffect } from 'react'
import Code from '@/packages/components/SyntaxHighlighter'
import { useLocation } from 'react-router-dom'

export default () => {
  const { pathname } = useLocation()
  const [markdown, setMarkdown] = useState('')

  const EditOnGitHub = () => {
    return (
      markdown && (
        <Button
          variant="text"
          target="_blank"
          href={`https://github.com/actifyjs/actify/blob/main/src/docs${location.pathname}.md`}
        >
          Edit this page on GitHub
          <Icon name="Pencil" />
        </Button>
      )
    )
  }

  useEffect(() => {
    async function loadData() {
      let importResult = {}
      const filePath = pathname.split('/')
      const fileName = filePath.pop()
      if (filePath.length == 2) {
        importResult = await import(`./../../../docs/${filePath[1]}/${fileName}.md`)
      }
      if (filePath.length == 3) {
        importResult = await import(`./../../../docs/${filePath[1]}/${filePath[2]}/${fileName}.md`)
      }
      const { attributes, markdown } = importResult
      setMarkdown(markdown)
      document.title = attributes.title + ` | Actify`
    }
    loadData()
  }, [pathname])

  return (
    <>
      <ReactMarkdown
        className="prose mb-4 max-w-full dark:prose-invert prose-pre:p-0 [&_pre]:!mb-0"
        children={markdown}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        components={{
          p: ({ children }) => <div className="mb-4">{children}</div>, // replace p tag to div tag
          pre: ({ children }) => <>{children}</>, // remove pre tag
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <Code code={String(children).replace(/\n$/, '')} language={match[1]} />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          usage: ({ node, children, ...rest }) => <Usage {...rest} />
        }}
      />
      <EditOnGitHub />
    </>
  )
}
