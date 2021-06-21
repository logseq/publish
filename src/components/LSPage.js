import { Box } from '@chakra-ui/react'
import LSBlocks from './LSBlocks'

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
      <h1>{page['page-name']}</h1>
      <LSBlocks blocks={page.children} />
    </Box>
  )
}
