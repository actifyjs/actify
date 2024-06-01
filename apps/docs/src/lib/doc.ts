import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const docsDirectory = path.join(process.cwd(), './content') // process.cwd() returns the absolute path of the current working directory

function getFiles(dir: string, files: string[] = []) {
  const fileList = fs.readdirSync(dir)
  for (const file of fileList) {
    const name = `${dir}/${file}`
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files)
    } else {
      files.push(name)
    }
  }
  return files
}

export function getAllDocSlugs() {
  const files = getFiles(docsDirectory)

  return files.map((file) => {
    const relative = path.relative(docsDirectory, file)
    return { slug: relative.replace(/\.md?$/, '').split(path.sep) }
  })
}

export function getDocData(slugs: string[]) {
  const fullPath = path.join(docsDirectory, ...slugs) + '.md'
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  return {
    content: matterResult.content,
    ...(matterResult.data as { title: string; description?: string })
  }
}
