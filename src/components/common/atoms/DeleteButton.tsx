import { css } from '@emotion/react'

const deleteButtonStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  color: #c3c0c0;
  font-size: 22px;
  line-height: 0.5;
`

export const DeleteButton = (props: { deleteAction: () => void }) => {
  const { deleteAction } = props
  return (
    <button css={deleteButtonStyle} onClick={deleteAction}>
      ×
    </button>
  )
}
