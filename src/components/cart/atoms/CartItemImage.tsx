import { css } from '@emotion/react'

const CartItemImageStyle = css`
  width: 33%;
  height: 34vw;
  max-height: 208.48px;
`

type CartItemImageProps = {
  src: string | undefined
  alt: string
}

export const CartItemImage = (props: CartItemImageProps) => {
  const { src, alt } = props
  return (
    <div css={CartItemImageStyle}>
      <img src={src} alt={alt} />
    </div>
  )
}
