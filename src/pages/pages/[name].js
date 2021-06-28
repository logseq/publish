import Layout from '../../components/Layout'
import LSPage from '../../components/LSPage'
import PagesNav from '../../components/PagesNav'
import TOC from '../../components/TOC'
import { getPageByName, pageNames } from '../../utils'

export default function Page({ name }) {
  const nav = <PagesNav pages={pageNames} />
  const page = getPageByName(name)
  const content = <LSPage page={page} />
  const toc = <TOC page={page} />

  return <Layout nav={nav} content={content} toc={toc} />
}

export async function getStaticPaths() {
  const paths = pageNames.map((name) => ({
    params: { name },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { name } = params
  return { props: { name } }
}
