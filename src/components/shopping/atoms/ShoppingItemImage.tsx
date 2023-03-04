import { css } from '@emotion/react'

const shoppingItemImageStyle = css`
  position: absolute;
  bottom: 10px;
  height: 100%;
`

type ShoppingItemImageProps = {
  src: string
  alt: string
}

export const ShoppingItemImage = (props: ShoppingItemImageProps) => {
  const { src, alt } = props
  return <img css={shoppingItemImageStyle} src={src} alt={alt} />
}
