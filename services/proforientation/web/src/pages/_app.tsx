import React from 'react'
import {AppProps, AppContext} from 'next/app'
import {isMobile} from '@ucheba/utils/helpers/core'
import {ThemeProvider} from 'styled-components'

const App = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={{base: 'default', mode: 'light'}}>
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
