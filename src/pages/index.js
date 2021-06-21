import { Box, Flex } from '@chakra-ui/react'
import Layout from '../components/Layout'
import PagesNav from '../components/PagesNav'
import { pageNames } from '../utils'

export default function Home() {
  const nav = <PagesNav pages={pageNames} />
  const content = (
    <>
      <Box padding="14px" display={{ md: 'none' }}>
        {nav}
      </Box>
      <Flex
        height="100vh"
        justifyContent="center"
        alignItems="center"
        display={{ base: 'hidden', md: 'flex' }}
        fontSize="6xl"
      >
        Welcome to Logseq Publish
      </Flex>
    </>
  )

  return <Layout nav={nav} content={content} />
}
