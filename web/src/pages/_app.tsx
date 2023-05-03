import '@component/styles/globals.css'
import "@component/styles/home.css"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
