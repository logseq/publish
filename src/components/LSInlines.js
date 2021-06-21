import LSInline from './LSInline'

export default function LSInlines({ inlines, toc }) {
  return (
    <>
      {inlines.map((inline, index) => (
        <LSInline key={index} inline={inline} toc />
      ))}
    </>
  )
}
