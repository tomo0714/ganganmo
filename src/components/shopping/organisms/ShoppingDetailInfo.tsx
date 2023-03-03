import { css } from '@emotion/react'
import { Title } from '@/components/common/atoms/Title'

const descriptionStyle = css`
  padding: 10px;
  border-top: 1px solid;
  margin-top: 10px;
  font-size: 12px;
`

type ShoppingDetailInfoProps = {
  title: string
  price: string
  description: string
}

export const ShoppingDetailInfo = (props: ShoppingDetailInfoProps) => {
  const { title, price, description } = props
  return (
    <>
      <Title type="h2">{title}</Title>
      <Title type="h2">&yen;{price}</Title>
      <div css={descriptionStyle}>{description}</div>
    </>
  )
}
