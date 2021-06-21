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
      <Flex
        display={{ base: 'none', md: 'block' }}
        width="300px"
        flexDirection="column"
        height="100vh"
        overflowY="auto"
        padding="10px"
      >
        {logo}
        {nav}
      </Flex>
      <Box height="100vh" overflowY="auto" flex={1}>
        {content}
      </Box>
    </Flex>
  )
}
