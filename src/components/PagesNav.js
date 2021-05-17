import Link from 'next/link'

export default function PagesNav({ pages }) {
  return (
    <ul>
      {pages.map((page) => (
        <li key={page}>
          <Link href={`/pages/${encodeURIComponent(page)}`}>
            <a>{page}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
