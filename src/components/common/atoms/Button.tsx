import { css } from '@emotion/react'
import { LinkWrapper } from '@/components/common/molecules/LinkWrapper'

const buttonStyle = css`
  display: block;
  height: 43px;
  margin: 0 auto;
  font-family: Oswald, sans-serif;
  font-size: 18px;
  font-style: italic;
  text-transform: uppercase;
`

type ButtonProps = {
  title: string
  isBlack?: boolean
  marginTop?: string
  width?: string
  onClick?: () => void
  href?: string
  type?: 'submit'
}

export const Button = (props: ButtonProps) => {
  const { title, isBlack, marginTop, width, onClick, href, type } = props
  const propsStyle = css`
    width: ${width ? width + 'px' : '100%'};
    border: ${isBlack ? 'none' : '1px solid black'};
    margin-top: ${marginTop ?? 0}px;
    background: ${isBlack ? 'black' : 'none'};
    color: ${isBlack ? '#fff' : 'black'};
  `
  return (
    <>
      {href ? (
        <LinkWrapper href={href}>
          <button type={type} css={[buttonStyle, propsStyle]} onClick={onClick}>
            {title}
          </button>
        </LinkWrapper>
      ) : (
        <button type={type} css={[buttonStyle, propsStyle]} onClick={onClick}>
          {title}
        </button>
      )}
    </>
  )
}
