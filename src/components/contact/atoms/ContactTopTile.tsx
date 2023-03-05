import { css } from '@emotion/react'
import { Title } from '@/components/common/atoms/Title'

const contactTopTileStyle = css`
  text-align: center;
`

export const ContactTopTile = () => {
  return (
    <div css={contactTopTileStyle}>
      <Title type="h2">CONTACT</Title>
    </div>
  )
}
