import { css } from '@emotion/react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { ShowNotificationRecoil } from '@/recoil/showNotification'

const notificationStyle = css`
  position: fixed;
  z-index: 100;
  bottom: 30%;
  left: 50%;
  display: flex;
  width: 70%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #f9ebd4;
  border-radius: 5px;
  box-shadow: 5px 5px 0 black;
  transform: translate(-50%, -50%);

  p {
    font-weight: bold;
  }

  button {
    font-size: 20px;
  }
`

export const Notification = (props: { message: string }) => {
  const { message } = props
  const open = useRecoilValue(ShowNotificationRecoil)
  const onClose = useSetRecoilState(ShowNotificationRecoil)

  return open ? (
    <div css={notificationStyle}>
      <p>{message}</p>
      <button onClick={() => onClose(false)}>×</button>
    </div>
  ) : (
    <></>
  )
}
