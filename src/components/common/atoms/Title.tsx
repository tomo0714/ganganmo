import { css } from '@emotion/react'
import { ReactNode } from 'react'

const titleStyle = `
  font-family: Oswald, sans-serif;
  font-style: italic;
`
const fontSizeH1 = css`
  font-size: 25px;
`
const fontSizeH2 = css`
  font-size: 24px;
  font-weight: normal;
`
const fontSizeH4 = css`
  font-size: 14px;
  font-weight: normal;
`

type TitleProps = {
  type: 'h1' | 'h2' | 'h4'
  children: ReactNode
}

export const Title = (props: TitleProps) => {
  const { type, children } = props
  switch (type) {
    case 'h1':
      return <h1 css={[titleStyle, fontSizeH1]}>{children}</h1>
    case 'h2':
      return <h2 css={[titleStyle, fontSizeH2]}>{children}</h2>
    case 'h4':
      return <h4 css={[titleStyle, fontSizeH4]}>{children}</h4>
  }
}
