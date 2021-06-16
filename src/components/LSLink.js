import Link from 'next/link'
import Image from 'next/image'
import { pages } from '../utils'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import { useEffect, useRef } from 'react'

function PageLink({ pageName }) {
  const linkRef = useRef()

  const pagePath = `/pages/${encodeURIComponent(pageName)}`

  useEffect(() => {
    const onShow = async (instance) => {
      const res = await fetch(pagePath)
      const html = await res.text()
      const el = document.createElement('html')
      el.innerHTML = html
      const lsPage = el.querySelector('.ls-page')
      lsPage.classList.add('ls-page-preview')
      instance.setContent(lsPage)
    }
    const instance = tippy(linkRef.current, {
      onShow,
      maxWidth: 'none',
      placement: 'auto',
      theme: 'light',
      interactive: true,
    })
    return () => {
      instance.destroy()
    }
  }, [pagePath])

  return (
    <Link scroll={false} href={pagePath}>
      <a ref={linkRef} className="ls-page-link text-green-600">
        [[{pageName}]]
      </a>
    </Link>
  )
}

export default function LSLink({ c }) {
  const linkContent = c.url
  const linkType = linkContent?.[0]
  if (linkType === 'Search') {
    const toPage = c.url?.[1]
    if (pages.includes(toPage)) {
      return <PageLink pageName={toPage} />
    } else {
      return toPage
    }
  } else if (linkType === 'Complex') {
    return (
      <a target="_blank" rel="noreferrer" href={c.url?.[1]?.link}>
        {c.label?.[0]?.[1]}
      </a>
    )
  } else if (linkType === 'File') {
    const path = linkContent[1]
    const src = path.replace('..', '')

    return <Image width={400} src={src} alt="" />
  } else {
    return null
  }
}
