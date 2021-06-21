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
        <Box
          padding="7px"
          className="ls-block-reference"
          border="1px dashed black"
        >
          <LSBlock b={referedBlock} />
        </Box>
      </Link>
    )
  } else {
    return <pre>{id}</pre>
  }
}
