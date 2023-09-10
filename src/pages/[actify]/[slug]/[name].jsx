import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Markdown from '@/src/components/Markdown'
import TableOfContents from '@/src/components/TableOfContents'

export default () => {
  const { hash, pathname } = useLocation()
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    const loadData = async () => {
      let importResult = {}
      const filePath = pathname.split('/')
      const fileName = filePath.pop()
      if (filePath.length == 2) {
        importResult = await import(
          `./../../../docs/${filePath[1]}/${fileName}.md`
        )
      }
      if (filePath.length == 3) {
        importResult = await import(
          `./../../../docs/${filePath[1]}/${filePath[2]}/${fileName}.md`
        )
      }
      const { attributes, markdown } = importResult
      setMarkdown(markdown)
      document.title = attributes.title + ' | Actify'
    }
    loadData()
  }, [pathname])

  return (
    <div className="lg:pr-64">
      <Markdown markdown={markdown} />
      <TableOfContents hash={hash} markdown={markdown} />
    </div>
  )
}
