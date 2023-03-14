import { css } from '@emotion/react'

const cartItemImageStyle = css`
  width: 33%;
  height: 34vw;
  max-height: 208.48px;
`

type CartItemImageProps = {
  src?: string
  alt: string
}

export const CartItemImage = (props: CartItemImageProps) => {
  const { src, alt } = props
  return (
    <div css={cartItemImageStyle}>
      <img src={src} alt={alt} />
    </div>
  )
}
