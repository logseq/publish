import { Box } from '@chakra-ui/react'
import LSInlines from './LSInlines'

export default function LSHeading({ b, toggle }) {
  const inlines = <LSInlines inlines={b.title} />
  const content =
    toggle != null ? (
      <Box>
        {toggle}
        {inlines}
      </Box>
    ) : (
      inlines
    )
  const level = b['heading-level']
  const { id } = b

  switch (level) {
    case 1:
      return <h1 id={id}>{content}</h1>
    case 2:
      return <h2 id={id}>{content}</h2>
    case 3:
      return <h3 id={id}>{content}</h3>
    case 4:
      return <h4 id={id}>{content}</h4>
    case 5:
      return <h5 id={id}>{content}</h5>
    case 6:
      return <h6 id={id}>{content}</h6>

    default:
      return <div id={id}>{content}</div>
  }
}
