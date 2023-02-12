import { NormalHeader } from '@/components/organisms/Header'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import '@/styles/globals.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NormalHeader />
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
