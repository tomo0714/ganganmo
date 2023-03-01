import type { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.min.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { RecoilRoot } from 'recoil'
import { Layout } from '@/components/common/pages/Layout'
import { Loading } from '@/components/common/pages/Loading'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const handleStart = (url: string) => url !== router.asPath && setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return (
    <RecoilRoot>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </RecoilRoot>
  )
}

export default MyApp
