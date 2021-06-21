import { Box } from '@chakra-ui/react'
import { getPageByName } from '../utils'
import LSBlocks from './LSBlocks'

export default function LSPage({ name }) {
  const page = getPageByName(name)
  return (
    <Box
      minWidth={200}
      maxWidth={980}
      margin="0 auto"
      padding={{ md: 45, base: 15 }}
    >
      <article className="ls-page markdown-body">
        <h1>{name}</h1>
        <LSBlocks blocks={page.children} />
      </article>
    </Box>
  )
}
