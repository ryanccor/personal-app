import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import './_app.css'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}