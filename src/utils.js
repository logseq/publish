import { promises as fs } from 'fs'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'

const repoDirName = 'logseq_repo'

export async function getPageNames() {
  const pagesDir = path.join(process.cwd(), repoDirName, 'pages')
  const fileNames = await fs.readdir(pagesDir)

  return fileNames.map((fileName) => path.parse(fileName).name)
}

export async function getPageContent(name) {
  const pagePath = path.join(process.cwd(), repoDirName, 'pages', name) + '.md'

  const markdown = await fs.readFile(pagePath, 'utf8')

  const content = (await remark().use(html).process(markdown)).toString()

  return content
}
