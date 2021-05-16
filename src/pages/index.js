import Link from 'next/link'
import { getPageNames } from '../utils'

export default function Home({ pages }) {
  return (
    <div>
      <h1>Logseq Publish</h1>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <Link href={`/pages/${encodeURIComponent(page)}`}>
              <a>{page}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const pages = await getPageNames()

  return { props: { pages } }
}
