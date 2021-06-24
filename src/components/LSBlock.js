import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex } from '@chakra-ui/react'
import { useLocalStorageValue } from '@react-hookz/web'
import LSBlocks from './LSBlocks'
import LSHeading from './LSHeading'
import LSInlines from './LSInlines'

export default function LSBlock({ b }) {
  const [collpased, setCollpased] = useLocalStorageValue(
    `collpase-state-${b.id}`,
    false,
    { initializeWithStorageValue: false },
  )

  const showToggleIcon = Array.isArray(b.children) && b.children.length > 0

  const toggle = showToggleIcon && (
    <Box
      as="span"
      marginRight="4px"
      cursor="pointer"
      onClick={() => setCollpased(!collpased)}
    >
      {collpased ? <ChevronRightIcon /> : <ChevronDownIcon />}
    </Box>
  )

  const blockIsHeading = isHeading(b)

  let title
  if (blockIsHeading) {
    title = <LSHeading b={b} toggle={toggle} />
  } else if (Array.isArray(b.title)) {
    title = <LSInlines inlines={b.title} />
  }

  let body
  if (Array.isArray(b.body)) {
    body = <LSInlines inlines={b.body} />
  }

  const children = <LSBlocks blocks={b.children} />

  return (
    <>
      <Box>
        {!blockIsHeading && toggle}
        {title}
      </Box>

      {!collpased && (
        <Box marginTop="4px" marginLeft={showToggleIcon ? '4px' : 0}>
          {body}
          {children}
        </Box>
      )}
    </>
  )
}

function isEmpty(b) {
  return b?.title?.length === 0
}

function isHeading(b) {
  return b['heading-level'] != null
}
