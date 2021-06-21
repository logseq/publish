import 'tippy.js/animations/shift-away-subtle.css'
import 'tippy.js/themes/light.css'
import Layout from '../../components/Layout'
import LSPage from '../../components/LSPage'
import PagesNav from '../../components/PagesNav'
import { pageNames } from '../../utils'

export default function Page({ name }) {
  const nav = <PagesNav pages={pageNames} />
  const content = <LSPage name={name} />

  return <Layout nav={nav} content={content} />
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
