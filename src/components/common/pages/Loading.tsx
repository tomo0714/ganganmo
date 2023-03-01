import { css } from '@emotion/react'

const LoadingStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -10px;
  margin-left: -50px;
  background-color: #fff;
  font-weight: bold;
  text-align: center;

  .bar {
    display: block;
    width: 100px;
    height: 5px;
    margin-top: 5px;
    animation: load 2s infinite;
    background: #000;
    border-radius: 5px;
  }

  .middle {
    animation-delay: 100ms;
  }

  .bottom {
    animation-delay: 200ms;
  }

  @keyframes load {
    50% {
      width: 5px;
      margin-right: 95px;
      opacity: 0.1;
    }
  }
`

export const Loading = () => {
  return (
    <div css={LoadingStyle}>
      <span className="bar top"></span>
      <span className="bar middle"></span>
      <span className="bar bottom"></span>
      <p>LOADING</p>
    </div>
  )
}
