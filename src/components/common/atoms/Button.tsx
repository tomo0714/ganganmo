import { css } from '@emotion/react'
import Link from 'next/link'

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
  const buttonStyle = css`
    display: block;
    width: ${width ? width + 'px' : '100%'};
    height: 43px;
    border: ${isBlack ? 'none' : '1px solid black'};
    margin: 0 auto;
    margin-top: ${marginTop ?? 0}px;
    background: ${isBlack ? 'black' : 'none'};
    color: ${isBlack ? '#fff' : 'black'};
    font-family: Oswald, sans-serif;
    font-size: 18px;
    font-style: italic;
    text-transform: uppercase;
  `
  return (
    <>
      {href ? (
        <Link href={href}>
          <a>
            <button css={buttonStyle} onClick={onClick}>
              {title}
            </button>
          </a>
        </Link>
      ) : (
        <button css={buttonStyle} onClick={onClick}>
          {title}
        </button>
      )}
    </>
  )
}
