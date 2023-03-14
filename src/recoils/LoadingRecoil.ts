import { atom, RecoilState } from 'recoil'
import { RecoilKey } from '@/recoils/RecoilKey'

export const LoadingRecoil: RecoilState<boolean> = atom({
  key: RecoilKey.LOADING,
  default: false
})
