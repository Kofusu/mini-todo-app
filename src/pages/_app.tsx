import { NormalHeader } from '@/components/organisms/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NormalHeader />
      <Component {...pageProps} />
    </>
  )
}
