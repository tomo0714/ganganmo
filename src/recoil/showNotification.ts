import { atom, RecoilState } from 'recoil'

export const ShowNotificationRecoil: RecoilState<boolean> = atom({
  key: 'SHOW_NOTIFICATION',
  default: false
})
