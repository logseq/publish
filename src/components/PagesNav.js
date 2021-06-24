import {
  Box,
  Input,
  Flex,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
import Link from 'next/link'
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { createPagePath } from '../utils'

export default function PagesNav({ pages }) {
  const [search, setSearch] = useState('')

  const searchNotEmpty = search.length > 0

  const filteredPages = searchNotEmpty
    ? pages.filter((pageName) =>
        pageName.toLowerCase().includes(search.toLowerCase()),
      )
    : pages

  return (
    <Flex fontSize="sm" flexDirection="column" flex={1} minHeight={0}>
      <InputGroup size="sm" marginTop="14px" marginBottom="14px">
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {searchNotEmpty && (
          <InputRightElement cursor="pointer" onClick={() => setSearch('')}>
            <CloseIcon />
          </InputRightElement>
        )}
      </InputGroup>
      <Box flex={1} minHeight={0} overflowY="auto">
        {filteredPages.map((page) => (
          <Link key={page} href={createPagePath(page)}>
            <Box
              title={page}
              cursor="pointer"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              variant="link"
            >
              {page}
            </Box>
          </Link>
        ))}
      </Box>
    </Flex>
  )
}
