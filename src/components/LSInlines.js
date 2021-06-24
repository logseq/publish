import { Box } from '@chakra-ui/react'
import LSInline from './LSInline'

export default function LSInlines({ inlines }) {
  return (
    <Box as="span">
      {inlines.map((inline, index) => (
        <LSInline key={index} inline={inline} />
      ))}
    </Box>
  )
}
