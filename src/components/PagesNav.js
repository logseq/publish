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

export default function PagesNav({ pages }) {
  const [search, setSearch] = useState('')

  const searchNotEmpty = search.length > 0

  const filteredPages = searchNotEmpty
    ? pages.filter((pageName) =>
        pageName.toLowerCase().includes(search.toLowerCase()),
      )
    : pages

  return (
    <Flex flexDirection="column" flex={1} overflowY="auto">
      <InputGroup size="sm" marginTop="14px" marginBottom="14px">
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Type page name to search"
        />
        {searchNotEmpty && (
          <InputRightElement
            cursor="pointer"
            onClick={() => setSearch('')}
            children={<CloseIcon />}
          />
        )}
      </InputGroup>
      <Box flex={1} overflowY="auto">
        {filteredPages.map((page) => (
          <Link key={page} href={`/pages/${encodeURIComponent(page)}`}>
            <Box
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
