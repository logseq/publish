import fm from 'front-matter'
import fs from 'fs'
import marked from 'marked'
import path from 'path'

const { promises: fsPromises } = fs

const REPO_DIR_NAME = 'content'
const IMAGE_LINK_RE = /!\[.*]\(.*\/assets\/(.*)\)({.*})?/
const PAGE_REF_RE = /\[\[(.*)\]\]/
const EXCERPT_LENGTH = 1000

const pageNames = getPageNamesSync()

marked.use({
  tokenizer: {
    link(src) {
      const imageLinkMatches = src.match(IMAGE_LINK_RE)
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
      const imageLinkMatches = text.match(IMAGE_LINK_RE)
      const pageRefMatches = text.match(PAGE_REF_RE)

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
            PAGE_REF_RE,
            `
        <a class="preview" data-page-name="${pageName}" href="./${pageName}"><span class="text-green-600">[[${pageName}]]</span></a>
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
  const pagesDir = path.join(process.cwd(), REPO_DIR_NAME, 'pages')
  const fileNames = fs.readdirSync(pagesDir)

  return fileNames.map((fileName) => path.parse(fileName).name)
}

export async function getReadme() {
  const markdown = await fsPromises.readFile('./README.md', 'utf8')

  return marked(markdown)
}

export async function getPageNames() {
  const pagesDir = path.join(process.cwd(), REPO_DIR_NAME, 'pages')
  const fileNames = await fsPromises.readdir(pagesDir)

  return fileNames.map((fileName) => path.parse(fileName).name)
}

function getPagePath(name) {
  return path.join(process.cwd(), REPO_DIR_NAME, 'pages', name) + '.md'
}

export async function getPageHTML(name) {
  const pagePath = getPagePath(name)
  const text = await fsPromises.readFile(pagePath, 'utf8')
  const content = fm(text)

  return {
    markup: marked(content.body),
    title: content.attributes.title ?? name,
  }
}

export async function getPagePreview(name) {
  const pagePath = getPagePath(name)
  const text = await fsPromises.readFile(pagePath, 'utf8')
  const markdown = fm(text).body
  const excerpt = markdown.slice(0, EXCERPT_LENGTH)

  return { markup: marked(excerpt), title: name }
}
