import React from 'react'
import {AppProps, AppContext} from 'next/app'
import {isMobile} from '@ucheba/utils/helpers/core'
import {ThemeProvider} from 'styled-components'
import {Theme} from '@ucheba/utils/helpers/styles'

const {vars} = new Theme({
  colors: {
    primary: 'orange',
    accent: 'blue',
    default: 'gray',
  },
})

const App = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={{mode: 'default', ...vars}}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

App.getInitialProps = async ({ctx, Component}: AppContext): Promise<{}> => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  pageProps = {...pageProps, isMobile: isMobile(ctx)}

  return {pageProps}
}

export default App
