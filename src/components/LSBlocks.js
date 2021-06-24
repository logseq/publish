import LSBlock from './LSBlock'

export default function LSBlocks({ blocks }) {
  return (
    Array.isArray(blocks) &&
    blocks.length > 0 && (
      <ul>
        {blocks.map((b) => {
          return (
            <li key={b.id} id={b.id}>
              <LSBlock b={b} />
            </li>
          )
        })}
      </ul>
    )
  )
}
