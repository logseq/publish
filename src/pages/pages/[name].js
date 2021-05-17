import { getPageHTML, getPageNames } from '../../utils'

export default function Page({ page }) {
  const { title, markup } = page
  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </>
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

  const page = await getPageHTML(name)

  return { props: { page } }
}
