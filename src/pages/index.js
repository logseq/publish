import Article from '../components/Article'
import Layout from '../components/Layout'
import PagesNav from '../components/PagesNav'
import { getPageNames, getReadme } from '../utils'

export default function Home({ pages, markup }) {
  const nav = <PagesNav pages={pages} />

  const content = (
    <Article>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </Article>
  )
  return <Layout nav={nav} content={content} />
}

export async function getStaticProps({ params }) {
  const [pages, markup] = await Promise.all([getPageNames(), getReadme()])

  return { props: { pages, markup } }
}
