import { atom, RecoilState } from 'recoil'
import { RecoilKey } from '@/recoil/RecoilKey'

export const LoadingRecoil: RecoilState<boolean> = atom({
  key: RecoilKey.LOADING,
  default: false
})
