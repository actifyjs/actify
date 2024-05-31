import fs from 'fs/promises'

export async function getFileRaw(filepath: string) {
  let content = undefined
  try {
    content = await fs.readFile(filepath, 'utf-8')
  } catch {}
  return content
}
