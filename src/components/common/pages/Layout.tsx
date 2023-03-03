import { css, Global } from '@emotion/react'
import { ReactNode } from 'react'
import { global } from '@/Layout/Global'
import { Footer } from '@/components/common/organisms/Footer'
import { Header } from '@/components/common/organisms/Header'

type LayoutProps = {
  children: ReactNode
}

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <Global styles={global} />
      <div>
        <Header />
        <main
          css={css`
            margin-top: 70px;
          `}
        >
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  )
}
