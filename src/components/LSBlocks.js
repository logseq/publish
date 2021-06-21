import LSBlock from './LSBlock'

export default function LSBlocks({ blocks }) {
  return (
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
}
