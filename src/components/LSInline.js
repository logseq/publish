import {
  CONTAINER_INLINE_TYPES,
  getInlineContent,
  getInlineType,
  isInlineContainer,
} from '../utils'
import LSBlockReference from './LSBlockReference'
import LSInlines from './LSInlines'
import LSLink from './LSLink'
import LSSrc from './LSSrc'
import LSTable from './LSTable'

function Plain({ c }) {
  return <span>{c}</span>
}

function Code({ c }) {
  return <code>{c}</code>
}

function Break_Line() {
  return <br />
}

function Emphasis({ c }) {
  let kind = c[0][0]
  let content = <LSInlines inlines={c[1]} />
  switch (kind) {
    case 'Bold':
      return <b>{content}</b>
    default:
      return content
  }
}

const INLINE_RENDERERS = {
  Plain,
  Link: LSLink,
  Block_reference: LSBlockReference,
  Code,
  Src: LSSrc,
  Emphasis,
  Table: LSTable,
  Break_Line,
}

export default function Inline({ inline }) {
  const content = getInlineContent(inline)
  const type = getInlineType(inline)
  const InlineComponent = INLINE_RENDERERS[type]
  if (isInlineContainer(inline)) {
    return <LSInlines inlines={content} />
  } else if (InlineComponent) {
    return <InlineComponent c={content} />
  } else {
    console.warn('Missing renderer for type: ', type, content)
    console.log('Wanna help? Contribute here: ')
    console.log('https://github.com/logseq/publish')
    return null
  }
}
