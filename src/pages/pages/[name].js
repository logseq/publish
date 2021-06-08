import 'tippy.js/animations/shift-away-subtle.css'
import 'tippy.js/themes/light.css'
import Layout from '../../components/Layout'
import LSPage from '../../components/LSPage'
import PagesNav from '../../components/PagesNav'
import { pages } from '../../utils'

export default function Page({ name }) {
  const nav = <PagesNav pages={pages} />
  const content = <LSPage name={name} />

  return <Layout nav={nav} content={content} />
}

export async function getStaticPaths() {
  const paths = pages.map((name) => ({
    params: { name },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { name } = params
  return { props: { name } }
}
