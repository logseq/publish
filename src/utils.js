import { promises as fs } from 'fs'
import path from 'path'
import marked from 'marked'
import fm from 'front-matter'

const repoDirName = 'content'
const imageLinkRe = /!\[.*]\(.*\/assets\/(.*)\)({.*})?/
const pageRefRe = /\[\[(.*)\]\]/

marked.use({
  tokenizer: {
    link(src) {
      const imageLinkMatches = src.match(imageLinkRe)
      if (imageLinkMatches != null) {
        return {
          type: 'text',
          raw: src,
          text: src,
        }
      } else {
        return false
      }
    },
  },
  renderer: {
    text(text) {
      const imageLinkMatches = text.match(imageLinkRe)
      const pageRefMatches = text.match(pageRefRe)

      if (imageLinkMatches != null) {
        const imageFileName = imageLinkMatches[1]
        const imageName = path.parse(imageFileName).name
        return `
        <img src="/assets/${imageFileName}" alt="${imageName}" />
        `
      } else if (pageRefMatches != null) {
        const pageName = pageRefMatches[1]
        return `
        <a href="./${pageName}">${pageName}</a>
        `
      } else {
        return text
      }
    },
  },
})

export async function getPageNames() {
  const pagesDir = path.join(process.cwd(), repoDirName, 'pages')
  const fileNames = await fs.readdir(pagesDir)

  return fileNames.map((fileName) => path.parse(fileName).name)
}

export async function getPageHTML(name) {
  const pagePath = path.join(process.cwd(), repoDirName, 'pages', name) + '.md'
  const text = await fs.readFile(pagePath, 'utf8')
  const content = fm(text)

  return {
    markup: marked(content.body),
    title: content.attributes.title ?? name,
  }
}
