import { css } from '@emotion/react'
import { HTMLInputTypeAttribute } from 'react'

const InputStyle = css`
  margin-top: 30px;

  input {
    width: 100%;
    height: 40px;
    padding: 10px;
  }
`

type InputProps = {
  label: string
  id: string
  name: string
  type: HTMLInputTypeAttribute
}

export const Input = (props: InputProps) => {
  const { label, id, name, type } = props
  return (
    <div css={InputStyle}>
      <label htmlFor="name">{label}</label>
      <input id={id} name={name} type={type} />
    </div>
  )
}
