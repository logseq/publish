import Link from 'next/link'
import { getBlockByUUID, getPageNameByID } from '../utils'
import LSBlock from './LSBlock'

export default function LSBlockReference({ c: uuid }) {
  const referedBlock = getBlockByUUID(uuid)

  if (referedBlock) {
    const pageName = getPageNameByID(referedBlock.page.id)

    return (
      <Link href={`/pages/${pageName}#${uuid}`}>
        <a>
          <LSBlock b={referedBlock} />
        </a>
      </Link>
    )
  } else {
    return <pre>{uuid}</pre>
  }
}
