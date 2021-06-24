import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import { createPagePath } from '../utils'
import LSBlockReference from './LSBlockReference'

export default function LSLinkedReferences({ linkedRefs }) {
  if (linkedRefs == null) {
    return null
  }

  return (
    <Box marginTop={7}>
      <Box fontSize="md" marginBottom="7px">
        Linked References
      </Box>
      <Box>
        {linkedRefs.map((ref) => {
          const { block, pageName } = ref
          return (
            <Box key={block.id}>
              <Reference block={block} pageName={pageName} />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

function Reference({ pageName, block }) {
  const { id } = block

  return (
    <Link href={createPagePath(pageName, id)}>
      <Box
        cursor="pointer"
        marginBottom="7px"
        borderRadius="7px"
        backgroundColor="rgb(247, 246, 244)"
        padding="14px"
      >
        <Box fontWeight="bold">{pageName}</Box> <LSBlockReference c={id} />
      </Box>
    </Link>
  )
}
