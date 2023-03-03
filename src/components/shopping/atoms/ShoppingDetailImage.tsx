import { css } from '@emotion/react'

const imageStyle = css`
  width: 19%;
  height: 96px;
  margin: 0 0.5% 2%;

  img {
    width: 100%;
    height: 100%;
  }
`

type ShoppingDetailImageProps = {
  onClick: () => void
  src: string
  alt: string
}

export const ShoppingDetailImage = (props: ShoppingDetailImageProps) => {
  const { onClick, src, alt } = props
  return (
    <li css={imageStyle} onClick={onClick}>
      <img src={src} alt={alt} />
    </li>
  )
}
