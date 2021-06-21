import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'

export default function Layout({ nav, content }) {
  const logo = (
    <Link href="/">
      <Box fontWeight="bold" fontSize="2xl" fontStyle="italic">
        Logseq Publish
      </Box>
    </Link>
  )

  return (
    <Flex flexDirection="row">
      <Box padding="7px">
        {logo}
        {nav}
      </Box>
      {content}
    </Flex>
  )
}
