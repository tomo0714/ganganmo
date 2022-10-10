import { css } from '@emotion/react'
import Link from 'next/link'

type ButtonProps = {
  title: string
  url: string
  isBlack?: boolean
  marginTop?: string
  width?: string
}

export const Button = (props: ButtonProps) => {
  const { title, url, isBlack, marginTop, width } = props
  const buttonStyle = css`
    display: block;
    width: ${width ? width + 'px' : '100%'};
    height: 56px;
    border: ${isBlack ? 'none' : '2px solid black'};
    margin: 0 auto;
    margin-top: ${marginTop ?? 0}px;
    background: ${isBlack ? 'black' : 'none'};
    color: ${isBlack ? '#fff' : 'black'};
    font-size: 20px;
  `
  return (
    <Link href={url}>
      <a>
        <button css={buttonStyle}>{title}</button>
      </a>
    </Link>
  )
}
