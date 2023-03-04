import { css } from '@emotion/react'
import Link from 'next/link'

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
}

export const Button = (props: ButtonProps) => {
  const { title, isBlack, marginTop, width, onClick, href } = props
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
        <Link href={href}>
          <a>
            <button css={[buttonStyle, propsStyle]} onClick={onClick}>
              {title}
            </button>
          </a>
        </Link>
      ) : (
        <button css={[buttonStyle, propsStyle]} onClick={onClick}>
          {title}
        </button>
      )}
    </>
  )
}
