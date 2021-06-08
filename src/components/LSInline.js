import LSBlockReference from './LSBlockReference'
import LSInlines from './LSInlines'
import LSLink from './LSLink'
import LSTable from './LSTable'

const INLINE_RENDERERS = {
  Plain: ({ c }) => {
    return <span>{c}</span>
  },
  Link: LSLink,
  Block_reference: LSBlockReference,

  Code: ({ c }) => {
    return <code>{c}</code>
  },
  Emphasis: ({ c }) => {
    let kind = c[0][0]
    let content = <LSInlines inlines={c[1]} />
    switch (kind) {
      case 'Bold':
        return <b>{content}</b>
      default:
        return content
    }
  },

  Table: LSTable,
}

const CONSTAINER_INLINES = ['Paragraph']

export default function Inline({ inline }) {
  const [type, content] = inline
  const InlineComponent = INLINE_RENDERERS[type]
  if (InlineComponent) {
    return <InlineComponent c={content} />
  } else if (CONSTAINER_INLINES.includes(type)) {
    return <LSInlines inlines={content} />
  } else {
    return null
  }
}
