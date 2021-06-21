import { Box, Flex } from '@chakra-ui/react'
import Link from './Link'

export default function Layout({ nav, content }) {
  const logo = (
    <Link href="/">
      <a>Logseq Publish</a>
    </Link>
  )

  return (
    <Flex flexDirection="row">
      <Box>
        {logo}
        {nav}
      </Box>
      {content}
    </Flex>
  )
}
