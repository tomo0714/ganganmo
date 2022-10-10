import { css } from '@emotion/react'
import Link from 'next/link'

const blackButton = css`
  display: block;
  width: 100%;
  height: 56px;
  border: none;
  margin-top: 30px;
  background-color: black;
  color: #fff;
  font-size: 20px;
`
const whiteButton = css`
  display: block;
  width: 100%;
  height: 56px;
  border: 2px solid black;
  margin-top: 8px;
  background: none;
  font-size: 20px;
`

type ButtonProps = {
  title: string
  url: string
  isBlack?: boolean
}

export const Button = (props: ButtonProps) => {
  return (
    <Link href={props.url}>
      <a>
        <button css={props.isBlack ? blackButton : whiteButton}>{props.title}</button>
      </a>
    </Link>
  )
}
