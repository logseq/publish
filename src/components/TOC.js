import { Box } from '@chakra-ui/react'
import React from 'react'
import { isHeading } from '../utils'
import LSHeading from './LSHeading'

function renderHeadings(blocks) {
  return blocks.map((b) => {
    let heading
    if (isHeading(b)) {
      console.log('isHeading')
      heading = (
        <Box cursor="pointer" onClick={() => (window.location.hash = b.id)}>
          <LSHeading b={b} />
        </Box>
      )
    }

    return (
      <React.Fragment key={b.id}>
        {heading}
        {renderHeadings(b.children)}
      </React.Fragment>
    )
  })
}

export default function TOC({ page }) {
  return (
    <Box
      className="ls-toc"
      as="nav"
      display={{ base: 'none', lg: 'block' }}
      padding="10px"
      fontSize="smaller"
      alignSelf="flex-start"
      position="sticky"
      overflowY="auto"
      maxHeight="100vh"
      aria-label="table of contents"
    >
      <Box
        as="h1"
        fontWeight="bold"
        cursor="pointer"
        onClick={() => (window.location.hash = 'ls-page-title')}
      >
        On this Page
      </Box>
      {renderHeadings(page.children)}
    </Box>
  )
}
