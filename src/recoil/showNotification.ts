import { atom, RecoilState } from 'recoil'
import { RecoilKey } from '@/recoil/RecoilKey'

export const ShowNotificationRecoil: RecoilState<boolean> = atom({
  key: RecoilKey.SHOW_NOTIFICATION,
  default: false
})
