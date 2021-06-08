import Link from 'next/link'
import { pages } from '../utils'

export default function LSLink({ c }) {
  const linkContent = c.url
  const linkType = linkContent?.[0]
  if (linkType === 'Search') {
    const toPage = c.url?.[1]
    if (pages.includes(toPage)) {
      return (
        <Link href={`/pages/${toPage}`}>
          <a>{toPage}</a>
        </Link>
      )
    } else {
      return toPage
    }
  } else if (linkType === 'Complex') {
    return (
      <a target="_blank" href={c.url?.[1]?.link}>
        {c.label?.[0]?.[1]}
      </a>
    )
  } else if (linkType === 'File') {
    const path = linkContent[1]
    const src = path.replace('..', '')

    return <img src={src} />
  } else {
    return null
  }
}
