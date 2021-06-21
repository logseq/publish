import { Box } from '@chakra-ui/react'
import { getBlockByID, getPageNameByID } from '../utils'
import Link from './Link'
import LSBlock from './LSBlock'

export default function LSBlockReference({ c: id }) {
  const referedBlock = getBlockByID(id)

  if (referedBlock) {
    const pageName = getPageNameByID(id)

    return (
      <Box backgroundColor="grey" padding="7px" className="ls-block-reference">
        <Link href={`/pages/${pageName}#${id}`}>
          <LSBlock b={referedBlock} />
        </Link>
      </Box>
    )
  } else {
    return <pre>{id}</pre>
  }
}
