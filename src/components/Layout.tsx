import { css, Global } from '@emotion/react'
import { ReactNode } from 'react'
import { global } from '@/Layout/Global'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'

const wrapper = css`
  padding: 0 20px;
`

type LayoutProps = {
  children: ReactNode
}

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <Global styles={global} />
      <div css={wrapper}>
        <Header />
        <main
          css={css`
            margin-top: 60px;
          `}
        >
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  )
}
