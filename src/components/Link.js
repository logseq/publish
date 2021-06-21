import NextLink from 'next/link'
import { Button } from '@chakra-ui/react'

export default function Link({ href, children }) {
  return (
    <NextLink href={href} passHref>
      <Button variant="link">{children}</Button>
    </NextLink>
  )
}
