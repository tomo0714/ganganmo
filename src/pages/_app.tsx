import type { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.min.css'
import { RecoilRoot } from 'recoil'
import { Layout } from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
