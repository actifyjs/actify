import { memo } from 'react'
import Tabs from '@/src/tabs'
import Usage from '@/src/usage'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import ReactMarkdown from 'react-markdown'
import CodePreview from '@/src/components/CodePreview'
import EditOnGitHub from '@/src/components/EditOnGitHub'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import SyntaxHighlighter from '@/src/components/SyntaxHighlighter'

const upcaseFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const Markdown = memo(({ pathname, markdown }) => {
  return (
    <article>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        rehypePlugins={[[rehypeRaw], [rehypeSlug], [rehypeAutolinkHeadings]]}
        className="prose text-sm sm:text-base md:text-lg mb-4 max-w-full dark:prose-invert prose-pre:p-0 [&_pre]:!mb-0"
        components={{
          p: ({ children }) => <div className="mb-4">{children}</div>, // replace p tag to div tag
          pre: ({ children }) => <>{children}</>, // remove pre tag
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                code={String(children).replace(/\n$/, '')}
                language={match[1]}
              />
            ) : (
              <code
                className="leading-8 before:hidden after:hidden bg-black/10 dark:bg-white/10 rounded-md p-1.5"
                {...props}
              >
                {children}
              </code>
            )
          },
          tabs: ({ node, children, ...rest }) => <Tabs {...rest} />,
          usage: ({ node, children, ...rest }) => <Usage {...rest} />,
          'code-preview': ({ node, children, ...rest }) => (
            <CodePreview {...rest}>{children}</CodePreview>
          )
        }}
      />
      {markdown && <EditOnGitHub pathname={pathname} />}
    </article>
  )
})

export default Markdown
