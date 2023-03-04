import { css } from '@emotion/react'

const descriptionStyle = css`
  padding: 10px;
  border-top: 1px solid;
  margin-top: 10px;
  font-size: 12px;
`

type ShoppingDetailDescriptionProps = {
  description: string
}

export const ShoppingDetailDescription = (props: ShoppingDetailDescriptionProps) => {
  const { description } = props
  return <div css={descriptionStyle}>{description}</div>
}
