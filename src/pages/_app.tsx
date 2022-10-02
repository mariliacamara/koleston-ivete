import type { AppProps } from 'next/app'
import '@/styles/fonts.scss'
import '@/styles/globals.scss'

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return <Component {...pageProps} />
}

export default App
