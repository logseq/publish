import { Box } from '@chakra-ui/layout'
import LSBlock from './LSBlock'

export default function LSBlocks({ blocks }) {
  return (
    Array.isArray(blocks) &&
    blocks.length > 0 && (
      <ul>
        {blocks.map((b) => {
          return (
            <Box key={b.id} id={b.id}>
              <LSBlock b={b} />
            </Box>
          )
        })}
      </ul>
    )
  )
}
