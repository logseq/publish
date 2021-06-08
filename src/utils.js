import d from '../data.json'

export const data = d

const uuidToBlock = createUUIDToBlockMap()
export function getBlockByUUID(id) {
  return uuidToBlock[id]
}

export const pages = data.pages.map((p) => p.title)

const idToPageName = createIDToPageNameMap()
export function getPageNameByID(id) {
  return idToPageName[id]
}

function createIDToPageNameMap() {
  let map = {}

  data.pages.forEach((p) => {
    map[p.content[0].page.id] = p.title
  })

  return map
}

function createUUIDToBlockMap() {
  let map = {}

  function addBlockToMap(b) {
    map[b.uuid.uuid] = b
    b.children.forEach(addBlockToMap)
  }

  data.pages.forEach((p) => {
    p.content.forEach(addBlockToMap)
  })

  return map
}

export function getID(b) {
  return b?.uuid?.uuid
}
