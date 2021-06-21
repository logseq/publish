import { ChakraProvider } from '@chakra-ui/react'
import '../styles/global.css'
import '../styles/markdown.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
