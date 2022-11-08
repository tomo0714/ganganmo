import { css } from '@emotion/react'

type ButtonProps = {
  title: string
  isBlack?: boolean
  marginTop?: string
  width?: string
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  const { title, isBlack, marginTop, width, onClick } = props
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
    <button css={buttonStyle} onClick={onClick}>
      {title}
    </button>
  )
}
