import { useEffect, useState } from 'react'

const generateSlug = (str) => {
  str = str?.replace(/^\s+|\s+$/g, '')
  str = str?.toLowerCase()
  const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;'
  const to = 'aaaaaeeeeiiiioooouuuunc------'

  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    ?.replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

  return str
}

const TableOfContents = ({ hash, markdown }) => {
  const [toc, setToc] = useState([])

  useEffect(() => {
    const regXHeader = /#{1,6}.+/g
    if (markdown) {
      const matches = markdown.match(regXHeader)
      const headings = matches.map((heading) => {
        const headingText = heading.replace(/#/g, '')
        const slug = generateSlug(headingText)
        return {
          slug,
          title: headingText
        }
      })
      setToc(headings)
    }
  }, [markdown])

  return (
    <nav className="fixed bottom-14 right-16 h-screen w-64 hidden lg:grid lg:place-content-center">
      <ul>
        {toc.map((item) => (
          <li
            key={item.slug}
            className={`border-l-4 pl-2 ${
              item.slug == hash.slice(1) ? 'border-primary' : ''
            }`}
          >
            <a
              href={`#${item.slug}`}
              className={`${
                item.slug == hash.slice(1) ? 'text-primary font-bold' : ''
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TableOfContents
