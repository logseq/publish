import Layout from '../components/Layout'
import PagesNav from '../components/PagesNav'
import { pageNames, homePage, getPageByName } from '../utils'
import LSPage from '../components/LSPage'
import TOC from '../components/TOC'

export default function Home() {
  const nav = <PagesNav pages={pageNames} />
  const page = getPageByName(homePage)
  const content = <LSPage page={page} />
  const toc = <TOC page={page} />

  return <Layout nav={nav} content={content} toc={toc} />
}
