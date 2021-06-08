import { getID } from '../utils'
import LSBlock from './LSBlock'

export default function LSBlocks({ blocks }) {
  return (
    <ul>
      {blocks.map((b) => {
        const id = getID(b)
        return (
          <li key={id} id={id}>
            <LSBlock b={b} />
          </li>
        )
      })}
    </ul>
  )
}
