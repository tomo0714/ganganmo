import { css } from '@emotion/react'

const TextareaStyle = css`
  margin-top: 30px;

  textarea {
    width: 100%;
    height: 140px;
    padding: 10px;
  }
`

type TextareaProps = {
  label: string
  id: string
  name: string
}

export const Textarea = (props: TextareaProps) => {
  const { label, id, name } = props
  return (
    <div css={TextareaStyle}>
      <label htmlFor="message">{label}</label>
      <textarea id={id} name={name}></textarea>
    </div>
  )
}
