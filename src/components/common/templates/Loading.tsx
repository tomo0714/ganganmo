import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'
import { LoadingRecoil } from '@/recoils/LoadingRecoil'

const LoadingStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -10px;
  margin-left: -50px;
  background-color: #fff;
  text-align: center;

  p {
    margin-top: 5px;
    font-family: 'Courier Prime', monospace;
    font-size: 20px;
    font-weight: bold;
  }

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

type LoadingProps = {
  children: ReactNode
}

export const Loading = (props: LoadingProps) => {
  const { children } = props
  const isLoading = useRecoilValue(LoadingRecoil)

  return (
    <>
      {isLoading ? (
        <div css={LoadingStyle}>
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
          <p>LOADING</p>
        </div>
      ) : (
        children
      )}
    </>
  )
}
