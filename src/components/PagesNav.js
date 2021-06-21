import Link from 'next/link'
import { Button } from '@chakra-ui/button'

export default function PagesNav({ pages }) {
  return (
    <ul>
      {pages.map((page) => (
        <li key={page}>
          <Link href={`/pages/${encodeURIComponent(page)}`}>
            <Button variant="link">{page}</Button>
          </Link>
        </li>
      ))}
    </ul>
  )
}
