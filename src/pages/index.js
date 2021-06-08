import Layout from '../components/Layout'
import PagesNav from '../components/PagesNav'
import { pages } from '../utils'

export default function Home() {
  const nav = <PagesNav pages={pages} />

  const content = <p>Welcome to Logseq Publish</p>
  return <Layout nav={nav} content={content} />
}
