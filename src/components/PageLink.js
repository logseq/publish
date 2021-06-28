import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import { createPagePath } from '../utils'

export default function PageLink({ pageName }) {
  const linkRef = useRef()
  const router = useRouter()
  const currentPageName = router.query.name
  const pagePath = createPagePath(pageName)

  useEffect(() => {
    if (currentPageName != pageName) {
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
    }
  }, [currentPageName, pageName, pagePath])

  return (
    <Link href={pagePath}>
      <Button ref={linkRef} variant="link">
        [[{pageName}]]
      </Button>
    </Link>
  )
}
