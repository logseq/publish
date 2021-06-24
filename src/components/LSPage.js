import { Box } from '@chakra-ui/react'
import { getLinkedRefs } from '../utils'
import LSBlocks from './LSBlocks'
import LSLinkedReferences from './LSLinkedReferences'

export default function LSPage({ page }) {
  return (
    <Box
      as="article"
      minWidth={200}
      maxWidth={980}
      margin="0 auto"
      padding={{ md: 45, base: 15 }}
      className="ls-page markdown-body"
    >
      <h1 id="ls-page-title">{page.pageName}</h1>
      <LSBlocks blocks={page.children} />
      <LSLinkedReferences linkedRefs={getLinkedRefs(page.pageName)} />
    </Box>
  )
}
