import fs from 'fs'
import path from 'path'
import marked from 'marked'
import fm from 'front-matter'

const { promises: fsPromises } = fs

const repoDirName = 'content'
const imageLinkRe = /!\[.*]\(.*\/assets\/(.*)\)({.*})?/
const pageRefRe = /\[\[(.*)\]\]/

const pageNames = getPageNamesSync()

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
        // TODO: mark sure the image exits, otherwise return the raw text

        const imageFileName = imageLinkMatches[1]
        const imageName = path.parse(imageFileName).name
        return `
        <img src="/assets/${imageFileName}" alt="${imageName}" />
        `
      } else if (pageRefMatches != null) {
        const pageName = pageRefMatches[1]
        if (pageNames.includes(pageName)) {
          return text.replace(
            pageRefRe,
            `
        <a class="preview" href="./${pageName}"><span class="text-green-600">[[${pageName}]]</span></a>
        `,
          )
        } else {
          return pageName
        }
      } else {
        return text
      }
    },
  },
})

function getPageNamesSync() {
  const pagesDir = path.join(process.cwd(), repoDirName, 'pages')
  const fileNames = fs.readdirSync(pagesDir)

  return fileNames.map((fileName) => path.parse(fileName).name)
}

export async function getPageNames() {
  const pagesDir = path.join(process.cwd(), repoDirName, 'pages')
  const fileNames = await fsPromises.readdir(pagesDir)

  return fileNames.map((fileName) => path.parse(fileName).name)
}

export async function getPageHTML(name) {
  const pagePath = path.join(process.cwd(), repoDirName, 'pages', name) + '.md'
  const text = await fsPromises.readFile(pagePath, 'utf8')
  const content = fm(text)

  return {
    markup: marked(content.body),
    title: content.attributes.title ?? name,
  }
}
