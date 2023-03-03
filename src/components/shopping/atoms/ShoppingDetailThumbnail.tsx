import { css } from '@emotion/react'

const thumbnailStyle = css`
  width: 100%;
  height: 500px;

  img {
    height: 100%;
  }
`

type ShoppingDetailThumbnailProps = {
  src: string
  alt: string
}

export const ShoppingDetailThumbnail = (props: ShoppingDetailThumbnailProps) => {
  const { src, alt } = props
  return (
    <div css={thumbnailStyle}>
      <img src={src} alt={alt} />
    </div>
  )
}
