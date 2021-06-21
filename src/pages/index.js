import { Box } from '@chakra-ui/react'
import Layout from '../components/Layout'
import PagesNav from '../components/PagesNav'
import { pageNames } from '../utils'

export default function Home() {
  const nav = <PagesNav pages={pageNames} />
  const content = (
    <Box padding="14px" display={{ base: 'block', md: 'none' }}>
      {nav}
    </Box>
  )

  return <Layout nav={nav} content={content} />
}
