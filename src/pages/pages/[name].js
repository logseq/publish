import Article from '../../components/Article'
import Layout from '../../components/Layout'
import PagesNav from '../../components/PagesNav'
import { getPageHTML, getPageNames } from '../../utils'

export default function Page({ page, pages }) {
  const { title, markup } = page

  const nav = <PagesNav pages={pages} />
  const content = (
    <Article>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </Article>
  )

  return <Layout nav={nav} content={content} />
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

  const pages = await getPageNames()
  const page = await getPageHTML(name)

  return { props: { page, pages } }
}
