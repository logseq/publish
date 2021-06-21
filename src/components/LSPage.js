import { getPageByName } from '../utils'
import LSBlocks from './LSBlocks'

export default function LSPage({ name }) {
  const page = getPageByName(name)
  return (
    <article className="ls-page markdown-body">
      <h1>{name}</h1>
      <LSBlocks blocks={page.children} />
    </article>
  )
}
