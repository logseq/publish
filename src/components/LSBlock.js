import LSBlocks from './LSBlocks'
import LSHeading from './LSHeading'
import LSInlines from './LSInlines'

export default function LSBlock({ b }) {
  let title
  if (isHeading(b)) {
    title = <LSHeading b={b} />
  } else if (isEmpty(b)) {
    title
  } else if (Array.isArray(b.title)) {
    title = <LSInlines inlines={b.title} />
  }

  let body
  if (Array.isArray(b.body)) {
    body = <LSInlines inlines={b.body} />
  }

  const children = <LSBlocks blocks={b.children} />

  return (
    <>
      {title}
      {body}
      {children}
    </>
  )
}

function isEmpty(b) {
  return b?.title?.length === 0
}

function isHeading(b) {
  return b.type === 'heading'
}
