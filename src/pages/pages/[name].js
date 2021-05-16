import { getPageContent, getPageNames } from '../../utils'

export default function Page({ page }) {
  return (
    <div>
      <h1>{page.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
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

  const content = await getPageContent(name)

  const page = { name, content }

  return { props: { page } }
}
