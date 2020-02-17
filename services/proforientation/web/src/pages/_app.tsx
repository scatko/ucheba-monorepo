import App from 'next/app'
import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import theme from 'styled-theming'

const boxBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
})

const Box = styled.div`
  background-color: ${boxBackgroundColor};
`

export default class extends App {
  render(): JSX.Element {
    const {Component, pageProps} = this.props
    return (
      <ThemeProvider theme={{mode: 'light'}}>
        <Box>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    )
  }
}
