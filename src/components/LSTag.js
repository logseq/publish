import { pageNames } from '../utils'
import PageLink from './PageLink'

export default function LSTag({ c }) {
  const tag = c[0]
  const tagType = tag[0]
  if (tagType === 'Plain') {
    const toPage = c[0][1]
    if (pageNames.includes(toPage)) {
      return <PageLink pageName={toPage} />
    } else {
      return toPage
    }
  }
}
