import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'
import { LoadingRecoil } from '@/recoils/LoadingRecoil'

const LoadingStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;

  img {
    width: 300px;
  }

  .rotate-image {
    animation: rotate-animation 2s linear infinite;
  }

  @keyframes rotate-animation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  p {
    margin-top: 5px;
    font-family: 'Courier Prime', monospace;
    font-size: 20px;
    font-weight: bold;
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
          <p>LOADING...</p>
          <img className="rotate-image" src="/tubasaMan.png" />
        </div>
      ) : (
        children
      )}
    </>
  )
}
