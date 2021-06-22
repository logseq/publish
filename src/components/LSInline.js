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
}

const TOC_RENDERERS = {
  Plain,
  Emphasis,
}

const CONSTAINER_INLINES = ['Paragraph']

export default function Inline({ inline, toc }) {
  const [type, content] = inline
  const InlineComponent = toc ? TOC_RENDERERS[type] : INLINE_RENDERERS[type]
  if (InlineComponent) {
    return <InlineComponent c={content} />
  } else if (CONSTAINER_INLINES.includes(type)) {
    return <LSInlines inlines={content} />
  } else {
    if (!toc) {
      console.warn('Missing renderer for type: ', type, content)
      console.log('Wanna help? Contribute here: ')
      console.log('https://github.com/logseq/publish')
    }
    return null
  }
}
