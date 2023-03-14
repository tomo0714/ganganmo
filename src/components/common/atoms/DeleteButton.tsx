import { css } from '@emotion/react'

const deleteButtonStyle = css`
  margin-top: 20px;
  cursor: pointer;
  line-height: 0.5;
  text-decoration: underline;
`

export const DeleteButton = (props: { deleteAction: () => void }) => {
  const { deleteAction } = props
  return (
    <button css={deleteButtonStyle} onClick={deleteAction}>
      delete
    </button>
  )
}
