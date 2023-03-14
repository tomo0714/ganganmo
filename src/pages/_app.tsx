import type { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.min.css'
import { RecoilRoot } from 'recoil'
import { Layout } from '@/components/common/templates/Layout'
import { Loading } from '@/components/common/templates/Loading'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Loading>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Loading>
    </RecoilRoot>
  )
}

export default MyApp
