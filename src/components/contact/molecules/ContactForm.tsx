import { Input } from '@/components/common/atoms/Input'
import { Textarea } from '@/components/common/atoms/Textarea'
import { ContactSubmitButton } from '@/components/contact/atoms/ContactSubmitButton'

type ContactFormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  isFormError: boolean
}

export const ContactForm = (props: ContactFormProps) => {
  const { onSubmit, isFormError } = props
  return (
    <form onSubmit={onSubmit}>
      <Input label="Your Name" id="name" name="name" type="name" />
      <Input label="Email" id="email" name="email" type="email" />
      <Textarea label="How Can We Help You?" id="message" name="message" />
      <ContactSubmitButton isFormError={isFormError} />
    </form>
  )
}
