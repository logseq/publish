import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'

export default function Layout({ nav, content, toc }) {
  const logo = (
    <Link href="/">
      <Box cursor="pointer" fontWeight="bold" fontSize="2xl" fontStyle="italic">
        Logseq Publish
      </Box>
    </Link>
  )

  return (
    <Flex alignItems="stretch">
      <Flex
        display={{ base: 'none', md: 'flex' }}
        width={{ md: 200, lg: 250 }}
        flexDirection="column"
        height="100vh"
        padding="10px"
        backgroundColor="rgb(247, 246, 244)"
      >
        {logo}
        {nav}
      </Flex>
      <Box height="100vh" overflowY="auto" flex={1}>
        <Box cursor="pointer" display={{ md: 'none' }}>
          {logo}
        </Box>
        {content}
      </Box>
      {toc}
    </Flex>
  )
}
