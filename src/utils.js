import d from '../export.json'

const pages = d.blocks

export let pageNames = []
export let idToBlock = {}

export function getPageByName(name) {
  return pages.find((p) => p['page-name'] === name)
}

export function getBlockByID(id) {
  return idToBlock[id].block
}
export function getPageNameByID(id) {
  return idToBlock[id].pageName
}

function walkPagesTreeAndCreateSupportData() {
  pages.forEach((page) => {
    const pageName = page['page-name']
    pageNames.push(pageName)
    addBlockToMap({ block: page, pageName })
  })
}
walkPagesTreeAndCreateSupportData()

function addBlockToMap(blockAndPageName) {
  const { block, pageName } = blockAndPageName
  idToBlock[block.id] = blockAndPageName
  block.children.forEach((block) => addBlockToMap({ block, pageName }))
}
