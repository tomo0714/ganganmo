import { css } from '@emotion/react'
import { ContactTopTile } from '@/components/contact/atoms/ContactTopTile'
import { ContactForm } from '@/components/contact/molecules/ContactForm'

const contactPageStyle = css`
  max-width: 600px;
  padding: 0 20px;
  margin: 0 auto;
`

type ContactPageProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  isFormError: boolean
}

export const ContactPage = (props: ContactPageProps) => {
  const { onSubmit, isFormError } = props
  return (
    <div css={contactPageStyle}>
      <ContactTopTile />
      <ContactForm onSubmit={onSubmit} isFormError={isFormError} />
    </div>
  )
}
