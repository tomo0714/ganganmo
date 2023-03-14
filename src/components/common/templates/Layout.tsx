import { css, Global } from '@emotion/react'
import { ReactNode } from 'react'
import { global } from '@/Layout/Global'
import { Footer } from '@/components/common/organisms/Footer'
import { Header } from '@/components/common/organisms/Header'

const mainStyle = css`
  margin-top: 80px;
`

type LayoutProps = {
  children: ReactNode
}

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <Global styles={global} />
      <Header />
      <main css={mainStyle}>{props.children}</main>
      <Footer />
    </>
  )
}
