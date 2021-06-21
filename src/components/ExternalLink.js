import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function ExternalLink({ href, children }) {
  return (
    <Link href={href} isExternal>
      {children}
      <ExternalLinkIcon mx="2px" />
    </Link>
  )
}
