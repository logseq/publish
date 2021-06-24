import { Box } from '@chakra-ui/react'
import { getBlockByID, getPageNameByID } from '../utils'
import Link from 'next/link'
import LSBlock from './LSBlock'

export default function LSBlockReference({ c: id }) {
  const referedBlock = getBlockByID(id)

  if (referedBlock) {
    const pageName = getPageNameByID(id)

    return (
      <Link href={`/pages/${pageName}#${id}`}>
        <Box as="span" className="ls-block-reference">
          <LSBlock b={referedBlock} />
        </Box>
      </Link>
    )
  } else {
    return <pre>{id}</pre>
  }
}
