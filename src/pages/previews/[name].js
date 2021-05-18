import { getPageNames, getPagePreview } from '../../utils'

export default function Preview({ page }) {
  const { title, markup } = page

  return (
    <article
      id="page-preview"
      className="p-8 prose prose-sm h-96 overflow-hidden"
    >
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </article>
  )
}

export async function getStaticPaths() {
  const names = await getPageNames()

  const paths = names.map((name) => ({
    params: { name },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { name } = params

  const page = await getPagePreview(name)

  return { props: { page } }
}
