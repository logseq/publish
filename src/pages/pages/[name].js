import { useEffect } from 'react'
import tippy from 'tippy.js'
import 'tippy.js/animations/shift-away-subtle.css'
import 'tippy.js/themes/light.css'
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

  useEffect(() => {
    tippy('a.preview', {
      theme: 'light',
      animation: 'shift-away-subtle',
      onShow(instance) {
        const { pageName } = instance.reference.dataset
        const getPagePreview = async () => {
          const result = await fetch(`/previews/${pageName}`)
          const html = await result.text()
          const el = document.createElement('html')
          el.innerHTML = html
          instance.setContent(el.querySelector('#page-preview'))
        }
        getPagePreview()
      },
    })
  }, [])

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
