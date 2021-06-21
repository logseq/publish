import { Box, Button } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import { pageNames } from '../utils'
import ExternalLink from './ExternalLink'
import Link from 'next/link'

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
    <Box ref={linkRef}>
      <Link href={pagePath}>
        <Button variant="link">[[{pageName}]]</Button>
      </Link>
    </Box>
  )
}

export default function LSLink({ c }) {
  const linkContent = c.url
  const linkType = linkContent?.[0]
  if (linkType === 'Search') {
    const toPage = c.url?.[1]
    if (pageNames.includes(toPage)) {
      return <PageLink pageName={toPage} />
    } else {
      return toPage
    }
  } else if (linkType === 'Complex') {
    return (
      <ExternalLink href={c.url?.[1]?.link}>{c.label?.[0]?.[1]}</ExternalLink>
    )
  } else if (linkType === 'File') {
    const path = linkContent[1]
    const src = path.replace('..', '')

    return <img src={src} alt="" />
  } else {
    return null
  }
}
