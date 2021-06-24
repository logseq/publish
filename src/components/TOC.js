import { Box } from '@chakra-ui/react'
import { isArray } from 'lodash'
import LSInlines from './LSInlines'

const MAX_LEVEL = 3

function renderTitles(blocks, level = 1) {
  if (level > MAX_LEVEL) {
    return
  }
  return (
    <Box as="ul" marginLeft="7px">
      {blocks.map((b) => {
        if (isArray(b.title) && b.title.length > 0) {
          return (
            <Box
              as="li"
              key={b.id}
              maxWidth={200}
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              <a href={`#${b.id}`}>
                <LSInlines inlines={b.title} />
              </a>
              {isArray(b.children) &&
                b.children.length > 0 &&
                renderTitles(b.children, level + 1)}
            </Box>
          )
        }
      })}
    </Box>
  )
}

export default function TOC({ page }) {
  return (
    <Box
      as="nav"
      display={{ base: 'none', lg: 'block' }}
      padding="10px"
      fontSize="sm"
      alignSelf="flex-start"
      position="sticky"
      overflowY="auto"
      maxHeight="100vh"
      aria-label="table of contents"
    >
      {renderTitles(page.children)}
    </Box>
  )
}
