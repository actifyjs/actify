import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

export default () => {
  const { name } = useParams()
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/docs/components/${name}.md`)
      const text = await response.text()
      setMarkdown(text)
    }
    fetchData()
  }, [name])

  return <ReactMarkdown className="prose" children={markdown} />
}
