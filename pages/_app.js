import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';
import '../styles/globals.css'

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    green: '#54C577',
    blue: '#42A2DA'
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
