import LSInline from './LSInline'

export default function LSInlines({ inlines }) {
  return (
    <>
      {inlines.map((inline, index) => (
        <LSInline key={index} inline={inline} />
      ))}
    </>
  )
}
