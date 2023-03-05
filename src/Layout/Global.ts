import { css } from '@emotion/react'

export const global = css`
  body {
    font-family: 'Courier Prime', monospace;
    font-size: 14px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  ul {
    padding: 0;
  }

  button {
    border: none;
    background: none;
  }

  img {
    width: 100%;
    height: 100%;
  }

  input {
    border: 1px solid #a5a5a5;
  }

  textarea {
    border: 1px solid #a5a5a5;
  }
`
