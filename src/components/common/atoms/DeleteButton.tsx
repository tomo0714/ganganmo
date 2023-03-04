import { css } from '@emotion/react'

const deleteButtonStyle = css`
  cursor: pointer;
  line-height: 0.5;
  text-decoration: underline;
`

export const DeleteButton = (props: { deleteAction: () => void }) => {
  const { deleteAction } = props
  return (
    <div
      css={css`
        margin-top: 20px;
      `}
    >
      <button css={deleteButtonStyle} onClick={deleteAction}>
        delete
      </button>
    </div>
  )
}
