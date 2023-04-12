import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { ContactTemplate } from '@/components/contact/templates/ContactTemplate'
import { LoadingRecoil } from '@/recoils/LoadingRecoil'

const ContactPage = () => {
  const setLoadingRecoil = useSetRecoilState(LoadingRecoil)
  const router = useRouter()
  const [isFormError, setIsFormError] = useState<boolean>(false)

  const onSubmit = useCallback(async (event: any) => {
    event.preventDefault()

    const { name, email, message } = event.target

    if (!name.value || !email.value || !message.value) {
      setIsFormError(true)
      return
    }

    setLoadingRecoil(true)

    try {
      const res = await fetch('/api/send', {
        body: JSON.stringify({
          name: event.target.name.value,
          email: event.target.email.value,
          message: event.target.message.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })

      await res.json()
      router.push('/contact/success')
    } catch (error) {
      console.error('Fetch error : ', error)
      router.push('/contact/failed')
    } finally {
      setTimeout(() => {
        setLoadingRecoil(false)
      }, 500)
    }
  }, [])

  return <ContactTemplate isFormError={isFormError} onSubmit={onSubmit} />
}

export default ContactPage
