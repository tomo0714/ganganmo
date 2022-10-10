import { css } from '@emotion/react'

const menuButton = css`
  position: relative;
  width: 30px;
  border: none;
  background: none;

  span {
    position: absolute;
    top: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: black;
  }

  span:nth-of-type(1) {
    top: -5px;
  }

  span:nth-of-type(3) {
    top: 5px;
  }
`

const cross = css`
  position: relative;
  width: 30px;
  border: none;
  background: none;

  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: black;
  }

  span:nth-of-type(1) {
    transform: rotate(22deg);
  }

  span:nth-of-type(2) {
    display: none;
  }

  span:nth-of-type(3) {
    transform: rotate(-22deg);
  }
`

type MenuButtonProps = {
  isCross: boolean
  onClick: () => void
}

export const MenuButton = (props: MenuButtonProps) => {
  return (
    <button css={props.isCross ? cross : menuButton} onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
