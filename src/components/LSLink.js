import { pageNames } from '../utils'
import ExternalLink from './ExternalLink'
import PageLink from './PageLink'

export default function LSLink({ c }) {
  const linkContent = c.url
  const linkType = linkContent?.[0]
  if (linkType === 'Search') {
    const toPage = c.url?.[1]
    if (pageNames.includes(toPage)) {
      return <PageLink pageName={toPage} />
    } else {
      return toPage
    }
  } else if (linkType === 'Complex') {
    return (
      <ExternalLink href={c.url?.[1]?.link}>{c.label?.[0]?.[1]}</ExternalLink>
    )
  } else if (linkType === 'File') {
    const path = linkContent[1]
    const src = path.replace('..', '')

    return <img src={src} alt="" />
  } else {
    return null
  }
}
