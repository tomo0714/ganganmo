import { css } from '@emotion/react'
import { ContactTopTile } from '@/components/contact/atoms/ContactTopTile'
import { ContactForm } from '@/components/contact/molecules/ContactForm'

const contactTemplateStyle = css`
  max-width: 600px;
  padding: 0 20px;
  margin: 0 auto;
`

type ContactTemplateProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  isFormError: boolean
}

export const ContactTemplate = (props: ContactTemplateProps) => {
  const { onSubmit, isFormError } = props
  return (
    <div css={contactTemplateStyle}>
      <ContactTopTile />
      <ContactForm onSubmit={onSubmit} isFormError={isFormError} />
    </div>
  )
}
