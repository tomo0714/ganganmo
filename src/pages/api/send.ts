import sgMail, { MailDataRequired } from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === 'POST') {
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY)

    const msg: MailDataRequired = {
      to: req.body.email,
      from: process.env.MAIL_FROM,
      subject: 'お問合せありがとうございました。',
      text: `
      ※このメールはシステムからの自動返信です
      
      ${req.body.name}様
      
      お世話になっております。
      Yuri Iwamoto ONLINE STOREへのお問い合わせありがとうございました。
      
      以下の内容でお問い合わせを受け付ました。
      
      ------------------------- お問い合わせ内容 ------------------------
      
      お名前: ${req.body.name}
      E-Mail: ${req.body.email}
      
      お問い合わせ内容: ${req.body.message}
      
      -------------------------------------------------------------------------
      `,
      html: `
      <p>※このメールはシステムからの自動返信です</p>

      <p>${req.body.name}様</p>

      <p>お世話になっております。</p>
      <p>Yuri Iwamoto ONLINE STOREへのお問い合わせありがとうございました。</p>

      <p>以下の内容でお問い合わせを受け付けました。</p>

      <p>------------------------- お問い合わせ内容 ------------------------</p>

      <p>お名前: ${req.body.name}</p>
      <p> E-Mail: ${req.body.email}</p>
      <p> お問い合わせ内容: ${req.body.message}</p>

      <p>---------------------------------------------------------------------------</p>
      `
    }

    console.log('req.body: ', req.body)

    try {
      await sgMail.send(msg)
      res.status(200).json(msg)
    } catch (error: any) {
      console.error(error)
      res.status(500).json(error)
    }
  }

  res.status(200)
}
