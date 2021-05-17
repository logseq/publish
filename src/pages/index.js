import Layout from '../components/Layout'
import PagesNav from '../components/pagesNav'
import { getPageNames } from '../utils'

export default function Home({ pages }) {
  const nav = <PagesNav pages={pages} />

  const content = (
    <p className="p-8 text-3xl font-bold pt-36">
      Logseq Publish is a digital garden combining the content from Logseq and a
      Next.js template.
    </p>
  )
  return <Layout nav={nav} content={content} />
}

export async function getStaticProps({ params }) {
  const pages = await getPageNames()

  return { props: { pages } }
}
