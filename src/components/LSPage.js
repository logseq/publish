import { data } from '../utils'
import LSBlocks from './LSBlocks'

export default function LSPage({ name }) {
  const page = data.pages.find((p) => p.title === name)
  return (
    <article className="logseq-page prose prose-lg mx-auto md:max-w-xl lg:max-w-2xl">
      <h1>{name}</h1>
      <LSBlocks blocks={page.content} />
    </article>
  )
}
