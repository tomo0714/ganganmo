import { css } from '@emotion/react'
import { ContactTopTile } from '@/components/contact/atoms/ContactTopTile'
import { ContactForm } from '@/components/contact/molecules/ContactForm'

const contactPageStyle = css`
  padding: 0 20px;
`

type ContactPageProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const ContactPage = (props: ContactPageProps) => {
  const { onSubmit } = props
  return (
    <div css={contactPageStyle}>
      <ContactTopTile />
      <ContactForm onSubmit={onSubmit} />
    </div>
  )
}
