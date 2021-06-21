import Link from 'next/link'
import { getBlockByID, getPageNameByID } from '../utils'
import LSBlock from './LSBlock'

export default function LSBlockReference({ c: id }) {
  const referedBlock = getBlockByID(id)

  if (referedBlock) {
    const pageName = getPageNameByID(id)

    return (
      <Link scroll={false} href={`/pages/${pageName}#${id}`}>
        <div className="ls-block-reference">
          <LSBlock b={referedBlock} />
        </div>
      </Link>
    )
  } else {
    return <pre>{id}</pre>
  }
}
