import { Header } from '@/components/Header'
import type { AppProps } from 'next/app'
import './_app.css'

export default function MyApp({ Component, pageProps }: AppProps) {

  return <>
      <Header/>
      <Component {...pageProps}/>
      
  </>
}