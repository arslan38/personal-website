import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../libs/theme'

/**
 * Next.js provides a custom Document class to 
 * augment and customize the HTML document structure. 
 * It allows us to control the overall HTML template.
 */

//This allows us to customize the server-rendered document markup
export default class Document extends NextDocument {
    //The render method returns the HTML structure of document
    render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}