import * as functions from 'firebase-functions'
import next from 'next'

// sendMail 関数をインポート
import { sendMail } from './api/send'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf: { distDir: 'next' } })
const handle = app.getRequestHandler()

const nextServer = functions.https.onRequest(async (req, res) => {
  await app.prepare()
  handle(req, res)
})

// sendMail 関数をエクスポート
exports.sendMail = sendMail

// nextServer 関数をエクスポート
exports.nextServer = nextServer
